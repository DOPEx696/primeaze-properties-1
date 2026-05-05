'use client';
import FadeInSection from './FadeInSection';
import { Clock, ShieldCheck, Zap, Sparkles } from 'lucide-react';

export default function PsychologicalValue({ category = "Your Home" }) {
  return (
    <section className="py-32 bg-white relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#954535_1px,transparent_1px)] [background-size:40px_40px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <FadeInSection>
          <div className="text-center mb-24">
            <span className="text-rust font-bold uppercase tracking-widest text-xs mb-4 block">Psychological Peace</span>
            <h2 className="text-4xl md:text-6xl font-bold text-primary-dark mb-8 font-jakarta tracking-tight">
              More Than Just <br/><span className="text-rust">Finding a Place.</span>
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-xl font-inter leading-relaxed">
              We understand that choosing {category} is an emotional decision. We don&apos;t just sell space; we provide the foundation for your next chapter.
            </p>
          </div>
        </FadeInSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          <FadeInSection delay={100}>
            <div className="group">
              <div className="w-16 h-16 bg-rust/5 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-rust group-hover:text-white transition-all duration-500">
                <Clock className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4 font-jakarta text-primary-dark">Zero Decision Fatigue</h3>
              <p className="text-gray-500 text-lg leading-relaxed font-inter">
                Why scroll through 100 average houses when you can see the top 3 that fit perfectly? We save you the mental energy of filtering noise.
              </p>
            </div>
          </FadeInSection>

          <FadeInSection delay={200}>
            <div className="group">
              <div className="w-16 h-16 bg-rust/5 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-rust group-hover:text-white transition-all duration-500">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4 font-jakarta text-primary-dark">Absolute Safety Net</h3>
              <p className="text-gray-500 text-lg leading-relaxed font-inter">
                Every property is hand-visited. We look for what the cameras don&apos;t show—so you never have to worry about hidden surprises after moving in.
              </p>
            </div>
          </FadeInSection>

          <FadeInSection delay={300}>
            <div className="group">
              <div className="w-16 h-16 bg-rust/5 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-rust group-hover:text-white transition-all duration-500">
                <Sparkles className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4 font-jakarta text-primary-dark">The Status You Deserve</h3>
              <p className="text-gray-500 text-lg leading-relaxed font-inter">
                We only list properties that match a certain standard of living. Your home is a reflection of your success—we ensure it remains elite.
              </p>
            </div>
          </FadeInSection>
        </div>

        <FadeInSection>
          <div className="mt-24 p-10 bg-[#0a0a0a] rounded-[2.5rem] flex flex-col md:flex-row items-center justify-between gap-10 shadow-2xl">
            <div className="text-white md:w-2/3">
              <h4 className="text-2xl font-bold mb-4 font-jakarta italic">&quot;Experience a move where you feel in control, not overwhelmed.&quot;</h4>
              <p className="text-gray-400 font-inter">Join hundreds of residents who found their perfect match through our psychological filtering process.</p>
            </div>
            <button 
              onClick={() => document.getElementById('enquire')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-primary-dark px-10 py-4 rounded-full font-bold hover:bg-gold transition-colors whitespace-nowrap"
            >
              Enquire for VIP Hunt
            </button>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}
