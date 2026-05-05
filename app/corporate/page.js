import Hero from '@/components/Hero';
import PsychologicalValue from '@/components/PsychologicalValue';
import PropertySection from '@/components/PropertySection';
import HowItWorks from '@/components/HowItWorks';
import Testimonials from '@/components/Testimonials';
import EnquiryForm from '@/components/EnquiryForm';
import { insforge } from '@/lib/insforge';
import { testimonials } from '@/data/testimonials';

export default async function CorporatePage() {
  const { data: allProperties } = await insforge.database.from('properties').select('*').match({ type: 'corporate' });
  const corpProperties = allProperties || [];
  const corpTestimonials = testimonials.filter(t => t.type === 'corporate');

  return (
    <>
      <Hero 
        tagline="Premium Stays for Your Team"
        subtext="We find, you choose, move in. Fully managed corporate housing — hassle-free and compliant."
        showCategoryCards={false}
      />
      <PsychologicalValue category="a Corporate Stay" />
      <PropertySection 
        title="Exclusive Corporate Leases" 
        properties={corpProperties} 
      />
      <HowItWorks />
      <Testimonials 
        testimonials={corpTestimonials} 
        sectionTitle="Trusted by Enterprises"
      />
      <EnquiryForm />
    </>
  );
}
