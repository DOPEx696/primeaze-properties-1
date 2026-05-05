import Hero from '@/components/Hero';
import BrandIdentity from '@/components/BrandIdentity';
import ValueBanner from '@/components/ValueBanner';
import PropertySection from '@/components/PropertySection';
import HowItWorks from '@/components/HowItWorks';
import Testimonials from '@/components/Testimonials';
import EnquiryForm from '@/components/EnquiryForm';
import { insforge } from '@/lib/insforge';
import { testimonials } from '@/data/testimonials';

export default async function Home() {
  // Fetch properties from InsForge
  const { data: allProperties } = await insforge.database.from('properties').select('*');
  const properties = allProperties || [];

  // Get 3 featured properties
  const featuredProperties = properties.slice(0, 3);

  // Get a mix of testimonials
  const featuredTestimonials = testimonials.slice(0, 3);

  return (
    <>
      <Hero 
        tagline="We find, you choose, move in."
        subtext="The ideal solution for those who demand a better home and refined lifestyle. No noise, no pressure—just clarity."
        showCategoryCards={true}
      />
      <BrandIdentity />
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
