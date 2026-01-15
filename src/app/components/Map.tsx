import { useState } from 'react';
import { Send } from 'lucide-react';

export function Map() {
  const address = "3190 HW-160, Suite F, Pahrump, Nevada 89048, United States";
  // Exact coordinates for the location (lat, lng)
  const latitude = 36.2205;
  const longitude = -116.0132;
  const [zoom, setZoom] = useState(17); // Tighter zoom for precise pin
  
  // Google Maps embed URL with exact coordinates and dynamic zoom
  const mapUrl = `https://www.google.com/maps?q=${latitude},${longitude}&z=${zoom}&output=embed`;

  const googleMapsLink = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address)}`;

  return (
    <section className="w-full bg-gray-100 px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
      <div className="w-full h-[400px] sm:h-[500px] md:h-[600px] relative rounded-lg shadow-xl overflow-hidden">
        {/* Precise Google Maps Embed */}
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
        <div className="absolute top-2 right-2 sm:top-4 sm:right-4 md:top-6 md:right-6 flex flex-col bg-white/90 backdrop-blur-sm rounded-lg sm:rounded-xl shadow-lg overflow-hidden border">
          <button
            type="button"
            aria-label="Zoom in"
            className="px-3 py-1.5 sm:px-4 sm:py-2 text-lg sm:text-xl font-bold hover:bg-gray-100 transition-all duration-200"
            onClick={() => setZoom((z) => Math.min(z + 2, 21))}
          >
            +
          </button>
          <button
            type="button"
            aria-label="Zoom out"
            className="px-3 py-1.5 sm:px-4 sm:py-2 text-lg sm:text-xl font-bold border-t border-gray-200 hover:bg-gray-100 transition-all duration-200"
            onClick={() => setZoom((z) => Math.max(z - 2, 12))}
          >
            −
          </button>
        </div>
        
        {/* Enhanced Address Overlay */}
        <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 md:left-1/2 md:right-auto md:-translate-x-1/2 bg-white/95 backdrop-blur-sm rounded-lg sm:rounded-xl shadow-2xl p-4 sm:p-5 md:p-6 max-w-sm border flex flex-col">
          <h3 className="text-lg sm:text-xl md:text-2xl text-gray-900 mb-2 sm:mb-3 font-cinzel">Visit Our Office</h3>
          <p className="text-sm sm:text-base text-gray-700 mb-3 sm:mb-4 leading-relaxed" style={{ fontFamily: "'Source Sans Pro', arial, sans-serif" }}>
            {address}
          </p>
          <a
            href={googleMapsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center sm:justify-start gap-2 sm:gap-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-lg transition-all duration-200 text-xs sm:text-sm font-semibold shadow-lg hover:shadow-xl hover:-translate-y-0.5 sm:ml-auto"
            style={{ fontFamily: "'Source Sans Pro', arial, sans-serif" }}
          >
            <Send className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            GET DIRECTIONS
          </a>
        </div>
      </div>
    </section>
  );
}
