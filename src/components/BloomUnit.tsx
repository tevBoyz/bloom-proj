import { Sun, Cog, Leaf } from "lucide-react";

export const BloomUnit = () => {
  const features = [
    {
      icon: Sun,
      title: "2 kW Solar Power System",
      description: "Clean, reliable energy that powers processing equipment and provides community electricity access, eliminating dependence on unreliable grid power or expensive diesel generators.",
    },
    {
      icon: Cog,
      title: "Motorized Coffee Pulper",
      description: "Mechanized processing that dramatically reduces labor time and physical strain while improving coffee quality through consistent, efficient pulping that preserves bean integrity.",
    },
    {
      icon: Leaf,
      title: "Biogas Waste-to-Energy",
      description: "Innovative system that converts coffee processing waste into clean cooking fuel, creating a circular economy while reducing environmental impact and providing additional household energy.",
    },
  ];

  return (
    <section id="bloom-unit" className="bg-background relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-bloomGold to-transparent opacity-30" />
      
      <div className="max-w-7xl mx-auto">
        <h2 className="section-title">The BLOOM Unit</h2>
        <p className="section-subtitle">
          An integrated technology package designed for Ethiopian smallholder coffee farmers,
          combining renewable energy, mechanization, and waste conversion into one sustainable solution.
        </p>

        {/* Hero Image */}
        <div className="mb-16 rounded-3xl overflow-hidden shadow-2xl relative group">
          <img
            src="/bloom-unit.jpg"
            alt="Solar-powered BLOOM Unit with coffee drying beds"
            className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bloomDarkCoffee/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="bloom-card group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-bloomGold/5 rounded-full blur-2xl group-hover:bg-bloomGold/10 transition-colors duration-500" />
                <div className="relative z-10">
                  <div className="w-20 h-20 bg-gradient-to-br from-bloomGold to-bloomGold/70 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                    <Icon className="w-10 h-10 text-bloomDarkCoffee" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-bloomGreen">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
