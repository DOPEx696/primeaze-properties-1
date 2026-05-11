'use client';

import { useState, useEffect, use } from 'react';
import { insforge } from '@/lib/insforge';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function EditPropertyPage({ params }) {
  const { id } = params;
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [uploading, setUploading] = useState(false);
  const router = useRouter();

  const [formData, setFormData] = useState({
    id: '',
    type: 'families',
    title: '',
    location: '',
    city: 'Bengaluru',
    rent: '',
    deposit: '',
    sqft: '',
    bedrooms: '',
    bathrooms: '',
    furnishing: 'Semi-Furnished',
    images: [],
    amenities: [],
    nearby_places: [],
    fomo_text: 'Exclusively listed — Not available anywhere else',
    available: true
  });

  const [amenityInput, setAmenityInput] = useState('');
  const [nearbyInput, setNearbyInput] = useState({ name: '', distance: '' });

  useEffect(() => {
    const fetchData = async () => {
      const { data: userData } = await insforge.auth.getCurrentUser();
      if (!userData?.user) {
        router.push('/admin/login');
        return;
      }

      const { data, error } = await insforge.database.from('properties').select('*').match({ id }).single();
      if (data) {
        setFormData({
          ...data,
          nearby_places: Array.isArray(data.nearby_places) ? data.nearby_places : []
        });
      } else {
        alert('Property not found');
        router.push('/admin/dashboard');
      }
      setLoading(false);
    };
    fetchData();
  }, [id, router]);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleImageUpload = async (e) => {
    const files = Array.from(e.target.files);
    if (files.length === 0) return;

    setUploading(true);
    const newImages = [...formData.images];

    for (const file of files) {
      const uploadData = new FormData();
      uploadData.append('file', file);

      try {
        const res = await fetch('/api/admin/upload', {
          method: 'POST',
          body: uploadData,
        });
        const data = await res.json();
        if (data.url) {
          newImages.push(data.url);
        }
      } catch (error) {
        console.error('Upload failed:', error);
      }
    }

    setFormData({ ...formData, images: newImages });
    setUploading(false);
  };

  const addAmenity = () => {
    if (amenityInput.trim()) {
      setFormData({
        ...formData,
        amenities: [...formData.amenities, amenityInput.trim()]
      });
      setAmenityInput('');
    }
  };

  const addNearby = () => {
    if (nearbyInput.name.trim() && nearbyInput.distance.trim()) {
      setFormData({
        ...formData,
        nearby_places: [...formData.nearby_places, nearbyInput]
      });
      setNearbyInput({ name: '', distance: '' });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    const { id: _id, ...updateData } = formData;

    const { error } = await insforge.database.from('properties').update({
      ...updateData,
      rent: parseInt(formData.rent),
      deposit: parseInt(formData.deposit),
      sqft: parseInt(formData.sqft),
      bedrooms: parseInt(formData.bedrooms),
      bathrooms: parseInt(formData.bathrooms),
      nearby_places: formData.nearby_places
    }).match({ id });

    if (error) {
      alert('Error updating property: ' + error.message);
      setSubmitting(false);
    } else {
      router.push('/admin/dashboard');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#c2a878]"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white p-10">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center mb-10">
          <button
            onClick={() => router.back()}
            className="mr-6 p-2 bg-white/5 hover:bg-white/10 rounded-full transition-all"
          >
            ←
          </button>
          <h1 className="text-3xl font-bold">Edit Property: {formData.title}</h1>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8 bg-[#161616] border border-white/5 rounded-3xl p-10 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Basic Info */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-[#c2a878] border-b border-white/5 pb-2">Basic Details</h3>
              
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Category</label>
                <select
                  name="type"
                  value={formData.type}
                  onChange={handleInputChange}
                  className="w-full bg-[#1e1e1e] border border-white/10 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#c2a878]/50 outline-none transition-all"
                >
                  <option value="families">Families</option>
                  <option value="professionals">Professionals</option>
                  <option value="commercial">Commercial Spaces</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Property Title</label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  className="w-full bg-[#1e1e1e] border border-white/10 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#c2a878]/50 outline-none transition-all"
                  placeholder="e.g. Prestige Monte Carlo"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Location</label>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    className="w-full bg-[#1e1e1e] border border-white/10 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#c2a878]/50 outline-none transition-all"
                    placeholder="e.g. Yelahanka"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">City</label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    className="w-full bg-[#1e1e1e] border border-white/10 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#c2a878]/50 outline-none transition-all"
                    placeholder="Bengaluru"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Pricing & Size */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-[#c2a878] border-b border-white/5 pb-2">Pricing & Specs</h3>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Rent (₹)</label>
                  <input
                    type="number"
                    name="rent"
                    value={formData.rent}
                    onChange={handleInputChange}
                    className="w-full bg-[#1e1e1e] border border-white/10 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#c2a878]/50 outline-none transition-all"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Deposit (₹)</label>
                  <input
                    type="number"
                    name="deposit"
                    value={formData.deposit}
                    onChange={handleInputChange}
                    className="w-full bg-[#1e1e1e] border border-white/10 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#c2a878]/50 outline-none transition-all"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Sq.ft</label>
                  <input
                    type="number"
                    name="sqft"
                    value={formData.sqft}
                    onChange={handleInputChange}
                    className="w-full bg-[#1e1e1e] border border-white/10 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#c2a878]/50 outline-none transition-all"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Beds</label>
                  <input
                    type="number"
                    name="bedrooms"
                    value={formData.bedrooms}
                    onChange={handleInputChange}
                    className="w-full bg-[#1e1e1e] border border-white/10 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#c2a878]/50 outline-none transition-all"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Baths</label>
                  <input
                    type="number"
                    name="bathrooms"
                    value={formData.bathrooms}
                    onChange={handleInputChange}
                    className="w-full bg-[#1e1e1e] border border-white/10 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#c2a878]/50 outline-none transition-all"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Furnishing</label>
                <select
                  name="furnishing"
                  value={formData.furnishing}
                  onChange={handleInputChange}
                  className="w-full bg-[#1e1e1e] border border-white/10 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#c2a878]/50 outline-none transition-all"
                >
                  <option value="Semi-Furnished">Semi-Furnished</option>
                  <option value="Fully-Furnished">Fully-Furnished</option>
                  <option value="Unfurnished">Unfurnished</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2 flex items-center">
                  <input
                    type="checkbox"
                    name="available"
                    checked={formData.available}
                    onChange={handleInputChange}
                    className="mr-2 w-4 h-4 rounded bg-[#1e1e1e] border-white/10 text-[#c2a878]"
                  />
                  Property is Available
                </label>
              </div>
            </div>
          </div>

          {/* Images */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-[#c2a878] border-b border-white/5 pb-2">Images</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {formData.images.map((img, idx) => (
                <div key={idx} className="relative aspect-video rounded-xl overflow-hidden border border-white/10">
                  <Image 
                    src={img} 
                    alt="" 
                    fill 
                    className="object-cover w-full h-full" 
                  />
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, images: formData.images.filter((_, i) => i !== idx) })}
                    className="absolute top-2 right-2 bg-red-500 p-1 rounded-full text-xs z-10"
                  >
                    ✕
                  </button>
                </div>
              ))}
              <label className="aspect-video rounded-xl border-2 border-dashed border-white/10 flex flex-col items-center justify-center cursor-pointer hover:border-[#c2a878]/50 transition-all bg-white/5">
                <span className="text-2xl mb-1">+</span>
                <span className="text-xs text-gray-400">{uploading ? 'Uploading...' : 'Upload Image'}</span>
                <input type="file" multiple className="hidden" onChange={handleImageUpload} disabled={uploading} />
              </label>
            </div>
          </div>

          {/* Amenities & Nearby */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-lg font-bold">Amenities</h3>
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={amenityInput}
                  onChange={(e) => setAmenityInput(e.target.value)}
                  className="flex-1 bg-[#1e1e1e] border border-white/10 rounded-xl px-4 py-2 outline-none"
                  placeholder="e.g. Swimming Pool"
                />
                <button type="button" onClick={addAmenity} className="px-4 py-2 bg-white/10 rounded-xl hover:bg-white/20">Add</button>
              </div>
              <div className="flex flex-wrap gap-2">
                {formData.amenities.map((a, i) => (
                  <span key={i} className="px-3 py-1 bg-white/5 rounded-full text-xs flex items-center">
                    {a} <button type="button" onClick={() => setFormData({ ...formData, amenities: formData.amenities.filter((_, idx) => idx !== i) })} className="ml-2 text-gray-500 hover:text-white">✕</button>
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-bold">Nearby Places</h3>
              <div className="grid grid-cols-2 gap-2">
                <input
                  type="text"
                  value={nearbyInput.name}
                  onChange={(e) => setNearbyInput({ ...nearbyInput, name: e.target.value })}
                  className="bg-[#1e1e1e] border border-white/10 rounded-xl px-4 py-2 outline-none"
                  placeholder="Name (e.g. Mall)"
                />
                <input
                  type="text"
                  value={nearbyInput.distance}
                  onChange={(e) => setNearbyInput({ ...nearbyInput, distance: e.target.value })}
                  className="bg-[#1e1e1e] border border-white/10 rounded-xl px-4 py-2 outline-none"
                  placeholder="Dist (e.g. 2 km)"
                />
              </div>
              <button type="button" onClick={addNearby} className="w-full py-2 bg-white/10 rounded-xl hover:bg-white/20">Add Place</button>
              <div className="space-y-2">
                {formData.nearby_places.map((n, i) => (
                  <div key={i} className="flex justify-between items-center bg-white/5 px-4 py-2 rounded-xl text-sm">
                    <span>{n.name} ({n.distance})</span>
                    <button type="button" onClick={() => setFormData({ ...formData, nearby_places: formData.nearby_places.filter((_, idx) => idx !== i) })} className="text-gray-500 hover:text-white">✕</button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="pt-6">
            <button
              type="submit"
              disabled={submitting || uploading}
              className="w-full bg-[#c2a878] text-[#0a0a0a] font-bold py-4 rounded-2xl hover:bg-[#d4bc8e] transition-all transform active:scale-[0.98] disabled:opacity-50"
            >
              {submitting ? 'Updating Property...' : 'Update Property'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
