const { properties } = require('./data/properties.js');
const fs = require('fs');

function escapeString(str) {
  if (typeof str !== 'string') return str;
  return str.replace(/'/g, "''");
}

function formatArray(arr) {
  if (!Array.isArray(arr)) return "'{}'";
  return "ARRAY[" + arr.map(item => `'${escapeString(item)}'`).join(',') + "]";
}

const values = properties.map(p => {
  return `(
    '${escapeString(p.id)}',
    '${escapeString(p.type)}',
    '${escapeString(p.title)}',
    '${escapeString(p.location)}',
    '${escapeString(p.city)}',
    ${p.rent},
    ${p.deposit},
    ${p.sqft},
    ${p.bedrooms},
    ${p.bathrooms},
    '${escapeString(p.furnishing)}',
    ${formatArray(p.images)},
    ${formatArray(p.amenities)},
    '${escapeString(JSON.stringify(p.nearbyPlaces))}'::jsonb,
    '${escapeString(p.fomoText)}',
    ${p.available}
  )`;
}).join(',\n');

const sql = `INSERT INTO properties (id, type, title, location, city, rent, deposit, sqft, bedrooms, bathrooms, furnishing, images, amenities, nearby_places, fomo_text, available)
VALUES
${values}
ON CONFLICT (id) DO UPDATE SET
  type = EXCLUDED.type,
  title = EXCLUDED.title,
  location = EXCLUDED.location,
  city = EXCLUDED.city,
  rent = EXCLUDED.rent,
  deposit = EXCLUDED.deposit,
  sqft = EXCLUDED.sqft,
  bedrooms = EXCLUDED.bedrooms,
  bathrooms = EXCLUDED.bathrooms,
  furnishing = EXCLUDED.furnishing,
  images = EXCLUDED.images,
  amenities = EXCLUDED.amenities,
  nearby_places = EXCLUDED.nearby_places,
  fomo_text = EXCLUDED.fomo_text,
  available = EXCLUDED.available;`;

fs.writeFileSync('seed_properties.sql', sql);
console.log('Successfully generated seed_properties.sql');
