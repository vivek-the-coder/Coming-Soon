import type {
  AmenityItem,
  ContactInfo,
  GalleryImage,
  HeroProps,
  RoomDetail,
  TestimonialItem,
} from '../components/sections';
import type { HotelInfo, NavLinkItem } from '../components/layouts/SiteLayout';

export interface ExtendedContactInfo extends ContactInfo {
  mapEmbedUrl: string;
}

interface SectionCopy {
  title: string;
  subtitle?: string;
  description?: string;
}

interface SiteContent {
  hotel: HotelInfo;
  navigation: NavLinkItem[];
  contact: ExtendedContactInfo;
  shared: {
    rooms: RoomDetail[];
    amenities: AmenityItem[];
    gallery: GalleryImage[];
    testimonials: TestimonialItem[];
    contactCTA: {
      title: string;
      description: string;
      primaryAction: { label: string; href: string };
      secondaryAction?: { label: string; href: string };
    };
  };
  pages: {
    home: {
      hero: HeroProps;
      roomsSection: SectionCopy;
      amenitiesSection: SectionCopy;
      gallerySection: SectionCopy;
      testimonialsSection: SectionCopy;
      locationSection: SectionCopy;
    };
    rooms: {
      hero: HeroProps;
      intro: SectionCopy;
      testimonialsSection: SectionCopy;
    };
    amenities: {
      hero: HeroProps;
      wellbeing: SectionCopy;
      amenitiesSection: SectionCopy;
      gallerySection: SectionCopy;
      locationSection: SectionCopy;
    };
    gallery: {
      hero: HeroProps;
      curation: SectionCopy;
      gridSection: SectionCopy;
      testimonialsSection: SectionCopy;
    };
    about: {
      hero: HeroProps;
      story: {
        headline: string;
        paragraphs: string[];
      };
      values: SectionCopy & {
        items: { title: string; description: string }[];
      };
      milestones: { label: string; value: string; detail: string }[];
      testimonialsSection: SectionCopy;
      locationSection: SectionCopy;
    };
    contact: {
      hero: HeroProps;
      concierge: SectionCopy;
      arrival: SectionCopy;
      mapSection: SectionCopy;
    };
  };
}

const rooms: RoomDetail[] = [
  {
    name: 'Royal Narmada Suite',
    description:
      'A corner suite that floats over the river canopy with a marble-clad living area, a writing salon, and botanical fragrances curated for each arrival.',
    price: '₹24,000 / night',
    size: '120 m²',
    image:
      'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1800&q=80',
    highlights: ['Panoramic Narmada views', 'Private plunge pool and sundeck', 'Dedicated butler & pillow menu'],
  },
  {
    name: 'Riverfront Villa',
    description:
      'An independent villa with whisper-quiet interiors, a handcrafted four-poster bed, and alfresco dining framed by terracotta jaalis.',
    price: '₹18,500 / night',
    size: '95 m²',
    image:
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1800&q=80',
    highlights: ['Sunken lounge for private tastings', 'Rain-shower courtyard', 'Complimentary sunset high-tea'],
  },
  {
    name: 'Garden Pavilion Studio',
    description:
      'Layered textures, cane furniture, and dappled daylight define this studio that opens into a private tropical garden.',
    price: '₹11,500 / night',
    size: '62 m²',
    image:
      'https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?auto=format&fit=crop&w=1800&q=80',
    highlights: ['Canopy bed with organic linens', 'Immersive sound system', 'In-room tea atelier'],
  },
  {
    name: 'Presidential Darshan Residence',
    description:
      'Two ensuite bedrooms, a formal dining room, and a conservatory lounge ideal for intimate celebrations with curated menus.',
    price: '₹36,000 / night',
    size: '160 m²',
    image:
      'https://images.unsplash.com/photo-1505691723518-36a9b81d74de?auto=format&fit=crop&w=1800&q=80',
    highlights: ['Private bar with mixologist', 'Dedicated wellness therapist on call', 'Airport transfers in a vintage car'],
  },
];

