'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

export default function Navbar() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = `${totalScroll / windowHeight}`;

      setScrollProgress(Number(scroll) * 100);
      setIsScrolled(totalScroll > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Families', path: '/families' },
    { name: 'Professionals', path: '/professionals' },
    { name: 'Students', path: '/students' },
    { name: 'Commercial Spaces', path: '/commercial' },
  ];

  const handleEnquireClick = (e) => {
    e.preventDefault();
    const element = document.getElementById('enquire');
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <>
      <div
        className="fixed top-0 left-0 h-1 bg-gold z-50 transition-all duration-150 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />

      <nav className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${isScrolled ? 'bg-primary-dark shadow-lg py-2' : 'bg-primary-dark/95 backdrop-blur-md py-3'}`}>
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center">

          {/* Logo: icon + text side by side */}
          <Link href="/" className="flex items-center gap-4 group">
            <div className="relative w-14 h-14 md:w-20 md:h-20 flex-shrink-0 transition-transform duration-500 group-hover:scale-105">
              <Image
                src="/images/logo.png"
                alt="PrimeAze Logo"
                fill
                className="object-contain brightness-0 invert drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]"
                priority
              />
            </div>
            <span className="text-white font-bold text-2xl md:text-3xl tracking-tighter font-jakarta group-hover:text-gold transition-colors duration-300 leading-none">
              PrimeAze
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-10 text-light-bg font-bold">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                className={`transition-colors hover:text-gold text-lg md:text-xl ${pathname === link.path ? 'text-gold border-b-2 border-gold pb-1' : ''}`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:block">
            <button
              onClick={handleEnquireClick}
              className="bg-gold text-primary-dark px-6 py-2 rounded-md font-semibold hover:bg-gold/90 transition shadow-[0_0_15px_rgba(234,194,128,0.3)] hover:shadow-[0_0_20px_rgba(234,194,128,0.5)]"
            >
              Enquire
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-3">
            <button
              onClick={(e) => { setIsMobileMenuOpen(false); handleEnquireClick(e); }}
              className="bg-gold text-primary-dark px-4 py-1.5 text-sm rounded-md font-semibold"
            >
              Enquire
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gold p-1"
              aria-label="Toggle menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu Content */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-primary-dark shadow-xl border-t border-light-bg/10 py-4 px-4 flex flex-col space-y-1 z-50">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block text-base font-medium transition-colors py-3 px-2 rounded-lg border-b border-light-bg/5 last:border-0 ${pathname === link.path ? 'text-gold bg-gold/5' : 'text-white hover:text-gold hover:bg-white/5'}`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </>
  );
}
