import Head from 'next/head';
import type { NextPage } from 'next';
import SiteLayout from '../components/layouts/SiteLayout';
import { ContactCTA, Hero, LocationMap } from '../components/sections';
import { siteContent } from '../data/siteContent';

const ContactPage: NextPage = () => {
  const { hotel, contact, navigation, shared, pages } = siteContent;
  const content = pages.contact;

  return (
    <SiteLayout hotel={hotel} contact={contact} navLinks={navigation}>
      <Head>
        <title>Contact | Hotel Sai Darshan</title>
        <meta
          name="description"
          content="Reach Hotel Sai Darshan concierge via phone, email, or visit us on Riverfront Road, Rajpipla, Gujarat."
        />
      </Head>

      <Hero {...content.hero} />

      <section className="bg-white py-16">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-2">
          <article className="rounded-3xl bg-brand-light p-8 shadow-glow">
            <p className="text-sm uppercase tracking-[0.4em] text-brand-accent">{content.concierge.title}</p>
            {content.concierge.subtitle && (
              <h2 className="mt-4 font-serif text-3xl text-brand-dark">{content.concierge.subtitle}</h2>
            )}
            {content.concierge.description && (
              <p className="mt-4 text-brand-dark/80">{content.concierge.description}</p>
            )}
            <dl className="mt-6 space-y-4 text-brand-dark">
              <div>
                <dt className="text-sm uppercase tracking-[0.3em] text-brand-accent">Phone</dt>
                <dd className="mt-1 text-lg">
                  <a href={`tel:${contact.phone.replace(/\s+/g, '')}`}>{contact.phone}</a>
                </dd>
              </div>
              <div>
                <dt className="text-sm uppercase tracking-[0.3em] text-brand-accent">Email</dt>
                <dd className="mt-1 text-lg">
                  <a href={`mailto:${contact.email}`}>{contact.email}</a>
                </dd>
              </div>
              <div>
                <dt className="text-sm uppercase tracking-[0.3em] text-brand-accent">Concierge hours</dt>
                <dd className="mt-1 text-lg">{contact.timings}</dd>
              </div>
            </dl>
          </article>

          <article className="rounded-3xl bg-brand-dark p-8 text-white shadow-glow">
            <p className="text-sm uppercase tracking-[0.4em] text-brand-accent">{content.arrival.title}</p>
            {content.arrival.subtitle && (
              <h2 className="mt-4 font-serif text-3xl">{content.arrival.subtitle}</h2>
            )}
            {content.arrival.description && (
              <p className="mt-4 text-white/80">{content.arrival.description}</p>
            )}
            <p className="mt-6 text-white/90">{contact.address}</p>
          </article>
        </div>
      </section>

      <LocationMap
        title={content.mapSection.title}
        description={content.mapSection.description}
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

export default ContactPage;
