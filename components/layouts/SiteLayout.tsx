import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { ContactInfo } from '../sections';

export interface NavLinkItem {
  label: string;
  href: string;
}

export interface HotelInfo {
  name: string;
  tagline: string;
  location: string;
}

interface SiteLayoutProps {
  children: React.ReactNode;
  navLinks: NavLinkItem[];
  hotel: HotelInfo;
  contact: ContactInfo;
}

const SiteLayout: React.FC<SiteLayoutProps> = ({ children, navLinks, hotel, contact }) => {
  const router = useRouter();

  return (
    <div className="flex min-h-screen flex-col bg-brand-light text-brand-dark">
      <header className="sticky top-0 z-30 border-b border-brand-muted/60 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-4 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center justify-between gap-6">
            <Link href="/" legacyBehavior>
              <a className="font-serif text-2xl text-brand-dark">
                {hotel.name}
                <span className="block text-xs font-sans uppercase tracking-[0.4em] text-brand-accent">
                  {hotel.tagline}
                </span>
              </a>
            </Link>
          </div>
          <nav className="flex flex-wrap gap-3 text-sm font-medium uppercase tracking-[0.3em] text-brand-dark/70">
            {navLinks.map((item) => {
              const isActive = router.pathname === item.href;
              return (
                <Link key={item.href} href={item.href} legacyBehavior>
                  <a
                    className={`rounded-full px-4 py-2 transition ${
                      isActive
                        ? 'bg-brand-dark text-brand-light'
                        : 'hover:bg-brand-muted/60 hover:text-brand-dark'
                    }`}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {item.label}
                  </a>
                </Link>
              );
            })}
          </nav>
        </div>
      </header>

      <main className="flex-1">{children}</main>

      <footer className="border-t border-brand-muted/60 bg-white">
        <div className="mx-auto grid max-w-6xl gap-6 px-6 py-10 md:grid-cols-3">
          <div>
            <p className="text-sm uppercase tracking-[0.4em] text-brand-accent">Visit</p>
            <p className="mt-2 text-brand-dark/80">{contact.address}</p>
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.4em] text-brand-accent">Call</p>
            <a href={`tel:${contact.phone.replace(/\s+/g, '')}`} className="mt-2 block text-brand-dark/80">
              {contact.phone}
            </a>
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.4em] text-brand-accent">Write</p>
            <a href={`mailto:${contact.email}`} className="mt-2 block text-brand-dark/80">
              {contact.email}
            </a>
          </div>
        </div>
        <div className="border-t border-brand-muted/60 px-6 py-4 text-center text-xs uppercase tracking-[0.3em] text-brand-dark/60">
          {hotel.name} • {hotel.location}
        </div>
      </footer>
    </div>
  );
};

export default SiteLayout;
