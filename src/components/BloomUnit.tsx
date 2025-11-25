import { Sun, Cog, Leaf } from "lucide-react";
import {useEffect} from "react";

export const BloomUnit = () => {

useEffect(() => {
  const hash = window.location.hash;
  if (hash) {
    const id = hash.replace("#", "");
    setTimeout(() => {
      const el = document.getElementById(id);
      el?.scrollIntoView({ behavior: "smooth" });
    }, 100); 
  }
}, []);


  return (
    <section id="bloom-unit" className="bg-background relative overflow-hidden">
      {/* Top Gold Line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-bloomGold to-transparent opacity-30" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <h2 className="section-title">The BLOOM Unit</h2>
        <p className="section-subtitle">
          An integrated, women-centered technology package combining solar power, modernized coffee pulping, and biogas waste conversion, unlocking higher incomes and sustainable rural livelihoods in Ethiopia’s coffee highlands.</p>

        <div className="mt-16 space-y-20">
          {/* ================= SOLAR POWER SYSTEM ================= */}
          <div
            id="bloom-solar"
            className="grid lg:grid-cols-2 gap-10 items-center"
          >
            {/* Image Left */}
            <div className="rounded-3xl overflow-hidden shadow-2xl relative group">
              <img
                src="/bloom-unit1.png"
                alt="Solar panels powering the Bloom Unit in an Ethiopian coffee community"
                className="w-full h-[380px] md:h-[420px] lg:h-[460px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bloomDarkCoffee/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute top-4 left-4 bg-black/50 text-white text-sm px-3 py-1 rounded-full backdrop-blur-sm">
                Solar Power System
              </div>
            </div>

            {/* Text Right */}
            <div className="bloom-card relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-bloomGold/5 rounded-full blur-2xl group-hover:bg-bloomGold/10 transition-colors duration-500" />
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-bloomGold to-bloomGold/70 rounded-xl flex items-center justify-center mb-4 shadow-lg">
                  <Sun className="w-8 h-8 text-bloomDarkCoffee" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-bloomGreen">
                  2 kW Solar Power System
                </h3>
                <p className="text-foreground leading-relaxed mb-4">
                  A reliable renewable energy source powering the entire Bloom Unit, ensuring uninterrupted coffee processing and household electricity free of the grid or costly diesel generators
                </p>
                <ul className="list-disc pl-5 space-y-1 text-foreground/90 text-sm md:text-base">
                  <li>2 kW of clean energy dedicated to coffee processing and household needs.</li>
                  <li>Reduces operating costs and eliminates fuel price volatility.</li>
                  <li>Enables evening lighting and phone charging for Bloom Teams and families.</li>
                  <li>Cuts carbon emissions and aligns with national clean-energy goals.</li>
                </ul>
                {/* Future deep-link placeholder */}
                {/* <Link href="/bloom-unit/solar" className="mt-4 inline-block text-bloomGreen font-semibold hover:text-bloomGold text-sm">Learn more about the solar system →</Link> */}
              </div>
            </div>
          </div>

          {/* ================= COFFEE PULPER ================= */}
          <div
            id="bloom-pulper"
            className="grid lg:grid-cols-2 gap-10 items-center"
          >
            {/* Text Left */}
            <div className="order-2 lg:order-1 bloom-card relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-bloomGold/5 rounded-full blur-2xl group-hover:bg-bloomGold/10 transition-colors duration-500" />
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-bloomBrown to-bloomBrown/70 rounded-xl flex items-center justify-center mb-4 shadow-lg">
                  <Cog className="w-8 h-8 text-bloomBeige" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-bloomGreen">
                  Motorized Coffee Pulper
                </h3>
                <p className="text-foreground leading-relaxed mb-4">
                  A modern pulping machine that reduces labor by over 70%, improves coffee quality, and unlocks access to washed-coffee markets, increasing earnings for Bloom Teams.
                </p>
                <ul className="list-disc pl-5 space-y-1 text-foreground/90 text-sm md:text-base">
                  <li>Reduces women’s physical workload by more than 70% compared to hand pulping.</li>
                  <li>Processes significantly more volume in less time, especially during peak harvest.</li>
                  <li>Improves consistency of pulping and reduces defects, increasing coffee quality.</li>
                  <li>Enables women to offer pulping as a paid service to neighboring farmers.</li>
                </ul>
                {/* Future deep-link placeholder */}
                {/* <Link href="/bloom-unit/pulper" className="mt-4 inline-block text-bloomGreen font-semibold hover:text-bloomGold text-sm">Learn more about the pulper →</Link> */}
              </div>
            </div>

            {/* Image Right */}
            <div className="order-1 lg:order-2 rounded-3xl overflow-hidden shadow-2xl relative group">
              <img
                src="/bloom-unit3.png"
                alt="Motorized coffee pulper in operation at a Bloom Unit site"
                className="w-full h-[380px] md:h-[420px] lg:h-[460px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bloomDarkCoffee/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute top-4 left-4 bg-black/50 text-white text-sm px-3 py-1 rounded-full backdrop-blur-sm">
                Motorized Coffee Pulper
              </div>
            </div>
          </div>

          {/* ================= BIOGAS SYSTEM ================= */}
          <div
            id="bloom-biogas"
            className="grid lg:grid-cols-2 gap-10 items-center"
          >
            {/* Image Left */}
            <div className="rounded-3xl overflow-hidden shadow-2xl relative group">
              <img
                src="/bloom-unit2.png"
                alt="Biogas digester tank and waste-to-energy system connected to a Bloom Unit"
                className="w-full h-[380px] md:h-[4320px] lg:h-[460px] object-scale-down group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bloomDarkCoffee/45 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute top-4 left-4 bg-black/50 text-white text-sm px-3 py-1 rounded-full backdrop-blur-sm">
                Biogas Waste-to-Energy
              </div>
            </div>

            {/* Text Right */}
            <div className="bloom-card relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-bloomGreen/5 rounded-full blur-2xl group-hover:bg-bloomGreen/10 transition-colors duration-500" />
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-bloomGreen to-bloomGreen/70 rounded-xl flex items-center justify-center mb-4 shadow-lg">
                  <Leaf className="w-8 h-8 text-bloomBeige" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-bloomGreen">
                  Biogas Waste-to-Energy System
                </h3>
                <p className="text-foreground leading-relaxed mb-4">
                  An eco-friendly system that turns coffee pulp waste into biogas for clean cooking, reducing deforestation, protecting women’s health, and creating a unique and pioneering exercise in circular energy cycle.
                </p>
                <ul className="list-disc pl-5 space-y-1 text-foreground/90 text-sm md:text-base">
                  <li>Uses coffee pulp, a by-product of pulping, as feedstock for biogas.</li>
                  <li>Replaces firewood and charcoal, reducing deforestation and smoke exposure.</li>
                  <li>Provides reliable, smokeless cooking energy for Bloom Teams and their families.</li>
                  <li>Demonstrates a replicable model for climate-smart rural infrastructure.</li>
                </ul>
                {/* Future deep-link placeholder */}
                {/* <Link href="/bloom-unit/biogas" className="mt-4 inline-block text-bloomGreen font-semibold hover:text-bloomGold text-sm">Learn more about the biogas system →</Link> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
