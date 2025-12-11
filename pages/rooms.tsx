import Head from 'next/head';
import type { NextPage } from 'next';
import SiteLayout from '../components/layouts/SiteLayout';
import { ContactCTA, Hero, RoomGrid, Testimonials } from '../components/sections';
import { siteContent } from '../data/siteContent';

const RoomsPage: NextPage = () => {
  const { hotel, contact, navigation, shared, pages } = siteContent;
  const content = pages.rooms;

  return (
    <SiteLayout hotel={hotel} contact={contact} navLinks={navigation}>
      <Head>
        <title>Rooms & Suites | Hotel Sai Darshan</title>
        <meta
          name="description"
          content="Browse Royal Narmada suites, riverfront villas, and garden pavilions at Hotel Sai Darshan Rajpipla."
        />
      </Head>

      <Hero {...content.hero} />

      <section className="bg-white py-16">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="text-sm uppercase tracking-[0.4em] text-brand-accent">{content.hero.eyebrow}</p>
          <h2 className="mt-4 font-serif text-4xl text-brand-dark">{content.intro.title}</h2>
          {content.intro.subtitle && (
            <p className="mt-4 text-lg text-brand-dark/70">{content.intro.subtitle}</p>
          )}
        </div>
      </section>

      <RoomGrid
        title={content.intro.title}
        subtitle={content.intro.subtitle}
        rooms={shared.rooms}
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

export default RoomsPage;
