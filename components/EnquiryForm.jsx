'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail, CheckCircle, Send, User, MessageSquare } from 'lucide-react';
import FadeInSection from './FadeInSection';
import { insforge } from '@/lib/insforge';

export default function EnquiryForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    location: '',
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
            email: formData.email,
            location: formData.location,
            preference: formData.preference
          }
        ]);

      if (error) throw error;

      // 2. Send Email via API Route
      await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const message = `Hello PRIMEAZE! I'm interested in finding a property.\n\nName: ${formData.name}\nEmail: ${formData.email}\nPreferred Location: ${formData.location}\nTenant Type: ${formData.preference}`;
      const whatsappUrl = `https://wa.me/918217282287?text=${encodeURIComponent(message)}`;

      setSubmitted(true);
      setFormData({ name: '', email: '', location: '', preference: '' });

      // Redirect directly to WhatsApp to avoid popup blockers
      window.location.href = whatsappUrl;
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
    <section id="enquire" className="py-32 bg-[#0a0a0a] relative overflow-hidden">
      {/* Background styling */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-gold/5 via-transparent to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col lg:flex-row items-center gap-20 relative z-10">

        {/* Left Side Content */}
        <div className="w-full lg:w-1/2 text-white">
          <FadeInSection>
            <span className="inline-block py-1 px-3 bg-gold/10 border border-gold/20 rounded-full text-gold text-xs font-bold tracking-widest uppercase mb-6">
              Connect With Us
            </span>
            <h2 className="text-4xl md:text-6xl font-bold mb-8 font-jakarta leading-tight">
              Let&apos;s Find Your <br /><span className="text-gold">Perfect Match.</span>
            </h2>
            <p className="text-gray-400 text-lg mb-12 leading-relaxed max-w-lg">
              Our experts specialize in <span className="text-white font-semibold">property hunting in your desired areas</span>. We provide end-to-end support to ensure your move-in is seamless and stress-free.
            </p>

            <div className="flex flex-wrap gap-6 mt-12">
              <a href="tel:+918217282287" className="group flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl p-4 pr-8 hover:bg-gold transition-all duration-500 hover:-translate-y-1">
                <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center text-gold group-hover:bg-white/20 group-hover:text-primary-dark transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Call Direct</span>
                  <span className="text-lg font-bold group-hover:text-primary-dark transition-colors">+91 821 728 2287</span>
                </div>
              </a>

              <a href="mailto:primeaze.co@gmail.com" className="group flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl p-4 pr-8 hover:bg-gold transition-all duration-500 hover:-translate-y-1">
                <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center text-gold group-hover:bg-white/20 group-hover:text-primary-dark transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Email Inquiry</span>
                  <span className="text-lg font-bold group-hover:text-primary-dark transition-colors">primeaze.co@gmail.com</span>
                </div>
              </a>
            </div>
          </FadeInSection>
        </div>

        {/* Right Side Form */}
        <div className="w-full lg:w-1/2">
          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="bg-white rounded-3xl p-12 text-center shadow-[0_30px_100px_rgba(0,0,0,0.5)] border border-gray-100"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1, rotate: [0, 10, -10, 0] }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="w-24 h-24 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg shadow-green-500/30"
                >
                  <CheckCircle className="w-12 h-12" />
                </motion.div>
                <h3 className="text-3xl font-bold text-primary-dark mb-4 font-jakarta">Excellent Choice!</h3>
                <p className="text-gray-500 text-lg mb-8 leading-relaxed">
                  We&apos;ve received your request. Our property experts are already looking for the best matches for you.
                  <br /><strong>Redirecting you to WhatsApp...</strong>
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-rust font-bold hover:text-rust/80 transition-colors inline-flex items-center gap-2"
                >
                  Need to send another enquiry? Click here
                </button>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-white rounded-3xl p-10 md:p-12 shadow-[0_40px_80px_rgba(0,0,0,0.4)] border border-gray-100"
              >
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="mb-8">
                    <h3 className="text-3xl font-bold text-primary-dark mb-2 font-jakarta">Get Started</h3>
                    <p className="text-gray-500">Fill in the details and we&apos;ll handle the rest.</p>
                  </div>

                  <div className="relative group">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-gold transition-colors" />
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-all font-medium"
                      placeholder="Your Full Name"
                    />
                  </div>

                  <div className="relative group">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-gold transition-colors" />
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-all font-medium"
                      placeholder="Your Email Address"
                    />
                  </div>

                  <div className="relative group">
                    <svg xmlns="http://www.w3.org/2000/svg" className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-gold transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <input
                      type="text"
                      name="location"
                      required
                      value={formData.location}
                      onChange={handleChange}
                      className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-all font-medium"
                      placeholder="Preferred Location"
                    />
                  </div>

                  <div className="relative group">
                    <MessageSquare className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-gold transition-colors" />
                    <select
                      name="preference"
                      required
                      value={formData.preference}
                      onChange={handleChange}
                      className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-all text-gray-700 font-medium appearance-none"
                    >
                      <option value="" disabled>Tenant Type?</option>
                      <option value="families">Family</option>
                      <option value="professionals">Working Professional</option>
                      <option value="commercial">Commercial Spaces & Housing</option>
                      <option value="students">Students</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-rust hover:bg-rust/90 text-white font-bold py-5 rounded-2xl mt-4 transition-all shadow-xl shadow-rust/20 hover:shadow-rust/30 flex items-center justify-center gap-3 disabled:opacity-70"
                  >
                    {loading ? (
                      <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Request VIP Callback
                      </>
                    )}
                  </button>
                  <p className="text-center text-xs text-gray-400 font-medium tracking-wide uppercase">
                    Guaranteed Privacy — Your details are safe with us.
                  </p>
                </form>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
