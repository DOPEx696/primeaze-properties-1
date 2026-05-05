'use client';
import FadeInSection from './FadeInSection';

export default function Testimonials({ testimonials, sectionTitle = "What Our Residents Say" }) {
  return (
    <section className="py-32 bg-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-rust/5 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/4"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <FadeInSection>
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-primary-dark mb-6 font-jakarta tracking-tight">{sectionTitle}</h2>
            <div className="w-24 h-1.5 bg-rust mx-auto rounded-full"></div>
          </div>
        </FadeInSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {testimonials.map((testimonial, idx) => (
            <FadeInSection key={testimonial.id} delay={idx * 150}>
              <div className="bg-white p-10 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-100 h-full flex flex-col relative group hover:shadow-[0_40px_80px_rgba(0,0,0,0.1)] transition-all duration-500 hover:-translate-y-3">
                
                {/* Quote Icon */}
                <div className="absolute top-10 right-10 text-gray-100 group-hover:text-gold/20 transition-colors duration-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/></svg>
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-8 z-10">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ${i < testimonial.stars ? 'text-gold' : 'text-gray-200'}`} viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                <p className="text-gray-500 mb-10 flex-grow leading-relaxed italic relative z-10 text-lg font-inter">
                  &quot;{testimonial.text}&quot;
                </p>

                <div className="border-t border-gray-100 pt-8 mt-auto flex items-center gap-4">
                  <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center text-gold font-bold text-xl">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-primary-dark text-lg font-jakarta">{testimonial.name}</h4>
                    <p className="text-xs text-rust font-bold uppercase tracking-widest mt-0.5">{testimonial.profession}</p>
                  </div>
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
}
