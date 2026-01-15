export function Affiliations() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-16 md:gap-40 lg:gap-50">
          {/* The Ridge Realty Group logo - responsive sources */}
          <img
            src="/images/logos/rs=w_100.png"
            srcSet="/images/logos/rs=w_100.png 100w, /images/logos/rs=w_200.png 200w, /images/logos/rs=w_300.png 300w"
            sizes="(min-width: 1280px) 220px, (min-width: 1024px) 200px, (min-width: 768px) 180px, 140px"
            alt="The Ridge Realty Group"
            className="h-16 w-auto object-contain"
          />

          {/* Equal Housing / Fair Housing style mark */}
          <img
            src="/images/logos/rs=h_100,cg_true.png"
            alt="Equal Housing Opportunity"
            className="h-16 w-auto object-contain"
          />

          {/* REALTOR / professional affiliation mark */}
          <img
            src="/images/logos/realtor_logo.jpeg"
            srcSet="/images/logos/realtor_logo.jpeg 200w"
            sizes="(min-width: 1280px) 220px, (min-width: 1024px) 200px, (min-width: 768px) 180px, 140px"
            alt="REALTOR professional affiliation"
            className="h-20 w-auto object-contain"
          />

          {/* Local chamber / community affiliation */}
          <img
            src="/images/logos/rs=w_100.jpeg"
            srcSet="/images/logos/rs=w_100.jpeg 100w, /images/logos/rs=w_200.jpeg 200w, /images/logos/rs=h_100,cg_true,m.jpeg 250w"
            sizes="(min-width: 1280px) 220px, (min-width: 1024px) 200px, (min-width: 768px) 180px, 140px"
            alt="Pahrump Valley Chamber of Commerce"
            className="h-20 w-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
}

