import React from 'react';

export interface AmenityItem {
  name: string;
  description: string;
  details?: string;
  icon?: string;
}

export interface AmenitiesListProps {
  title: string;
  subtitle?: string;
  amenities: AmenityItem[];
}

const AmenitiesList: React.FC<AmenitiesListProps> = ({ title, subtitle, amenities }) => (
  <section className="bg-brand-light py-20">
    <div className="mx-auto max-w-6xl px-6">
      <div className="mb-12 max-w-3xl">
        <p className="text-sm uppercase tracking-[0.4em] text-brand-accent">Curated Amenities</p>
        <h2 className="mt-3 font-serif text-4xl text-brand-dark">{title}</h2>
        {subtitle && <p className="mt-4 text-lg text-brand-dark/70">{subtitle}</p>}
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {amenities.map((amenity) => (
          <article key={amenity.name} className="rounded-3xl bg-white/90 p-8 shadow-glow ring-1 ring-brand-muted/60">
            <div className="flex items-center gap-4">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-muted/60 text-2xl">
                {amenity.icon || '✦'}
              </span>
              <div>
                <h3 className="font-serif text-2xl text-brand-dark">{amenity.name}</h3>
                <p className="text-sm uppercase tracking-[0.3em] text-brand-accent">Signature Service</p>
              </div>
            </div>
            <p className="mt-6 text-brand-dark/80">{amenity.description}</p>
            {amenity.details && <p className="mt-4 text-sm text-brand-dark/70">{amenity.details}</p>}
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default AmenitiesList;
