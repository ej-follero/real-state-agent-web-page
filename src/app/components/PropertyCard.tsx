import { Bed, Bath, Square, MapPin } from 'lucide-react';
import { Card, CardContent } from '@/app/components/ui/card';
import { ImageWithFallback } from '@/app/components/ImageWithFallback';

interface PropertyCardProps {
  image: string;
  price: string;
  title: string;
  location: string;
  beds: number;
  baths: number;
  sqft: string;
  status?: string;
}

export function PropertyCard({ image, price, title, location, beds, baths, sqft, status }: PropertyCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="relative h-64 overflow-hidden">
        <ImageWithFallback 
          src={image} 
          alt={title}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
        />
        {status && (
          <div className="absolute top-4 right-4 bg-blue-600 text-white px-4 py-2 rounded-full text-sm">
            {status}
          </div>
        )}
      </div>
      <CardContent className="p-6">
        <div className="text-2xl text-blue-600 mb-2">{price}</div>
        <h3 className="text-xl mb-2 text-gray-900 font-cinzel">{title}</h3>
        <div className="flex items-center text-gray-600 mb-4">
          <MapPin className="w-4 h-4 mr-1" />
          <span className="text-sm">{location}</span>
        </div>
        <div className="flex items-center gap-4 text-gray-700 pt-4 border-t">
          <div className="flex items-center">
            <Bed className="w-5 h-5 mr-1" />
            <span>{beds} Beds</span>
          </div>
          <div className="flex items-center">
            <Bath className="w-5 h-5 mr-1" />
            <span>{baths} Baths</span>
          </div>
          <div className="flex items-center">
            <Square className="w-5 h-5 mr-1" />
            <span>{sqft}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
