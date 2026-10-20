import { ServiceItem, ProjectItem, Testimonial, FaqItem } from '../types';

export const HERO_IMAGE = '/src/assets/images/hero_reform_malaga_1792507180289.jpg';
export const KITCHEN_AFTER_IMAGE = '/src/assets/images/reform_kitchen_modern_1792507197640.jpg';
export const KITCHEN_BEFORE_IMAGE = '/src/assets/images/reform_before_dated_1792507198892.jpg';
export const BATHROOM_AFTER_IMAGE = '/src/assets/images/reform_bathroom_luxury_1792507198053.jpg';
export const VILLA_SALON_IMAGE = '/src/assets/images/reform_villa_salon_1792507215859.jpg';

export const COMPANY_CONTACT = {
  name: 'DONE ALL Renovations',
  phone: '+34 951 82 91 19',
  phoneClean: '+34951829119',
  email: 'contact@doneall.live',
  address: 'Plaza de la merced 9 , 29012 , Málaga',
  schedule: 'Monday to Friday: 08:30 - 19:30 | Saturday: 09:00 - 14:00 (By Appointment)',
  cif: 'B-93821044',
  insurancePolicy: 'Mapfre Construction Third-Party Liability Policy No. 8392104-B (€600,000 Coverage)',
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'integral',
    number: '01',
    title: 'Complete Home & Apartment Renovations',
    shortDesc: 'End-to-end turnkey architectural transformations with certified site managers.',
    fullDesc: 'We handle every phase: structural demolition, open-concept floor plan redesigns, acoustic soundproof plasterboard partitions, brand-new certified electrical and plumbing systems, and luxury European finishes.',
    iconName: 'Home',
    features: ['Architectural space replanning & 3D renders', 'Dedicated on-site project supervisor with weekly reports', 'Contractually guaranteed fixed price with delay penalties', 'Comprehensive deep post-renovation cleaning'],
    estimatedDays: '45 - 75 days'
  },
  {
    id: 'cocinas',
    number: '02',
    title: 'Bespoke Designer Kitchens',
    shortDesc: 'Custom ergonomic cabinetry, porcelain waterfall islands, and integrated smart appliances.',
    fullDesc: 'Tailor-made kitchens crafted for modern living. Moisture-resistant cabinetry with soft-close Blum hardware, Calacatta quartz or Dekton heat-proof countertops, and warm indirect architectural LED lighting.',
    iconName: 'UtensilsCrossed',
    features: ['Heat and scratch-resistant porcelain waterfall countertops', 'Full-extension soft-glide drawers with custom organizers', 'Dedicated high-voltage electrical circuits & plumbing', 'Seamless integrated premium European appliances'],
    estimatedDays: '15 - 25 days'
  },
  {
    id: 'banos',
    number: '03',
    title: 'Modern Spa Bathrooms & Microcement',
    shortDesc: 'Zero-threshold walk-in showers, seamless microcement, and concealed thermostatic fixtures.',
    fullDesc: 'We turn ordinary bathrooms into private spas. Custom non-slip resin shower trays level with the floor, frameless tempered glass enclosures, anti-fog touch LED mirrors, and waterproof microcement coatings.',
    iconName: 'Droplets',
    features: ['Textured slate C3 non-slip level shower trays', 'Concealed thermostatic brushed gunmetal & matte black taps', 'Floating natural oak vanities with countertop basins', '100% technical waterproofing with Schlüter membrane systems'],
    estimatedDays: '7 - 14 days'
  },
  {
    id: 'chalets',
    number: '04',
    title: 'Luxury Villa & Townhouse Remodeling',
    shortDesc: 'Full villa retrofitting, panoramic slimline sliding systems, and outdoor living integration.',
    fullDesc: 'Specialists in coastal homes across Málaga and Costa del Sol. Merging indoor and pool terrace living, facade thermal insulation (ETICS/SATE), energy-efficient aerothermal heat pumps, and continuous indoor-outdoor flooring.',
    iconName: 'Building2',
    features: ['Floor-to-ceiling recessed pocket sliding glass doors', 'SATE thermal exterior insulation for high energy rating', 'Bioclimatic pergolas and sun terrace deck integration', 'Aerothermal heating and ducted Airzone climate control'],
    estimatedDays: '60 - 120 days'
  },
  {
    id: 'clima-instalaciones',
    number: '05',
    title: 'Electrical, Plumbing & Climate Systems',
    shortDesc: 'Certified installations with official Spanish electrical bulletin (CIE) and high energy ratings.',
    fullDesc: 'Surge-protected distribution boards, dedicated heavy-appliance lines, multi-layer PEX piping, smart home KNX automation, and whisper-quiet ducted inverter air conditioning.',
    iconName: 'Zap',
    features: ['Official electrical installation certificates (Boletín CIE)', 'Multi-zone smart air conditioning with Airzone controls', 'Underfloor heating & aerothermal domestic hot water', 'Whole-home water descalers and reverse osmosis filtration'],
    estimatedDays: '10 - 20 days'
  },
  {
    id: 'locales',
    number: '06',
    title: 'Commercial Premises, Retail & Offices',
    shortDesc: 'Fast-track remodeling for retail, restaurants, and offices with opening permit management.',
    fullDesc: 'We know commercial downtime equals lost revenue. We operate structured shift work to deliver strictly on schedule. We prepare activity project drawings and process municipal licenses with town halls.',
    iconName: 'Store',
    features: ['Town hall municipal opening license processing', 'Full compliance with fire-safety and accessibility codes', 'Certified acoustic soundproofing with decibel testing', 'Durable high-traffic flooring and commercial lighting'],
    estimatedDays: '20 - 45 days'
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'reforma-limonar',
    title: 'Complete Kitchen & Living Open Plan in El Limonar',
    location: 'El Limonar, Málaga',
    propertyType: '140 m² Apartment',
    budgetCategory: 'Full Home Renovation',
    duration: '4 weeks',
    description: 'Transforming a dated 1980s layout into a light-filled open-plan residence. Demolished interior walls to unite kitchen and living room, integrating a central Calacatta quartz island and seamless oak floors.',
    beforeImage: KITCHEN_BEFORE_IMAGE,
    afterImage: KITCHEN_AFTER_IMAGE,
    highlights: ['55 m² open-concept entertaining living space', 'Calacatta quartz waterfall island with oak cabinetry', 'DALI dimmable scene-based lighting system', 'Concealed high-end integrated appliances']
  },
  {
    id: 'bano-malagueta',
    title: 'Spa-Inspired Microcement Bathroom in La Malagueta',
    location: 'La Malagueta, Málaga',
    propertyType: 'Beachfront Residence',
    budgetCategory: 'Master Ensuite',
    duration: '10 days',
    description: 'From an outdated tiled bathtub space into a Mediterranean spa with sand-toned waterproof microcement walls, flush walk-in rain shower, and suspended solid oak vanity.',
    beforeImage: KITCHEN_BEFORE_IMAGE,
    afterImage: BATHROOM_AFTER_IMAGE,
    highlights: ['Seamless two-component waterproof microcement', 'Zero-threshold shower with hidden wall-line drain', 'Touch-activated illuminated anti-mist mirror', 'Concealed brushed titanium mixer taps']
  },
  {
    id: 'villa-benalmadena',
    title: 'Modern Villa with Seamless Terrace in Benalmádena',
    location: 'Benalmádena Costa',
    propertyType: '260 m² Detached Villa',
    budgetCategory: 'Complete Villa Overhaul',
    duration: '10 weeks',
    description: 'Ground floor transformation with hidden pocket sliding glass walls that fully open the living room to the swimming pool and outdoor lounge.',
    beforeImage: KITCHEN_BEFORE_IMAGE,
    afterImage: VILLA_SALON_IMAGE,
    highlights: ['6-meter minimalist pocket glass wall system', 'Polished continuous floor flowing to pool terrace', 'Aerothermal heat pump climate control', 'Custom recessed bioethanol architectural fireplace']
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    author: 'Carmen Morales & Javier Ruiz',
    location: 'La Malagueta, Málaga',
    projectType: 'Complete Apartment Renovation (115 m²)',
    rating: 5,
    date: '2 months ago',
    quote: 'What we valued most was total peace of mind. DONE ALL provided a binding quote to the cent, and the 8-week timeline was delivered on the exact promised date. Antonio, our site manager, kept us informed every single week. Unmatched craftsmanship.',
    verified: true
  },
  {
    id: 't2',
    author: 'David & Sophie Henderson',
    location: 'Nueva Andalucía, Marbella',
    projectType: 'Villa Renovation & Open Kitchen',
    rating: 5,
    date: '3 months ago',
    quote: 'As international homeowners in Spain, managing a renovation from abroad can be daunting. DONE ALL took care of everything from town hall permits to custom joinery. Flawless English communication, absolute honesty, and 5-star quality.',
    verified: true
  },
  {
    id: 't3',
    author: 'Alejandro Serrano Castro',
    location: 'Teatinos, Málaga',
    projectType: 'Designer Kitchen & 2 Bathrooms',
    rating: 5,
    date: '1 month ago',
    quote: 'Extremely professional, tidy, and reliable. In past experiences with other contractors we suffered endless delays, but DONE ALL stuck to the schedule religiously. Our island kitchen looks straight out of an architectural magazine.',
    verified: true
  }
];

