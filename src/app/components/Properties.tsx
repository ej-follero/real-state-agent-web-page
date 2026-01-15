import { PropertyCard } from '@/app/components/PropertyCard';

export function Properties() {
  const properties = [
    {
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBwcm9wZXJ0eXxlbnwxfHx8fDE3NjgzMDE2ODR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      price: '$1,850,000',
      title: 'Luxury Modern Villa',
      location: 'Beverly Hills, CA',
      beds: 5,
      baths: 4,
      sqft: '4,200 sq ft',
      status: 'For Sale'
    },
    {
      image: 'https://images.unsplash.com/photo-1593696140826-c58b021acf8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob3VzZSUyMGludGVyaW9yfGVufDF8fHx8MTc2ODIxMzM3M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      price: '$950,000',
      title: 'Contemporary Estate',
      location: 'Santa Monica, CA',
      beds: 4,
      baths: 3,
      sqft: '3,100 sq ft',
      status: 'New'
    },
    {
      image: 'https://images.unsplash.com/photo-1659720879195-d5a108231648?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW1wb3JhcnklMjBob21lfGVufDF8fHx8MTc2ODIxNzAyMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      price: '$1,250,000',
      title: 'Modern Family Home',
      location: 'Malibu, CA',
      beds: 4,
      baths: 3.5,
      sqft: '3,800 sq ft'
    },
    {
      image: 'https://images.unsplash.com/photo-1763478958776-ebd04b6459ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWFsJTIwZXN0YXRlJTIwbGlzdGluZ3xlbnwxfHx8fDE3NjgzMDE2ODR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      price: '$2,100,000',
      title: 'Executive Mansion',
      location: 'Pacific Palisades, CA',
      beds: 6,
      baths: 5,
      sqft: '5,500 sq ft',
      status: 'For Sale'
    },
    {
      image: 'https://images.unsplash.com/photo-1723110994499-df46435aa4b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob21lJTIwZXh0ZXJpb3J8ZW58MXx8fHwxNzY4MTg0MDk1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      price: '$1,450,000',
      title: 'Elegant Mediterranean',
      location: 'Westwood, CA',
      beds: 5,
      baths: 4,
      sqft: '4,000 sq ft'
    },
    {
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBwcm9wZXJ0eXxlbnwxfHx8fDE3NjgzMDE2ODR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      price: '$875,000',
      title: 'Coastal Retreat',
      location: 'Manhattan Beach, CA',
      beds: 3,
      baths: 2.5,
      sqft: '2,400 sq ft',
      status: 'New'
    }
  ];

  return (
    <section id="properties" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl mb-4 text-gray-900 font-cinzel">Featured Properties</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our handpicked selection of exceptional homes and investment opportunities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property, index) => (
            <PropertyCard key={index} {...property} />
          ))}
        </div>
      </div>
    </section>
  );
}
