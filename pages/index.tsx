import Head from 'next/head';
import type { NextPage } from 'next';
import SiteLayout from '../components/layouts/SiteLayout';
import {
  AmenitiesList,
  ContactCTA,
  GalleryGrid,
  Hero,
  LocationMap,
  RoomGrid,
  Testimonials,
} from '../components/sections';
import { siteContent } from '../data/siteContent';

const HomePage: NextPage = () => {
  const { hotel, contact, navigation, shared, pages } = siteContent;
  const home = pages.home;

  return (
    <SiteLayout hotel={hotel} contact={contact} navLinks={navigation}>
      <Head>
        <title>Hotel Sai Darshan | Luxury Retreat in Rajpipla</title>
        <meta
          name="description"
          content="Discover Hotel Sai Darshan, a boutique luxury escape overlooking the Narmada with signature suites, curated amenities, and immersive experiences."
        />
      </Head>

      <Hero {...home.hero} />
      <RoomGrid
        title={home.roomsSection.title}
        subtitle={home.roomsSection.subtitle}
        rooms={shared.rooms.slice(0, 3)}
      />
      <AmenitiesList
        title={home.amenitiesSection.title}
        subtitle={home.amenitiesSection.subtitle}
        amenities={shared.amenities}
      />
      <GalleryGrid
        title={home.gallerySection.title}
        subtitle={home.gallerySection.subtitle}
        images={shared.gallery}
      />
      <Testimonials
        title={home.testimonialsSection.title}
        subtitle={home.testimonialsSection.subtitle}
        testimonials={shared.testimonials}
      />
      <LocationMap
        title={home.locationSection.title}
        description={home.locationSection.description}
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

export default HomePage;
