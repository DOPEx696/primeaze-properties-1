'use client';
import FadeInSection from './FadeInSection';
import { Search, Lock, ShieldCheck, Truck } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Browse Collections",
      desc: "Explore our curated properties, filtered exclusively for your lifestyle needs.",
      icon: <Search className="w-10 h-10 text-primary-dark" />
    },
    {
      number: "02",
      title: "Register to Hold",
      desc: "Found the one? Register immediately to block the property before someone else does.",
      icon: <Lock className="w-10 h-10 text-primary-dark" />
    },
    {
      number: "03",
      title: "Confirm Service",
      desc: "Pay a small advance for visit scheduling, basic insights, and dedicated executives.",
      icon: <ShieldCheck className="w-10 h-10 text-primary-dark" />
    },
    {
      number: "04",
      title: "Seamless Move-In",
      desc: "We handle the agreements and verifications. Just bring your bags and move in.",
      icon: <Truck className="w-10 h-10 text-primary-dark" />
    }
  ];

  return (
    <section className="py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <FadeInSection>
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-primary-dark mb-6 font-jakarta tracking-tight">How It Works</h2>
            <div className="w-24 h-1.5 bg-gold mx-auto mb-8 rounded-full"></div>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg font-inter">
              A streamlined, transparent process designed to get you into your dream home faster.
            </p>
          </div>
        </FadeInSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
          {/* Connecting line for desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-100 -z-10 -translate-y-16"></div>
          
          {steps.map((step, index) => (
            <FadeInSection key={index} delay={index * 200}>
              <div className="relative flex flex-col items-center text-center group">
                <div className="w-28 h-28 bg-light-bg rounded-3xl flex items-center justify-center mb-8 shadow-[0_20px_40px_rgba(0,0,0,0.05)] border-4 border-white relative z-10 transition-transform duration-500 group-hover:scale-110">
                  {step.icon}
                  <div className="absolute -top-3 -right-3 w-10 h-10 bg-gold rounded-xl flex items-center justify-center text-sm font-bold text-primary-dark shadow-lg">
                    {step.number}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-primary-dark mb-4 font-jakarta">{step.title}</h3>
                <p className="text-gray-500 leading-relaxed font-inter">{step.desc}</p>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
}
