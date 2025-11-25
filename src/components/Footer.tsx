import { Coffee, Mail, MapPin, Heart } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-black/90 bg-bloomDarkCoffee text-white py-20 px-4 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute text-white top-10 right-10 w-64 h-64 bg-bloomGold/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute text-white bottom-10 left-10 w-96 h-96 bg-bloomGreen/10 rounded-full blur-3xl pointer-events-none" />

      {/* Container */}
      <div className="w-full mx-auto relative z-10">

        {/* TOP GRID — your layout, made responsive */}
        <div className="flex flex-col lg:flex-row justify-between gap-16">

          {/* BRAND BLOCK */}
          <div className="w-full lg:w-1/3">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-bloomGold/20 rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-md">
                <Coffee className="w-7 h-7 text-white" />
              </div>
              <img src="/logo-white.png" alt="Bloom Logo" className="h-[40px] opacity-90" />
            </div>

            <p className="text-white/80 leading-relaxed text-sm md:text-base max-w-sm">
              Empowering young women in Ethiopia’s coffee highlands through clean-energy 
              technology, practical training, and sustainable market connections that build 
              long-term prosperity.
            </p>
          </div>

          {/* CONTACT BLOCK — YOU LEFT THIS COMMENTED, WE LEAVE IT COMMENTED */}
          {/* <div>
            <h3 className="text-xl font-bold mb-6 !text-white">Get in Touch</h3>
            ...
          </div> */}

          {/* QUICK LINKS */}
          <div className="w-full lg:w-1/3">
            <h3 className="text-xl font-bold mb-6 !text-white">Quick Links</h3>
            <ul className="space-y-4">
              {[
                { label: "About Project", id: "about" },
                { label: "BLOOM Unit", id: "bloom-unit" },
                { label: "Our Impact", id: "impact" },
                { label: "PCW Label", id: "pcw" },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() =>
                      document
                        .getElementById(link.id)
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                    className="text-white/80 text-sm hover:text-bloomGold transition-colors hover:translate-x-1 inline-block duration-300"
                  >
                    → {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-white/20 pt-8 mt-16 flex flex-col md:flex-row justify-center items-center gap-4">
          <p className="text-white/60 text-sm text-center">
            © 2025 Project BLOOM. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
