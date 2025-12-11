import Head from 'next/head';
import type { NextPage } from 'next';
import SiteLayout from '../components/layouts/SiteLayout';
import {
  AmenitiesList,
  ContactCTA,
  GalleryGrid,
  Hero,
  LocationMap,
} from '../components/sections';
import { siteContent } from '../data/siteContent';

const AmenitiesPage: NextPage = () => {
  const { hotel, contact, navigation, shared, pages } = siteContent;
  const content = pages.amenities;

  return (
    <SiteLayout hotel={hotel} contact={contact} navLinks={navigation}>
      <Head>
        <title>Amenities & Experiences | Hotel Sai Darshan</title>
        <meta
          name="description"
          content="Indulge in Ayurvedic therapies, observatory lounges, and curated excursions at Hotel Sai Darshan in Rajpipla."
        />
      </Head>

      <Hero {...content.hero} />

      <section className="bg-white py-16">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="font-serif text-4xl text-brand-dark">{content.wellbeing.title}</h2>
          {content.wellbeing.subtitle && (
            <p className="mt-4 text-lg text-brand-dark/70">{content.wellbeing.subtitle}</p>
          )}
          {content.wellbeing.description && (
            <p className="mt-4 text-base text-brand-dark/70">{content.wellbeing.description}</p>
          )}
        </div>
      </section>

      <AmenitiesList
        title={content.amenitiesSection.title}
        subtitle={content.amenitiesSection.subtitle}
        amenities={shared.amenities}
      />

      <GalleryGrid
        title={content.gallerySection.title}
        subtitle={content.gallerySection.subtitle}
        images={shared.gallery}
      />

      <LocationMap
        title={content.locationSection.title}
        description={content.locationSection.description}
        address={contact.address}
        mapEmbedUrl={contact.mapEmbedUrl}
      />

      <ContactCTA
        title={shared.contactCTA.title}
        description={shared.contactCTA.description}
        primaryAction={shared.contactCTA.primaryAction}
        secondaryAction={shared.contactCTA.secondaryAction}
        contact={contact}
      />
    </SiteLayout>
  );
};

export default AmenitiesPage;
