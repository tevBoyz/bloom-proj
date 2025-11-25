import { TrendingUp, Clock, Users, Award } from "lucide-react";

export const Impact = () => {
  const metrics = [
    {
      icon: TrendingUp,
      value: "30 to 40%",
      label: "Income Increase",
      description:
        "Average increase in earnings for women after adopting the BLOOM Unit.",
    },
    {
      icon: Clock,
      value: "2+ hours",
      label: "Time Saved Daily",
      description:
        "Reduced time spent on firewood collection and manual processing.",
    },
    {
      icon: Users,
      value: "1,500",
      label: "Direct Participants",
      description:
        "Young women organized into Bloom Teams receiving equipment and training.",
    },
  ];

  return (
    <section id="impact" className="bg-background relative overflow-hidden">
      {/* Top Accent Line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-bloomGreen to-transparent opacity-30" />

      <div className="max-w-7xl mx-auto">
        <h2 className="section-title">Transformative Impact</h2>
        <p className="section-subtitle">
          BLOOM creates measurable economic, social, and environmental change, unlocking new opportunities for women, improving coffee quality, and strengthening community resilience in participating communities of Ethiopia’s coffee heartland. 
        </p>

        <div className="grid lg:grid-cols-2 gap-12 items-center mt-16">
          {/* Impact Image */}
          <div className="rounded-3xl overflow-hidden shadow-2xl relative group">
            <img
              src="/impact.webp"
              alt="Women processing coffee using Bloom Unit technology"
              className="w-full h-[550px] object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bloomDarkCoffee/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>

          {/* Impact Metrics */}
          <div className="space-y-6">
            {metrics.map((metric, index) => {
              const Icon = metric.icon;
              return (
                <div
                  key={index}
                  className="bloom-card flex items-start gap-6 group relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-bloomGold/5 rounded-full blur-2xl group-hover:bg-bloomGold/10 transition-colors duration-500" />

                  <div className="relative z-10 w-20 h-20 bg-gradient-to-br from-bloomGold to-bloomGold/70 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                    <Icon className="w-10 h-10 text-bloomDarkCoffee" />
                  </div>

                  <div className="relative z-10">
                    <div className="text-3xl font-bold text-bloomGreen mb-1 group-hover:text-bloomGold transition-colors duration-300">
                      {metric.value}
                    </div>
                    <div className="text-lg font-semibold text-bloomGreen mb-2">
                      {metric.label}
                    </div>
                    <p className="text-muted-foreground">{metric.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Additional Impact Section */}
        <div className="mt-16 bloom-card bg-gradient-to-br from-bloomGreen to-bloomDarkCoffee text-bloomBeige relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-64 h-64 bg-bloomGold rounded-full blur-3xl" />
            <div className="absolute bottom-10 right-10 w-64 h-64 bg-bloomGold rounded-full blur-3xl" />
          </div>

          <div className="relative z-10">
            <h3 className="text-3xl font-bold mb-8 text-center">Beyond the Numbers</h3>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center group">
                <div className="text-5xl font-bold mb-3 text-bloomGold group-hover:scale-110 transition-transform duration-300 inline-block">
                  7,000+
                </div>
                <p className="text-bloomLightGreen leading-relaxed">
                  Secondary beneficiaries including family members, neighbors, and local producers through 
                  shared training, cleaner energy access, and improved market linkages.
                </p>
              </div>

              <div className="text-center group">
                <div className="text-5xl font-bold mb-3 text-bloomGold group-hover:scale-110 transition-transform duration-300 inline-block">
                  100%
                </div>
                <p className="text-bloomLightGreen leading-relaxed">
                  Firewood replaced by clean biogas in participating households, reducing 
                  smoke-related health risks and lowering deforestation pressure.
                </p>
              </div>

              <div className="text-center group">
                <div className="text-5xl font-bold mb-3 text-bloomGold group-hover:scale-110 transition-transform duration-300 inline-block">
                  15 to 20%
                </div>
                <p className="text-bloomLightGreen leading-relaxed">
                  Improvement in coffee quality through modern pulping and better fermentation control, 
                  enabling access to higher-paying specialty buyers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
