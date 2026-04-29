import Hero from '@/components/Hero';
import ValueBanner from '@/components/ValueBanner';
import PropertySection from '@/components/PropertySection';
import HowItWorks from '@/components/HowItWorks';
import Testimonials from '@/components/Testimonials';
import EnquiryForm from '@/components/EnquiryForm';
import { properties } from '@/data/properties';
import { testimonials } from '@/data/testimonials';

export default function Home() {
  // Get 3 featured properties (one from each category)
  const featuredProperties = [
    properties.find(p => p.type === 'families'),
    properties.find(p => p.type === 'professionals'),
    properties.find(p => p.type === 'corporate')
  ].filter(Boolean);

  // Get a mix of testimonials
  const featuredTestimonials = [
    testimonials.find(t => t.type === 'families'),
    testimonials.find(t => t.type === 'professionals'),
    testimonials.find(t => t.type === 'corporate')
  ].filter(Boolean);

  return (
    <>
      <Hero 
        tagline="Your Home in Bengaluru, Curated by Experts"
        subtext="Limited properties. Unlimited comfort. We hand-pick the city's finest rentals."
        showCategoryCards={true}
      />
      <ValueBanner />
      <PropertySection 
        title="Featured Exclusives" 
        properties={featuredProperties} 
      />
      <HowItWorks />
      <Testimonials 
        testimonials={featuredTestimonials} 
        sectionTitle="What Our Residents Say"
      />
      <EnquiryForm />
    </>
  );
}
