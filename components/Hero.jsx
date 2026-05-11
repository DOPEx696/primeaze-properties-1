'use client';
import Link from 'next/link';

export default function Hero({ tagline, subtext, showCategoryCards = false }) {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center px-4 md:px-8 bg-primary-dark pt-40 overflow-hidden">

      {/* Background with abstract shapes/gradients since we don't have images yet */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#3a0002] via-primary-dark to-primary-dark"></div>
        {/* Decorative gold blur */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gold/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="relative z-20 text-center max-w-4xl mx-auto flex flex-col items-center mt-12 mb-20">
        <span className="inline-block py-1 px-3 border border-gold/40 rounded-full text-gold text-xs font-semibold tracking-wider uppercase mb-6 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
          Exclusively Curated Properties
        </span>

        <h1 className="text-5xl md:text-6xl lg:text-8xl font-extrabold text-white mb-8 leading-tight font-jakarta animate-fade-in-up" style={{ animationDelay: '200ms' }}>
          {tagline}
        </h1>

        <p className="text-xl md:text-2xl text-gray-400 font-medium max-w-2xl mb-12 animate-fade-in-up font-inter" style={{ animationDelay: '300ms' }}>
          {subtext}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center animate-fade-in-up w-full sm:w-auto" style={{ animationDelay: '400ms' }}>
          <a
            href="https://v757kd6yq4.zite.so/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 bg-gold text-primary-dark font-bold rounded shadow-[0_0_20px_rgba(234,194,128,0.4)] hover:shadow-[0_0_30px_rgba(234,194,128,0.6)] transition-all hover:-translate-y-1 text-center"
          >
            Register to Hold
            <span className="block text-[10px] font-normal mt-1 opacity-80">Hold your home before someone else does</span>
          </a>

          <button
            onClick={(e) => {
              e.preventDefault();
              const el = document.getElementById('enquire');
              if (el) {
                const yOffset = -80;
                const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
                window.scrollTo({ top: y, behavior: 'smooth' });
              }
            }}
            className="w-full sm:w-auto px-8 py-4 border-2 border-rust text-light-bg font-bold rounded hover:bg-rust/20 transition-all text-center flex flex-col justify-center h-full"
          >
            Enquire Now
            <span className="block text-[10px] font-normal mt-1 opacity-80 text-gray-400">Speak to our experts</span>
          </button>
        </div>
      </div>

      {showCategoryCards && (
        <div className="relative z-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl w-full mx-auto pb-12 animate-fade-in-up" style={{ animationDelay: '600ms' }}>
          <CategoryCard
            title="Families"
            desc="Safe, spacious homes."
            link="/families"
          />
          <CategoryCard
            title="Professionals"
            desc="Near tech parks."
            link="/professionals"
          />
          <CategoryCard
            title="Commercial Spaces"
            desc="Office & retail spaces."
            link="/commercial"
          />
          <CategoryCard
            title="Students"
            desc="Cozy & budget-friendly."
            link="/students"
          />
        </div>
      )}
    </section>
  );
}

function CategoryCard({ title, desc, link }) {
  return (
    <Link href={link} className="group flex flex-col items-start p-8 bg-white/5 backdrop-blur border border-white/10 rounded-xl hover:bg-white/10 transition-all hover:-translate-y-2 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
      <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-gold transition-colors font-jakarta">{title}</h3>
      <p className="text-gray-400 text-sm">{desc}</p>
      <div className="mt-8 text-gold uppercase text-xs font-semibold tracking-widest flex items-center gap-2">
        View Properties
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </div>
    </Link>
  );
}