export const FAQS: FaqItem[] = [
  {
    category: 'Budget & Pricing',
    question: 'Is the price quote 100% fixed or can unforeseen costs arise?',
    answer: 'At DONE ALL, our contracts are binding with fixed, transparent pricing. Following our comprehensive on-site laser survey and technical inspection, we produce an itemized bill of quantities. Unless you deliberately request changes to materials or extra scope during construction, the final price will never increase.'
  },
  {
    category: 'Timelines',
    question: 'What guarantees do I have that the project will finish on the agreed date?',
    answer: 'We incorporate an explicit financial penalty clause in our written contract for any avoidable project delays. We pre-order all bespoke finishes, fixtures, tiles, and joinery before demolition begins, ensuring steady, uninterrupted daily progress on site.'
  },
  {
    category: 'Permits & Town Hall',
    question: 'Who handles the building permits and municipal paperwork with Málaga Town Hall?',
    answer: 'Our in-house technical department manages the complete administrative process: Responsible Declarations (Declaración Responsable) or Major Works Permits with the Málaga Urban Planning Department (Gerencia de Urbanismo), municipal tax payments, and road occupancy licenses for debris skips.'
  },
  {
    category: 'Warranty & Protection',
    question: 'What warranty is provided after the renovation is completed?',
    answer: 'We provide a 5-year written warranty certificate covering all structural works and installations, backed by our €600,000 Mapfre civil liability insurance policy. Additionally, we conduct a complimentary 6-month checkup to inspect all fittings.'
  },
  {
    category: 'Initial Consultation',
    question: 'Is there any fee for the initial technical inspection and quote preparation?',
    answer: 'No. The initial on-site visit by our licensed engineer, laser measurements at your property, and the detailed proposal are 100% free with zero obligation.'
  }
];
