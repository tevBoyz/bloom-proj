import { Award, TrendingUp, Shield, MapPin } from "lucide-react";

export const PCW = () => {
  return (
    <section id="pcw" className="bg-bloom-gradient relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-bloomGold/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="section-title">Proud Coffee Women Market Linkage</h2>
        <p className="section-subtitle">
          A premium women-led coffee brand connecting BLOOM Teams directly with
          specialty buyers who value quality, ethics, and full traceability.
        </p>

        <div className="mt-16 grid md:grid-cols-2 gap-16 items-center">

          {/* ===== PCW LOGO FEATURE CARD — NOW A CENTERPIECE ===== */}
          <div className="bloom-card bg-gradient-to-br from-bloomGreen to-bloomDarkCoffee text-bloomBeige relative overflow-hidden p-12 flex flex-col items-center justify-center">
            {/* Glow Effects */}
            <div className="absolute inset-0 opacity-20 pointer-events-none">
              <div className="absolute -top-10 -left-10 w-72 h-72 bg-bloomGold/30 rounded-full blur-3xl" />
              <div className="absolute bottom-0 right-0 w-96 h-96 bg-bloomBrown/30 rounded-full blur-[130px]" />
            </div>

            {/* PCW Logo — NOW LARGE AND CENTERED */}
            <div className="relative z-10 mb-10">
              <div className="w-[260px] h-[260px] rounded-3xl bg-bloomBeige/10 shadow-[0_0_40px_rgba(212,168,88,0.35)] backdrop-blur-xl flex items-center justify-center overflow-hidden group transition-all hover:scale-105 duration-500">
                <img
                  src="/pcw.jpg"
                  alt="Proud Coffee Women (PCW) label"
                  className="w-full h-full object-contain drop-shadow-2xl group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Description */}
            <p className="text-bloomLightGreen leading-relaxed text-lg text-center max-w-xl mb-6">
              The Proud Coffee Women (PCW) label elevates BLOOM Team coffee to
              the global specialty market, ensuring buyers can identify,
              support, and celebrate women-led, sustainably produced Ethiopian coffee.
            </p>

            <p className="text-bloomLightGreen leading-relaxed text-lg text-center max-w-xl">
              PCW guarantees premium quality, ethical sourcing, and fair returns,
              empowering women farmers to capture a greater share of the coffee value chain.
            </p>
          </div>

          {/* ===== BENEFITS GRID ===== */}
          <div className="space-y-6">
            {/* Fair Pricing */}
            <div className="bloom-card group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-bloomGold/5 rounded-full blur-2xl group-hover:bg-bloomGold/10 transition-colors duration-500" />
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-bloomGold to-bloomGold/70 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <TrendingUp className="w-8 h-8 text-bloomDarkCoffee" />
                </div>
                <h4 className="text-xl font-bold mb-3 text-bloomGreen">Fair Pricing</h4>
                <p className="text-muted-foreground">
                  Transparent, direct-trade relationships ensure women earn up to 73% of FOB value,
                  significantly higher than the industry average.
                </p>
              </div>
            </div>

            {/* Certification */}
            <div className="bloom-card group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-bloomGreen/5 rounded-full blur-2xl group-hover:bg-bloomGreen/10 transition-colors duration-500" />
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-bloomGreen to-bloomGreen/70 rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Shield className="w-8 h-8 text-bloomBeige" />
                </div>
                <h4 className="text-xl font-bold mb-3 text-bloomGreen">Quality Certification</h4>
                <p className="text-muted-foreground">
                  PCW coffee is verified as sustainably produced, specialty-grade,
                  and processed using Bloom Unit clean-energy technology.
                </p>
              </div>
            </div>

            {/* Traceability */}
            <div className="bloom-card group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-bloomBrown/5 rounded-full blur-2xl group-hover:bg-bloomBrown/10 transition-colors duration-500" />
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-bloomBrown to-bloomBrown/70 rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="w-8 h-8 text-bloomBeige" />
                </div>
                <h4 className="text-xl font-bold mb-3 text-bloomGreen">Full Traceability</h4>
                <p className="text-muted-foreground">
                  Buyers can trace every lot back to the exact Bloom Team,
                  reinforcing transparency and rewarding women-led excellence.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ===== CALL TO ACTION ===== */}
        <div className="mt-20 bloom-card text-center bg-gradient-to-br from-bloomGold/10 to-bloomGreen/5 border-2 border-bloomGold/30 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-10 left-10 w-64 h-64 bg-bloomGold rounded-full blur-3xl" />
          </div>
          <div className="relative z-10">
            <h3 className="text-3xl font-bold mb-4 text-bloomGreen">Market Impact</h3>
            <p className="text-foreground text-lg max-w-3xl mx-auto leading-relaxed">
              PCW creates a bridge between empowered women producers and global specialty buyers,
              proving that exceptional quality, ethical sourcing, and real social impact can thrive together.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
