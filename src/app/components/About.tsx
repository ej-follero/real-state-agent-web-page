import { ImageWithFallback } from '@/app/components/ImageWithFallback';
import { Button } from '@/app/components/ui/button';

const profileImage = '/images/profile/profile-image.jpeg';

export function About() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const stats = [
    { value: '31', label: 'Sales Last 12 Months', subtext: '' },
    { value: '701', label: 'Total Sales', subtext: '' },
    { value: '$389K', label: 'Average Price', subtext: 'Price Range: $36K-$775K' },
    { value: '90', label: 'Clients Helped in 2021', subtext: 'Successful transactions' },
    { value: '$28.5M', label: 'Closed Sales Volume', subtext: 'Last 5 years' },
    { value: '97.82%', label: 'Sale-to-List Ratio', subtext: 'Average closing price vs. list price' },
    { value: '86', label: 'Days on Market', subtext: 'Average time to close' },
    { value: 'TOP 5%', label: 'Top Producer', subtext: 'Total sales volume' },
  ];


  return (
    <section id="about" className="relative overflow-hidden">
      {/* Top Section - Quote (White Background) */}
      <div className="bg-white py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <blockquote className="mb-6">
            <p className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed italic font-cinzel">
              "I love that small-town feeling that our community offers. Spectacular golf courses, parks, pool, and easy access to Las Vegas make Pahrump a great place to call home. Working or retired, fast-paced or looking to relax... there's a place for you here!
              <br /><br />
              I enjoy living in the Mountain Falls community and will strive to find you a home that will suit you just as this community does me."
            </p>
          </blockquote>
          <p className="text-base md:text-lg lg:text-xl text-gray-900 font-cinzel font-semibold">
            —Marci Metzger
          </p>
        </div>
      </div>

      {/* Bottom Section - Split Layout */}
      <div className="bg-black">
        <div className="grid md:grid-cols-2 gap-0 items-stretch min-h-[600px] md:min-h-[700px]">
          {/* Left Column - Text Content (Black Background) */}
          <div className="order-2 md:order-1 relative">
            <div className="relative z-10 p-8 md:p-12 lg:p-16 flex flex-col justify-center h-full">
              <h3 className="text-3xl md:text-4xl lg:text-5xl mb-6 md:mb-8 text-white font-cinzel leading-tight">
                <span className="inline-block group cursor-pointer transition-all duration-300 hover:text-blue-400 hover:scale-105">
                  MEET MARCI
                  <span className="block h-0.5 w-0 bg-blue-400 transition-all duration-300 group-hover:w-full mt-1"></span>
                </span>
              </h3>
              
              <p className="text-base md:text-lg lg:text-xl text-gray-200 mb-8 md:mb-10 leading-relaxed max-w-2xl transition-all duration-300 hover:text-white hover:scale-[1.02] cursor-default group" style={{ fontFamily: "'Source Sans Pro', arial, sans-serif" }}>
                As Managing Broker and Owner of The Ridge Realty Group, Marci brings <strong className="text-white font-bold transition-colors duration-300 group-hover:text-blue-400">31 years</strong> of real estate expertise to every transaction. Whether you're buying or selling, you'll find that there really is a difference when working with Marci Metzger Homes—it starts with our commitment to intensive personal service, with your needs as our top priority.
              </p>

              <div className="mt-4">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white bg-transparent hover:bg-white hover:text-black text-white px-8 py-6 text-base font-semibold transition-all duration-300 w-full md:w-auto hover:scale-110 hover:shadow-xl"
                  onClick={() => scrollToSection('services')}
                  style={{ fontFamily: "'Source Sans Pro', arial, sans-serif" }}
                >
                  LEARN MORE
                </Button>
              </div>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="order-1 md:order-2 relative group">
            <div className="relative w-full h-full min-h-[400px] md:min-h-[700px] overflow-hidden">
              <ImageWithFallback
                src={profileImage}
                alt="Marci Metzger - Real Estate Professional"
                className="w-full h-full object-cover object-center grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-105"
              />
              {/* Vignette effect overlay */}
              <div 
                className="absolute inset-0 transition-all duration-500 group-hover:opacity-70"
                style={{
                  background: 'radial-gradient(ellipse at center, transparent 0%, rgba(0, 0, 0, 0.3) 50%, rgba(0, 0, 0, 0.7) 100%)'
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* Logos Section */}
      <div className="bg-white pt-20 md:pt-24 lg:pt-28 pb-12 md:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-12 md:gap-20 lg:gap-32">
            {/* The Ridge Realty Group logo */}
            <img
              src="/images/logos/rs=w_100.png"
              srcSet="/images/logos/rs=w_100.png 100w, /images/logos/rs=w_200.png 200w, /images/logos/rs=w_300.png 300w"
              sizes="(min-width: 1280px) 220px, (min-width: 1024px) 200px, (min-width: 768px) 180px, 140px"
              alt="The Ridge Realty Group"
              className="h-16 md:h-24 lg:h-28 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity"
            />

            {/* Equal Housing / Fair Housing style mark */}
            <img
              src="/images/logos/rs=h_100,cg_true.png"
              alt="Equal Housing Opportunity"
              className="h-16 md:h-24 lg:h-28 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity"
            />

            {/* REALTOR / professional affiliation mark */}
            <img
              src="/images/logos/realtor_logo.jpeg"
              srcSet="/images/logos/realtor_logo.jpeg 200w"
              sizes="(min-width: 1280px) 220px, (min-width: 1024px) 200px, (min-width: 768px) 180px, 140px"
              alt="REALTOR professional affiliation"
              className="h-20 md:h-28 lg:h-32 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity"
            />

            {/* Local chamber / community affiliation */}
            <img
              src="/images/logos/rs=w_100.jpeg"
              srcSet="/images/logos/rs=w_100.jpeg 100w, /images/logos/rs=w_200.jpeg 200w, /images/logos/rs=h_100,cg_true,m.jpeg 250w"
              sizes="(min-width: 1280px) 220px, (min-width: 1024px) 200px, (min-width: 768px) 180px, 140px"
              alt="Pahrump Valley Chamber of Commerce"
              className="h-20 md:h-28 lg:h-32 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity"
            />
          </div>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-center mb-12 md:mb-16 text-black font-cinzel">
            <span className="inline-block group cursor-pointer transition-all duration-300 hover:text-blue-400 hover:scale-105">
              Proven Track Record
              <span className="block h-0.5 w-0 bg-blue-400 transition-all duration-300 group-hover:w-full mt-1"></span>
            </span>
          </h2>
          <div className="border-t border-b border-gray-200 pt-8 pb-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 lg:gap-10">
              {stats.map((stat, index) => {
                return (
                  <div
                    key={index}
                    className="text-center group cursor-default transition-transform duration-300 hover:scale-110"
                  >
                    <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-2 font-cinzel transition-transform duration-300 group-hover:scale-105">
                      {stat.value}
                    </div>
                    <div className="text-xs md:text-sm text-gray-700 font-semibold mb-1" style={{ fontFamily: "'Source Sans Pro', arial, sans-serif" }}>
                      {stat.label}
                    </div>
                    {stat.subtext && (
                      <div className="text-xs text-gray-600 mt-1" style={{ fontFamily: "'Source Sans Pro', arial, sans-serif" }}>
                        {stat.subtext}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
