export function Affiliations() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 lg:flex lg:flex-row lg:flex-wrap items-center justify-center gap-6 sm:gap-8 md:gap-12 lg:gap-40">
          {/* The Ridge Realty Group logo - responsive sources */}
          <div className="flex items-center justify-center w-full lg:w-auto">
            <img
              src="/images/logos/rs=w_100.png"
              srcSet="/images/logos/rs=w_100.png 100w, /images/logos/rs=w_200.png 200w, /images/logos/rs=w_300.png 300w"
              sizes="(min-width: 1280px) 220px, (min-width: 1024px) 200px, (min-width: 768px) 180px, 140px"
              alt="The Ridge Realty Group"
              className="h-16 w-auto object-contain"
            />
          </div>

          {/* Equal Housing / Fair Housing style mark */}
          <div className="flex items-center justify-center w-full lg:w-auto">
            <img
              src="/images/logos/rs=h_100,cg_true.png"
              alt="Equal Housing Opportunity"
              className="h-16 w-auto object-contain"
            />
          </div>

          {/* REALTOR / professional affiliation mark */}
          <div className="flex items-center justify-center w-full lg:w-auto">
            <img
              src="/images/logos/realtor_logo.jpeg"
              srcSet="/images/logos/realtor_logo.jpeg 200w"
              sizes="(min-width: 1280px) 220px, (min-width: 1024px) 200px, (min-width: 768px) 180px, 140px"
              alt="REALTOR professional affiliation"
              className="h-20 w-auto object-contain"
            />
          </div>

          {/* Local chamber / community affiliation */}
          <div className="flex items-center justify-center w-full lg:w-auto">
            <img
              src="/images/logos/rs=w_100.jpeg"
              srcSet="/images/logos/rs=w_100.jpeg 100w, /images/logos/rs=w_200.jpeg 200w, /images/logos/rs=h_100,cg_true,m.jpeg 250w"
              sizes="(min-width: 1280px) 220px, (min-width: 1024px) 200px, (min-width: 768px) 180px, 140px"
              alt="Pahrump Valley Chamber of Commerce"
              className="h-20 w-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

