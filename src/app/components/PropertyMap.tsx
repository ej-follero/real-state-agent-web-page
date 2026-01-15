import { useState } from 'react';
import { usePropertyContext } from '@/app/contexts/PropertyContext';
import { MapPin, ZoomIn, ZoomOut } from 'lucide-react';

export function PropertyMap() {
  const { searchResults, searchFilters } = usePropertyContext();
  const [zoom, setZoom] = useState(12);

  // Default center (office location)
  const defaultLat = 36.2205;
  const defaultLng = -116.0132;

  // Calculate map center based on properties or default
  const mapCenter = searchResults.length > 0
    ? {
        lat: searchResults.reduce((sum, p) => sum + (p.latitude || defaultLat), 0) / searchResults.length,
        lng: searchResults.reduce((sum, p) => sum + (p.longitude || defaultLng), 0) / searchResults.length,
      }
    : { lat: defaultLat, lng: defaultLng };

  // Build Google Maps URL with markers
  const buildMapUrl = () => {
    if (searchResults.length === 0) {
      // Show office location if no properties
      return `https://www.google.com/maps?q=${defaultLat},${defaultLng}&z=${zoom}&output=embed`;
    }

    // Build markers query string
    const markers = searchResults
      .filter(p => p.latitude && p.longitude)
      .map(p => `${p.latitude},${p.longitude}`)
      .join('|');

    if (markers) {
      return `https://www.google.com/maps?q=${mapCenter.lat},${mapCenter.lng}&z=${zoom}&output=embed&markers=${markers}`;
    }

    return `https://www.google.com/maps?q=${mapCenter.lat},${mapCenter.lng}&z=${zoom}&output=embed`;
  };

  const mapUrl = buildMapUrl();

  return (
    <div className="w-full h-[500px] md:h-[600px] relative rounded-lg shadow-xl overflow-hidden bg-gray-200">
      {/* Google Maps Embed */}
      <iframe
        key={`${mapUrl}-${zoom}`}
        src={mapUrl}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Property Search Map"
        className="w-full h-full"
      />

      {/* Zoom controls */}
      <div className="absolute top-6 right-6 flex flex-col bg-white/90 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden border">
        <button
          type="button"
          aria-label="Zoom in"
          className="px-4 py-2 text-xl font-bold hover:bg-gray-100 transition-all duration-200"
          onClick={() => setZoom((z) => Math.min(z + 2, 21))}
        >
          <ZoomIn className="w-5 h-5" />
        </button>
        <button
          type="button"
          aria-label="Zoom out"
          className="px-4 py-2 text-xl font-bold border-t border-gray-200 hover:bg-gray-100 transition-all duration-200"
          onClick={() => setZoom((z) => Math.max(z - 2, 8))}
        >
          <ZoomOut className="w-5 h-5" />
        </button>
      </div>

      {/* Results count badge */}
      {searchResults.length > 0 && (
        <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm rounded-lg shadow-lg px-4 py-2 border">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-medium text-gray-900" style={{ fontFamily: "'Source Sans Pro', arial, sans-serif" }}>
              {searchResults.length} {searchResults.length === 1 ? 'property' : 'properties'} found
            </span>
          </div>
        </div>
      )}

      {/* Search location indicator */}
      {searchFilters.location && (
        <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm rounded-lg shadow-lg px-4 py-2 border max-w-xs">
          <p className="text-xs text-gray-500 mb-1" style={{ fontFamily: "'Source Sans Pro', arial, sans-serif" }}>
            Searching near:
          </p>
          <p className="text-sm font-medium text-gray-900" style={{ fontFamily: "'Source Sans Pro', arial, sans-serif" }}>
            {searchFilters.location}
          </p>
        </div>
      )}
    </div>
  );
}
