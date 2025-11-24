import { useState, useEffect } from "react";
import {
  Coffee,
  Heart,
  Users,
  TrendingUp,
  Award,
  HandHeart,
  BookOpen,
} from "lucide-react";

const navItems = [
  { id: "hero", label: "Home", icon: Coffee },
  { id: "about", label: "About", icon: BookOpen },
  { id: "bloom-unit", label: "Bloom Unit", icon: Award },
  { id: "teams", label: "Teams", icon: Users },
  { id: "impact", label: "Impact", icon: TrendingUp },
  { id: "pcw", label: "PCW", icon: HandHeart },
  { id: "story", label: "Story", icon: Heart },
];

export const BloomNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [active, setActive] = useState("hero");

  // Detect screen size
  useEffect(() => {
    const updateScreen = () => setIsDesktop(window.innerWidth >= 1024);
    updateScreen();
    window.addEventListener("resize", updateScreen);
    return () => window.removeEventListener("resize", updateScreen);
  }, []);

  // Track scroll position for active section indicator
  useEffect(() => {
    const handleScroll = () => {
      let current = "hero";
      navItems.forEach((item) => {
        const section = document.getElementById(item.id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            current = item.id;
          }
        }
      });
      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Desktop Nav */}
      {isDesktop && (
        <nav className="fixed top-0 left-0 w-full bg-black/90 bg-bloomDarkCoffee text-bloomBeige shadow-lg z-50 overflow-hidden">
          <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
            <div className="font-bold text-xl">
              <img src="/logo-white.png" alt="Bloom Logo" className="h-[40px]" />
            </div>
            <ul className="flex gap-8 text-lg">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className={`cursor-pointer relative text-white inline-flex items-center pb-2 hover:text-bloomGold transition-colors ${
                      active === item.id ? "text-bloomGold" : ""
                    }`}
                  >
                    {item.label}
                    {active === item.id && (
                      <span className="absolute left-0 bottom-0 w-full h-[3px] rounded-full" style={{ backgroundColor: "var(--bloomGold)" }}></span>

                    )}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      )}

      {/* Mobile/Tablet Nav */}
      {!isDesktop && (
        <nav className="fixed top-0 left-0 w-full bg-black/90 bg-bloomDarkCoffee text-bloomBeige shadow-lg z-50">
          <div className="flex items-center justify-between px-4 py-4">
            <div className="font-bold text-xl">

              <img src="/logo-white.png" alt="Bloom Logo" className="h-[30px]" />
            </div>

            {/* Burger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-3 rounded-md bg-bloomGold text-white shadow-md"
              aria-label="Toggle navigation"
            >
              <Coffee
                className={`w-6 h-6 transition-transform ${
                  isOpen ? "-rotate-90" : ""
                }`}
              />
            </button>
          </div>

          {/* Dropdown */}
          <div
            className={`overflow-hidden transition-all duration-500 bg-bloomDarkCoffee ${
              isOpen
                ? "max-h-96 py-4 shadow-lg shadow-white/20 backdrop-blur-sm"
                : "max-h-0"
            }`}
          >
            <ul className="flex flex-col gap-4 px-6 text-lg">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className={`cursor-pointer relative inline-flex items-center pb-2 text-left text-white hover:text-bloomGold transition-colors ${
                      active === item.id ? "text-bloomGold" : ""
                    }`}
                  >
                    {item.label}

                    {active === item.id && (
                      <span
                        className="absolute left-0 bottom-0 h-[3px] rounded-full"
                        style={{ width: "100%", backgroundColor: "var(--bloomGold)" }}
                      ></span>
                    )}
                </button>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      )}
    </>
  );
};