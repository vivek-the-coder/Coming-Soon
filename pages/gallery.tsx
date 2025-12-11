import Head from 'next/head';
import type { NextPage } from 'next';
import SiteLayout from '../components/layouts/SiteLayout';
import { ContactCTA, GalleryGrid, Hero, Testimonials } from '../components/sections';
import { siteContent } from '../data/siteContent';

const GalleryPage: NextPage = () => {
  const { hotel, contact, navigation, shared, pages } = siteContent;
  const content = pages.gallery;

  return (
    <SiteLayout hotel={hotel} contact={contact} navLinks={navigation}>
      <Head>
        <title>Gallery | Hotel Sai Darshan Rajpipla</title>
        <meta
          name="description"
          content="Explore the visual gallery of Hotel Sai Darshan—from signature suites to riverside rituals and twilight gatherings."
        />
      </Head>

      <Hero {...content.hero} />

      <section className="bg-white py-16">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="font-serif text-4xl text-brand-dark">{content.curation.title}</h2>
          {content.curation.subtitle && (
            <p className="mt-4 text-lg text-brand-dark/70">{content.curation.subtitle}</p>
          )}
        </div>
      </section>

      <GalleryGrid
        title={content.gridSection.title}
        subtitle={content.gridSection.subtitle}
        images={shared.gallery}
      />

      <Testimonials
        title={content.testimonialsSection.title}
        subtitle={content.testimonialsSection.subtitle}
        testimonials={shared.testimonials}
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

export default GalleryPage;
