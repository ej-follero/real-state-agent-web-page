import { createContext, useContext, useState, ReactNode } from 'react';

export interface Property {
  id: string;
  image: string;
  price: string;
  title: string;
  location: string;
  address: string;
  beds: number;
  baths: number;
  sqft: string;
  status?: string;
  latitude?: number;
  longitude?: number;
}

export interface SearchFilters {
  location: string;
  propertyType: string;
  minPrice: string;
  maxPrice: string;
  bedrooms: string;
  bathrooms: string;
  sortBy: string;
}

interface PropertyContextType {
  searchResults: Property[];
  searchFilters: SearchFilters;
  isSearching: boolean;
  viewMode: 'list' | 'map';
  setSearchResults: (results: Property[]) => void;
  setSearchFilters: (filters: SearchFilters) => void;
  setIsSearching: (isSearching: boolean) => void;
  setViewMode: (mode: 'list' | 'map') => void;
}

const PropertyContext = createContext<PropertyContextType | undefined>(undefined);

export function PropertyProvider({ children }: { children: ReactNode }) {
  const [searchResults, setSearchResults] = useState<Property[]>([]);
  const [searchFilters, setSearchFilters] = useState<SearchFilters>({
    location: '',
    propertyType: '',
    minPrice: '',
    maxPrice: '',
    bedrooms: '',
    bathrooms: '',
    sortBy: '',
  });
  const [isSearching, setIsSearching] = useState(false);
  const [viewMode, setViewMode] = useState<'list' | 'map'>('list');

  return (
    <PropertyContext.Provider
      value={{
        searchResults,
        searchFilters,
        isSearching,
        viewMode,
        setSearchResults,
        setSearchFilters,
        setIsSearching,
        setViewMode,
      }}
    >
      {children}
    </PropertyContext.Provider>
  );
}

export function usePropertyContext() {
  const context = useContext(PropertyContext);
  if (context === undefined) {
    throw new Error('usePropertyContext must be used within a PropertyProvider');
  }
  return context;
}
