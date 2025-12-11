import Head from 'next/head';
import type { NextPage } from 'next';
import SiteLayout from '../components/layouts/SiteLayout';
import { ContactCTA, Hero, LocationMap, Testimonials } from '../components/sections';
import { siteContent } from '../data/siteContent';

const AboutPage: NextPage = () => {
  const { hotel, contact, navigation, shared, pages } = siteContent;
  const content = pages.about;

  return (
    <SiteLayout hotel={hotel} contact={contact} navLinks={navigation}>
      <Head>
        <title>About | Hotel Sai Darshan Rajpipla</title>
        <meta
          name="description"
          content="Discover the legacy, design philosophy, and values of Hotel Sai Darshan—a restored royal guest wing in Rajpipla."
        />
      </Head>

      <Hero {...content.hero} />

      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-2">
          <div>
            <p className="text-sm uppercase tracking-[0.4em] text-brand-accent">{content.story.headline}</p>
            {content.story.paragraphs.map((paragraph) => (
              <p key={paragraph} className="mt-6 text-lg text-brand-dark/80">
                {paragraph}
              </p>
            ))}
          </div>
          <div className="rounded-3xl bg-brand-light p-8 shadow-glow">
            <h3 className="font-serif text-3xl text-brand-dark">Our curators</h3>
            <p className="mt-4 text-brand-dark/80">
              Designers, landscape artists, and perfumers from across India collaborated to breathe new life into the Rajpipla guest wing. Every corridor carries storytelling plaques documenting provenance and artisans.
            </p>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {content.milestones.map((milestone) => (
                <div key={milestone.label} className="rounded-2xl bg-white/70 p-6 text-center">
                  <p className="text-sm uppercase tracking-[0.4em] text-brand-accent">{milestone.label}</p>
                  <p className="mt-2 font-serif text-4xl text-brand-dark">{milestone.value}</p>
                  <p className="mt-2 text-sm text-brand-dark/70">{milestone.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-brand-light py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="font-serif text-4xl text-brand-dark">{content.values.title}</h2>
          {content.values.subtitle && (
            <p className="mt-4 text-lg text-brand-dark/70">{content.values.subtitle}</p>
          )}
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {content.values.items.map((item) => (
              <article key={item.title} className="rounded-3xl bg-white p-6 shadow-glow">
                <h3 className="font-serif text-2xl text-brand-dark">{item.title}</h3>
                <p className="mt-4 text-brand-dark/80">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Testimonials
        title={content.testimonialsSection.title}
        subtitle={content.testimonialsSection.subtitle}
        testimonials={shared.testimonials}
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

export default AboutPage;
