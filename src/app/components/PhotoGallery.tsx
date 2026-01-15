import { ImageWithFallback } from '@/app/components/ImageWithFallback';
import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export function PhotoGallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Selected images from gallery - showcasing Pahrump properties and community
  const galleryImages = [
    '/images/gallery/__3.jpeg',
    '/images/gallery/__2.jpeg',
    '/images/gallery/__1.jpeg',
    '/images/gallery/rs=w_1800.jpeg',
    '/images/gallery/rs=w_1095_1.jpeg',
    '/images/gallery/rs=w_1023_3.jpeg',
    '/images/gallery/rs=w_600,h_300,cg_true.jpeg',
  ];

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? galleryImages.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === galleryImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <>
      <section id="gallery" className="py-16 md:py-20 lg:py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl mb-4 text-white font-cinzel">
              <span className="inline-block group cursor-pointer transition-all duration-300 hover:text-blue-400 hover:scale-105">
                Explore Pahrump
                <span className="block h-0.5 w-0 bg-blue-400 transition-all duration-300 group-hover:w-full mt-1"></span>
              </span>
            </h2>
            <p className="text-base md:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: "'Source Sans Pro', arial, sans-serif" }}>
              Discover the beauty of Pahrump and see why so many people choose to call this community home
            </p>
          </div>

          {/* Carousel Container */}
          <div className="relative">
            <div className="overflow-hidden rounded-lg">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {galleryImages.map((image, index) => (
                  <div
                    key={index}
                    className="min-w-full relative aspect-video md:aspect-[16/9] cursor-pointer group"
                    onClick={() => setSelectedImage(image)}
                  >
                    <ImageWithFallback
                      src={image}
                      alt={`Pahrump property ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-300 z-10"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-300 z-10"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
            </button>

            {/* Slide Indicators */}
            <div className="flex justify-center gap-2 mt-4">
              {galleryImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-white w-8' 
                      : 'bg-white/50 w-2 hover:bg-white/70'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
            onClick={() => setSelectedImage(null)}
            aria-label="Close gallery"
          >
            <X className="w-8 h-8" />
          </button>
          <div className="max-w-7xl max-h-[90vh] w-full">
            <ImageWithFallback
              src={selectedImage}
              alt="Gallery image"
              className="w-full h-full object-contain max-h-[90vh]"
            />
          </div>
        </div>
      )}
    </>
  );
}
