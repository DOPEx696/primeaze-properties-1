import FadeInSection from './FadeInSection';

export default function Testimonials({ testimonials, sectionTitle = "What Our Residents Say" }) {
  return (
    <section className="py-24 bg-light-bg relative">
      {/* Decorative background circle */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <FadeInSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary-dark mb-4 font-montserrat">{sectionTitle}</h2>
            <div className="w-24 h-1 bg-rust mx-auto"></div>
          </div>
        </FadeInSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <FadeInSection key={testimonial.id} delay={idx * 150}>
              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 h-full flex flex-col relative group hover:-translate-y-2 transition-transform duration-300">
                
                {/* Quote Icon */}
                <div className="absolute top-6 right-6 text-gray-200 group-hover:text-gold/20 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/></svg>
                </div>

                {/* Stars */}
                <div className="flex mb-6 z-10">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ${i < testimonial.stars ? 'text-gold' : 'text-gray-300'}`} viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                <p className="text-gray-600 mb-8 flex-grow leading-relaxed italic relative z-10 text-lg">
                  &quot;{testimonial.text}&quot;
                </p>

                <div className="border-t border-gray-100 pt-6 mt-auto">
                  <h4 className="font-bold text-primary-dark">{testimonial.name}</h4>
                  <p className="text-sm text-rust font-medium mt-1">{testimonial.profession}</p>
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
}
