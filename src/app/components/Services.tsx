import { ArrowRight } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { ImageWithFallback } from '@/app/components/ImageWithFallback';

export function Services() {
  const services = [
    {
      title: 'Buyer Representation',
      description: 'Looking for your dream home? I\'ll be with you every step of the way—from searching properties to closing day. You deserve someone who truly understands what you\'re looking for and won\'t stop until we find it together.',
      backgroundImage: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80',
    },
    {
      title: 'Seller Representation',
      description: 'Ready to sell? Let me help you get the best possible price for your property. I\'ll handle the marketing, negotiations, and all the details so you can focus on what\'s next. Your home is valuable, and I\'ll make sure buyers see that too.',
      backgroundImage: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
    },
    {
      title: 'Property Management',
      description: 'Have an investment property? I can help you maximize your returns while taking the stress out of being a landlord. From finding great tenants to handling maintenance, I\'ve got you covered so your investment works for you.',
      backgroundImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
    },
    {
      title: 'Market Analysis',
      description: 'Wondering what your home is really worth? Or curious about market trends in Pahrump? I\'ll provide you with detailed, honest market reports so you can make informed decisions. Knowledge is power, and I want you to have all the information you need.',
      backgroundImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    },
    {
      title: 'Investment Consulting',
      description: 'Thinking about real estate as an investment? With nearly 30 years of experience, I can help you understand the opportunities in our market. Whether you\'re looking at fixer-uppers or luxury properties, let\'s talk about what makes sense for your goals.',
      backgroundImage: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80',
    },
    {
      title: 'Relocation Services',
      description: 'Moving to Pahrump? Welcome! I know this community inside and out, and I\'d love to help you find the perfect neighborhood that fits your lifestyle. Whether you want to be near the golf courses, parks, or prefer a quieter area, I\'ll help you feel at home here.',
      backgroundImage: '/images/gallery/cr=t_5.36_25.jpeg',
    }
  ];

  const handleServiceClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl mb-4 text-white font-cinzel">
            Our Services
          </h2>
          <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto" style={{ fontFamily: "'Source Sans Pro', arial, sans-serif" }}>
            Comprehensive real estate solutions tailored to your needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {services.map((service, index) => {
            return (
              <div 
                key={index}
                className="group relative aspect-[4/3] overflow-hidden cursor-pointer bg-black rounded-lg"
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleServiceClick(e as any);
                  }
                }}
              >
                {/* Background Image */}
                <ImageWithFallback
                  src={service.backgroundImage}
                  alt={service.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-black/60 group-hover:from-black/95 group-hover:via-black/85 group-hover:to-black/75 transition-all duration-500" />
                
                {/* Blue Accent on Hover */}
                <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/20 transition-all duration-500" />
                
                {/* Content Container */}
                <div className="absolute inset-0 flex flex-col justify-between p-6 z-10">
                  {/* Title - Always Visible */}
                  <div className="flex-1 flex items-start">
                    <h3 className="text-xl md:text-2xl lg:text-3xl text-white font-cinzel text-left drop-shadow-2xl transition-all duration-300 group-hover:scale-105 group-hover:text-blue-200">
                      {service.title}
                    </h3>
                  </div>

                  {/* Description and Button - Hidden by default, shown on hover */}
                  <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100">
                    <p className="text-sm md:text-base text-gray-200 mb-4 leading-relaxed line-clamp-3" style={{ fontFamily: "'Source Sans Pro', arial, sans-serif" }}>
                      {service.description}
                    </p>
                    <Button
                      onClick={handleServiceClick}
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold transition-all"
                      style={{ fontFamily: "'Source Sans Pro', arial, sans-serif" }}
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>

                {/* Card Pop-out Effect */}
                <div className="absolute inset-0 rounded-lg border-2 border-transparent group-hover:border-blue-500/50 group-hover:shadow-2xl group-hover:shadow-blue-500/20 transition-all duration-500 transform group-hover:scale-[1.02] pointer-events-none" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
