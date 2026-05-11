'use client';

import { useState, useEffect } from 'react';
import { insforge } from '@/lib/insforge';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function EnquiriesPage() {
  const [enquiries, setEnquiries] = useState([]);
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
        fetchEnquiries();
      }
    };
    checkUser();
  }, [router]);

  const fetchEnquiries = async () => {
    setLoading(true);
    const { data, error } = await insforge.database.from('enquiries').select('*').order('created_at', { ascending: false });
    if (data) {
      setEnquiries(data);
    }
    setLoading(false);
  };

  const handleSignOut = async () => {
    await insforge.auth.signOut();
    router.push('/admin/login');
  };

  if (loading && !enquiries.length) {
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
          <Link href="/admin/dashboard" className="flex items-center px-4 py-3 text-gray-400 hover:bg-white/5 rounded-xl transition-all">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
            Properties
          </Link>
          <Link href="/admin/dashboard/enquiries" className="flex items-center px-4 py-3 bg-[#c2a878]/10 text-[#c2a878] rounded-xl font-medium transition-all">
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
              {user?.email?.[0]?.toUpperCase()}
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
            <h2 className="text-3xl font-bold">Customer Enquiries</h2>
            <p className="text-gray-400 mt-1">View and manage requests from potential tenants</p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {enquiries.map((enq) => (
            <div key={enq.id} className="bg-[#161616] border border-white/5 rounded-2xl p-6 hover:border-[#c2a878]/30 transition-all flex flex-col md:flex-row justify-between items-start md:items-center">
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-bold text-white">{enq.name}</h3>
                  <span className="text-xs text-gray-500">{new Date(enq.created_at).toLocaleString()}</span>
                </div>
                <div className="flex flex-col md:flex-row md:space-x-8 text-sm text-gray-400 mb-4">
                  <span className="flex items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                    <a href={`tel:${enq.phone}`} className="hover:text-[#c2a878]">{enq.phone}</a>
                  </span>
                  <span className="flex items-center gap-1 mt-2 md:mt-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                    <a href={`mailto:${enq.email}`} className="hover:text-[#c2a878]">{enq.email}</a>
                  </span>
                </div>
                <div className="bg-[#1e1e1e] rounded-lg p-4 inline-block border border-white/5">
                  <span className="text-xs uppercase text-gray-500 font-bold tracking-wider mb-1 block">Interested In</span>
                  <p className="text-[#c2a878] font-medium">{enq.preference}</p>
                </div>
              </div>
            </div>
          ))}

          {enquiries.length === 0 && !loading && (
            <div className="text-center py-20 bg-[#161616] rounded-2xl border border-dashed border-white/10">
              <p className="text-gray-500">No enquiries received yet.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
