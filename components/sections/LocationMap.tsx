import React from 'react';

export interface LocationMapProps {
  title: string;
  description?: string;
  address: string;
  mapEmbedUrl: string;
}

const LocationMap: React.FC<LocationMapProps> = ({ title, description, address, mapEmbedUrl }) => (
  <section className="bg-brand-light py-20">
    <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-2 lg:items-center">
      <div>
        <p className="text-sm uppercase tracking-[0.4em] text-brand-accent">Rajpipla, Gujarat</p>
        <h2 className="mt-3 font-serif text-4xl text-brand-dark">{title}</h2>
        {description && <p className="mt-4 text-lg text-brand-dark/70">{description}</p>}
        <p className="mt-8 text-brand-dark/90">{address}</p>
      </div>
      <div className="overflow-hidden rounded-3xl shadow-glow ring-1 ring-brand-muted/60">
        <iframe
          src={mapEmbedUrl}
          title={title}
          aria-label="Hotel Sai Darshan location map"
          className="h-[28rem] w-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  </section>
);

export default LocationMap;
