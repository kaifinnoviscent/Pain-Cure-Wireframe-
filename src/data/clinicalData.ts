export interface TreatmentCategory {
  id: string;
  number: string;
  name: string;
  shortSummary: string;
  conditions?: string[];
  nonOperative?: string[];
  operative?: string[];
  other?: string[];
  areas?: string[];
  modalities?: string[];
  slug: string;
}

export const TREATMENTS: TreatmentCategory[] = [
  {
    id: 'spine',
    number: '01',
    name: 'Spine Care',
    shortSummary: 'Spine Care for lumbar pain, neck pain, nerve pain and sciatica.',
    conditions: ['Lumbar pain', 'Neck pain', 'Nerve pain', 'Sciatica'],
    nonOperative: ['Robotic spine decompression', 'Selective Nerve Root Block (SNRB)', 'Physiotherapy'],
    operative: ['Minimal invasive MIS spine surgery in extreme / selected cases'],
    other: ['Spine stabilisation for fracture', 'Spine stabilisation for deformity'],
    slug: '/treatments/spine',
  },
  {
    id: 'knee',
    number: '02',
    name: 'Knee Treatment',
    shortSummary: 'Non-operative and operative pathways for knee care.',
    nonOperative: ['ERP / ozone', 'IR Lamp', 'Physiotherapy'],
    operative: ['Unicondylar knee replacement'],
    slug: '/treatments/knee',
  },
  {
    id: 'hip',
    number: '03',
    name: 'Hip Treatment',
    shortSummary: 'Hip replacement and fracture fixation pathways.',
    operative: ['Hip replacement', 'Fracture fixation'],
    slug: '/treatments/hip',
  },
  {
    id: 'joints',
    number: '04',
    name: 'Joint Treatment',
    shortSummary: 'Clinical care for shoulder, wrist, ankle, elbow, hand, and foot.',
    areas: ['Shoulder', 'Wrist', 'Ankle', 'Elbow', 'Hand', 'Foot'],
    slug: '/treatments/joints',
  },
  {
    id: 'sports-injury',
    number: '05',
    name: 'Sports Injury',
    shortSummary: 'In-house care and rehabilitation for sports injuries.',
    slug: '/treatments/sports-injury',
  },
  {
    id: 'physiotherapy',
    number: '06',
    name: 'Physiotherapy',
    shortSummary: 'Clinical therapeutic modalities for physical rehabilitation.',
    modalities: ['IFT', 'TENS', 'SWD / Short Wave Diathermy', 'Ultrasound therapy', 'Theraband'],
    slug: '/treatments/physiotherapy',
  },
];

export const CLINIC_INFO = {
  name: 'Pain Cure Ortho & Rehab Clinic',
  domain: 'www.paincureotho.com',
  headline: 'Move better. Live stronger.',
  subheadline: 'Personalised orthopaedic treatment and rehabilitation focused on helping patients return to movement, everyday activities, and life with confidence.',
  instagram: [
    { handle: '@paincureortho', url: 'https://www.instagram.com/paincureortho/' },
    { handle: '@merchantdrmohsin', url: 'https://www.instagram.com/merchantdrmohsin/' },
  ],
  // Placeholders explicitly marked until verified details are provided
  placeholders: {
    phone: '[Clinic Contact Number]',
    email: '[Clinic Email Address]',
    address: '[Clinic Address & Location Details]',
    timings: '[Consultation Timings / Days]',
  }
};
