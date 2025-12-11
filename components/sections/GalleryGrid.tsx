import Image from 'next/image';
import React from 'react';

export interface GalleryImage {
  src: string;
  alt: string;
  width: number;
  height: number;
  category?: string;
}

export interface GalleryGridProps {
  title: string;
  subtitle?: string;
  images: GalleryImage[];
}

const GalleryGrid: React.FC<GalleryGridProps> = ({ title, subtitle, images }) => (
  <section className="bg-white py-20">
    <div className="mx-auto max-w-6xl px-6">
      <div className="mb-12 max-w-3xl">
        <p className="text-sm uppercase tracking-[0.4em] text-brand-accent">Visual Journey</p>
        <h2 className="mt-3 font-serif text-4xl text-brand-dark">{title}</h2>
        {subtitle && <p className="mt-4 text-lg text-brand-dark/70">{subtitle}</p>}
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {images.map((image) => (
          <figure
            key={`${image.src}-${image.alt}`}
            className="group relative overflow-hidden rounded-3xl shadow-xl ring-1 ring-brand-muted/60"
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              layout="responsive"
              objectFit="cover"
              className="transition duration-700 group-hover:scale-110"
            />
            {image.category && (
              <figcaption className="absolute inset-0 flex items-end bg-gradient-to-t from-black/70 via-transparent to-transparent p-6 text-white">
                <div>
                  <p className="text-sm uppercase tracking-[0.4em] text-brand-accent">{image.category}</p>
                  <p className="text-base">{image.alt}</p>
                </div>
              </figcaption>
            )}
          </figure>
        ))}
      </div>
    </div>
  </section>
);

export default GalleryGrid;
