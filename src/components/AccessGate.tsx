import { ReactNode, useEffect, useState } from "react";

const ACCESS_KEY = "bloom-access-until";
const ACCESS_DURATION_MS = 2 * 60 * 60 * 1000; // 2 hours
// const ACCESS_DURATION_MS = 1 * 60 * 1000; // 1 min
const QR_SECRET = "dttadtn"; // <--- your secret

type AccessGateProps = {
  children: ReactNode;
};

export const AccessGate = ({ children }: AccessGateProps) => {
  const [allowed, setAllowed] = useState<boolean | null>(null);

  useEffect(() => {
    const now = Date.now();
    const url = new URL(window.location.href);
    const params = url.searchParams;
    const existing = sessionStorage.getItem(ACCESS_KEY);

    // 1. Always-open URL: ?open=1
    if (params.get("open") === "1") {
      setAllowed(true);
      return;
    }

    // 2. QR code scanned: ?qr=<SECRET>
    const qrParam = params.get("qr");
    if (qrParam) {
      if (qrParam !== QR_SECRET) {
        setAllowed(false);
        return;
      }

      // Start new session ONLY if expired or missing
      if (!existing || Number(existing) < now) {
        const until = now + ACCESS_DURATION_MS;
        sessionStorage.setItem(ACCESS_KEY, String(until));
      }

      // 🔥 CLEAN THE URL (remove ?qr=...)
      url.searchParams.delete("qr");
      window.history.replaceState({}, "", url.toString());

      setAllowed(true);
      return;
    }

    // 3. Already in a valid session
    if (existing && Number(existing) > now) {
      setAllowed(true);
      return;
    }

    // 4. No access
    setAllowed(false);
  }, []);

  if (allowed === null) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        Loading…
      </div>
    );
  }

  if (!allowed) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white px-6">
        <div className="max-w-md text-center space-y-4">
          <h1 className="text-3xl font-bold mb-2">Access Required</h1>
          <p className="text-base text-white/80">
            This private experience requires a valid QR authorization.
          </p>
          <p className="text-sm text-white/60">
            Please scan the Project BLOOM QR code to unlock temporary access.
          </p>
          <p className="text-xs text-white/40 mt-4">
            If your access expired, please scan again.
          </p>
        </div>
      </div>
    );
  }

  return <>{children}</>;
};
