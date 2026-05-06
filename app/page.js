import Hero from '@/components/Hero';
import BrandIdentity from '@/components/BrandIdentity';
import ValueBanner from '@/components/ValueBanner';
import PropertySection from '@/components/PropertySection';
import HowItWorks from '@/components/HowItWorks';
import Testimonials from '@/components/Testimonials';
import EnquiryForm from '@/components/EnquiryForm';
import FadeInSection from '@/components/FadeInSection';
import { Sparkles, Compass, ShieldCheck } from 'lucide-react';
import { insforge } from '@/lib/insforge';
import { testimonials } from '@/data/testimonials';

export default async function Home() {
  // Fetch 3 featured properties from InsForge
  const { data: featuredProperties } = await insforge.database
    .from('properties')
    .select('*')
    .limit(3);
  
  const properties = featuredProperties || [];

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

      {/* About Section moved from About page */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <FadeInSection>
              <h2 className="text-4xl md:text-6xl font-bold font-jakarta text-primary-dark leading-tight mb-8">
                Renting doesn&apos;t have to <br/><span className="text-rust italic text-3xl md:text-5xl">feel chaotic.</span>
              </h2>
              <p className="text-gray-600 text-xl leading-relaxed mb-8 font-inter">
                Most people don&apos;t struggle to find homes. They struggle with everything around it—the endless calls, the unverified listings, and the lack of guidance.
              </p>
              <p className="text-gray-600 text-xl leading-relaxed mb-10 font-inter">
                That&apos;s why we built <span className="text-primary-dark font-bold">PrimeAze</span>—as a solution for those who want to move to a better home and lifestyle without the unnecessary noise.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <div className="flex items-center gap-4 text-primary-dark font-bold font-jakarta">
                  <ShieldCheck className="text-gold w-6 h-6" /> Verified Properties
                </div>
                <div className="flex items-center gap-4 text-primary-dark font-bold font-jakarta">
                  <Compass className="text-gold w-6 h-6" /> End-to-End Guidance
                </div>
              </div>
            </FadeInSection>

            <FadeInSection delay={200}>
              <div className="relative">
                <div className="bg-light-bg rounded-[3rem] p-12 relative z-10 border border-gray-100 shadow-xl">
                  <Sparkles className="text-gold w-12 h-12 mb-8" />
                  <blockquote className="text-2xl font-jakarta italic text-primary-dark leading-relaxed mb-8">
                    &quot;We filter, verify, and guide you every step of the way, so you only see homes that truly fit your needs.&quot;
                  </blockquote>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-1.5 bg-gold rounded-full"></div>
                    <span className="font-bold text-gray-500 uppercase tracking-widest text-sm">The Primeaze Way</span>
                  </div>
                </div>
                {/* Decorative blobs */}
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-gold/10 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-rust/10 rounded-full blur-3xl"></div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

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
