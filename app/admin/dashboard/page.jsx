'use client';

import { useState, useEffect } from 'react';
import { insforge } from '@/lib/insforge';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function AdminDashboard() {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const checkUser = async () => {
      const { data } = await insforge.auth.getCurrentUser();
      if (!data?.user) {
        router.push('/admin/login');
      } else {
        setUser(data.user);
        fetchProperties();
      }
    };
    checkUser();
  }, [router]);

  const fetchProperties = async () => {
    setLoading(true);
    const { data, error } = await insforge.database.from('properties').select('*').order('created_at', { ascending: false });
    if (data) {
      setProperties(data);
    }
    setLoading(false);
  };

  const handleDelete = async (id) => {
    if (confirm('Are you sure you want to delete this property?')) {
      const { error } = await insforge.database.from('properties').delete().match({ id });
      if (!error) {
        setProperties(properties.filter(p => p.id !== id));
      } else {
        alert('Error deleting property: ' + error.message);
      }
    }
  };

  const handleSignOut = async () => {
    await insforge.auth.signOut();
    router.push('/admin/login');
  };

  if (loading && !properties.length) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#c2a878]"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Sidebar */}
      <div className="fixed left-0 top-0 h-full w-64 bg-[#161616] border-r border-white/5 p-6 flex flex-col">
        <div className="mb-12">
          <h1 className="text-2xl font-bold tracking-tight text-[#c2a878]">PRIMEAZE</h1>
          <p className="text-xs text-gray-500 uppercase tracking-widest mt-1">Admin Dashboard</p>
        </div>

        <nav className="flex-1 space-y-2">
          <a href="#" className="flex items-center px-4 py-3 bg-[#c2a878]/10 text-[#c2a878] rounded-xl font-medium transition-all">
            <span className="mr-3">🏠</span> Properties
          </a>
          <a href="#" className="flex items-center px-4 py-3 text-gray-400 hover:bg-white/5 rounded-xl transition-all">
            <span className="mr-3">📧</span> Enquiries
          </a>
          <a href="#" className="flex items-center px-4 py-3 text-gray-400 hover:bg-white/5 rounded-xl transition-all">
            <span className="mr-3">⚙️</span> Settings
          </a>
        </nav>

        <div className="mt-auto pt-6 border-t border-white/5">
          <div className="flex items-center mb-6 px-2">
            <div className="w-10 h-10 rounded-full bg-[#c2a878] flex items-center justify-center text-[#0a0a0a] font-bold mr-3">
              {user?.email?.[0].toUpperCase()}
            </div>
            <div className="overflow-hidden">
              <p className="text-sm font-medium truncate">{user?.email}</p>
              <p className="text-xs text-gray-500">Administrator</p>
            </div>
          </div>
          <button
            onClick={handleSignOut}
            className="w-full flex items-center px-4 py-3 text-red-400 hover:bg-red-500/5 rounded-xl transition-all"
          >
            <span className="mr-3">🚪</span> Sign Out
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="ml-64 p-10">
        <div className="flex justify-between items-center mb-10">
          <div>
            <h2 className="text-3xl font-bold">Property Listings</h2>
            <p className="text-gray-400 mt-1">Manage all rental properties in your portfolio</p>
          </div>
          <button
            onClick={() => router.push('/admin/dashboard/add')}
            className="bg-[#c2a878] text-[#0a0a0a] font-bold px-6 py-3 rounded-xl hover:bg-[#d4bc8e] transition-all flex items-center"
          >
            <span className="mr-2">+</span> Add New Property
          </button>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {properties.map((property) => (
            <div key={property.id} className="bg-[#161616] border border-white/5 rounded-2xl p-6 flex items-center group hover:border-[#c2a878]/30 transition-all">
              <div className="relative w-48 h-32 rounded-xl overflow-hidden flex-shrink-0 bg-[#1e1e1e]">
                {property.images?.[0] ? (
                  <Image
                    src={property.images[0]}
                    alt={property.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="flex items-center justify-center h-full text-gray-600">No Image</div>
                )}
              </div>

              <div className="ml-8 flex-1">
                <div className="flex items-center mb-1">
                  <span className="text-xs uppercase tracking-widest text-[#c2a878] font-bold bg-[#c2a878]/10 px-2 py-0.5 rounded mr-3">
                    {property.type}
                  </span>
                  <span className="text-sm text-gray-500">{property.location}, {property.city}</span>
                </div>
                <h3 className="text-xl font-bold mb-2">{property.title}</h3>
                <div className="flex space-x-6 text-sm text-gray-400">
                  <span>🛏️ {property.bedrooms} Beds</span>
                  <span>🚿 {property.bathrooms} Baths</span>
                  <span>📏 {property.sqft} sqft</span>
                  <span className="font-bold text-white">₹{property.rent.toLocaleString()}/mo</span>
                </div>
              </div>

              <div className="flex space-x-3 ml-4">
                <button
                  onClick={() => router.push(`/admin/dashboard/edit/${property.id}`)}
                  className="p-3 bg-white/5 hover:bg-white/10 rounded-xl transition-all text-gray-300"
                  title="Edit"
                >
                  ✏️
                </button>
                <button
                  onClick={() => handleDelete(property.id)}
                  className="p-3 bg-red-500/10 hover:bg-red-500/20 rounded-xl transition-all text-red-400"
                  title="Delete"
                >
                  🗑️
                </button>
              </div>
            </div>
          ))}

          {properties.length === 0 && !loading && (
            <div className="text-center py-20 bg-[#161616] rounded-2xl border border-dashed border-white/10">
              <p className="text-gray-500">No properties found. Start by adding one!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
