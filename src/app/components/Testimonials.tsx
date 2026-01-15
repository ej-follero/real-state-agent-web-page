export function Testimonials() {
  return (
    <section id="testimonials-section" className="py-16 md:py-20 lg:py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl mb-4 md:mb-6 text-white font-cinzel">
            <span className="inline-block group cursor-pointer transition-all duration-300 hover:text-blue-400 hover:scale-105">
              Client Testimonials
              <span className="block h-0.5 w-0 bg-blue-400 transition-all duration-300 group-hover:w-full mt-1"></span>
            </span>
          </h2>
          <p className="text-base md:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: "'Source Sans Pro', arial, sans-serif" }}>
            Don't just take my word for it—here's what my clients have to say about working with us
          </p>
        </div>
        
        {/* Trustmary Widget */}
        <div 
          data-trustmary-widget="APB4o8wbz" 
          className="w-full rounded-lg overflow-hidden" 
          style={{ minHeight: '500px' }}
        />
      </div>
    </section>
  );
}
