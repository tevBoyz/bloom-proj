import { Sprout, Users, Zap } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="bg-bloom-gradient relative overflow-hidden">
      {/* Soft decorative orbs */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-bloomGold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-bloomGreen/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Title */}
        <h2 className="section-title">About Project BLOOM</h2>
        <p className="section-subtitle">
          Project BLOOM is a transformative rural development initiative that empowers young women in Ethiopia’s coffee-growing highlands through clean energy, modern coffee processing, and sustainable livelihood opportunities.
        </p>

        {/* Three Pillars */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          
          {/* Smallholder Challenges */}
          <div className="bloom-card text-center group">
            <div className="w-20 h-20 bg-gradient-to-br from-bloomGreen to-bloomGreen/70 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <Sprout className="w-10 h-10 text-bloomBeige" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-bloomGreen">Smallholder Challenges</h3>
            <p className="text-muted-foreground leading-relaxed">
              Millions of smallholder farmers rely on traditional, labor-intensive methods that limit productivity and reduce coffee quality. Limited access to electricity, modern processing tools, and reliable income streams keeps households trapped in low-value production cycles.
            </p>
          </div>

          {/* Women Empowerment */}
          <div className="bloom-card text-center group">
            <div className="w-20 h-20 bg-gradient-to-br from-bloomGold to-bloomGold/70 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <Users className="w-10 h-10 text-bloomDarkCoffee" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-bloomGreen">Empowering Women</h3>
            <p className="text-muted-foreground leading-relaxed">
              Although women contribute most of the labor in coffee farming, they earn the least. BLOOM places young women at the center of the value chain—organizing them into Bloom Teams, providing skills training, and expanding their access to finance and premium markets.
            </p>
          </div>

          {/* Clean Energy & Technology */}
          <div className="bloom-card text-center group">
            <div className="w-20 h-20 bg-gradient-to-br from-bloomBrown to-bloomBrown/70 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <Zap className="w-10 h-10 text-bloomBeige" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-bloomGreen">Clean Energy Solution</h3>
            <p className="text-muted-foreground leading-relaxed">
              At the heart of the initiative is the Bloom Unit, a solar-powered, mechanized coffee pulper paired with a biogas system. It upgrades unwashed coffee to washed coffee, reduces women’s workload, cuts firewood dependence, and turns coffee waste into clean cooking energy.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};
