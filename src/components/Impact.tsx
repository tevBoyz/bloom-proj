import impactImage from "@/assets/impact.jpg";
import { TrendingUp, Clock, Users, Award } from "lucide-react";

export const Impact = () => {
  const metrics = [
    {
      icon: TrendingUp,
      value: "218.67%",
      label: "Income Increase",
      description: "Average income growth for participating women",
    },
    {
      icon: Clock,
      value: "2+ hours",
      label: "Time Saved Daily",
      description: "Freed for family, education, or income generation",
    },
    {
      icon: Users,
      value: "1,500",
      label: "Direct Beneficiaries",
      description: "Women receiving BLOOM Units and training",
    },
    {
      icon: Award,
      value: "53% → 73%",
      label: "Value Capture",
      description: "Increased share of FOB coffee value",
    },
  ];

  return (
    <section id="impact" className="bg-background relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-bloomGreen to-transparent opacity-30" />
      
      <div className="max-w-7xl mx-auto">
        <h2 className="section-title">Transformative Impact</h2>
        <p className="section-subtitle">
          Measurable outcomes demonstrating how BLOOM Units create lasting economic,
          social, and environmental benefits for women and their communities.
        </p>

        <div className="grid lg:grid-cols-2 gap-12 items-center mt-16">
          {/* Image */}
          <div className="rounded-3xl overflow-hidden shadow-2xl relative group">
            <img
              src={impactImage}
              alt="Coffee cherries being processed"
              className="w-full h-[550px] object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bloomDarkCoffee/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>

          {/* Metrics */}
          <div className="space-y-6">
            {metrics.map((metric, index) => {
              const Icon = metric.icon;
              return (
                <div key={index} className="bloom-card flex items-start gap-6 group relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-bloomGold/5 rounded-full blur-2xl group-hover:bg-bloomGold/10 transition-colors duration-500" />
                  <div className="relative z-10 w-20 h-20 bg-gradient-to-br from-bloomGold to-bloomGold/70 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                    <Icon className="w-10 h-10 text-bloomDarkCoffee" />
                  </div>
                  <div className="relative z-10">
                    <div className="text-3xl font-bold text-bloomGreen mb-1 group-hover:text-bloomGold transition-colors duration-300">{metric.value}</div>
                    <div className="text-lg font-semibold text-bloomGreen mb-2">{metric.label}</div>
                    <p className="text-muted-foreground">{metric.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Additional Impact */}
        <div className="mt-16 bloom-card bg-gradient-to-br from-bloomGreen to-bloomDarkCoffee text-bloomBeige relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-64 h-64 bg-bloomGold rounded-full blur-3xl" />
            <div className="absolute bottom-10 right-10 w-64 h-64 bg-bloomGold rounded-full blur-3xl" />
          </div>
          <div className="relative z-10">
            <h3 className="text-3xl font-bold mb-8 text-center">Beyond the Numbers</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center group">
                <div className="text-5xl font-bold mb-3 text-bloomGold group-hover:scale-110 transition-transform duration-300 inline-block">7,000+</div>
                <p className="text-bloomLightGreen">Secondary participants through training spillover effects</p>
              </div>
              <div className="text-center group">
                <div className="text-5xl font-bold mb-3 text-bloomGold group-hover:scale-110 transition-transform duration-300 inline-block">100%</div>
                <p className="text-bloomLightGreen">Clean energy replacing diesel and grid dependence</p>
              </div>
              <div className="text-center group">
                <div className="text-5xl font-bold mb-3 text-bloomGold group-hover:scale-110 transition-transform duration-300 inline-block">15-20%</div>
                <p className="text-bloomLightGreen">Quality improvement in processed coffee</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
    