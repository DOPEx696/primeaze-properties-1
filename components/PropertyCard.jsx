'use client';
import { useState } from 'react';
import ImageLightbox from './ImageLightbox';
import FadeInSection from './FadeInSection';

export default function PropertyCard({ property, index }) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIdx, setCurrentImageIdx] = useState(0);

  const isEven = index % 2 === 0;

  const openLightbox = (idx) => {
    setCurrentImageIdx(idx);
    setLightboxOpen(true);
  };

  const formattedRent = new Intl.NumberFormat('en-IN').format(property.rent);
  const formattedDeposit = property.deposit > 99999 
    ? `${(property.deposit / 100000).toFixed(1)} Lakhs` 
    : new Intl.NumberFormat('en-IN').format(property.deposit);

  return (
    <>
      <FadeInSection delay={100}>
        <div className={`flex flex-col lg:flex-row gap-8 bg-white rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.06)] overflow-hidden border border-gray-100 ${isEven ? '' : 'lg:flex-row-reverse'}`}>
          
          {/* Image Gallery Side */}
          <div className="w-full lg:w-1/2 relative group">
            {/* FOMO Badge */}
            <div className="absolute top-4 left-4 z-10 bg-rust text-white text-xs font-bold px-3 py-1.5 rounded shadow-lg uppercase tracking-wider flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
              {property.fomo_text || property.fomoText}
            </div>

            {/* Main Image */}
            <div 
              className="h-64 lg:h-96 w-full cursor-pointer relative overflow-hidden bg-gray-200"
              onClick={() => openLightbox(0)}
            >
              <img 
                src={property.images[0]} 
                alt={property.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/800x600?text=Property+Image';
                }}
              />
              <div className="absolute inset-0 bg-primary-dark/0 group-hover:bg-primary-dark/20 transition-colors flex items-center justify-center">
                <span className="opacity-0 group-hover:opacity-100 bg-white/90 text-primary-dark px-4 py-2 rounded font-bold shadow-lg transition-opacity flex items-center gap-2 backdrop-blur-sm">
                  View Gallery
                </span>
              </div>
            </div>

            {/* Thumbnail Navigation */}
            <div className="flex gap-2 p-2 bg-gray-50 overflow-x-auto no-scrollbar">
              {property.images.slice(1, 4).map((img, idx) => (
                <div 
                  key={idx} 
                  className="w-1/3 h-20 relative cursor-pointer opacity-80 hover:opacity-100 transition rounded overflow-hidden"
                  onClick={() => openLightbox(idx + 1)}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" onError={(e) => { e.target.src = 'https://via.placeholder.com/300x200?text=Thumb'; }} />
                </div>
              ))}
              {property.images.length > 4 && (
                <div 
                  className="w-1/3 h-20 relative cursor-pointer bg-gray-800 rounded overflow-hidden flex items-center justify-center text-white font-bold"
                  onClick={() => openLightbox(4)}
                >
                  <img src={property.images[4]} alt="" className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-overlay" />
                  <span className="relative z-10">+{property.images.length - 4} More</span>
                </div>
              )}
            </div>
          </div>

          {/* Details Side */}
          <div className="w-full lg:w-1/2 p-6 md:p-8 flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-primary-dark font-jakarta tracking-tight">{property.title}</h3>
                  <p className="text-gray-500 font-medium flex items-center mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {property.location}, {property.city}
                  </p>
                </div>
              </div>

              {/* Price & Specs Boxes */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 my-6">
                <div className="bg-light-bg p-3 rounded-lg border border-gray-200">
                  <p className="text-xs text-gray-500 uppercase tracking-wide font-semibold">Monthly Rent</p>
                  <p className="text-lg font-bold text-primary-dark">₹{formattedRent}</p>
                </div>
                <div className="bg-light-bg p-3 rounded-lg border border-gray-200">
                  <p className="text-xs text-gray-500 uppercase tracking-wide font-semibold">Deposit</p>
                  <p className="text-lg font-bold text-primary-dark">₹{formattedDeposit}</p>
                </div>
                <div className="bg-light-bg p-3 rounded-lg border border-gray-200">
                  <p className="text-xs text-gray-500 uppercase tracking-wide font-semibold">Area</p>
                  <p className="text-lg font-bold text-primary-dark">{property.sqft} sqft</p>
                </div>
                <div className="bg-light-bg p-3 rounded-lg border border-gray-200">
                  <p className="text-xs text-gray-500 uppercase tracking-wide font-semibold">Type</p>
                  <p className="text-lg font-bold text-primary-dark">{property.bedrooms}BHK</p>
                </div>
              </div>

              {/* Features & Amenities */}
              <div className="mb-6">
                <p className="text-sm text-gray-800 mb-3"><span className="font-semibold text-primary-dark">Furnishing:</span> {property.furnishing} • {property.bathrooms} Baths</p>
                <div className="flex flex-wrap gap-2">
                  {property.amenities.map((amenity, idx) => (
                    <span key={idx} className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full border border-gray-200">
                      {amenity}
                    </span>
                  ))}
                </div>
              </div>

              {/* Nearby Places */}
              <div className="mb-8 p-4 bg-primary-dark/5 rounded-lg">
                <h4 className="text-sm font-semibold text-primary-dark mb-2 uppercase tracking-wide border-b border-gray-200 pb-1 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-rust" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Proximity Points
                </h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-gray-600">
                  {(property.nearby_places || property.nearbyPlaces || []).map((place, idx) => (
                    <li key={idx} className="flex justify-between items-center border-b border-gray-100 pb-1 last:border-0 last:pb-0">
                      <span className="truncate pr-2">{place.name}</span>
                      <span className="font-semibold text-primary-dark whitespace-nowrap">{place.distance}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex gap-4 mt-auto">
              <a 
                href="https://v757kd6yq4.zite.so/" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-gold hover:bg-gold/90 text-primary-dark font-bold py-3 px-4 rounded text-center transition-all shadow-md group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500"></div>
                Register to Hold
              </a>
              <button 
                onClick={(e) => {
                  e.preventDefault();
                  const el = document.getElementById('enquire');
                  if(el) {
                    const yOffset = -80; 
                    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
                    window.scrollTo({ top: y, behavior: 'smooth' });
                  }
                }}
                className="flex-1 border-2 border-rust text-rust hover:bg-rust hover:text-white font-bold py-3 px-4 rounded transition-colors"
                >
                Enquire
              </button>
            </div>
          </div>
        </div>
      </FadeInSection>

      <ImageLightbox 
        images={property.images}
        isOpen={lightboxOpen}
        currentIndex={currentImageIdx}
        onClose={() => setLightboxOpen(false)}
        onNext={() => setCurrentImageIdx((prev) => (prev + 1) % property.images.length)}
        onPrev={() => setCurrentImageIdx((prev) => (prev - 1 + property.images.length) % property.images.length)}
      />
    </>
  );
}
