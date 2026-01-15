import { useState, useCallback, useMemo } from 'react';
import { MapPin, Search, X, Loader2, LayoutGrid, Map as MapIcon } from 'lucide-react';
import { Input } from '@/app/components/ui/input';
import { Button } from '@/app/components/ui/button';
import { ImageWithFallback } from '@/app/components/ImageWithFallback';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/app/components/ui/select';
import { Slider } from '@/app/components/ui/slider';
import { usePropertyContext } from '@/app/contexts/PropertyContext';
import { PropertyMap } from './PropertyMap';
import { PropertyCard } from './PropertyCard';

interface SearchData {
  location: string;
  propertyType: string;
  minPrice: string;
  maxPrice: string;
  bedrooms: string;
  bathrooms: string;
  sortBy: string;
}

const initialSearchData: SearchData = {
  location: '',
  propertyType: '',
  minPrice: '',
  maxPrice: '',
  bedrooms: '',
  bathrooms: '',
  sortBy: '',
};

export function PropertySearch() {
  const { 
    searchResults, 
    isSearching,
    viewMode,
    setSearchResults,
    setSearchFilters,
    setIsSearching: setContextIsSearching,
    setViewMode
  } = usePropertyContext();
  
  const [searchData, setSearchData] = useState<SearchData>(initialSearchData);
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Price range constants for slider
  const PRICE_MIN = 0;
  const PRICE_MAX = 5000000;
  const PRICE_STEP = 10000;

  // Parse price from formatted string
  const parsePrice = (value: string): number => {
    return parseInt(value.replace(/[^\d]/g, ''), 10) || 0;
  };

  // Format price input (remove non-numeric characters except commas)
  const formatPrice = (value: string): string => {
    // Remove all non-numeric characters
    const numericValue = value.replace(/[^\d]/g, '');
    if (!numericValue) return '';
    // Format with commas
    return parseInt(numericValue, 10).toLocaleString();
  };

  // Get current price range values for slider
  const getPriceRange = useMemo(() => {
    const min = searchData.minPrice ? parsePrice(searchData.minPrice) : PRICE_MIN;
    const max = searchData.maxPrice && searchData.maxPrice !== 'any' 
      ? parsePrice(searchData.maxPrice) 
      : PRICE_MAX;
    return [min, max] as [number, number];
  }, [searchData.minPrice, searchData.maxPrice]);

  // Format price for display
  const formatPriceDisplay = (value: number): string => {
    if (value >= 1000000) {
      return `$${(value / 1000000).toFixed(1)}M`;
    }
    return `$${(value / 1000).toFixed(0)}K`;
  };

  // Handle price range slider change
  const handlePriceRangeChange = (values: number[]) => {
    const [min, max] = values;
    setSearchData(prev => ({
      ...prev,
      minPrice: min === PRICE_MIN ? '' : formatPrice(min.toString()),
      maxPrice: max === PRICE_MAX ? 'any' : formatPrice(max.toString()),
    }));
    // Clear price errors when slider changes
    if (errors.minPrice || errors.priceRange) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors.minPrice;
        delete newErrors.priceRange;
        return newErrors;
      });
    }
  };

  // Validate form
  const validateForm = useCallback((): boolean => {
    const newErrors: Record<string, string> = {};

    // Validate price range
    if (searchData.minPrice && searchData.maxPrice) {
      const min = parsePrice(searchData.minPrice);
      const max = parsePrice(searchData.maxPrice);
      
      if (min > max) {
        newErrors.priceRange = 'Minimum price cannot be greater than maximum price';
      }
    }

    // Validate min price format
    if (searchData.minPrice && parsePrice(searchData.minPrice) < 0) {
      newErrors.minPrice = 'Price must be a positive number';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [searchData.minPrice, searchData.maxPrice]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setContextIsSearching(true);
    setSearchFilters(searchData); // Save filters to context
    
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock search results - replace with actual API call
      const mockResults = [
        {
          id: '1',
          image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800',
          price: '$1,250,000',
          title: 'Modern Luxury Home',
          location: 'Pahrump, NV',
          address: '123 Main St, Pahrump, NV 89048',
          beds: 4,
          baths: 3,
          sqft: '3,200 sq ft',
          status: 'For Sale',
          latitude: 36.2205,
          longitude: -116.0132,
        },
        {
          id: '2',
          image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800',
          price: '$850,000',
          title: 'Desert Oasis',
          location: 'Pahrump, NV',
          address: '456 Oak Ave, Pahrump, NV 89048',
          beds: 3,
          baths: 2,
          sqft: '2,500 sq ft',
          status: 'For Sale',
          latitude: 36.2300,
          longitude: -116.0100,
        },
        {
          id: '3',
          image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800',
          price: '$650,000',
          title: 'Mountain View Estate',
          location: 'Pahrump, NV',
          address: '789 Pine Rd, Pahrump, NV 89048',
          beds: 5,
          baths: 4,
          sqft: '4,500 sq ft',
          status: 'For Sale',
          latitude: 36.2400,
          longitude: -116.0200,
        },
        {
          id: '4',
          image: 'https://images.unsplash.com/photo-1600585152915-d0bec52c0ffd?w=800',
          price: '$450,000',
          title: 'Cozy Family Home',
          location: 'Pahrump, NV',
          address: '321 Elm St, Pahrump, NV 89048',
          beds: 2,
          baths: 2,
          sqft: '1,800 sq ft',
          status: 'For Sale',
          latitude: 36.2100,
          longitude: -116.0150,
        },
        {
          id: '5',
          image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800',
          price: '$950,000',
          title: 'Desert Retreat',
          location: 'Pahrump, NV',
          address: '555 Canyon Blvd, Pahrump, NV 89048',
          beds: 4,
          baths: 3,
          sqft: '3,000 sq ft',
          status: 'For Sale',
          latitude: 36.2250,
          longitude: -116.0180,
        },
        {
          id: '6',
          image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800',
          price: '$1,500,000',
          title: 'Luxury Golf Course Home',
          location: 'Pahrump, NV',
          address: '888 Fairway Dr, Pahrump, NV 89048',
          beds: 6,
          baths: 5,
          sqft: '5,200 sq ft',
          status: 'For Sale',
          latitude: 36.2350,
          longitude: -116.0120,
        },
      ];
      
      setSearchResults(mockResults);
      console.log('Search:', searchData);
    } catch (error) {
      console.error('Search error:', error);
      setSearchResults([]);
    } finally {
      setContextIsSearching(false);
    }
  };

  const handleChange = (field: keyof SearchData, value: string) => {
    setSearchData(prev => {
      const updated = { ...prev, [field]: value };
      // Clear related errors when field changes
      if (errors[field] || errors.priceRange) {
        setErrors(prevErrors => {
          const newErrors = { ...prevErrors };
          delete newErrors[field];
          delete newErrors.priceRange;
          return newErrors;
        });
      }
      return updated;
    });
  };

  const clearFilters = () => {
    setSearchData(initialSearchData);
    setErrors({});
  };

  const clearSearch = () => {
    setSearchData(initialSearchData);
    setErrors({});
    setSearchResults([]);
  };

  // Remove individual filter
  const removeFilter = (field: keyof SearchData) => {
    setSearchData(prev => ({
      ...prev,
      [field]: field === 'minPrice' || field === 'maxPrice' ? '' : 'any',
    }));
  };

  // Get active filters with labels
  const activeFilters = useMemo(() => {
    const filters: Array<{ field: keyof SearchData; label: string; value: string }> = [];
    
    if (searchData.location) {
      filters.push({ field: 'location', label: 'Location', value: searchData.location });
    }
    if (searchData.propertyType && searchData.propertyType !== 'any') {
      filters.push({ field: 'propertyType', label: 'Type', value: searchData.propertyType });
    }
    if (searchData.minPrice) {
      filters.push({ field: 'minPrice', label: 'Min Price', value: `$${searchData.minPrice}` });
    }
    if (searchData.maxPrice && searchData.maxPrice !== 'any') {
      filters.push({ field: 'maxPrice', label: 'Max Price', value: `$${searchData.maxPrice}` });
    }
    if (searchData.bedrooms && searchData.bedrooms !== 'any') {
      filters.push({ field: 'bedrooms', label: 'Bedrooms', value: `${searchData.bedrooms}+` });
    }
    if (searchData.bathrooms && searchData.bathrooms !== 'any') {
      filters.push({ field: 'bathrooms', label: 'Bathrooms', value: `${searchData.bathrooms}+` });
    }
    if (searchData.sortBy) {
      const sortLabels: Record<string, string> = {
        'newest': 'Newest',
        'oldest': 'Oldest',
        'price-low-to-high': 'Price: Low to High',
        'price-high-to-low': 'Price: High to Low',
        'bedrooms-low-to-high': 'Bedrooms: Low to High',
        'bedrooms-high-to-low': 'Bedrooms: High to Low',
        'bathrooms-low-to-high': 'Bathrooms: Low to High',
        'bathrooms-high-to-low': 'Bathrooms: High to Low',
      };
      filters.push({ field: 'sortBy', label: 'Sort', value: sortLabels[searchData.sortBy] || searchData.sortBy });
    }
    
    return filters;
  }, [searchData]);

  // Count active filters
  const activeFilterCount = activeFilters.length;

  // Check if any filters are active
  const hasActiveFilters = activeFilterCount > 0;

  // Parse price from formatted string (e.g., "$1,250,000" -> 1250000)
  const parsePriceFromString = (priceString: string): number => {
    return parseInt(priceString.replace(/[^\d]/g, ''), 10) || 0;
  };

  // Sort search results based on sortBy value
  const sortedResults = useMemo(() => {
    if (!searchData.sortBy || searchResults.length === 0) {
      return searchResults;
    }

    const results = [...searchResults];

    switch (searchData.sortBy) {
      case 'newest':
        // Sort by id descending (assuming higher id = newer)
        return results.sort((a, b) => parseInt(b.id) - parseInt(a.id));
      
      case 'oldest':
        // Sort by id ascending (assuming lower id = older)
        return results.sort((a, b) => parseInt(a.id) - parseInt(b.id));
      
      case 'price-low-to-high':
        return results.sort((a, b) => {
          const priceA = parsePriceFromString(a.price);
          const priceB = parsePriceFromString(b.price);
          return priceA - priceB;
        });
      
      case 'price-high-to-low':
        return results.sort((a, b) => {
          const priceA = parsePriceFromString(a.price);
          const priceB = parsePriceFromString(b.price);
          return priceB - priceA;
        });
      
      case 'bedrooms-low-to-high':
        return results.sort((a, b) => (a.beds || 0) - (b.beds || 0));
      
      case 'bedrooms-high-to-low':
        return results.sort((a, b) => (b.beds || 0) - (a.beds || 0));
      
      case 'bathrooms-low-to-high':
        return results.sort((a, b) => (a.baths || 0) - (b.baths || 0));
      
      case 'bathrooms-high-to-low':
        return results.sort((a, b) => (b.baths || 0) - (a.baths || 0));
      
      default:
        return results;
    }
  }, [searchResults, searchData.sortBy]);

  return (
    <section id="property-search" className="relative py-20 bg-gray-50 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="/images/gallery/rs=w_1800.jpeg"
          alt="Property search background"
          className="w-full h-full object-cover object-center opacity-20"
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/40 to-white/60"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Title */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-center mb-4 md:mb-6 text-black font-cinzel">
            <span className="inline-block group cursor-pointer transition-all duration-300 hover:text-blue-400 hover:scale-105">
              Find Your Dream Home
              <span className="block h-0.5 w-0 bg-blue-400 transition-all duration-300 group-hover:w-full mt-1"></span>
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto" style={{ fontFamily: "'Source Sans Pro', arial, sans-serif" }}>
            Search through our extensive property listings with advanced filters
          </p>
        </div>


        {/* Search Form Card */}
        <div className="bg-white rounded-xl shadow-xl border border-gray-100 p-6 md:p-8">
          {/* Active Filters Chips */}
          {hasActiveFilters && (
            <div className="mb-6 flex items-center gap-2 flex-wrap">
              {activeFilters.map((filter) => (
                <div
                  key={filter.field}
                  className="inline-flex items-center gap-1.5 bg-gray-100 rounded-md px-2.5 py-1"
                >
                  <span className="text-xs text-gray-600" style={{ fontFamily: "'Source Sans Pro', arial, sans-serif" }}>
                    {filter.value}
                  </span>
                  <button
                    type="button"
                    onClick={() => removeFilter(filter.field)}
                    className="text-gray-400 hover:text-gray-600 transition-colors"
                    aria-label={`Remove ${filter.label} filter`}
                  >
                    <X className="w-3 h-3" />
                  </button>
                </div>
              ))}
              <button
                type="button"
                onClick={clearFilters}
                className="text-xs text-gray-500 hover:text-gray-700 underline"
                style={{ fontFamily: "'Source Sans Pro', arial, sans-serif" }}
              >
                Clear all
              </button>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* First Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Location */}
              <div className="space-y-2">
                <label htmlFor="location" className="block text-sm font-semibold text-gray-700" style={{ fontFamily: "'Source Sans Pro', arial, sans-serif" }}>
                  Location
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none z-10" />
                  <Input
                    id="location"
                    type="text"
                    placeholder="City, ZIP, or Address"
                    value={searchData.location}
                    onChange={(e) => handleChange('location', e.target.value)}
                    className={`pl-10 h-11 ${errors.location ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-gray-300 focus:border-blue-500 focus:ring-blue-500'}`}
                    style={{ fontFamily: "'Source Sans Pro', arial, sans-serif" }}
                    aria-invalid={!!errors.location}
                    aria-describedby={errors.location ? 'location-error' : undefined}
                  />
                </div>
                {errors.location && (
                  <p id="location-error" className="mt-1 text-sm text-red-600 flex items-center gap-1" style={{ fontFamily: "'Source Sans Pro', arial, sans-serif" }}>
                    {errors.location}
                  </p>
                )}
              </div>

              {/* Property Type */}
              <div className="space-y-2">
                <label htmlFor="propertyType" className="block text-sm font-semibold text-gray-700" style={{ fontFamily: "'Source Sans Pro', arial, sans-serif" }}>
                  Property Type
                </label>
                <Select value={searchData.propertyType} onValueChange={(value) => handleChange('propertyType', value)}>
                  <SelectTrigger 
                    id="propertyType" 
                    className="h-11 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                    style={{ fontFamily: "'Source Sans Pro', arial, sans-serif" }}
                  >
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="any">Any</SelectItem>
                    <SelectItem value="house">House</SelectItem>
                    <SelectItem value="condo">Condo</SelectItem>
                    <SelectItem value="townhouse">Townhouse</SelectItem>
                    <SelectItem value="apartment">Apartment</SelectItem>
                    <SelectItem value="land">Land</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Second Row - Bedrooms and Bathrooms */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Bedrooms */}
              <div className="space-y-2">
                <label htmlFor="bedrooms" className="block text-sm font-semibold text-gray-700" style={{ fontFamily: "'Source Sans Pro', arial, sans-serif" }}>
                  Bedrooms
                </label>
                <Select value={searchData.bedrooms} onValueChange={(value) => handleChange('bedrooms', value)}>
                  <SelectTrigger 
                    id="bedrooms" 
                    className="h-11 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                    style={{ fontFamily: "'Source Sans Pro', arial, sans-serif" }}
                  >
                    <SelectValue placeholder="Any" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="any">Any</SelectItem>
                    <SelectItem value="1">1+</SelectItem>
                    <SelectItem value="2">2+</SelectItem>
                    <SelectItem value="3">3+</SelectItem>
                    <SelectItem value="4">4+</SelectItem>
                    <SelectItem value="5">5+</SelectItem>
                    <SelectItem value="6">6+</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Bathrooms */}
              <div className="space-y-2">
                <label htmlFor="bathrooms" className="block text-sm font-semibold text-gray-700" style={{ fontFamily: "'Source Sans Pro', arial, sans-serif" }}>
                  Bathrooms
                </label>
                <Select value={searchData.bathrooms} onValueChange={(value) => handleChange('bathrooms', value)}>
                  <SelectTrigger 
                    id="bathrooms" 
                    className="h-11 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                    style={{ fontFamily: "'Source Sans Pro', arial, sans-serif" }}
                  >
                    <SelectValue placeholder="Any" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="any">Any</SelectItem>
                    <SelectItem value="1">1+</SelectItem>
                    <SelectItem value="2">2+</SelectItem>
                    <SelectItem value="3">3+</SelectItem>
                    <SelectItem value="4">4+</SelectItem>
                    <SelectItem value="5">5+</SelectItem>
                    <SelectItem value="6">6+</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Price Range Slider and Search Button Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-end">
              {/* Price Range Slider */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <label className="block text-sm font-semibold text-gray-700" style={{ fontFamily: "'Source Sans Pro', arial, sans-serif" }}>
                    Price Range
                  </label>
                  <div className="flex items-center gap-2 text-sm font-medium text-gray-600" style={{ fontFamily: "'Source Sans Pro', arial, sans-serif" }}>
                    <span className="text-blue-600">
                      {getPriceRange[0] === PRICE_MIN ? 'Any' : formatPriceDisplay(getPriceRange[0])}
                    </span>
                    <span className="text-gray-400">-</span>
                    <span className="text-blue-600">
                      {getPriceRange[1] === PRICE_MAX ? 'Any' : formatPriceDisplay(getPriceRange[1])}
                    </span>
                  </div>
                </div>
                <div className="px-2">
                  <Slider
                    value={getPriceRange}
                    onValueChange={handlePriceRangeChange}
                    min={PRICE_MIN}
                    max={PRICE_MAX}
                    step={PRICE_STEP}
                    className="w-full"
                  />
                </div>
                <div className="flex items-center justify-between text-xs text-gray-500 px-2" style={{ fontFamily: "'Source Sans Pro', arial, sans-serif" }}>
                  <span>$0</span>
                  <span>$5M+</span>
                </div>
                {errors.priceRange && (
                  <p className="mt-1 text-sm text-red-600 flex items-center gap-1" style={{ fontFamily: "'Source Sans Pro', arial, sans-serif" }}>
                    {errors.priceRange}
                  </p>
                )}
              </div>

              {/* Search Button */}
              <div className="flex justify-end">
                <Button
                  type="submit"
                  disabled={isSearching}
                  className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white h-12 px-14 text-base disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl hover:shadow-blue-500/50 transition-all duration-300 font-semibold w-full md:w-full hover:scale-105 hover:-translate-y-0.5 active:scale-100"
                  style={{ fontFamily: "'Source Sans Pro', arial, sans-serif" }}
                >
                  {isSearching ? (
                    <>
                      <Loader2 className="w-6 h-6 mr-2 animate-spin" />
                      Searching...
                    </>
                  ) : (
                    <>
                      <Search className="w-6 h-6 mr-2" />
                      Search Properties
                    </>
                  )}
                </Button>
              </div>
            </div>
          </form>
        </div>

        {/* Results Section */}
        {searchResults.length > 0 && (
          <div className="mt-8">
            {/* Results Header with View Toggle and Sort */}
            <div className="bg-white rounded-lg shadow-md border border-gray-200 p-4 mb-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                {/* Results Count */}
                <div className="flex items-center gap-3">
                  <h3 className="text-2xl text-gray-900 font-cinzel">
                    Search Results ({searchResults.length})
                  </h3>
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={clearSearch}
                    className="text-sm text-gray-600 hover:text-gray-900"
                    style={{ fontFamily: "'Source Sans Pro', arial, sans-serif" }}
                  >
                    <X className="w-4 h-4 mr-1" />
                    Clear Search
                  </Button>
                </div>
                
                {/* Controls: Sort and View Toggle */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                  {/* Sort By */}
                  <Select value={searchData.sortBy} onValueChange={(value) => handleChange('sortBy', value)}>
                    <SelectTrigger 
                      id="sortBy" 
                      className="h-10 w-[200px] border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                      style={{ fontFamily: "'Source Sans Pro', arial, sans-serif" }}
                    >
                      <SelectValue placeholder="Select sorting option" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="newest">Newest</SelectItem>
                      <SelectItem value="oldest">Oldest</SelectItem>
                      <SelectItem value="price-low-to-high">Price: Low to High</SelectItem>
                      <SelectItem value="price-high-to-low">Price: High to Low</SelectItem>
                      <SelectItem value="bedrooms-low-to-high">Bedrooms: Low to High</SelectItem>
                      <SelectItem value="bedrooms-high-to-low">Bedrooms: High to Low</SelectItem>
                      <SelectItem value="bathrooms-low-to-high">Bathrooms: Low to High</SelectItem>
                      <SelectItem value="bathrooms-high-to-low">Bathrooms: High to Low</SelectItem>
                    </SelectContent>
                  </Select>

                  {/* View Toggle */}
                  <div className="flex gap-2 bg-gray-50 rounded-lg p-1 border border-gray-200">
                    <Button
                      type="button"
                      variant={viewMode === 'list' ? 'default' : 'ghost'}
                      size="sm"
                      onClick={() => setViewMode('list')}
                      className={viewMode === 'list' ? 'bg-blue-600 text-white hover:bg-blue-700' : 'hover:bg-gray-100'}
                    >
                      <LayoutGrid className="w-4 h-4 mr-2" />
                      List
                    </Button>
                    <Button
                      type="button"
                      variant={viewMode === 'map' ? 'default' : 'ghost'}
                      size="sm"
                      onClick={() => setViewMode('map')}
                      className={viewMode === 'map' ? 'bg-blue-600 text-white hover:bg-blue-700' : 'hover:bg-gray-100'}
                    >
                      <MapIcon className="w-4 h-4 mr-2" />
                      Map
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Results Display */}
            {viewMode === 'list' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {sortedResults.map((property) => (
                  <PropertyCard key={property.id} {...property} />
                ))}
              </div>
            ) : (
              <PropertyMap />
            )}
          </div>
        )}
      </div>
    </section>
  );
}
