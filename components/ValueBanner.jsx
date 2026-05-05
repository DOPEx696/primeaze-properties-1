'use client';
import FadeInSection from './FadeInSection';
import { Search, ShieldCheck, MapPin, Headphones } from 'lucide-react';

export default function ValueBanner() {
  const usps = [
    {
      icon: <Search className="w-8 h-8 text-gold" />,
      title: "Hand-Visited",
      desc: "Every property is rigorously filtered and verified by our team."
    },
    {
      icon: <MapPin className="w-8 h-8 text-gold" />,
      title: "Desired Areas",
      desc: "Property hunt tailored specifically to your preferred locations."
    },
    {
      icon: <Headphones className="w-8 h-8 text-gold" />,
      title: "End-to-End Support",
      desc: "Complete assistance from search to move-in for all our customers."
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-gold" />,
      title: "Exclusively Listed",
      desc: "Our properties are unique and not available anywhere else."
    }
  ];

  return (
    <div className="bg-[#111] py-24 px-4 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')] opacity-20"></div>
      <div className="absolute -top-24 -left-24 w-64 h-64 bg-gold/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <FadeInSection>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-jakarta">
              The <span className="text-gold">Primeaze</span> Difference
            </h2>
            <div className="w-24 h-1 bg-gold mx-auto rounded-full"></div>
          </FadeInSection>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {usps.map((usp, idx) => (
            <FadeInSection key={idx} delay={idx * 100}>
              <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-gold/30 transition-all hover:-translate-y-2 group h-full">
                <div className="p-4 bg-white/5 rounded-xl inline-block mb-6 group-hover:scale-110 transition-transform">
                  {usp.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4 font-jakarta">{usp.title}</h3>
                <p className="text-gray-400 leading-relaxed text-sm">
                  {usp.desc}
                </p>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </div>
  );
}
