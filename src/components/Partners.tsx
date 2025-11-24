import { Handshake, Building2, Landmark, Globe } from "lucide-react";

export const Partners = () => {
  const partners = [
    {
      icon: Building2,
      name: "Spiralytix",
      role: "Technology Partner",
      description: "Designing and manufacturing BLOOM Units with solar integration and quality engineering.",
    },
    {
      icon: Globe,
      name: "MCRO",
      role: "Implementation Partner",
      description: "Providing training, field support, and monitoring & evaluation across project sites.",
    },
    {
      icon: Building2,
      name: "Woreda Administration",
      role: "Government Partner",
      description: "Facilitating community engagement, land access, and regulatory coordination.",
    },
    {
      icon: Landmark,
      name: "Financial Institutions",
      role: "Financing Partners",
      description: "Offering microfinance products and payment plans tailored for BLOOM Teams.",
    },
  ];

  return (
    <section id="partners" className="bg-bloom-gradient relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-bloomGreen/5 rounded-full blur-3xl" />
      <div className="absolute bottom-40 left-20 w-96 h-96 bg-bloomGold/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="section-title">Our Partners</h2>
        <p className="section-subtitle">
          Collaborative partnerships bringing together technology, implementation expertise,
          government support, and financial services for sustainable impact.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {partners.map((partner, index) => {
            const Icon = partner.icon;
            return (
              <div key={index} className="bloom-card text-center group relative overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-40 bg-bloomGreen/5 rounded-full blur-2xl group-hover:bg-bloomGreen/10 transition-colors duration-500" />
                <div className="relative z-10">
                  <div className="w-20 h-20 bg-gradient-to-br from-bloomGreen to-bloomGreen/70 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                    <Icon className="w-10 h-10 text-bloomBeige" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-bloomGreen">{partner.name}</h3>
                  <div className="text-sm font-semibold text-bloomGold mb-4">{partner.role}</div>
                  <p className="text-muted-foreground text-sm leading-relaxed">{partner.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Collaboration Statement */}
        <div className="mt-16 bloom-card bg-gradient-to-br from-bloomGreen to-bloomDarkCoffee text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-64 h-64 bg-bloomGold rounded-full blur-3xl" />
            <div className="absolute bottom-10 right-10 w-64 h-64 bg-bloomGold rounded-full blur-3xl" />
          </div>
          <div className="relative z-10">
            <div className="w-20 h-20 bg-bloomGold/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Handshake className="w-12 h-12 text-bloomGold" />
            </div>
            <h3 className="text-4xl font-bold mb-6 text-bloomBeige">Stronger Together</h3>
            <p className="text-bloomLightGreen text-lg max-w-3xl mx-auto leading-relaxed">
              Project BLOOM's success depends on collaboration across sectors—combining private sector
              innovation, NGO implementation capacity, government facilitation, and financial sector
              support to create a comprehensive ecosystem that empowers women and transforms communities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
