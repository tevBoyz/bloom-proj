import { Award, TrendingUp, Shield, MapPin } from "lucide-react";

export const PCW = () => {
  return (
    <section id="pcw" className="bg-bloom-gradient relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-bloomGold/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="section-title">Proud Coffee Women Market Linkage</h2>
        <p className="section-subtitle">
          Creating direct market connections that ensure fair pricing, quality recognition,
          and sustainable buyer relationships for BLOOM Team coffee.
        </p>

        <div className="mt-16 grid md:grid-cols-2 gap-12">
          {/* Main Description */}
          <div className="bloom-card bg-gradient-to-br from-bloomGreen to-bloomDarkCoffee text-bloomBeige relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-10 right-10 w-40 h-40 bg-bloomGold rounded-full blur-3xl" />
            </div>
            <div className="relative z-10">
              <div className="w-20 h-20 bg-bloomGold/20 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <Award className="w-12 h-12 text-bloomGold" />
              </div>
              <h3 className="text-3xl font-bold mb-6">The PCW Label</h3>
              <p className="text-bloomLightGreen leading-relaxed text-lg mb-6">
                The Proud Coffee Women (PCW) label is a market-facing brand that connects BLOOM Teams
                directly with specialty coffee buyers seeking high-quality, ethically-sourced Ethiopian coffee.
              </p>
              <p className="text-bloomLightGreen leading-relaxed text-lg">
                This certification ensures buyers receive exceptional coffee while guaranteeing women farmers
                receive premium prices that reflect their investment in quality and sustainable practices.
              </p>
            </div>
          </div>

          {/* Benefits Grid */}
          <div className="space-y-6">
            <div className="bloom-card group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-bloomGold/5 rounded-full blur-2xl group-hover:bg-bloomGold/10 transition-colors duration-500" />
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-bloomGold to-bloomGold/70 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <TrendingUp className="w-8 h-8 text-bloomDarkCoffee" />
                </div>
                <h4 className="text-xl font-bold mb-3 text-bloomGreen">Fair Pricing</h4>
                <p className="text-muted-foreground">
                  Direct buyer relationships eliminate middlemen, ensuring women capture 73% of FOB value
                  compared to the industry average of 53%.
                </p>
              </div>
            </div>

            <div className="bloom-card group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-bloomGreen/5 rounded-full blur-2xl group-hover:bg-bloomGreen/10 transition-colors duration-500" />
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-bloomGreen to-bloomGreen/70 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Shield className="w-8 h-8 text-bloomBeige" />
                </div>
                <h4 className="text-xl font-bold mb-3 text-bloomGreen">Quality Certification</h4>
                <p className="text-muted-foreground">
                  PCW certification verifies coffee was processed using BLOOM Unit technology,
                  meeting specialty grade quality standards.
                </p>
              </div>
            </div>

            <div className="bloom-card group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-bloomBrown/5 rounded-full blur-2xl group-hover:bg-bloomBrown/10 transition-colors duration-500" />
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-bloomBrown to-bloomBrown/70 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <MapPin className="w-8 h-8 text-bloomBeige" />
                </div>
                <h4 className="text-xl font-bold mb-3 text-bloomGreen">Full Traceability</h4>
                <p className="text-muted-foreground">
                  Complete supply chain transparency from farm to cup, allowing buyers to support
                  specific BLOOM Teams and women entrepreneurs.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 bloom-card text-center bg-gradient-to-br from-bloomGold/10 to-bloomGreen/5 border-2 border-bloomGold/30 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-10 left-10 w-64 h-64 bg-bloomGold rounded-full blur-3xl" />
          </div>
          <div className="relative z-10">
            <h3 className="text-3xl font-bold mb-4 text-bloomGreen">Market Impact</h3>
            <p className="text-foreground text-lg max-w-3xl mx-auto leading-relaxed">
              By connecting quality-conscious buyers with empowered women producers, the PCW label
              creates sustainable market relationships that reward excellence, support community development,
              and demonstrate that social impact and premium quality go hand in hand.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