const amenities: AmenityItem[] = [
  {
    name: 'Infinity Sky Pool',
    description: 'A temperature-controlled pool cantilevered over the valley with underwater music and cabana service.',
    details: 'Open 6 am – 10 pm with sunrise hydro rituals every weekend.',
    icon: '🌊',
  },
  {
    name: 'Ayurvedic Atelier Spa',
    description: 'Seven treatment suites, copper soaking tubs, and bespoke dosha-based therapies led by resident vaidya.',
    details: 'Complimentary consultation for in-house guests.',
    icon: '🕯️',
  },
  {
    name: "Chef's Table Aangan",
    description: 'Nine-course tasting inspired by tribal foraging and royal kitchens, plated under hand-beaten brass pendants.',
    details: 'Advance reservations recommended.',
    icon: '🍽️',
  },
  {
    name: 'Riverside Boardwalk',
    description: 'Floating decks for yoga, poetry readings, and bespoke picnics as the Narmada shimmers below.',
    details: 'Sunset artisanal chai every evening at 5:30 pm.',
    icon: '🌿',
  },
  {
    name: 'Observatory Lounge',
    description: 'A domed lounge with analog vinyls, telescope, and night-sky storytelling by local astronomers.',
    details: 'Open till midnight with craft cocktails and mocktails.',
    icon: '✨',
  },
  {
    name: 'Bespoke Excursions',
    description: 'Curated drives to the Statue of Unity, Rajpipla palace trails, and private boat rides on the Karjan reservoir.',
    details: 'Concierge escort and gourmet hampers included.',
    icon: '🚤',
  },
];

const galleryImages: GalleryImage[] = [
  {
    src: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80',
    alt: 'Royal suite lounge',
    width: 1200,
    height: 800,
    category: 'Suites',
  },
  {
    src: 'https://images.unsplash.com/photo-1505691723518-36a9b81d74de?auto=format&fit=crop&w=1200&q=80',
    alt: 'Infinity pool over the valley',
    width: 1200,
    height: 1500,
    category: 'Wellness',
  },
  {
    src: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1200&q=80',
    alt: 'Chef plating the tasting menu',
    width: 1200,
    height: 900,
    category: 'Culinary',
  },
  {
    src: 'https://images.unsplash.com/photo-1505692794400-3045e270ed5d?auto=format&fit=crop&w=1200&q=80',
    alt: 'Spa therapy suite with copper tubs',
    width: 1200,
    height: 900,
    category: 'Wellness',
  },
  {
    src: 'https://images.unsplash.com/photo-1505692949203-30d2ca2172f9?auto=format&fit=crop&w=1200&q=80',
    alt: 'Exterior facade glowing at twilight',
    width: 1200,
    height: 900,
    category: 'Architecture',
  },
  {
    src: 'https://images.unsplash.com/photo-1470246973918-29a93221c455?auto=format&fit=crop&w=1200&q=80',
    alt: 'Botanical courtyard with lanterns',
    width: 1200,
    height: 900,
    category: 'Experiences',
  },
];

const testimonials: TestimonialItem[] = [
  {
    quote:
      'Sai Darshan feels like a private residence with staff that reads your mind. The butler curated a midnight dessert cart that matched our anniversary playlist.',
    guest: 'Anika & Devraj Rao',
    location: 'Ahmedabad, India',
    stay: 'Royal Narmada Suite',
  },
  {
    quote:
      'The culinary team introduced us to tribal grains and paired it with modern plating. Every course had a story and provenance.',
    guest: 'Chef Julian Carter',
    location: 'London, UK',
    stay: 'Riverfront Villa',
  },
  {
    quote:
      'We hosted our leadership offsite here; the boardroom overlooked the forest while the concierge managed every micro detail flawlessly.',
    guest: 'Riya Patel',
    location: 'Mumbai, India',
    stay: 'Presidential Darshan Residence',
  },
];

