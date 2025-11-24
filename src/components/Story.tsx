import { Heart, Quote } from "lucide-react";

export const Story = () => {
  return (
    <section id="story" className="bg-background relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-bloomGold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-40 right-20 w-96 h-96 bg-bloomGreen/5 rounded-full blur-3xl" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="section-title">Meet Almaz</h2>
        <p className="section-subtitle">
          A story of transformation through technology, training, and community support.
        </p>

        <div className="mt-16 grid lg:grid-cols-5 gap-12 items-center">
          {/* Image */}
          <div className="lg:col-span-2">
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl group">
                <img
                  src="../../public/almaz.jpg"
                  alt="Almaz, Ethiopian coffee farmer"
                  className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bloomDarkCoffee/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-bloomGold to-bloomGold/70 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-300">
                <Heart className="w-16 h-16 text-bloomDarkCoffee" />
              </div>
            </div>
          </div>

          {/* Story Content */}
          <div className="lg:col-span-3 space-y-6">
            <div className="bloom-card border-l-4 border-bloomGold relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-bloomGold/5 rounded-full blur-2xl" />
              <div className="relative z-10">
                <Quote className="w-12 h-12 text-bloomGold mb-4 opacity-50" />
                <p className="text-lg text-foreground leading-relaxed italic mb-6">
                  "Before BLOOM, I would spend 6-7 hours every day manually pulping coffee cherries.
                  My hands would hurt, my back would ache, and I still couldn't process enough to meet
                  market quality standards. I had to choose between my farm work and helping my children
                  with homework."
                </p>
              </div>
            </div>

            <div className="bloom-card relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-40 h-40 bg-bloomGreen/5 rounded-full blur-2xl" />
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4 text-bloomGreen">Almaz's Journey</h3>
                <p className="text-foreground leading-relaxed mb-4">
                  Almaz is a 34-year-old coffee farmer and mother of four from Limmu Woreda. Like many
                  Ethiopian women in coffee-growing regions, she worked long hours on her family's small
                  plot but had limited decision-making power and no direct income of her own.
                </p>
                <p className="text-foreground leading-relaxed">
                  When BLOOM came to her community, Almaz was selected as a Coordinator for her team.
                  Through six months of training, she learned not just how to operate the BLOOM Unit,
                  but also financial management, quality control, and leadership skills.
                </p>
              </div>
            </div>

            <div className="bloom-card border-l-4 border-bloomGreen relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-bloomGreen/5 rounded-full blur-2xl" />
              <div className="relative z-10">
                <Quote className="w-12 h-12 text-bloomGreen mb-4 opacity-50" />
                <p className="text-lg text-foreground leading-relaxed italic">
                  "Now I process coffee in less than 2 hours, and the quality is so much better that
                  buyers come directly to me. I've tripled my income, sent my eldest daughter to
                  secondary school, and other women in the village are asking me to teach them. I'm not
                  just a farmer's wife anymore—I'm a businesswoman and a teacher."
                </p>
              </div>
            </div>

            <div className="bloom-card bg-gradient-to-br from-bloomGreen/10 to-bloomGold/10 border-2 border-bloomGold/30 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-bloomGold/10 rounded-full blur-2xl" />
              <div className="relative z-10">
                <h4 className="text-xl font-bold mb-3 text-bloomGreen">Today's Impact</h4>
                <p className="text-foreground">
                  Almaz's team now processes coffee for 15 neighboring farmers, earning service fees
                  that supplement their own farming income. She serves on her cooperative's board and
                  mentors new BLOOM Teams. Her story exemplifies how technology, training, and trust
                  can transform lives and communities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
    