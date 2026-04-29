import FadeInSection from './FadeInSection';

export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Browse Collections",
      desc: "Explore our curated properties, filtered exclusively for your lifestyle needs.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      )
    },
    {
      number: "02",
      title: "Register to Hold",
      desc: "Found the one? Register immediately to block the property before someone else does.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      )
    },
    {
      number: "03",
      title: "Seamless Move-In",
      desc: "We handle the agreements, verifications, and handover. Just bring your bags.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <FadeInSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary-dark mb-4">How It Works</h2>
            <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              A streamlined, transparent process designed to get you into your dream home faster.
            </p>
          </div>
        </FadeInSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 -z-10 -translate-y-12"></div>
          
          {steps.map((step, index) => (
            <FadeInSection key={index} delay={index * 200}>
              <div className="relative flex flex-col items-center text-center bg-white">
                <div className="w-24 h-24 bg-light-bg rounded-full flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(0,0,0,0.05)] border-4 border-white relative z-10">
                  {step.icon}
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-gold rounded-full flex items-center justify-center text-xs font-bold text-primary-dark shadow">
                    {step.number}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-primary-dark mb-4">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.desc}</p>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
}