export const siteContent: SiteContent = {
  hotel: {
    name: 'Hotel Sai Darshan',
    tagline: 'By the Eternal Narmada',
    location: 'Rajpipla, Gujarat',
  },
  navigation: [
    { label: 'Home', href: '/' },
    { label: 'Rooms & Suites', href: '/rooms' },
    { label: 'Amenities', href: '/amenities' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ],
  contact: {
    phone: '+91 90999 12345',
    email: 'reservations@hotelsaidarshan.com',
    address: 'Riverfront Road, Rajpipla, Gujarat 393145',
    timings: '24/7 concierge • Check-in 2 PM • Check-out 11 AM',
    mapEmbedUrl: 'https://maps.google.com/maps?q=Rajpipla%2C%20Gujarat&t=&z=13&ie=UTF8&iwloc=&output=embed',
  },
  shared: {
    rooms,
    amenities,
    gallery: galleryImages,
    testimonials,
    contactCTA: {
      title: 'Reserve your private retreat',
      description:
        'Our guest relations team crafts every itinerary—from jungle breakfasts to vintage car drives—within minutes of your call.',
      primaryAction: { label: 'Plan your stay', href: '/contact' },
      secondaryAction: { label: 'View residences', href: '/rooms' },
    },
  },
  pages: {
    home: {
      hero: {
        eyebrow: 'Boutique luxury in Rajpipla',
        title: 'Hotel Sai Darshan',
        subtitle: 'A 40-key hideaway overlooking the Narmada river and lush royal forests.',
        description:
          'Designed as a modern haveli, the hotel blends Indo-Deco architecture with intuitive service, slow dining rituals, and curated excursions.',
        backgroundImage:
          'https://images.unsplash.com/photo-1501117716987-c8e1ecb210b8?auto=format&fit=crop&w=2000&q=80',
        ctaPrimary: { label: 'Explore rooms & suites', href: '/rooms' },
        ctaSecondary: { label: 'Arrange a visit', href: '/contact' },
      },
      roomsSection: {
        title: 'Signature Rooms & Residences',
        subtitle: 'Every key reveals bespoke art, handcrafted teak, and postcard-perfect frames of the valley.',
      },
      amenitiesSection: {
        title: 'Immersive wellness, culture, and design',
        subtitle: 'From copper soak rituals to telescope lounges, every space reinterprets Rajpipla’s royal heritage.',
      },
      gallerySection: {
        title: 'Step inside the Sai Darshan mood board',
        subtitle: 'Textures, botanicals, and light-filled moments waiting for your arrival.',
      },
      testimonialsSection: {
        title: 'Stories from our guests of honour',
        subtitle: 'Thoughtful gestures and anticipatory service are our signatures.',
      },
      locationSection: {
        title: 'Rooted in the Maharaja’s Rajpipla',
        description: 'We reside minutes from the iconic Rajvant Palace and offer chauffeured access to the Narmada riverfront & Statue of Unity.',
      },
    },
    rooms: {
      hero: {
        eyebrow: 'Suites & Villas',
        title: 'Where every suite narrates a story',
        subtitle: 'Natural materials, artisan textiles, and curated playlists in every space.',
        backgroundImage:
          'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=2000&q=80',
        ctaPrimary: { label: 'Book this season', href: '/contact' },
        ctaSecondary: { label: 'Download factsheet', href: '/gallery' },
      },
      intro: {
        title: 'Residences designed for slow living',
        subtitle:
          'Choose from river-hugging villas, palm-shaded studios, and the Presidential Residence with salon, conservatory, and tasting room.',
      },
      testimonialsSection: {
        title: 'Resident memories',
        subtitle: 'Guests return for milestone celebrations, bespoke proposals, and curated retreats.',
      },
    },
    amenities: {
      hero: {
        eyebrow: 'Experiences',
        title: 'Curated amenities inspired by Rajpipla',
        subtitle: 'Wellness, gastronomy, art, and exploration converge at Sai Darshan.',
        backgroundImage:
          'https://images.unsplash.com/photo-1505692794400-3045e270ed5d?auto=format&fit=crop&w=2000&q=80',
        ctaPrimary: { label: 'Plan your ritual', href: '/contact' },
        ctaSecondary: { label: 'View gallery', href: '/gallery' },
      },
      wellbeing: {
        title: 'Wellbeing that honours heritage',
        subtitle:
          'Our resident therapists, yogis, and forest naturalists curate schedules aligned with sunrise, moon cycles, and seasonal produce.',
        description:
          'Whether it is an earthy potli massage, a foraging trail with tribal artisans, or mixology classes at the Observatory lounge, each experience is customized.',
      },
      amenitiesSection: {
        title: 'Signature amenities',
        subtitle: 'Every ritual is personalised for your stay.',
        description: 'Wellness, dining, and discovery experiences curated entirely to your rhythm.',
      },
      gallerySection: {
        title: 'Scenes from the estate',
        subtitle: 'Wellness, design, and culinary memories captured in soft light.',
      },
      locationSection: {
        title: 'Close to Rajpipla’s icons',
        description: 'Minutes from Rajvant Palace, a scenic drive to the Statue of Unity, and surrounded by teak forests.',
      },
    },
    gallery: {
      hero: {
        eyebrow: 'Gallery',
        title: 'A visual ode to Hotel Sai Darshan',
        subtitle: 'Layered interiors, botanicals, and bespoke craftsmanship captured in natural light.',
        backgroundImage:
          'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=2000&q=80',
        ctaPrimary: { label: 'Schedule a virtual tour', href: '/contact' },
        ctaSecondary: { label: 'Download brochure', href: '/about' },
      },
      curation: {
        title: 'Textures, tones & tranquil frames',
        subtitle: 'Browse curated captures of suites, boardwalks, dining rituals, and moonlit gatherings.',
      },
      gridSection: {
        title: 'Curated frames',
        subtitle: 'Swipe through interiors, gastronomy, and architecture.',
      },
      testimonialsSection: {
        title: 'Loved by aesthetes',
        subtitle: 'Guests often return with fellow creatives, families, and partners to relive the glow.',
      },
    },
    about: {
      hero: {
        eyebrow: 'About the Estate',
        title: 'Crafted for modern Maharajas',
        subtitle: 'Sai Darshan is a love letter to Rajpipla, imagined by designers, botanists, and artisans from across India.',
        backgroundImage:
          'https://images.unsplash.com/photo-1505691723518-36a9b81d74de?auto=format&fit=crop&w=2000&q=80',
        ctaPrimary: { label: 'Meet our concierge', href: '/contact' },
        ctaSecondary: { label: 'Explore the gallery', href: '/gallery' },
      },
      story: {
        headline: 'From palace guest house to boutique retreat',
        paragraphs: [
          'Hotel Sai Darshan was once the Maharaja of Rajpipla’s private guest wing. In 2024 it reopened after a meticulous restoration that blended Indo-Deco lines with biophilic courtyards.',
          'Our creative partners include weavers from Maheshwar, potters from Khavda, and perfumers from Kannauj—each lending their craft to the 40-key estate.',
        ],
      },
      values: {
        title: 'Values that guide every gesture',
        subtitle: 'Design, community, and sustainability anchor our service culture.',
        items: [
          { title: 'Slow hospitality', description: 'No rushed check-ins. Every arrival begins with a tea ritual and personalized fragrance reading.' },
          { title: 'Local collaborations', description: '80% of our ingredients are sourced within a 150 km radius, supporting farmers & artisans.' },
          { title: 'Conscious luxury', description: 'Solar-powered suites, zero single-use plastic, and rainwater harvesting across the estate.' },
        ],
      },
      milestones: [
        { label: 'Keys', value: '40', detail: 'Suites, villas & residences' },
        { label: 'Estate', value: '12 acres', detail: 'Gardens, orchards & boardwalks' },
        { label: 'Legacy', value: '1930', detail: 'Year the guest wing was commissioned' },
      ],
      testimonialsSection: {
        title: 'Hospitality from the heart',
        subtitle: 'We are honoured when guests describe Sai Darshan as their second home.',
      },
      locationSection: {
        title: 'Located within the royal capital',
        description: 'Hotel Sai Darshan sits on Riverfront Road, minutes from Rajvant Palace and curated craft ateliers.',
      },
    },
    contact: {
      hero: {
        eyebrow: 'Contact',
        title: 'Your concierge is a call away',
        subtitle: 'We respond within 15 minutes with a crafted plan for your celebration, retreat, or getaway.',
        backgroundImage:
          'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=2000&q=80',
        ctaPrimary: { label: 'Call concierge', href: 'tel:+919099912345' },
        ctaSecondary: { label: 'Write to us', href: 'mailto:reservations@hotelsaidarshan.com' },
      },
      concierge: {
        title: 'Concierge desk',
        subtitle: 'Phone lines are open round the clock for bespoke itineraries and charter transfers.',
        description: 'Share your celebration dates, wellness goals, or corporate agenda—we respond with mood boards, sample menus, and stay benefits.',
      },
      arrival: {
        title: 'Arriving in Rajpipla',
        subtitle: 'A scenic 90-minute drive from Vadodara airport or 45 minutes from the Statue of Unity helipad.',
        description: 'Complimentary transfers are available for Presidential Residence bookings. Chauffeur-driven heritage cars can be reserved on request.',
      },
      mapSection: {
        title: 'Find us in Rajpipla',
        description: 'The concierge team can arrange chauffeured drives, charter flights, or guided arrivals.',
      },
    },
  },
};
