import FadeInSection from './FadeInSection';

export default function ValueBanner() {
  return (
    <div className="bg-[#222222] py-12 px-4 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
      
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <FadeInSection>
          <div className="inline-flex items-center justify-center p-3 bg-white/10 rounded-full mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-relaxed font-montserrat">
            Every property listed by PRIMEAZE is <span className="text-gold border-b-2 border-gold/50">hand-visited</span>, rigorously filtered, and <span className="text-gold border-b-2 border-gold/50">exclusively not listed anywhere else.</span>
          </h2>
        </FadeInSection>
      </div>
    </div>
  );
}
