import { Button } from '@/app/components/ui/button';
import { ImageWithFallback } from '@/app/components/ImageWithFallback';
import { useState, useEffect } from 'react';

// Using image from public folder
const heroImage = '/images/gallery/rs=w_1920,m_1.jpeg';

export function Hero() {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-end justify-center bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <ImageWithFallback
          src={heroImage}
          alt="Beautiful landscape with golf course, pond, and mountains"
          className="absolute inset-0 w-full h-full object-cover object-center z-0"
          style={{
            transform: `translateY(${scrollY * 0.5}px)`,
            height: '120%',
            transition: 'transform 0.1s ease-out'
          }}
        />
        {/* Gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70 z-10"></div>
      </div>
      
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 pt-32 text-center">
        {/* Top line - Company name*/}
        <div 
          className={`mb-4 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}
          style={{ transitionDelay: '200ms' }}
        >
          <p className="text-base sm:text-lg lg:text-xl text-white/90 font-medium tracking-wide uppercase" style={{ fontFamily: "'Source Sans Pro', arial, sans-serif" }}>
            MARCI METZGER | The Ridge Realty Group
          </p>
        </div>
        
        {/* Main title - Pahrump Realtor */}
        <h1 
          className={`text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-white mb-4 tracking-tight font-bold transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}
          style={{ fontFamily: "'Cinzel', serif", transitionDelay: '400ms' }}
        >
          PAHRUMP EXPERT REALTOR®
        </h1>

        {/* Compelling tagline */}
        <div 
          className={`mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}
          style={{ transitionDelay: '600ms' }}
        >
          <p className="text-lg sm:text-xl lg:text-2xl text-white/95 font-light max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: "'Source Sans Pro', arial, sans-serif" }}>
            Your Trusted Partner in Finding Your Dream Home
          </p>
        </div>

        {/* Trust indicators */}
        <div 
          className={`mb-8 flex flex-wrap justify-center gap-6 sm:gap-8 lg:gap-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          style={{ transitionDelay: '800ms' }}
        >
          <div className="flex flex-col items-center">
            <div className="text-2xl sm:text-3xl font-bold text-white mb-1" style={{ fontFamily: "'Cinzel', serif" }}>
              30+
            </div>
            <div className="text-xs sm:text-sm text-white/80 uppercase tracking-wide" style={{ fontFamily: "'Source Sans Pro', arial, sans-serif" }}>
              Years Experience
            </div>
          </div>
          <div className="hidden sm:block w-px h-10 bg-white/30"></div>
          <div className="flex flex-col items-center">
            <div className="text-2xl sm:text-3xl font-bold text-white mb-1" style={{ fontFamily: "'Cinzel', serif" }}>
              500+
            </div>
            <div className="text-xs sm:text-sm text-white/80 uppercase tracking-wide" style={{ fontFamily: "'Source Sans Pro', arial, sans-serif" }}>
              Happy Clients
            </div>
          </div>
          <div className="hidden sm:block w-px h-10 bg-white/30"></div>
          <div className="flex flex-col items-center">
            <div className="text-2xl sm:text-3xl font-bold text-white mb-1" style={{ fontFamily: "'Cinzel', serif" }}>
              #1
            </div>
            <div className="text-xs sm:text-sm text-white/80 uppercase tracking-wide" style={{ fontFamily: "'Source Sans Pro', arial, sans-serif" }}>
              Local Expert
            </div>
          </div>
        </div>
        
        {/* CTA Buttons */}
        <div 
          className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          style={{ transitionDelay: '1000ms' }}
        >
          <Button 
            size="lg" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-base sm:text-lg font-semibold shadow-2xl hover:shadow-blue-500/50 hover:scale-105 transition-all duration-300 rounded-lg"
            onClick={scrollToContact}
            style={{ fontFamily: "'Source Sans Pro', arial, sans-serif" }}
          >
            Let's Talk Today
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="bg-white/10 backdrop-blur-md border-2 border-white/50 text-white hover:bg-white hover:text-gray-900 px-8 py-6 text-base sm:text-lg font-semibold transition-all duration-300 hover:scale-105 rounded-lg shadow-xl"
            onClick={() => {
              const element = document.getElementById('property-search');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            style={{ fontFamily: "'Source Sans Pro', arial, sans-serif" }}
          >
            Browse Listings
          </Button>
        </div>
      </div>
    </section>
  );
}
