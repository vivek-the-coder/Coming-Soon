import React, { useEffect, useState } from 'react';

export interface TestimonialItem {
  quote: string;
  guest: string;
  location: string;
  stay?: string;
}

export interface TestimonialsProps {
  title: string;
  subtitle?: string;
  testimonials: TestimonialItem[];
  interval?: number;
}

const Testimonials: React.FC<TestimonialsProps> = ({
  title,
  subtitle,
  testimonials,
  interval = 7000,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!testimonials.length) {
      return undefined;
    }

    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, interval);

    return () => {
      clearInterval(timer);
    };
  }, [interval, testimonials.length]);

  if (!testimonials.length) {
    return null;
  }

  const activeTestimonial = testimonials[activeIndex];

  return (
    <section className="bg-brand-dark text-white">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-12 max-w-3xl">
          <p className="text-sm uppercase tracking-[0.4em] text-brand-accent">Guest Stories</p>
          <h2 className="mt-3 font-serif text-4xl">{title}</h2>
          {subtitle && <p className="mt-4 text-lg text-white/80">{subtitle}</p>}
        </div>

        <div className="rounded-3xl bg-white/10 p-8 shadow-glow backdrop-blur">
          <p className="text-2xl leading-relaxed text-white/90">“{activeTestimonial.quote}”</p>
          <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="font-serif text-2xl text-brand-accent">{activeTestimonial.guest}</p>
              <p className="text-sm uppercase tracking-[0.3em] text-white/60">
                {activeTestimonial.location}
                {activeTestimonial.stay ? ` • ${activeTestimonial.stay}` : ''}
              </p>
            </div>
            <div className="flex items-center gap-4">
              <button
                type="button"
                onClick={() =>
                  setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
                }
                className="h-12 w-12 rounded-full border border-white/30 text-lg text-white transition hover:bg-white/10"
                aria-label="Previous testimonial"
              >
                ‹
              </button>
              <button
                type="button"
                onClick={() => setActiveIndex((prev) => (prev + 1) % testimonials.length)}
                className="h-12 w-12 rounded-full border border-white/30 text-lg text-white transition hover:bg-white/10"
                aria-label="Next testimonial"
              >
                ›
              </button>
            </div>
          </div>
          <div className="mt-8 flex gap-2">
            {testimonials.map((_, index) => (
              <span
                key={`testimonial-dot-${index.toString()}`}
                className={`h-1 flex-1 rounded-full transition ${
                  index === activeIndex ? 'bg-brand-accent' : 'bg-white/20'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
