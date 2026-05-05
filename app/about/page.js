'use client';
import Hero from '@/components/Hero';
import FadeInSection from '@/components/FadeInSection';
import BrandIdentity from '@/components/BrandIdentity';
import EnquiryForm from '@/components/EnquiryForm';
import { Sparkles, MapPin, Compass, ShieldCheck } from 'lucide-react';

export default function AboutPage() {
  return (
    <main>
      <Hero 
        tagline="Redefining Home Search."
        subtext="At PRIMEAZE, we simplify the entire process—from discovery to move-in. No chaos. No pressure. Just clarity."
        showCategoryCards={false}
      />

      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <FadeInSection>
              <h2 className="text-4xl md:text-6xl font-bold font-jakarta text-primary-dark leading-tight mb-8">
                Renting doesn&apos;t have to <br/><span className="text-rust italic text-3xl md:text-5xl">feel chaotic.</span>
              </h2>
              <p className="text-gray-600 text-xl leading-relaxed mb-8 font-inter">
                Most people don&apos;t struggle to find homes. They struggle with everything around it—the endless calls, the unverified listings, and the lack of guidance.
              </p>
              <p className="text-gray-600 text-xl leading-relaxed mb-10 font-inter">
                That&apos;s why we built <span className="text-primary-dark font-bold">PRIMEAZE</span>—as a solution for those who want to move to a better home and lifestyle without the unnecessary noise.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <div className="flex items-center gap-4 text-primary-dark font-bold font-jakarta">
                  <ShieldCheck className="text-gold w-6 h-6" /> Verified Properties
                </div>
                <div className="flex items-center gap-4 text-primary-dark font-bold font-jakarta">
                  <Compass className="text-gold w-6 h-6" /> End-to-End Guidance
                </div>
              </div>
            </FadeInSection>

            <FadeInSection delay={200}>
              <div className="relative">
                <div className="bg-light-bg rounded-[3rem] p-12 relative z-10 border border-gray-100 shadow-xl">
                  <Sparkles className="text-gold w-12 h-12 mb-8" />
                  <blockquote className="text-2xl font-jakarta italic text-primary-dark leading-relaxed mb-8">
                    &quot;We filter, verify, and guide you every step of the way, so you only see homes that truly fit your needs.&quot;
                  </blockquote>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-1.5 bg-gold rounded-full"></div>
                    <span className="font-bold text-gray-500 uppercase tracking-widest text-sm">The Primeaze Way</span>
                  </div>
                </div>
                {/* Decorative blobs */}
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-gold/10 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-rust/10 rounded-full blur-3xl"></div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      <BrandIdentity />

      <section className="py-32 bg-light-bg">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <FadeInSection>
            <h2 className="text-4xl md:text-5xl font-bold font-jakarta mb-8">Ready to experience clarity?</h2>
            <p className="text-gray-600 text-xl mb-12 font-inter">Let our experts find your next home while you focus on what matters.</p>
            <button 
              onClick={() => document.getElementById('enquire')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-rust text-white px-12 py-5 rounded-full font-bold text-lg hover:bg-primary-dark transition-all shadow-xl shadow-rust/20"
            >
              Contact Us!
            </button>
          </FadeInSection>
        </div>
      </section>

      <EnquiryForm />
    </main>
  );
}
