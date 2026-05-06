'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

export default function Navbar() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
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
    { name: 'Commercial Spaces', path: '/commercial' },
    { name: 'Students', path: '/students' },
  ];

  const handleEnquireClick = (e) => {
    e.preventDefault();
    const element = document.getElementById('enquire');
    if (element) {
      const yOffset = -80; // Account for sticky navbar
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
      
      <nav className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${isScrolled ? 'bg-primary-dark shadow-lg py-3' : 'bg-primary-dark/95 backdrop-blur-md py-5'}`}>
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center">
          
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-12 h-12 transition-transform duration-500 group-hover:scale-110">
              <Image 
                src="/images/logo.png" 
                alt="Primeaze Logo" 
                fill 
                className="object-contain filter-gold drop-shadow-[0_0_8px_rgba(234,194,128,0.3)]"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-gold font-bold text-3xl tracking-tight font-jakarta group-hover:text-white transition-colors duration-300">
                PrimeAze
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8 text-light-bg font-medium">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.path}
                className={`transition-colors hover:text-gold ${pathname === link.path ? 'text-gold border-b-2 border-gold pb-1' : ''}`}
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
          
          {/* Mobile Menu Button - simplified for now */}
          <div className="md:hidden flex items-center space-x-4">
            <button onClick={handleEnquireClick} className="bg-gold text-primary-dark px-4 py-1.5 text-sm rounded-md font-semibold">
              Enquire
            </button>
            <button className="text-gold p-1">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
