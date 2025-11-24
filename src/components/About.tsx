import { Sprout, Users, Zap } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="bg-bloom-gradient relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-bloomGold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-bloomGreen/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="section-title">About Project BLOOM</h2>
        <p className="section-subtitle">
          Addressing the critical challenges faced by smallholder coffee farmers in Ethiopia
          through innovative technology and community empowerment.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="bloom-card text-center group">
            <div className="w-20 h-20 bg-gradient-to-br from-bloomGreen to-bloomGreen/70 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <Sprout className="w-10 h-10 text-bloomBeige" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-bloomGreen">Smallholder Challenges</h3>
            <p className="text-muted-foreground leading-relaxed">
              Ethiopian smallholder farmers face significant barriers including limited access to mechanization,
              unreliable energy sources, and labor-intensive manual processing methods that reduce quality and income.
            </p>
          </div>

          <div className="bloom-card text-center group">
            <div className="w-20 h-20 bg-gradient-to-br from-bloomGold to-bloomGold/70 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <Users className="w-10 h-10 text-bloomDarkCoffee" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-bloomGreen">Empowering Women</h3>
            <p className="text-muted-foreground leading-relaxed">
              Women play crucial roles in coffee farming yet face systemic barriers to economic participation.
              BLOOM centers women as key change agents, providing them with tools, training, and market access.
            </p>
          </div>

          <div className="bloom-card text-center group">
            <div className="w-20 h-20 bg-gradient-to-br from-bloomBrown to-bloomBrown/70 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <Zap className="w-10 h-10 text-bloomBeige" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-bloomGreen">Clean Energy Solution</h3>
            <p className="text-muted-foreground leading-relaxed">
              The BLOOM Unit combines solar power with mechanized processing and biogas technology,
              creating a sustainable ecosystem that transforms waste into energy while improving coffee quality.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
