const { properties } = require('./data/properties.js');
const fs = require('fs');

const formattedProperties = properties.map(p => ({
  id: p.id,
  type: p.type,
  title: p.title,
  location: p.location,
  city: p.city,
  rent: p.rent,
  deposit: p.deposit,
  sqft: p.sqft,
  bedrooms: p.bedrooms,
  bathrooms: p.bathrooms,
  furnishing: p.furnishing,
  images: p.images,
  amenities: p.amenities,
  nearby_places: p.nearbyPlaces, // Keep as object
  fomo_text: p.fomoText,
  available: p.available
}));

fs.writeFileSync('properties.json', JSON.stringify(formattedProperties, null, 2));
console.log('Successfully converted properties to JSON');
