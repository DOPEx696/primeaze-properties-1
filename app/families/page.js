import Hero from '@/components/Hero';
import ValueBanner from '@/components/ValueBanner';
import PropertySection from '@/components/PropertySection';
import HowItWorks from '@/components/HowItWorks';
import Testimonials from '@/components/Testimonials';
import EnquiryForm from '@/components/EnquiryForm';
import { properties } from '@/data/properties';
import { testimonials } from '@/data/testimonials';

export default function FamiliesPage() {
  const familyProperties = properties.filter(p => p.type === 'families');
  const familyTestimonials = testimonials.filter(t => t.type === 'families');

  return (
    <>
      <Hero 
        tagline="A Home Your Family Deserves"
        subtext="Spacious, safe, and close to everything that matters. Discover premium family homes in Bengaluru."
        showCategoryCards={false}
      />
      <ValueBanner />
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
