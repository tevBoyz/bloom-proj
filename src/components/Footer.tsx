import { Coffee, Mail, MapPin, Heart } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-bloomDarkCoffee to-bloomGreen text-bloomLightGreen py-16 px-4 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-10 right-10 w-64 h-64 bg-bloomGold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-bloomGold/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="group">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-bloomGold/20 rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                <Coffee className="w-8 h-8 text-bloomGold" />
              </div>
              <span className="text-2xl font-bold text-bloomBeige font-serif">Project BLOOM</span>
            </div>
            <p className="text-bloomLightGreen/80 leading-relaxed">
              Empowering young women in Ethiopian coffee communities through innovative technology,
              comprehensive training, and sustainable market connections.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-bloomBeige">Get in Touch</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3 group cursor-pointer">
                <div className="w-10 h-10 bg-bloomGold/10 rounded-lg flex items-center justify-center group-hover:bg-bloomGold/20 transition-colors">
                  <Mail className="w-5 h-5 text-bloomGold flex-shrink-0" />
                </div>
                <div>
                  <div className="font-semibold text-bloomBeige">Email</div>
                  <a href="mailto:info@projectbloom.org" className="text-bloomLightGreen/80 hover:text-bloomGold transition-colors">
                    info@projectbloom.org
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3 group">
                <div className="w-10 h-10 bg-bloomGold/10 rounded-lg flex items-center justify-center group-hover:bg-bloomGold/20 transition-colors">
                  <MapPin className="w-5 h-5 text-bloomGold flex-shrink-0" />
                </div>
                <div>
                  <div className="font-semibold text-bloomBeige">Location</div>
                  <div className="text-bloomLightGreen/80">Addis Ababa, Ethiopia</div>
                </div>
              </div>
            </div>
          </div>

          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-bloomBeige">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { label: "About Project", id: "about" },
                { label: "BLOOM Unit", id: "bloom-unit" },
                { label: "Our Impact", id: "impact" },
                { label: "PCW Label", id: "pcw" },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => document.getElementById(link.id)?.scrollIntoView({ behavior: "smooth" })}
                    className="text-bloomLightGreen/80 hover:text-bloomGold transition-colors hover:translate-x-1 inline-block duration-300"
                  >
                    → {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-bloomLightGreen/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-bloomLightGreen/60 text-sm">
            © 2025 Project BLOOM. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-bloomLightGreen/80">
            <span className="text-sm">Made with</span>
            <Heart className="w-4 h-4 text-bloomGold animate-pulse" />
            <span className="text-sm">for Ethiopian coffee communities</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
