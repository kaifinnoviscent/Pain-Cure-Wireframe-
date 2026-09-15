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

export interface DoctorStatistic {
  value: string;
  label: string;
  detail?: string;
}

export interface ExpertiseGroup {
  title: string;
  items: string[];
}

export interface DoctorProfile {
  name: string;
  title: string;
  subtitle: string;
  experience: string;
  statistics: DoctorStatistic[];
  bioParagraphs: string[];
  expertiseGroups: ExpertiseGroup[];
  philosophy: string;
}

export const DOCTOR_PROFILE: DoctorProfile = {
  name: 'Dr. Mohsin Merchant',
  title: 'Consultant Orthopedic Surgeon',
  subtitle: 'Spine & Nerve Pain Specialist',
  experience: 'Over 15 years of experience in orthopedic and spine care',
  statistics: [
    {
      value: '15+ Years',
      label: 'Orthopedic & Spine Care',
    },
    {
      value: '>2,000',
      label: 'Spine Surgeries',
    },
    {
      value: '>4,000',
      label: 'Knee Replacement Surgeries',
      detail: 'Including robotic-assisted knee replacement procedures',
    },
  ],
  bioParagraphs: [
    'Dr. Mohsin Merchant is a Consultant Orthopedic Surgeon with over 15 years of experience in orthopedic and spine care. His practice covers a wide range of orthopedic, spinal, joint and sports-related conditions, with an emphasis on personalized, evidence-based care.',
    'With more than 2,000 spine surgeries and more than 4,000 knee replacement surgeries, including robotic-assisted procedures, Dr. Merchant brings extensive surgical experience to the management of complex orthopedic and spine conditions.',
    'His approach increasingly emphasizes conservative and non-surgical management of spine and nerve pain wherever appropriate, with the aim of helping patients avoid surgery when it is not necessary.',
  ],
  expertiseGroups: [
    {
      title: 'SPINE & NERVE PAIN',
      items: [
        'Spine care and nerve-related pain',
        'Conservative and non-surgical spine treatment',
      ],
    },
    {
      title: 'KNEE & JOINTS',
      items: [
        'Knee replacement surgery, including robotic-assisted knee replacement',
        'Arthritis and degenerative joint conditions',
      ],
    },
    {
      title: 'TRAUMA & SPORTS',
      items: [
        'Fracture and trauma surgery',
        'Arthroscopic ACL and meniscus surgery',
        'Shoulder surgery',
        'Sports injury management',
      ],
    },
  ],
  philosophy:
    'Dr. Mohsin Merchant combines extensive surgical experience with a modern, patient-centered approach, with a focus on choosing the right treatment for each patient—surgical or non-surgical.',
};
