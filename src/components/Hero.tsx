"use client";
import { useEffect, useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  const images = [
    "/hero0.webp",
    "/hero2.webp",
    "/hero3.webp",
    "/hero4.webp",
  ];

  const [current, setCurrent] = useState(0);
  const [fade, setFade] = useState(true);

  const [typeText, setTypeText] = useState("");
  const fullText = "Empowering Women to Transform Ethiopia’s Coffee Future.";
  const typeStarted = useRef(false);

  /** ----------------------------------------
   *   FIXED TYPEWRITER — runs once only
   * ----------------------------------------
   */
  useEffect(() => {
    if (typeStarted.current) return; // Prevent repeats on re-render
    typeStarted.current = true;

    let i = 0;
    const speed = 55;

    const typeInterval = setInterval(() => {
      if (i < fullText.length) {
        setTypeText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(typeInterval);
      }
    }, speed);

    return () => clearInterval(typeInterval);
  }, []);


  /** ----------------------------------------
   *   CAROUSEL: Smooth Fade Animation
   * ----------------------------------------
   */
  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // Fade out
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % images.length);
        setFade(true); // Fade in
      }, 600); // fade-out duration
    }, 6000);

    return () => clearInterval(interval);
  }, [images.length]);


  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 py-0"
    >
      {/* BACKGROUND + FADE */}
      <div className="absolute inset-0 z-0">
        <img
          src={images[current]}
          alt="Ethiopian highland women coffee communities"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[1200ms] ${
            fade ? "opacity-100" : "opacity-0"
          }`}
          style={{ filter: "brightness(1.15) saturate(1.2)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/40" />
      </div>

      {/* DESKTOP TEXT BLOCK */}
      <div className="hidden md:flex relative z-10 max-w-5xl w-full mt-10 md:flex-row items-center md:items-start gap-12 animate-fade-in">
        <div className="backdrop-blur-sm bg-black/50 p-10 rounded-3xl shadow-2xl border border-white/30 max-w-xl">
          <h1
            className="text-3xl md:text-4xl font-serif font-bold !text-white leading-snug drop-shadow animate-fade-in"
            style={{ animationDelay: "0.15s" }}
          >
            Empowering Women to Transform Ethiopia’s Coffee Future.
          </h1>

          <p
            className="text-white/90 text-base md:text-lg leading-relaxed my-6 animate-fade-in drop-shadow"
            style={{ animationDelay: "0.3s" }}
          >
            Through solar-powered coffee processing, clean energy, and hands-on
            training, Project BLOOM enables young women to earn more, work safely,
            and lead thriving rural enterprises.
          </p>

          <Button
            onClick={scrollToAbout}
            size="lg"
            className="cursor-pointer bg-white text-black font-semibold text-lg px-16 py-6 rounded-full shadow-xl animate-fade-in hover:scale-105 transition-transform"
            style={{ animationDelay: "0.45s" }}
          >
            Learn More
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>

      {/* MOBILE TYPEWRITER TEXT */}
      <div className="md:hidden relative z-10 flex flex-col items-center text-center px-4 animate-fade-in">
        
        {/* MOBILE GLASS PANEL */}
        <div className="backdrop-blur-sm bg-black/40 py-6 px-8 mt-60 rounded-3xl shadow-2xl border border-white/20">
          <h1 className="text-2xl font-serif font-bold !text-white drop-shadow-lg leading-snug">
            {typeText}
          </h1>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-50 animate-bounce">
          <div className="w-8 h-14 border-2 border-white/80 rounded-full flex items-start justify-center">
            <div className="w-1.5 h-4 bg-white rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
};
