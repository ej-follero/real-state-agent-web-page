import { Phone, Mail, Clock, Calendar, Send, MapPin } from 'lucide-react';
import { useState } from 'react';

export function Contact() {
  const address = "3190 HW-160, Suite F, Pahrump, Nevada 89048, United States";
  // Exact coordinates for the location (lat, lng)
  const latitude = 36.2205;
  const longitude = -116.0132;
  const [zoom, setZoom] = useState(17); // Tighter zoom for precise pin
  
  // Google Maps embed URL with exact coordinates and dynamic zoom
  const mapUrl = `https://www.google.com/maps?q=${latitude},${longitude}&z=${zoom}&output=embed`;
  const googleMapsLink = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address)}`;

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
        {/* Header Section */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center mb-3 sm:mb-4 md:mb-5 lg:mb-6 text-black font-cinzel">
            <span className="inline-block group cursor-pointer transition-all duration-300 hover:text-blue-400 hover:scale-105">
              Let's Talk
              <span className="block h-0.5 w-0 bg-blue-400 transition-all duration-300 group-hover:w-full mt-1"></span>
            </span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-2 sm:px-4" style={{ fontFamily: "'Source Sans Pro', arial, sans-serif" }}>
            Have questions? Want to know what your home is worth? Or just ready to start your real estate journey? I'm here to help. Reach out and let's have a conversation about how I can assist you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16">
          {/* Contact Information - Left Side */}
          <div className="space-y-4 sm:space-y-6 md:space-y-8">
            <div>
              <div className="space-y-3 sm:space-y-4 md:space-y-5 lg:space-y-4">
                <div className="flex items-start">
                  <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-2.5 sm:p-3 md:p-4 rounded-lg sm:rounded-xl mr-3 sm:mr-4 md:mr-5 shadow-md transition-transform duration-300 flex-shrink-0">
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
                  </div>
                  <div className="flex-1 pt-0.5 sm:pt-1">
                    <div className="text-gray-900 mb-1.5 sm:mb-2 font-semibold text-sm sm:text-base md:text-lg" style={{ fontFamily: "'Source Sans Pro', arial, sans-serif" }}>Give Me a Call</div>
                    <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                      <a href="tel:+12069196886" className="text-gray-700 hover:text-blue-600 transition-colors font-medium text-xs sm:text-sm md:text-base hover:underline" style={{ fontFamily: "'Source Sans Pro', arial, sans-serif" }}>
                        (206) 919-6886
                      </a>
                      <span className="text-gray-400 text-xs sm:text-sm">/</span>
                      <a href="tel:+14259412560" className="text-gray-700 hover:text-blue-600 transition-colors font-medium text-xs sm:text-sm md:text-base hover:underline" style={{ fontFamily: "'Source Sans Pro', arial, sans-serif" }}>
                        (425) 941-2560
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-2.5 sm:p-3 md:p-4 rounded-lg sm:rounded-xl mr-3 sm:mr-4 md:mr-5 shadow-md transition-transform duration-300 flex-shrink-0">
                    <Mail className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
                  </div>
                  <div className="flex-1 pt-0.5 sm:pt-1">
                    <div className="text-gray-900 mb-1.5 sm:mb-2 font-semibold text-sm sm:text-base md:text-lg" style={{ fontFamily: "'Source Sans Pro', arial, sans-serif" }}>Send Me an Email</div>
                    <a href="mailto:marcimetzger@gmail.com" className="text-gray-700 hover:text-blue-600 transition-colors break-all text-xs sm:text-sm md:text-base hover:underline" style={{ fontFamily: "'Source Sans Pro', arial, sans-serif" }}>
                      marcimetzger@gmail.com
                    </a>
                  </div>
                </div>

                {/* Office Address */}
                <div className="flex items-start">
                  <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-2.5 sm:p-3 md:p-4 rounded-lg sm:rounded-xl mr-3 sm:mr-4 md:mr-5 shadow-md transition-transform duration-300 flex-shrink-0">
                    <MapPin className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
                  </div>
                  <div className="flex-1 pt-0.5 sm:pt-1">
                    <div className="text-gray-900 mb-1.5 sm:mb-2 font-semibold text-sm sm:text-base md:text-lg" style={{ fontFamily: "'Source Sans Pro', arial, sans-serif" }}>Visit Our Office</div>
                    <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed" style={{ fontFamily: "'Source Sans Pro', arial, sans-serif" }}>
                      {address}
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-2.5 sm:p-3 md:p-4 rounded-lg sm:rounded-xl mr-3 sm:mr-4 md:mr-5 shadow-md transition-transform duration-300 flex-shrink-0">
                    <Clock className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
                  </div>
                  <div className="flex-1 pt-0.5 sm:pt-1">
                    <div className="text-gray-900 mb-1.5 sm:mb-2 font-semibold text-sm sm:text-base md:text-lg" style={{ fontFamily: "'Source Sans Pro', arial, sans-serif" }}>When I'm Available</div>
                    <div className="text-gray-700 leading-relaxed text-xs sm:text-sm md:text-base" style={{ fontFamily: "'Source Sans Pro', arial, sans-serif" }}>
                      Monday - Sunday: 8:00 AM - 7:00 PM
                    </div>
                  </div>
                </div>
                <p className="text-xs sm:text-sm md:text-base text-gray-700 mt-3 sm:mt-4 font-medium italic" style={{ fontFamily: "'Source Sans Pro', arial, sans-serif" }}>
                  Need to meet outside these hours? Just give me a call—I'm happy to work around your schedule!
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 sm:pt-4 flex flex-col sm:flex-row gap-2.5 sm:gap-3 md:gap-4">
              <a
                href="https://wa.me/12069196886"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 rounded-lg sm:rounded-xl transition-all duration-300 w-full sm:w-auto justify-center shadow-lg hover:shadow-xl hover:-translate-y-1 font-semibold text-xs sm:text-sm md:text-base"
                style={{ fontFamily: "'Source Sans Pro', arial, sans-serif" }}
              >
                {/* WhatsApp Icon */}
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-shrink-0 group-hover:scale-110 transition-transform duration-300 sm:w-5 sm:h-5 md:w-6 md:h-6"
                >
                  <path
                    d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"
                    fill="currentColor"
                  />
                </svg>
                <span>Message us on WhatsApp</span>
              </a>
              
              <button
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                  // Open floating chat if available
                  const chatButton = document.querySelector('[aria-label="Open chat"]') as HTMLElement;
                  if (chatButton) {
                    setTimeout(() => chatButton.click(), 500);
                  }
                }}
                className="group inline-flex items-center gap-2 sm:gap-3 bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 rounded-lg sm:rounded-xl transition-all duration-300 w-full sm:w-auto justify-center md:justify-start shadow-lg hover:shadow-xl hover:-translate-y-1 font-semibold text-xs sm:text-sm md:text-base"
                style={{ fontFamily: "'Source Sans Pro', arial, sans-serif" }}
              >
                <Calendar className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                <span>Book an Appointment</span>
              </button>
            </div>
          </div>

          {/* Map Section - Right Side */}
          <div className="w-full flex flex-col gap-3 sm:gap-4 md:gap-5 lg:gap-4">
            {/* Map */}
            <div className="bg-white rounded-lg sm:rounded-xl md:rounded-2xl shadow-2xl overflow-hidden border border-gray-200 h-[300px] sm:h-[380px] md:h-[420px] lg:h-[480px] xl:h-[520px] w-full relative">
              {/* Google Maps Embed */}
              <iframe
                key={zoom}
                src={mapUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Marci Metzger Homes - Pahrump Office"
                className="w-full h-full"
              />

              {/* Zoom controls */}
              <div className="absolute top-1.5 right-1.5 sm:top-2 sm:right-2 md:top-4 md:right-4 flex flex-col bg-white/95 backdrop-blur-md rounded-md sm:rounded-lg shadow-xl overflow-hidden border border-gray-200">
                <button
                  type="button"
                  aria-label="Zoom in"
                  className="px-2 py-1.5 sm:px-3 sm:py-2 md:px-4 md:py-2.5 text-base sm:text-lg md:text-xl font-bold text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-all duration-200 active:bg-blue-100"
                  onClick={() => setZoom((z) => Math.min(z + 2, 21))}
                >
                  +
                </button>
                <button
                  type="button"
                  aria-label="Zoom out"
                  className="px-2 py-1.5 sm:px-3 sm:py-2 md:px-4 md:py-2.5 text-base sm:text-lg md:text-xl font-bold text-gray-700 border-t border-gray-200 hover:bg-blue-50 hover:text-blue-600 transition-all duration-200 active:bg-blue-100"
                  onClick={() => setZoom((z) => Math.max(z - 2, 12))}
                >
                  −
                </button>
              </div>

              {/* GET DIRECTIONS Button */}
              <a
                href={googleMapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-6 sm:translate-y-8 md:translate-y-12 group inline-flex items-center justify-center gap-1.5 sm:gap-2 bg-gradient-to-r from-gray-200 to-gray-300 hover:from-gray-300 hover:to-gray-400 hover:opacity-90 text-gray-800 px-3 py-1.5 sm:px-4 sm:py-2 rounded-md transition-opacity duration-200 text-xs sm:text-sm font-semibold shadow-lg backdrop-blur-sm bg-white/95 border border-gray-300 whitespace-nowrap z-10"
                style={{ fontFamily: "'Source Sans Pro', arial, sans-serif" }}
              >
                <Send className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-gray-800 transition-opacity group-hover:opacity-80" />
                GET DIRECTIONS
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
