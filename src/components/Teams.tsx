import { Users, Award, BookOpen, Wrench } from "lucide-react";

export const Teams = () => {
  const highlights = [
    {
      icon: Users,
      number: "1500+",
      label: "Women Participants",
      description: "Organized into 500 Bloom Teams, each with 3 members.",
    },
    {
      icon: BookOpen,
      number: "4",
      label: "Core Training Pillars",
      description: "Agronomy • Financial Literacy • Technical Skills • Leadership",
    },
    {
      icon: Wrench,
      number: "100%",
      label: "Hands-On Learning",
      description: "Practical training on Bloom Unit operation & maintenance.",
    },
  ];

  return (
    <section id="teams" className="bg-bloom-gradient relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-40 right-20 w-64 h-64 bg-bloomGreen/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Title */}
        <h2 className="section-title">Bloom Teams & Training</h2>
        <p className="section-subtitle">
          Project BLOOM creates groups of women organizing them into micro-enterprises by organizing participants into structured teams of three women per Bloom unit and delivering comprehensive training that builds technical expertise, business confidence, and long-term leadership capacity.</p>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mt-16">

          {/* Image */}
          <div className="order-2 lg:order-1 rounded-3xl overflow-hidden shadow-2xl relative group">
            <img
              src="/teams.webp"
              alt="Young women participating in a Bloom Team training session"
              className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bloomGreen/60 to-transparent" />
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2 space-y-6">
            
            {/* Team Structure */}
            <div className="bloom-card relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-bloomGreen/5 rounded-full blur-2xl" />
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-bloomGreen to-bloomGreen/70 rounded-xl flex items-center justify-center mb-4 shadow-lg">
                  <Users className="w-8 h-8 text-bloomBeige" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-bloomGreen">Team Structure</h3>
                <p className="text-foreground leading-relaxed mb-4">
                  Each Bloom Team is made up of <strong>three young women</strong> who share responsibility for running their Bloom Unit. Every member is trained in all aspects of operation, while also taking on a focus role:
                </p>
                <ul className="list-disc pl-6 text-foreground/90 space-y-1">
                  <li><strong>Coordinator:</strong> Manages bookings, customer relations, and business decisions.</li>
                  <li><strong>Lead Technician:</strong> Oversees technical performance, maintenance, and efficiency.</li>
                  <li><strong>Technician:</strong> Supports daily operations and hands-on processing work.</li>
                </ul>
                <p className="text-foreground leading-relaxed mt-4">
                  This structure ensures reliability, shared learning, and long-term sustainability of each Bloom Unit.
                </p>
              </div>
            </div>

            {/* Training Program */}
            <div className="bloom-card relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-bloomGold/5 rounded-full blur-2xl" />
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-bloomGold to-bloomGold/70 rounded-xl flex items-center justify-center mb-4 shadow-lg">
                  <BookOpen className="w-8 h-8 text-bloomDarkCoffee" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-bloomGreen">Comprehensive Training</h3>
                <p className="text-foreground leading-relaxed">
                  Bloom Teams receive sequential training across four pillars:
                </p>
                <ul className="list-disc pl-6 text-foreground/90 space-y-1 mt-2">
                  <li><strong>Agronomy:</strong> Fundamentals of quality improvement, harvesting, and cherry selection.</li>
                  <li><strong>Financial Literacy:</strong> Saving, bookkeeping, pricing strategy, and managing earnings.</li>
                  <li><strong>Technical Skills:</strong> Operation, troubleshooting, and maintenance of Bloom Unit equipment.</li>
                  <li><strong>Leadership & Teamwork:</strong> Communication, conflict resolution, and community engagement.</li>
                </ul>
                <p className="text-foreground leading-relaxed mt-4">
                  The curriculum combines classroom learning with practical field exercises, enabling women to become confident operators, entrepreneurs, and leaders in their communities.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="bloom-card text-center group relative overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-bloomGold/5 rounded-full blur-2xl group-hover:bg-bloomGold/10 transition-colors duration-500" />
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-bloomGold to-bloomGold/70 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                    <Icon className="w-8 h-8 text-bloomDarkCoffee" />
                  </div>
                  <div className="text-4xl font-bold text-bloomGreen mb-2 group-hover:text-bloomGold transition-colors duration-300">
                    {item.number}
                  </div>
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
