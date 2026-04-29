import Hero from '@/components/Hero';
import ValueBanner from '@/components/ValueBanner';
import PropertySection from '@/components/PropertySection';
import HowItWorks from '@/components/HowItWorks';
import Testimonials from '@/components/Testimonials';
import EnquiryForm from '@/components/EnquiryForm';
import { properties } from '@/data/properties';
import { testimonials } from '@/data/testimonials';

export default function CorporatePage() {
  const corpProperties = properties.filter(p => p.type === 'corporate');
  const corpTestimonials = testimonials.filter(t => t.type === 'corporate');

  return (
    <>
      <Hero 
        tagline="Premium Stays for Your Team"
        subtext="Fully managed corporate housing — hassle-free, compliant, and exclusively curated."
        showCategoryCards={false}
      />
      <ValueBanner />
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
