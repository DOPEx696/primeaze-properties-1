'use client';
import FadeInSection from './FadeInSection';
import { Target, Eye, ShieldCheck, Heart, ArrowRight } from 'lucide-react';

export default function BrandIdentity() {
  return (
    <section className="py-32 bg-[#0a0a0a] text-white overflow-hidden relative">
      {/* Decorative background */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,_rgba(234,194,128,0.05)_0%,_transparent_50%)]"></div>
      
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Why Choose Us */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-40">
          <FadeInSection>
            <div className="relative">
              <span className="text-gold font-bold uppercase tracking-[0.2em] text-sm mb-6 block">The Primeaze Difference</span>
              <h2 className="text-5xl md:text-6xl font-bold font-jakarta leading-tight mb-8">
                Why Choose <br/><span className="text-gold">PRIMEAZE?</span>
              </h2>
              <p className="text-gray-400 text-xl leading-relaxed mb-10 font-inter">
                At PRIMEAZE, we focus on <span className="text-white font-semibold italic">quality over commission</span>. We don&apos;t just show you houses; we bring you carefully filtered and verified properties you can truly trust.
              </p>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-6 h-6 bg-gold/20 rounded-full flex items-center justify-center mt-1">
                    <div className="w-2 h-2 bg-gold rounded-full"></div>
                  </div>
                  <p className="text-gray-300 font-inter text-lg">Every recommendation is tailored to your unique lifestyle needs.</p>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-6 h-6 bg-gold/20 rounded-full flex items-center justify-center mt-1">
                    <div className="w-2 h-2 bg-gold rounded-full"></div>
                  </div>
                  <p className="text-gray-300 font-inter text-lg">End-to-end guidance to eliminate the chaos of home searching.</p>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-6 h-6 bg-gold/20 rounded-full flex items-center justify-center mt-1">
                    <div className="w-2 h-2 bg-gold rounded-full"></div>
                  </div>
                  <p className="text-gray-300 font-inter text-lg">Simple, transparent, and completely stress-free transitions.</p>
                </div>
              </div>
            </div>
          </FadeInSection>
          
          <FadeInSection delay={200}>
            <div className="bg-white/5 border border-white/10 rounded-3xl p-12 backdrop-blur-xl relative group overflow-hidden">
               <div className="absolute -top-24 -right-24 w-64 h-64 bg-gold/10 rounded-full blur-[80px] group-hover:bg-gold/20 transition-all duration-700"></div>
               <h3 className="text-3xl font-bold mb-6 font-jakarta text-gold">Our Ethos</h3>
               <p className="text-gray-400 text-lg leading-relaxed mb-8">
                 We believe renting shouldn&apos;t be a struggle. Most people don&apos;t struggle to find homes—they struggle with the uncertainty, the noise, and the lack of guidance around it. 
               </p>
               <div className="p-6 bg-white/5 rounded-2xl border border-white/5 italic text-gray-300">
                 &quot;Primeaze was built as the ideal solution for those who demand a better home and a more refined lifestyle.&quot;
               </div>
            </div>
          </FadeInSection>
        </div>

        {/* Mission & What We Do */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Mission */}
          <FadeInSection>
            <div className="bg-gradient-to-br from-gold/10 to-transparent p-12 rounded-[2rem] border border-gold/20 h-full">
              <div className="w-16 h-16 bg-gold text-primary-dark rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-gold/20">
                <Target className="w-8 h-8" />
              </div>
              <h3 className="text-4xl font-bold mb-10 font-jakarta">Our Mission</h3>
              <div className="space-y-8">
                {[
                  { id: "01", text: "To redefine the home search experience entirely." },
                  { id: "02", text: "To help people find the right home, faster and smarter." },
                  { id: "03", text: "To eliminate unnecessary stress and confusion from the process." },
                  { id: "04", text: "To bring absolute clarity and trust to every decision you make." }
                ].map((item) => (
                  <div key={item.id} className="flex gap-6 items-start group">
                    <span className="text-gold/40 font-bold text-xl font-jakarta group-hover:text-gold transition-colors">{item.id}</span>
                    <p className="text-gray-300 text-lg font-inter">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </FadeInSection>

          {/* What We Do */}
          <FadeInSection delay={200}>
            <div className="bg-white/5 p-12 rounded-[2rem] border border-white/10 h-full">
              <div className="w-16 h-16 bg-rust text-white rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-rust/20">
                <Eye className="w-8 h-8" />
              </div>
              <h3 className="text-4xl font-bold mb-10 font-jakarta">What We Do</h3>
              <div className="space-y-8">
                {[
                  { id: "01", text: "We filter out the noise and curate only the elite options." },
                  { id: "02", text: "We verify every listing personally to ensure standard & safety." },
                  { id: "03", text: "We guide you through every step, from visit to move-in." },
                  { id: "04", text: "You only see what’s worth your time—no more endless scrolls." }
                ].map((item) => (
                  <div key={item.id} className="flex gap-6 items-start group">
                    <span className="text-rust/40 font-bold text-xl font-jakarta group-hover:text-rust transition-colors">{item.id}</span>
                    <p className="text-gray-300 text-lg font-inter">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </FadeInSection>

        </div>

        <FadeInSection>
          <div className="mt-40 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-12 font-jakarta">Ready for a <span className="text-gold italic">stress-free</span> move?</h2>
            <button 
              onClick={() => document.getElementById('enquire')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gold text-primary-dark px-12 py-5 rounded-full font-bold text-lg hover:scale-105 transition-all flex items-center gap-3 mx-auto shadow-2xl shadow-gold/20"
            >
              Get Started Now <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </FadeInSection>

      </div>
    </section>
  );
}
