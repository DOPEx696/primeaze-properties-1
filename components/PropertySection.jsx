import PropertyCard from './PropertyCard';
import FadeInSection from './FadeInSection';

export default function PropertySection({ properties, title = "Curated Properties" }) {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <FadeInSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary-dark mb-4 font-montserrat">{title}</h2>
            <div className="w-24 h-1 bg-gold mx-auto"></div>
          </div>
        </FadeInSection>

        <div className="flex flex-col gap-16">
          {properties.map((property, index) => (
            <PropertyCard key={property.id} property={property} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
