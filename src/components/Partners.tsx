import { Handshake, Building2, Landmark, Globe } from "lucide-react";

export const Partners = () => {
  const partners = [
    {
      icon: Building2,
      name: "Spiralytix",
      role: "Technology Partner",
      description:
        "Designs and manufactures the Bloom Unit with advanced solar integration, high-efficiency pulping systems, and robust engineering tailored to rural Ethiopian conditions.",
    },
    {
      icon: Globe,
      name: "MCRO",
      role: "Implementation Partner",
      description:
        "Leads field implementation, training, coaching, and monitoring across Bloom communities—ensuring women receive continuous technical and business support.",
    },
    {
      icon: Building2,
      name: "Woreda Administration",
      role: "Government Partner",
      description:
        "Supports community mobilization, land access, cooperative linkages, and local regulatory facilitation to ensure long-term program alignment and sustainability.",
    },
    {
      icon: Landmark,
      name: "Financial Institutions",
      role: "Financing Partners",
      description:
        "Provide microfinance products, group-based lending, and flexible repayment options tailored to the needs of Bloom Teams as emerging rural enterprises.",
    },
  ];

  return (
    <section id="partners" className="bg-bloom-gradient relative overflow-hidden">
      {/* Decorative Background Orbs */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-bloomGreen/5 rounded-full blur-3xl" />
      <div className="absolute bottom-40 left-20 w-96 h-96 bg-bloomGold/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="section-title">Our Partners</h2>
        <p className="section-subtitle max-w-4xl mx-auto">
          A powerful, cross-sector coalition enabling technology innovation, women’s training,
          efficient implementation, government alignment, and financial inclusion.
        </p>

        {/* Partner Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {partners.map((partner, index) => {
            const Icon = partner.icon;
            return (
              <div
                key={index}
                className="bloom-card text-center group relative overflow-hidden"
              >
                {/* Glow */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-40 bg-bloomGreen/5 rounded-full blur-2xl group-hover:bg-bloomGreen/10 transition-colors duration-500" />

                <div className="relative z-10">
                  <div className="w-20 h-20 bg-gradient-to-br from-bloomGreen to-bloomGreen/70 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                    <Icon className="w-10 h-10 text-bloomBeige" />
                  </div>

                  <h3 className="text-xl font-bold mb-2 text-bloomGreen">
                    {partner.name}
                  </h3>

                  <div className="text-sm font-semibold text-bloomGold mb-4">
                    {partner.role}
                  </div>

                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {partner.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Collaboration Statement */}
        <div className="mt-20 bloom-card bg-gradient-to-br from-bloomGreen to-bloomDarkCoffee text-center relative overflow-hidden p-14">
          {/* Soft Glow */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-64 h-64 bg-bloomGold rounded-full blur-3xl" />
            <div className="absolute bottom-10 right-10 w-64 h-64 bg-bloomGold rounded-full blur-3xl" />
          </div>

          <div className="relative z-10">
            <div className="w-20 h-20 bg-bloomGold/20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-md">
              <Handshake className="w-12 h-12 text-bloomGold" />
            </div>

            <h3 className="text-4xl font-bold mb-6 text-bloomBeige">Stronger Together</h3>

            <p className="text-bloomLightGreen text-lg max-w-3xl mx-auto leading-relaxed">
              Project BLOOM thrives through the shared vision of partners who believe in the 
              power of women, clean energy, and sustainable coffee. By combining private-sector 
              innovation, NGO expertise, government support, and financial services, we create 
              an ecosystem where women can grow thriving rural enterprises and transform their communities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
