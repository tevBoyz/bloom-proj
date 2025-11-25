import { Sun, Cog, Leaf } from "lucide-react";
import { useEffect, useState } from "react";

export const BloomUnit = () => {
  const features = [
    {
      icon: Sun,
      title: "2 kW Solar Power System",
      description:
        "A reliable renewable energy source powering the entire Bloom Unit, ensuring uninterrupted coffee processing and household electricity without reliance on the grid or costly diesel generators.",
    },
    {
      icon: Cog,
      title: "Motorized Coffee Pulper",
      description:
        "A modern pulping machine that reduces labor by over 70%, improves coffee quality, and unlocks access to premium washed-coffee markets, increasing earnings for Bloom Teams.",
    },
    {
      icon: Leaf,
      title: "Biogas Waste-to-Energy System",
      description:
        "An eco-friendly system that turns coffee pulp waste into biogas for clean cooking, reducing deforestation, protecting women’s health, and creating a circular energy cycle.",
    },
  ];

  const gallery = [
    {
      src: "/bloom-unit1.webp",
      alt: "Solar panels powering the Bloom Unit",
      label: "Solar Power System",
      description:
        "The solar array provides 2 kW of clean, stable electricity, powering processing equipment and household energy needs.",
    },
    {
      src: "/bloom-unit3.webp",
      alt: "Motorized coffee pulper in operation",
      label: "Coffee Pulper",
      description:
        "The motorized pulper reduces manual labor, speeds up processing, and improves the uniformity and quality of washed coffee.",
    },
    {
      src: "/bloom-unit2.webp",
      alt: "Biogas digester tank and waste conversion system",
      label: "Biogas Unit",
      description:
        "The biogas digester transforms coffee pulp waste into clean cooking fuel—reducing firewood use and household smoke exposure.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Autoplay every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((i) => (i + 1) % gallery.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [gallery.length]);

  return (
    <section id="bloom-unit" className="bg-background relative overflow-hidden">
      {/* Top Gold Line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-bloomGold to-transparent opacity-30" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <h2 className="section-title">The BLOOM Unit</h2>
        <p className="section-subtitle">
          An integrated, women-centered technology package combining solar power, 
          modernized coffee pulping, and biogas waste conversion, unlocking higher incomes 
          and sustainable rural livelihoods in Ethiopia’s coffee highlands.
        </p>

        {/* ===== CAROUSEL SECTION ===== */}
        <div className="relative w-full overflow-hidden rounded-3xl mb-20 shadow-2xl group">
          <div
            id="bloom-carousel"
            className="flex transition-transform duration-700 ease-[cubic-bezier(0.4,0.1,0.2,1)]"
            style={{
              width: `${gallery.length * 100}%`,
              transform: `translateX(-${(100 / gallery.length) * currentIndex}%)`,
            }}
          >
            {gallery.map((item, index) => (
              <div
                key={index}
                className="w-full flex-shrink-0 relative"
                style={{ width: `${100 / gallery.length}%` }}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-[380px] md:h-[440px] lg:h-[500px] object-cover rounded-3xl"
                />

                {/* Dark overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-transparent rounded-3xl" />

                {/* Label */}
                <p className="absolute top-6 left-6 text-white font-bold text-2xl drop-shadow-lg">
                  {item.label}
                </p>

                {/* Description */}
                <p className="backdrop-blur-sm rounded-8 p-2 bg-black/40 absolute bottom-6 left-6 max-w-xl text-white/90 text-base md:text-lg drop-shadow-lg leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Carousel Dots */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
            {gallery.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  i === currentIndex
                    ? "bg-bloomGold shadow-md scale-110"
                    : "bg-white/60 hover:bg-white"
                }`}
              />
            ))}
          </div>
        </div>

        {/* ===== FEATURE CARDS ===== */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bloom-card group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-bloomGold/5 rounded-full blur-2xl group-hover:bg-bloomGold/10 transition-colors duration-500" />

                <div className="relative z-10">
                  <div className="w-20 h-20 bg-gradient-to-br from-bloomGold to-bloomGold/70 
                    rounded-2xl flex items-center justify-center mb-6
                    group-hover:scale-110 group-hover:rotate-6 
                    transition-all duration-300 shadow-lg"
                  >
                    <Icon className="w-10 h-10 text-bloomDarkCoffee" />
                  </div>

                  <h3 className="text-xl font-bold mb-4 text-bloomGreen">
                    {feature.title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
