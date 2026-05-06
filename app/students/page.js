'use client';
import Hero from '@/components/Hero';
import PsychologicalValue from '@/components/PsychologicalValue';
import HowItWorks from '@/components/HowItWorks';
import Testimonials from '@/components/Testimonials';
import EnquiryForm from '@/components/EnquiryForm';
import { insforge } from '@/lib/insforge';
import { testimonials } from '@/data/testimonials';
import FadeInSection from '@/components/FadeInSection';

export default async function StudentsPage() {
  const studentTestimonials = testimonials.filter(t => t.type === 'students'); 

  return (
    <>
      <Hero 
        tagline="Comfortable Stays for Students"
        subtext="We find, you choose, move in. Budget-friendly, secure, and close to your campus."
        showCategoryCards={false}
      />
      <PsychologicalValue category="a Student Stay" type="students" />
      
      <section className="py-24 bg-white border-y border-gray-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <FadeInSection>
            <h2 className="text-3xl font-bold font-jakarta text-primary-dark mb-6">Looking for a Campus Hub?</h2>
            <p className="text-gray-500 text-lg font-inter leading-relaxed mb-10">
              While we currently don&apos;t have active student house listings displayed, <span className="text-primary-dark font-bold">we provide professional property hunting services</span> for students. Our experts will find, verify, and secure the perfect stay near your university based on your specific requirements.
            </p>
            <button 
              onClick={() => document.getElementById('enquire')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-rust text-white px-10 py-4 rounded-full font-bold shadow-xl shadow-rust/20 hover:scale-105 transition-all"
            >
              Request Student Property Hunt
            </button>
          </FadeInSection>
        </div>
      </section>
      <HowItWorks />
      <Testimonials 
        testimonials={studentTestimonials} 
        sectionTitle="Student Reviews"
      />
      <EnquiryForm />
    </>
  );
}
