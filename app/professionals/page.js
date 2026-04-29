import Hero from '@/components/Hero';
import ValueBanner from '@/components/ValueBanner';
import PropertySection from '@/components/PropertySection';
import HowItWorks from '@/components/HowItWorks';
import Testimonials from '@/components/Testimonials';
import EnquiryForm from '@/components/EnquiryForm';
import { properties } from '@/data/properties';
import { testimonials } from '@/data/testimonials';

export default function ProfessionalsPage() {
  const proProperties = properties.filter(p => p.type === 'professionals');
  const proTestimonials = testimonials.filter(t => t.type === 'professionals');

  return (
    <>
      <Hero 
        tagline="Live Close to Work. Live Well."
        subtext="Modern homes near tech parks and business hubs. Designed for the modern professional."
        showCategoryCards={false}
      />
      <ValueBanner />
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
