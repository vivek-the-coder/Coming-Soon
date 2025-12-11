import Link from 'next/link';
import React from 'react';

export interface ContactInfo {
  phone: string;
  email: string;
  address: string;
  timings: string;
}

export interface ContactCTAProps {
  title: string;
  description?: string;
  primaryAction?: { label: string; href: string };
  secondaryAction?: { label: string; href: string };
  contact: ContactInfo;
}

const ContactCTA: React.FC<ContactCTAProps> = ({
  title,
  description,
  primaryAction,
  secondaryAction,
  contact,
}) => {
  const renderCTA = (cta: { label: string; href: string }, primary: boolean) => {
    const className = primary
      ? 'inline-flex items-center justify-center rounded-full bg-brand-accent px-8 py-3 text-base font-semibold text-brand-dark transition hover:bg-brand-light'
      : 'inline-flex items-center justify-center rounded-full border border-white/40 px-8 py-3 text-base font-semibold text-white transition hover:bg-white/10';

    const isInternal = cta.href.startsWith('/');
    const isExternalHttp = /^https?:/i.test(cta.href);
    const target = isExternalHttp ? '_blank' : undefined;
    const rel = isExternalHttp ? 'noreferrer' : undefined;

    if (isInternal) {
      return (
        <Link href={cta.href} legacyBehavior>
          <a className={className}>{cta.label}</a>
        </Link>
      );
    }

    return (
      <a href={cta.href} className={className} target={target} rel={rel}>
        {cta.label}
      </a>
    );
  };

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 rounded-3xl bg-brand-dark px-10 py-12 text-white shadow-glow lg:grid-cols-2">
          <div>
            <p className="text-sm uppercase tracking-[0.4em] text-brand-accent">Reservations</p>
            <h2 className="mt-3 font-serif text-4xl">{title}</h2>
            {description && <p className="mt-4 text-lg text-white/80">{description}</p>}
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              {primaryAction && renderCTA(primaryAction, true)}
              {secondaryAction && renderCTA(secondaryAction, false)}
            </div>
          </div>
          <div className="rounded-3xl bg-white/5 p-8">
            <dl className="space-y-6 text-white/80">
              <div>
                <dt className="text-sm uppercase tracking-[0.3em] text-brand-accent">Call</dt>
                <dd className="mt-2 text-lg">
                  <a href={`tel:${contact.phone.replace(/\s+/g, '')}`}>{contact.phone}</a>
                </dd>
              </div>
              <div>
                <dt className="text-sm uppercase tracking-[0.3em] text-brand-accent">Write</dt>
                <dd className="mt-2 text-lg">
                  <a href={`mailto:${contact.email}`}>{contact.email}</a>
                </dd>
              </div>
              <div>
                <dt className="text-sm uppercase tracking-[0.3em] text-brand-accent">Visit</dt>
                <dd className="mt-2 text-lg">{contact.address}</dd>
              </div>
              <div>
                <dt className="text-sm uppercase tracking-[0.3em] text-brand-accent">Guest Services</dt>
                <dd className="mt-2 text-lg">{contact.timings}</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
