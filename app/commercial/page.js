import Hero from '@/components/Hero';
import PsychologicalValue from '@/components/PsychologicalValue';
import PropertySection from '@/components/PropertySection';
import HowItWorks from '@/components/HowItWorks';
import Testimonials from '@/components/Testimonials';
import EnquiryForm from '@/components/EnquiryForm';
import { insforge } from '@/lib/insforge';
import { testimonials } from '@/data/testimonials';

export default async function CommercialPage() {
  const { data: allProperties } = await insforge.database.from('properties').select('*').match({ type: 'commercial' });
  const commProperties = allProperties || [];
  const commTestimonials = testimonials.filter(t => t.type === 'commercial');

  return (
    <>
      <Hero 
        tagline="Elevate Your Business Presence"
        subtext="We find, you choose, move in. Premium commercial spaces and housing — hassle-free, compliant, and ready for growth."
        showCategoryCards={false}
      />
      <PsychologicalValue category="a Commercial Space" type="commercial" />
      <PropertySection 
        title="Exclusive Commercial Spaces" 
        properties={commProperties} 
      />
      <HowItWorks />
      <Testimonials 
        testimonials={commTestimonials} 
        sectionTitle="What Businesses Say"
      />
      <EnquiryForm />
    </>
  );
}
