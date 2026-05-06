import Hero from '@/components/Hero';
import PsychologicalValue from '@/components/PsychologicalValue';
import PropertySection from '@/components/PropertySection';
import HowItWorks from '@/components/HowItWorks';
import Testimonials from '@/components/Testimonials';
import EnquiryForm from '@/components/EnquiryForm';
import { insforge } from '@/lib/insforge';
import { testimonials } from '@/data/testimonials';

export default async function FamiliesPage() {
  const { data: allProperties } = await insforge.database.from('properties').select('*').match({ type: 'families' });
  const familyProperties = allProperties || [];
  const familyTestimonials = testimonials.filter(t => t.type === 'families');

  return (
    <>
      <Hero 
        tagline="A Home Your Family Deserves"
        subtext="We find, you choose, move in. Spacious, safe, and close to everything that matters."
        showCategoryCards={false}
      />
      <PsychologicalValue category="a Family Home" type="families" />
      <PropertySection 
        title="Curated Homes for Families" 
        properties={familyProperties} 
      />
      <HowItWorks />
      <Testimonials 
        testimonials={familyTestimonials} 
        sectionTitle="Happy Families"
      />
      <EnquiryForm />
    </>
  );
}
