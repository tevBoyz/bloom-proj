import { Coffee, Mail, MapPin, Heart } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-black/90 bg-bloomDarkCoffee text-white py-20 px-4 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute text-white top-10 right-10 w-64 h-64 bg-bloomGold/10 rounded-full blur-3xl" />
      <div className="absolute text-white bottom-10 left-10 w-96 h-96 bg-bloomGreen/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* TOP GRID */}
        <div className="grid md:grid-cols-3 gap-16 mb-16">

          {/* BRAND BLOCK */}
          <div className="group">
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

          {/* CONTACT BLOCK */}
          <div>
            <h3 className="text-xl font-bold mb-6 !text-white">Get in Touch</h3>
            <div className="space-y-5">
              
              {/* Email */}
              <div className="flex items-start gap-4 group cursor-pointer">
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-bloomGold/20 transition-colors">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-white">Email</div>
                  <a 
                    href="mailto:info@projectbloom.org"
                    className="text-white/80 text-sm hover:text-bloomGold transition-colors"
                  >
                    info@projectbloom.org
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4 group">
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-bloomGold/20 transition-colors">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-white">Location</div>
                  <div className="text-white/80 text-sm">Addis Ababa, Ethiopia</div>
                </div>
              </div>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="text-xl font-bold mb-6 !text-white ">Quick Links</h3>
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
        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-center items-center gap-4">
          <p className="text-white/60 text-sm text-center">
            © 2025 Project BLOOM. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
