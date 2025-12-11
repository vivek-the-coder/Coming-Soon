import Link from 'next/link';
import React from 'react';

export interface HeroCTA {
  label: string;
  href: string;
}

export interface HeroProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  description?: string;
  backgroundImage: string;
  align?: 'left' | 'center';
  ctaPrimary?: HeroCTA;
  ctaSecondary?: HeroCTA;
}

const Hero: React.FC<HeroProps> = ({
  eyebrow,
  title,
  subtitle,
  description,
  backgroundImage,
  align = 'left',
  ctaPrimary,
  ctaSecondary,
}) => {
  const alignment = align === 'center' ? 'items-center text-center' : 'items-start text-left';
  const containerWidth = align === 'center' ? 'mx-auto' : '';

  const renderCTA = (cta: HeroCTA, variant: 'primary' | 'secondary') => {
    const className =
      variant === 'primary'
        ? 'inline-flex items-center justify-center rounded-full bg-brand-accent px-8 py-3 text-base font-semibold text-brand-dark transition hover:bg-brand-light hover:text-brand-dark'
        : 'inline-flex items-center justify-center rounded-full border border-white/60 px-8 py-3 text-base font-semibold text-white transition hover:bg-white/10';

    const isInternal = cta.href.startsWith('/');
    const isExternalHttp = /^https?:/i.test(cta.href);
    const target = isExternalHttp ? '_blank' : undefined;
    const rel = isExternalHttp ? 'noreferrer' : undefined;

    if (isInternal) {
      return (
        <Link href={cta.href}>
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
    <section className="relative isolate flex min-h-[70vh] items-center justify-center overflow-hidden bg-brand-dark text-white">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-brand-dark/70 to-black/40" aria-hidden="true" />

      <div className={`relative z-10 mx-auto flex w-full max-w-6xl px-6 py-24 md:py-32 ${alignment}`}>
        <div className={`flex flex-col gap-6 ${containerWidth} max-w-3xl`}>
          {eyebrow && (
            <p className="text-sm uppercase tracking-[0.3em] text-brand-accent">{eyebrow}</p>
          )}
          <h1 className="font-serif text-4xl leading-tight text-white sm:text-5xl lg:text-6xl">{title}</h1>
          {subtitle && <p className="text-xl text-brand-light/90">{subtitle}</p>}
          {description && <p className="text-base text-white/90">{description}</p>}

          {(ctaPrimary || ctaSecondary) && (
            <div className={`flex flex-col gap-4 sm:flex-row ${align === 'center' ? 'sm:justify-center' : ''}`}>
              {ctaPrimary && renderCTA(ctaPrimary, 'primary')}
              {ctaSecondary && renderCTA(ctaSecondary, 'secondary')}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
