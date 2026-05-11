import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-light-bg py-16 mt-20 border-t-4 border-gold">
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-4 gap-12">

        {/* Brand & Address */}
        <div className="col-span-1 md:col-span-1">
          <div className="flex items-center gap-4 mb-8">
            <div className="relative w-14 h-14 md:w-20 md:h-20 flex-shrink-0">
              <Image
                src="/images/logo.png"
                alt="PrimeAze Logo"
                fill
                className="object-contain brightness-0 invert drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]"
              />
            </div>
            <h3 className="text-white font-bold text-2xl md:text-3xl tracking-tighter font-jakarta leading-none">PrimeAze</h3>
          </div>
          <p className="text-gray-300 mb-6 text-sm leading-relaxed font-inter">
            We find, you choose, move in. <br />
            Premium rental property management curated for discerning residents in Bengaluru.
          </p>
          <div className="text-sm text-gray-400 space-y-2">
            <p>15th A Cross Rd, Yelahanka Satellite Town</p>
            <p>Yelahanka, Bengaluru, Karnataka 560064</p>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold text-lg mb-4 text-white">Find a Home</h4>
          <ul className="space-y-3 text-gray-300 text-sm font-inter">
            <li><Link href="/families" className="hover:text-gold transition">For Families</Link></li>
            <li><Link href="/professionals" className="hover:text-gold transition">For Professionals</Link></li>
            <li><Link href="/commercial" className="hover:text-gold transition">Commercial Spaces</Link></li>
            <li><Link href="/students" className="hover:text-gold transition">Student Stays</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold text-lg mb-4 text-white">Contact Us</h4>
          <ul className="space-y-3 text-gray-300 text-sm">
            <li>
              <a href="mailto:primeaze.co@gmail.com" className="hover:text-gold transition">
                primeaze.co@gmail.com
              </a>
            </li>
            <li>
              <a href="tel:+918217282287" className="hover:text-gold transition">
                +91 821 728 2287
              </a>
            </li>
            <li className="pt-2 text-gold">Available Mon-Sat (9 AM - 7 PM)</li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h4 className="font-semibold text-lg mb-4 text-white">Follow Us</h4>
          <div className="flex space-x-4">
            {/* Instagram placeholder icon */}
            <a href="https://www.instagram.com/primeaze.co?igsh=MWdod2MyZW83dzlobA==" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-light-bg/10 flex items-center justify-center hover:bg-gold hover:text-primary-dark transition text-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
            {/* LinkedIn placeholder icon */}
            <a href="https://www.linkedin.com/in/primeaze" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-light-bg/10 flex items-center justify-center hover:bg-gold hover:text-primary-dark transition text-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
            {/* Facebook placeholder icon */}
            <a href="https://www.facebook.com/share/14bwLtWMduZ/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-light-bg/10 flex items-center justify-center hover:bg-gold hover:text-primary-dark transition text-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
            </a>
          </div>
        </div>

      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 mt-12 pt-8 border-t border-light-bg/10 text-center text-sm text-gray-500">
        <p>&copy; {new Date().getFullYear()} PRIMEAZE. All rights reserved.</p>
        <p className="mt-2 text-xs">Exclusively serving prime properties in Bengaluru.</p>
      </div>
    </footer>
  );
}
