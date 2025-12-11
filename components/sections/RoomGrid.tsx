import Image from 'next/image';
import React from 'react';

export interface RoomDetail {
  name: string;
  description: string;
  price: string;
  size: string;
  image: string;
  highlights: string[];
}

export interface RoomGridProps {
  title: string;
  subtitle?: string;
  rooms: RoomDetail[];
}

const RoomGrid: React.FC<RoomGridProps> = ({ title, subtitle, rooms }) => (
  <section className="bg-white py-20">
    <div className="mx-auto max-w-6xl px-6">
      <div className="mb-12 max-w-3xl">
        <p className="text-sm uppercase tracking-[0.4em] text-brand-accent">Suites & Residences</p>
        <h2 className="mt-3 font-serif text-4xl text-brand-dark">{title}</h2>
        {subtitle && <p className="mt-4 text-lg text-brand-dark/70">{subtitle}</p>}
      </div>

      <div className="grid gap-10 md:grid-cols-2">
        {rooms.map((room) => (
          <article
            key={room.name}
            className="overflow-hidden rounded-3xl bg-white shadow-xl ring-1 ring-brand-muted/60"
          >
            <div className="overflow-hidden">
              <Image
                src={room.image}
                alt={room.name}
                width={900}
                height={600}
                layout="responsive"
                objectFit="cover"
                className="h-full w-full transition duration-700 ease-out hover:scale-105"
              />
            </div>
            <div className="space-y-4 px-8 py-8">
              <div className="flex flex-wrap items-baseline justify-between gap-4">
                <div>
                  <h3 className="font-serif text-2xl text-brand-dark">{room.name}</h3>
                  <p className="text-sm uppercase tracking-[0.3em] text-brand-accent">{room.size}</p>
                </div>
                <p className="text-lg font-semibold text-brand-dark">{room.price}</p>
              </div>
              <p className="text-brand-dark/70">{room.description}</p>
              <ul className="grid gap-2 text-sm text-brand-dark/80">
                {room.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-brand-accent" aria-hidden />
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default RoomGrid;
