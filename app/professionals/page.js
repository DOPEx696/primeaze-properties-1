import Hero from '@/components/Hero';
import PsychologicalValue from '@/components/PsychologicalValue';
import PropertySection from '@/components/PropertySection';
import HowItWorks from '@/components/HowItWorks';
import Testimonials from '@/components/Testimonials';
import EnquiryForm from '@/components/EnquiryForm';
import { insforge } from '@/lib/insforge';
import { testimonials } from '@/data/testimonials';

export default async function ProfessionalsPage() {
  const { data: allProperties } = await insforge.database.from('properties').select('*').match({ type: 'professionals' });
  const proProperties = allProperties || [];
  const proTestimonials = testimonials.filter(t => t.type === 'professionals');

  return (
    <>
      <Hero 
        tagline="Live Close to Work. Live Well."
        subtext="We find, you choose, move in. Modern homes near tech parks and business hubs."
        showCategoryCards={false}
      />
      <PsychologicalValue category="a Professional Home" />
      <PropertySection 
        title="Curated Homes for Professionals" 
        properties={proProperties} 
      />
      <HowItWorks />
      <Testimonials 
        testimonials={proTestimonials} 
        sectionTitle="What Professionals Say"
      />
      <EnquiryForm />
    </>
  );
}
