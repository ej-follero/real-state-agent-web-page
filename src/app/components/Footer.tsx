import { Facebook, Instagram, Linkedin } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/ImageWithFallback';

const yelpIcon = '/images/icons/aab42d4b-61b8-4d5e-a0d4-9ee47630e389.svg';
const logoSmall = '/images/logos/rs=w_57,h_57,m.png';
const logoMedium = '/images/logos/rs=w_60,h_60,m.png';
const logoTablet = '/images/logos/rs=w_72,h_72,m.png';
const logoDesktop = '/images/logos/rs=w_1607.png';

export function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-black text-white py-12 sm:py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 md:gap-12 lg:gap-12 mb-10 md:mb-12">
          {/* About Section */}
          <div className="sm:col-span-2 md:col-span-2 lg:col-span-2">
            {/* Logo */}
            <div className="mb-4 md:mb-6 -mt-4 md:-mt-6 flex justify-center md:justify-center lg:justify-start">
              <a 
                href="#home" 
                onClick={(e) => { 
                  e.preventDefault(); 
                  const element = document.getElementById('home');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }} 
                className="cursor-pointer"
              >
                <ImageWithFallback
                  src={logoSmall}
                  alt="Marci Metzger - Real Estate Professional"
                  className="w-auto object-contain sm:hidden h-20 transition-transform duration-300 hover:scale-110"
                  style={{ filter: 'brightness(0) invert(1)' }}
                />
                <ImageWithFallback
                  src={logoMedium}
                  alt="Marci Metzger - Real Estate Professional"
                  className="hidden w-auto object-contain sm:block md:hidden h-24 transition-transform duration-300 hover:scale-110"
                  style={{ filter: 'brightness(0) invert(1)' }}
                />
                <ImageWithFallback
                  src={logoTablet}
                  alt="Marci Metzger - Real Estate Professional"
                  className="hidden w-auto object-contain md:block lg:hidden h-28 md:h-32 transition-transform duration-300 hover:scale-110"
                  style={{ filter: 'brightness(0) invert(1)' }}
                />
                <ImageWithFallback
                  src={logoDesktop}
                  alt="Marci Metzger - Real Estate Professional"
                  className="hidden w-auto object-contain lg:block h-32 transition-transform duration-300 hover:scale-110"
                  style={{ filter: 'brightness(0) invert(1)' }}
                />
              </a>
            </div>
            <p className="text-gray-300 mb-6 md:mb-8 leading-relaxed max-w-md md:max-w-lg text-sm sm:text-base md:text-base text-center md:text-center lg:text-left" style={{ fontFamily: "'Source Sans Pro', arial, sans-serif" }}>
              Your trusted real estate professional dedicated to helping you find the perfect home 
              or sell your property with confidence and ease.
            </p>
            <div className="flex justify-center md:justify-center lg:justify-start space-x-3 md:space-x-4">
              <a 
                href="https://www.facebook.com/marcimetzgerhomes" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-800 p-3 rounded-full hover:bg-blue-600 transition-all duration-300 hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="https://www.instagram.com/marcimetzgerhomes" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-800 p-3 rounded-full hover:bg-blue-600 transition-all duration-300 hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/marcimetzger" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-800 p-3 rounded-full hover:bg-blue-600 transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://www.yelp.com/biz/marci-metzger-the-ridge-realty-group-pahrump" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-800 p-3 rounded-full hover:bg-blue-600 transition-all duration-300 hover:scale-110"
                aria-label="Yelp"
              >
                <img src={yelpIcon} alt="Yelp" className="w-5 h-5" style={{ filter: 'brightness(0) invert(1)' }} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="mt-8 md:mt-0">
            <h4 className="text-lg md:text-xl mb-4 md:mb-5 font-cinzel text-center md:text-center lg:text-left">Quick Links</h4>
            <ul className="space-y-2 md:space-y-3 text-center md:text-center lg:text-left">
              <li>
                <button 
                  onClick={() => scrollToSection('home')} 
                  className="text-gray-300 hover:text-blue-400 transition-colors text-sm md:text-base"
                  style={{ fontFamily: "'Source Sans Pro', arial, sans-serif" }}
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('about')} 
                  className="text-gray-300 hover:text-blue-400 transition-colors text-sm md:text-base"
                  style={{ fontFamily: "'Source Sans Pro', arial, sans-serif" }}
                >
                  About
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('properties')} 
                  className="text-gray-300 hover:text-blue-400 transition-colors text-sm md:text-base"
                  style={{ fontFamily: "'Source Sans Pro', arial, sans-serif" }}
                >
                  Listings
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')} 
                  className="text-gray-300 hover:text-blue-400 transition-colors text-sm md:text-base"
                  style={{ fontFamily: "'Source Sans Pro', arial, sans-serif" }}
                >
                  Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')} 
                  className="text-gray-300 hover:text-blue-400 transition-colors text-sm md:text-base"
                  style={{ fontFamily: "'Source Sans Pro', arial, sans-serif" }}
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="mt-8 md:mt-0">
            <h4 className="text-lg md:text-xl mb-4 md:mb-5 font-cinzel text-center md:text-center lg:text-left">Contact</h4>
            <ul className="space-y-3 md:space-y-4 text-center md:text-center lg:text-left">
              <li>
                <div className="flex flex-col items-center md:items-center lg:items-start">
                  <a 
                    href="tel:+12069196886" 
                    className="text-gray-300 hover:text-blue-400 transition-colors text-sm md:text-base"
                    style={{ fontFamily: "'Source Sans Pro', arial, sans-serif" }}
                  >
                    (206) 919-6886
                  </a>
                  <a 
                    href="tel:+14259412560" 
                    className="text-gray-300 hover:text-blue-400 transition-colors text-sm md:text-base"
                    style={{ fontFamily: "'Source Sans Pro', arial, sans-serif" }}
                  >
                    (425) 941-2560
                  </a>
                </div>
              </li>
              <li>
                <a 
                  href="mailto:marcimetzger@gmail.com" 
                  className="text-gray-300 hover:text-blue-400 transition-colors text-sm md:text-base break-all"
                  style={{ fontFamily: "'Source Sans Pro', arial, sans-serif" }}
                >
                  marcimetzger@gmail.com
                </a>
              </li>
              <li>
                <p className="text-gray-300 text-sm md:text-base leading-relaxed" style={{ fontFamily: "'Source Sans Pro', arial, sans-serif" }}>
                  3190 HW-160, Suite F<br />
                  Pahrump, Nevada 89048
                </p>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-6 md:pt-8">
          <div className="flex flex-col sm:flex-row md:flex-row justify-between items-center gap-4 md:gap-6">
            {/* Left - Copyright */}
            <p className="text-gray-400 text-xs sm:text-sm text-center sm:text-left" style={{ fontFamily: "'Source Sans Pro', arial, sans-serif" }}>
              &copy; {new Date().getFullYear()} Marci Metzger Homes. All rights reserved.
            </p>
            
            {/* Middle - Legal Links */}
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 md:gap-6">
              <a 
                href="/privacy-policy" 
                className="text-gray-400 hover:text-blue-400 transition-colors text-xs sm:text-sm"
                style={{ fontFamily: "'Source Sans Pro', arial, sans-serif" }}
              >
                Privacy Policy
              </a>
              <a 
                href="/manage-cookies" 
                className="text-gray-400 hover:text-blue-400 transition-colors text-xs sm:text-sm"
                style={{ fontFamily: "'Source Sans Pro', arial, sans-serif" }}
              >
                Manage Cookies
              </a>
              <a 
                href="/terms-of-use" 
                className="text-gray-400 hover:text-blue-400 transition-colors text-xs sm:text-sm"
                style={{ fontFamily: "'Source Sans Pro', arial, sans-serif" }}
              >
                Terms of Use
              </a>
            </div>
            
            {/* Right - Company Name */}
            <p className="text-gray-500 text-xs text-center sm:text-right" style={{ fontFamily: "'Source Sans Pro', arial, sans-serif" }}>
              THE RIDGE REALTY GROUP
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
