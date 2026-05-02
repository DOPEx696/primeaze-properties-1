'use client';
import { useState } from 'react';
import FadeInSection from './FadeInSection';
import { insforge } from '@/lib/insforge';

export default function EnquiryForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    preference: ''
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // 1. Store in InsForge Database
      const { error } = await insforge.database
        .from('enquiries')
        .insert([
          {
            name: formData.name,
            phone: formData.phone,
            email: formData.email,
            preference: formData.preference
          }
        ]);

      if (error) throw error;

      // 2. Send Email via API Route
      const emailRes = await fetch('/api/enquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!emailRes.ok) {
        const errorData = await emailRes.json();
        console.error('Email API Error:', errorData);
      }

      // 3. Construct WhatsApp Message
      const message = `Hello PRIMEAZE! I'm interested in finding a property.
      
Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}
Looking for: ${formData.preference}`;

      const whatsappUrl = `https://wa.me/918217282287?text=${encodeURIComponent(message)}`;

      // 3. Set submitted state and redirect
      setSubmitted(true);
      setFormData({ name: '', phone: '', email: '', preference: '' });

      // Open WhatsApp in a new tab
      window.open(whatsappUrl, '_blank');
    } catch (err) {
      console.error('Error submitting enquiry:', err);
      alert('Something went wrong. Please try again or contact us directly.');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="enquire" className="py-24 bg-primary-dark relative">
      {/* Background styling */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10 mix-blend-overlay pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col lg:flex-row items-center gap-16 relative z-10">

        {/* Left Side Content */}
        <div className="w-full lg:w-1/2 text-white">
          <FadeInSection>
            <span className="text-gold uppercase tracking-widest text-sm font-bold mb-4 block">Get in Touch</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-montserrat">Find Your Perfect Space</h2>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed max-w-lg">
              Have specific requirements or couldn&apos;t find what you&apos;re looking for? Reach out to our experts and we&apos;ll curate a list of properties just for you.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-gold">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Call Us (Mon-Sat)</p>
                  <p className="text-lg font-semibold">+91 821 728 2287</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-gold">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email Us</p>
                  <p className="text-lg font-semibold">primeaze.co@gmail.com</p>
                </div>
              </div>
            </div>
          </FadeInSection>
        </div>

        {/* Right Side Form */}
        <div className="w-full lg:w-1/2">
          <FadeInSection delay={200}>
            <div className="bg-white rounded-2xl p-8 md:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
              {submitted ? (
                <div className="text-center py-16">
                  <div className="w-20 h-20 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <h3 className="text-2xl font-bold text-primary-dark mb-2">Request Received!</h3>
                  <p className="text-gray-600">Our expert team will contact you shortly to discuss your requirements.</p>
                  <button onClick={() => setSubmitted(false)} className="mt-8 text-rust font-semibold hover:underline border-b border-transparent hover:border-rust pb-1">
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h3 className="text-2xl font-bold text-primary-dark mb-6">Drop an Enquiry</h3>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-all"
                      placeholder="John Doe"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-all"
                        placeholder="+91 00000 00000"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">I am looking for</label>
                    <select
                      name="preference"
                      required
                      value={formData.preference}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-all text-gray-700"
                    >
                      <option value="" disabled>Select category</option>
                      <option value="families">Family Home</option>
                      <option value="professionals">Professional Stay</option>
                      <option value="corporate">Corporate Housing</option>
                      <option value="other">Other / Custom</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-rust hover:bg-[#80392b] text-white font-bold py-4 rounded-lg mt-4 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {loading ? 'Processing...' : 'Request Callback'}
                  </button>
                  <p className="text-center text-xs text-gray-500 mt-4">We respect your privacy. No spam, ever.</p>
                </form>
              )}
            </div>
          </FadeInSection>
        </div>

      </div>
    </section>
  );
}
