'use client';

import { useState, useEffect } from 'react';
import { insforge } from '@/lib/insforge';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

export default function AdminDashboard() {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const router = useRouter();

  const normalizeImageUrl = (url) => {
    if (!url) return '';
    if (url.startsWith('http') || url.startsWith('/')) return url;
    return `/${url}`;
  };

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
          <Link href="/admin/dashboard" className="flex items-center px-4 py-3 bg-[#c2a878]/10 text-[#c2a878] rounded-xl font-medium transition-all">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
            Properties
          </Link>
          <Link href="/admin/dashboard/enquiries" className="flex items-center px-4 py-3 text-gray-400 hover:bg-white/5 rounded-xl transition-all">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
            Enquiries
          </Link>
          <div className="flex items-center px-4 py-3 text-gray-600 rounded-xl cursor-not-allowed">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-3 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
            Settings (Soon)
          </div>
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
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg>
            Sign Out
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
                    src={normalizeImageUrl(property.images[0])}
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
                  <span className="flex items-center gap-1"><svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12H1v-2a4 4 0 014-4h14a4 4 0 014 4v2h-2M3 12v5a2 2 0 002 2h14a2 2 0 002-2v-5M3 12h18" /></svg>{property.bedrooms} Beds</span>
                  <span className="flex items-center gap-1"><svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3M3 10h18M5 21h14a2 2 0 002-2v-7H3v7a2 2 0 002 2z" /></svg>{property.bathrooms} Baths</span>
                  <span className="flex items-center gap-1"><svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" /></svg>{property.sqft} sqft</span>
                  <span className="font-bold text-white">₹{property.rent.toLocaleString()}/mo</span>
                </div>
              </div>

              <div className="flex space-x-3 ml-4">
                <button
                  onClick={() => router.push(`/admin/dashboard/edit/${property.id}`)}
                  className="p-3 bg-white/5 hover:bg-white/10 rounded-xl transition-all text-gray-300"
                  title="Edit"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>
                </button>
                <button
                  onClick={() => handleDelete(property.id)}
                  className="p-3 bg-red-500/10 hover:bg-red-500/20 rounded-xl transition-all text-red-400"
                  title="Delete"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
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
