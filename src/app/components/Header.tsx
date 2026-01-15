import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { ImageWithFallback } from '@/app/components/ImageWithFallback';
const logoSmall = '/images/logos/rs=w_57,h_57,m.png';
const logoMedium = '/images/logos/rs=w_60,h_60,m.png';
const logoTablet = '/images/logos/rs=w_72,h_72,m.png';
const logoDesktop = '/images/logos/rs=w_1607.png';
const facebookIcon = '/images/icons/3798a69a-437a-4257-8646-417e56f57282.svg';
const instagramIcon = '/images/icons/5711e4cf-1505-40b0-88ea-d0bfa1ed0e20.svg';
const linkedinIcon = '/images/icons/b889a0c7-4316-4336-bfce-01efd3483e8a.svg';
const yelpIcon = '/images/icons/aab42d4b-61b8-4d5e-a0d4-9ee47630e389.svg';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [desktopMenuOpen, setDesktopMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAtFooter, setIsAtFooter] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      setIsScrolled(scrollPosition > 50);
      
      // Check if we're near the footer (within 200px of bottom)
      const distanceFromBottom = documentHeight - (scrollPosition + windowHeight);
      setIsAtFooter(distanceFromBottom < 200);
      
      // Close desktop menu when scrolling starts
      if (scrollPosition > 50) {
        setDesktopMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isAtFooter 
          ? '-translate-y-full' 
          : isScrolled 
            ? 'bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm' 
            : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex items-center h-20 transition-all duration-300 ${isScrolled ? 'justify-between' : 'justify-center'}`}>
          {/* Desktop Hamburger Menu Button - Shows on larger screens when not scrolled */}
          <button 
            className={`hidden md:block p-2 transition-all duration-300 absolute left-4 ${
              isScrolled 
                ? 'opacity-0 pointer-events-none' 
                : 'opacity-100 text-white hover:text-gray-200'
            }`}
            onClick={() => setDesktopMenuOpen(!desktopMenuOpen)}
            aria-label="Menu"
          >
            <Menu className="w-6 h-6" />
          </button>

          {/* Logo - Centered when not scrolled, left-aligned when scrolled */}
          <div className={`flex-shrink-0 flex items-center justify-center transition-all duration-300 ${isScrolled ? '' : 'absolute left-1/2 transform -translate-x-1/2 pt-50'}`}>
            <a 
              href="#home" 
              onClick={(e) => { 
                e.preventDefault(); 
                scrollToSection('home'); 
              }} 
              className="flex items-center group cursor-pointer"
            >
              {/* Mobile - Small (up to 640px) */}
              <ImageWithFallback
                src={logoSmall}
                alt="Marci Metzger - Real Estate Professional"
                className={`w-auto object-contain sm:hidden transition-all duration-300 hover:scale-110 ${
                  isScrolled ? 'h-12' : 'h-14 sm:h-16'
                }`}
                style={{ 
                  filter: isScrolled ? 'none' : 'brightness(0) invert(1)'
                }}
              />
              {/* Mobile - Medium (641px to 768px) */}
              <ImageWithFallback
                src={logoMedium}
                alt="Marci Metzger - Real Estate Professional"
                className={`hidden w-auto object-contain sm:block md:hidden transition-all duration-300 hover:scale-110 ${
                  isScrolled ? 'h-14' : 'h-20'
                }`}
                style={{ 
                  filter: isScrolled ? 'none' : 'brightness(0) invert(1)'
                }}
              />
              {/* Tablet (769px to 1024px) */}
              <ImageWithFallback
                src={logoTablet}
                alt="Marci Metzger - Real Estate Professional"
                className={`hidden w-auto object-contain md:block lg:hidden transition-all duration-300 hover:scale-110 ${
                  isScrolled ? 'h-16' : 'h-24'
                }`}
                style={{ 
                  filter: isScrolled ? 'none' : 'brightness(0) invert(1)'
                }}
              />
              {/* Desktop (1025px and above) - Use larger logo when not scrolled */}
              <ImageWithFallback
                src={logoDesktop}
                alt="Marci Metzger - Real Estate Professional"
                className={`hidden w-auto object-contain lg:block transition-all duration-300 hover:scale-110 ${
                  isScrolled ? 'h-20 lg:h-24' : 'h-32 lg:h-36 xl:h-40'
                }`}
                style={{ 
                  filter: isScrolled ? 'none' : 'brightness(0) invert(1)'
                }}
              />
            </a>
          </div>

          {/* Desktop Navigation - Hidden when not scrolled */}
          <nav className={`hidden md:flex items-center space-x-8 transition-opacity duration-300 ${isScrolled ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
            <button 
              onClick={() => scrollToSection('home')} 
              className="relative text-gray-700 hover:text-blue-600 transition-all duration-300 font-medium py-2 px-1 group"
              style={{ fontFamily: "'Source Sans Pro', arial, sans-serif" }}
            >
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button 
              onClick={() => scrollToSection('about')} 
              className="relative text-gray-700 hover:text-blue-600 transition-all duration-300 font-medium py-2 px-1 group"
              style={{ fontFamily: "'Source Sans Pro', arial, sans-serif" }}
            >
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button 
              onClick={() => scrollToSection('properties')} 
              className="relative text-gray-700 hover:text-blue-600 transition-all duration-300 font-medium py-2 px-1 group"
              style={{ fontFamily: "'Source Sans Pro', arial, sans-serif" }}
            >
              Listings
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button 
              onClick={() => scrollToSection('services')} 
              className="relative text-gray-700 hover:text-blue-600 transition-all duration-300 font-medium py-2 px-1 group"
              style={{ fontFamily: "'Source Sans Pro', arial, sans-serif" }}
            >
              Services
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="relative text-gray-700 hover:text-blue-600 transition-all duration-300 font-medium py-2 px-1 group"
              style={{ fontFamily: "'Source Sans Pro', arial, sans-serif" }}
            >
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </button>
          </nav>

          {/* Desktop Social Media Links - Hidden when not scrolled */}
          <div className={`hidden lg:flex items-center space-x-3 transition-opacity duration-300 ${isScrolled ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
            <a 
              href="https://www.facebook.com/marcimetzgerhomes" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 hover:scale-110 group"
              aria-label="Facebook"
            >
              <img src={facebookIcon} alt="Facebook" className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
            </a>
            <a 
              href="https://www.instagram.com/marcimetzgerhomes" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full text-gray-700 hover:text-pink-600 hover:bg-pink-50 transition-all duration-300 hover:scale-110 group"
              aria-label="Instagram"
            >
              <img src={instagramIcon} alt="Instagram" className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
            </a>
            <a 
              href="https://www.linkedin.com/in/marcimetzger" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full text-gray-700 hover:text-blue-700 hover:bg-blue-50 transition-all duration-300 hover:scale-110 group"
              aria-label="LinkedIn"
            >
              <img src={linkedinIcon} alt="LinkedIn" className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
            </a>
            <a 
              href="https://www.yelp.com/biz/marci-metzger-the-ridge-realty-group-pahrump" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full text-gray-700 hover:text-red-600 hover:bg-red-50 transition-all duration-300 hover:scale-110 group"
              aria-label="Yelp"
            >
              <img src={yelpIcon} alt="Yelp" className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
            </a>
          </div>

          {/* Mobile Menu Button - Hidden when not scrolled */}
          <button 
            className={`md:hidden p-2 transition-all duration-300 ${isScrolled ? 'opacity-100 text-gray-700' : 'opacity-0 pointer-events-none text-white'}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Desktop Menu Sidebar - Shows when hamburger is clicked */}
        {desktopMenuOpen && !isScrolled && (
          <>
            {/* Overlay */}
            <div 
              className="hidden md:block fixed inset-0 bg-black/50 z-40"
              onClick={() => setDesktopMenuOpen(false)}
            />
            {/* Sidebar */}
            <div className="hidden md:block fixed top-0 left-0 h-full w-80 bg-white/95 backdrop-blur-sm border-r border-gray-200 shadow-xl z-50 overflow-y-auto transform transition-transform duration-300 ease-in-out">
              <div className="px-6 py-8">
                {/* Close Button */}
                <button
                  onClick={() => setDesktopMenuOpen(false)}
                  className="absolute top-4 right-4 p-2 text-gray-700 hover:text-gray-900 transition-colors"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" />
                </button>
                <nav className="flex flex-col space-y-4">
                  <button 
                    onClick={() => {
                      scrollToSection('home');
                      setDesktopMenuOpen(false);
                    }} 
                    className="text-left text-gray-700 hover:text-gray-900 transition py-2"
                  >
                    Home
                  </button>
                <button 
                  onClick={() => {
                    scrollToSection('about');
                    setDesktopMenuOpen(false);
                  }} 
                  className="text-left text-gray-700 hover:text-gray-900 transition py-2"
                >
                  About
                </button>
                <button 
                  onClick={() => {
                    scrollToSection('properties');
                    setDesktopMenuOpen(false);
                  }} 
                  className="text-left text-gray-700 hover:text-gray-900 transition py-2"
                >
                  Listings
                </button>
                <button 
                  onClick={() => {
                    scrollToSection('services');
                    setDesktopMenuOpen(false);
                  }} 
                  className="text-left text-gray-700 hover:text-gray-900 transition py-2"
                >
                  Services
                </button>
                <button 
                  onClick={() => {
                    scrollToSection('contact');
                    setDesktopMenuOpen(false);
                  }} 
                  className="text-left text-gray-700 hover:text-gray-900 transition py-2"
                >
                  Contact
                </button>
                {/* Desktop Social Media Links in Menu */}
                <div className="flex flex-row items-center space-x-4 pt-4 border-t border-gray-200">
                  <a 
                    href="https://www.facebook.com/marcimetzgerhomes" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-blue-600 transition-colors"
                    aria-label="Facebook"
                  >
                    <img src={facebookIcon} alt="Facebook" className="w-5 h-5" />
                  </a>
                  <a 
                    href="https://www.instagram.com/marcimetzgerhomes" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-pink-600 transition-colors"
                    aria-label="Instagram"
                  >
                    <img src={instagramIcon} alt="Instagram" className="w-5 h-5" />
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/marcimetzger" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-blue-700 transition-colors"
                    aria-label="LinkedIn"
                  >
                    <img src={linkedinIcon} alt="LinkedIn" className="w-5 h-5" />
                  </a>
                  <a 
                    href="https://www.yelp.com/biz/marci-metzger-the-ridge-realty-group-pahrump" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-red-600 transition-colors"
                    aria-label="Yelp"
                  >
                    <img src={yelpIcon} alt="Yelp" className="w-5 h-5" />
                  </a>
                </div>
              </nav>
              </div>
            </div>
          </>
        )}

        {/* Mobile Menu - Always Vertical */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-4 flex flex-col">
            <button onClick={() => scrollToSection('home')} className="block w-full text-left py-2 text-gray-700">
              Home
            </button>
            <button onClick={() => scrollToSection('about')} className="block w-full text-left py-2 text-gray-700">
              About
            </button>
            <button onClick={() => scrollToSection('properties')} className="block w-full text-left py-2 text-gray-700">
              Properties
            </button>
            <button onClick={() => scrollToSection('services')} className="block w-full text-left py-2 text-gray-700">
              Services
            </button>
            <button onClick={() => scrollToSection('contact')} className="block w-full text-left py-2 text-gray-700">
              Contact
            </button>
            {/* Mobile Social Media Links */}
            <div className="flex items-center space-x-4 pt-4 border-t border-gray-200">
              <a 
                href="https://www.facebook.com/marcimetzgerhomes" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-blue-600 transition-colors"
                aria-label="Facebook"
              >
                <img src={facebookIcon} alt="Facebook" className="w-6 h-6" />
              </a>
              <a 
                href="https://www.instagram.com/marcimetzgerhomes" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-pink-600 transition-colors"
                aria-label="Instagram"
              >
                <img src={instagramIcon} alt="Instagram" className="w-6 h-6" />
              </a>
              <a 
                href="https://www.linkedin.com/in/marcimetzger" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-blue-700 transition-colors"
                aria-label="LinkedIn"
              >
                <img src={linkedinIcon} alt="LinkedIn" className="w-6 h-6" />
              </a>
              <a 
                href="https://www.yelp.com/biz/marci-metzger-the-ridge-realty-group-pahrump" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-red-600 transition-colors"
                aria-label="Yelp"
              >
                <img src={yelpIcon} alt="Yelp" className="w-6 h-6" />
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
