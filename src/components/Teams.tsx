import { Users, Award, BookOpen, Wrench } from "lucide-react";

export const Teams = () => {
  const highlights = [
    {
      icon: Users,
      number: "500",
      label: "Bloom Teams",
      description: "1,500 women organized into cooperative teams",
    },
    {
      icon: Award,
      number: "3",
      label: "Roles per Team",
      description: "Coordinator, Lead Technician, Technician",
    },
    {
      icon: BookOpen,
      number: "4",
      label: "Training Pillars",
      description: "Agronomy, Financial, Technical, Leadership",
    },
    {
      icon: Wrench,
      number: "100%",
      label: "Hands-On",
      description: "Practical training on BLOOM Unit operation",
    },
  ];

  return (
    <section id="teams" className="bg-bloom-gradient relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-40 right-20 w-64 h-64 bg-bloomGreen/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="section-title">Bloom Teams & Training</h2>
        <p className="section-subtitle">
          Building capacity through structured teams and comprehensive training programs
          that develop technical skills, business acumen, and leadership capabilities.
        </p>

        <div className="grid lg:grid-cols-2 gap-12 items-center mt-16">
          {/* Image */}
          <div className="order-2 lg:order-1 rounded-3xl overflow-hidden shadow-2xl relative group">
            <img
              src="../../public/teams.jpg"
              alt="Women in training session"
              className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bloomGreen/60 to-transparent" />
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2 space-y-6">
            <div className="bloom-card relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-bloomGreen/5 rounded-full blur-2xl" />
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-bloomGreen to-bloomGreen/70 rounded-xl flex items-center justify-center mb-4 shadow-lg">
                  <Users className="w-8 h-8 text-bloomBeige" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-bloomGreen">Team Structure</h3>
                <p className="text-foreground leading-relaxed mb-4">
                  Each BLOOM Team consists of three women with defined roles: a Coordinator who manages
                  operations and customer relations, a Lead Technician who oversees equipment maintenance,
                  and a Technician who supports daily operations. This structure ensures knowledge transfer,
                  mutual support, and sustainable operations.
                </p>
              </div>
            </div>

            <div className="bloom-card relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-bloomGold/5 rounded-full blur-2xl" />
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-bloomGold to-bloomGold/70 rounded-xl flex items-center justify-center mb-4 shadow-lg">
                  <BookOpen className="w-8 h-8 text-bloomDarkCoffee" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-bloomGreen">Comprehensive Training</h3>
                <p className="text-foreground leading-relaxed">
                  Training covers advanced agronomy for quality improvement, financial management and
                  bookkeeping, technical maintenance and troubleshooting, and leadership development.
                  The curriculum combines classroom learning with hands-on practice, ensuring women gain
                  confidence and competence in all aspects of BLOOM Unit operation.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="bloom-card text-center group relative overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-bloomGold/5 rounded-full blur-2xl group-hover:bg-bloomGold/10 transition-colors duration-500" />
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-bloomGold to-bloomGold/70 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                    <Icon className="w-8 h-8 text-bloomDarkCoffee" />
                  </div>
                  <div className="text-4xl font-bold text-bloomGreen mb-2 group-hover:text-bloomGold transition-colors duration-300">{item.number}</div>
                  <div className="text-lg font-semibold text-bloomGreen mb-2">{item.label}</div>
                  <div className="text-sm text-muted-foreground">{item.description}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
