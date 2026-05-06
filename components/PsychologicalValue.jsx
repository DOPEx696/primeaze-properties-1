'use client';
import FadeInSection from './FadeInSection';
import { Clock, ShieldCheck, Zap, Sparkles } from 'lucide-react';

export default function PsychologicalValue({ category = "Your Home", type = "default" }) {
  const contentMap = {
    families: {
      title: "Peace of Mind for Your Loved Ones",
      desc: "Choosing a family home is about more than just square footage. We find sanctuaries where safety, community, and comfort are guaranteed.",
      feature1Title: "Secure Neighborhoods",
      feature1Desc: "We only shortlist properties in gated communities or verified safe zones with 24/7 security for your peace of mind.",
      feature2Title: "Proximity to Essentials",
      feature2Desc: "Homes located within minutes of top schools, parks, and healthcare. Less time in traffic, more time with family.",
      feature3Title: "Kid-Friendly Spaces",
      feature3Desc: "Open layouts, balconies with safety checks, and proximity to play areas. A home built for growing memories."
    },
    professionals: {
      title: "Strategic Living for High Achievers",
      desc: "Your home should be a launchpad for your success. We find premium spaces that minimize friction and maximize productivity.",
      feature1Title: "Tech-Hub Proximity",
      feature1Desc: "Stay close to Manyata, RMZ, or Indiranagar. Say goodbye to Bangalore traffic and hello to a better work-life balance.",
      feature2Title: "Silent & Productive",
      feature2Desc: "We verify noise levels and high-speed fiber availability before you visit. Perfect for the remote-hybrid world.",
      feature3Title: "Premium Lifestyle",
      feature3Desc: "Luxury amenities, modern interiors, and a network of like-minded neighbors. Your home reflects your ambition."
    },
    commercial: {
      title: "Commercial Spaces Built for Growth",
      desc: "An office or retail outlet is a strategic asset. We find locations that drive visibility, prestige, and operational efficiency.",
      feature1Title: "High-Visibility Locations",
      feature1Desc: "Position your brand where it matters. Prime footfall areas and easily accessible landmarks for your clients.",
      feature2Title: "Hassle-Free Compliance",
      feature2Desc: "We handle the legal verification of commercial permits and documentation so you can focus on your business.",
      feature3Title: "Operational Excellence",
      feature3Desc: "From power backup to flexible layouts, we ensure the infrastructure supports your specific operational needs."
    },
    students: {
      title: "Focus on Your Future, Not the Hunt",
      desc: "Your university years are for learning and growth. We find safe, inspiring, and budget-friendly stays near your campus.",
      feature1Title: "Campus Hub Proximity",
      feature1Desc: "Walking distance or quick commutes to Acharya, REVA, or BMSIT. Save energy for your studies, not the commute.",
      feature2Title: "Safe & Verified Stays",
      feature2Desc: "Strictly verified owners and secure buildings. A clean environment where you can study and socialize without worry.",
      feature3Title: "Transparent Budgeting",
      feature3Desc: "No hidden maintenance fees or sketchy deposit rules. Just clear, student-friendly terms for your stay."
    },
    default: {
      title: "The Primeaze Clarity Process",
      desc: "We don't just show you houses; we filter through the noise to find the one that fits your psychological and lifestyle needs.",
      feature1Title: "Filtered for You",
      feature1Desc: "Why look at 100 average listings? We show you the top 3 that match your exact criteria, saving you days of effort.",
      feature2Title: "Trust & Verification",
      feature2Desc: "Every property is hand-visited and verified. We look for the details that cameras miss, ensuring no surprises.",
      feature3Title: "End-to-End Support",
      feature3Desc: "From the first hunt to the final agreement, we handle the heavy lifting. You just choose and move in."
    }
  };

  const content = contentMap[type] || contentMap.default;

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
              {content.title}
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-xl font-inter leading-relaxed">
              {content.desc}
            </p>
          </div>
        </FadeInSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          <FadeInSection delay={100}>
            <div className="group">
              <div className="w-16 h-16 bg-rust/5 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-rust group-hover:text-white transition-all duration-500">
                <Clock className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4 font-jakarta text-primary-dark">{content.feature1Title}</h3>
              <p className="text-gray-500 text-lg leading-relaxed font-inter">
                {content.feature1Desc}
              </p>
            </div>
          </FadeInSection>

          <FadeInSection delay={200}>
            <div className="group">
              <div className="w-16 h-16 bg-rust/5 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-rust group-hover:text-white transition-all duration-500">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4 font-jakarta text-primary-dark">{content.feature2Title}</h3>
              <p className="text-gray-500 text-lg leading-relaxed font-inter">
                {content.feature2Desc}
              </p>
            </div>
          </FadeInSection>

          <FadeInSection delay={300}>
            <div className="group">
              <div className="w-16 h-16 bg-rust/5 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-rust group-hover:text-white transition-all duration-500">
                <Sparkles className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4 font-jakarta text-primary-dark">{content.feature3Title}</h3>
              <p className="text-gray-500 text-lg leading-relaxed font-inter">
                {content.feature3Desc}
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
