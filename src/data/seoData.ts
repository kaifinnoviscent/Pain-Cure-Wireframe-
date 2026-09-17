export interface RouteSeoConfig {
  title: string;
  description: string;
  canonical: string;
}

export const SITE_URL = 'https://www.paincureortho.com';
export const DEFAULT_OG_IMAGE = `${SITE_URL}/pain-cure-og.png`;

export const ROUTE_SEO: Record<string, RouteSeoConfig> = {
  '/': {
    title: 'Pain Cure Ortho & Rehab Clinic | Orthopaedic Care & Rehabilitation',
    description:
      'Pain Cure Ortho & Rehab Clinic in Mazgoan, Mumbai — personalised orthopaedic treatment and in-house rehabilitation to support movement, recovery, and confidence.',
    canonical: `${SITE_URL}/`,
  },
  '/about': {
    title: 'About Us | Pain Cure Ortho & Rehab Clinic',
    description:
      'Learn about Pain Cure Ortho & Rehab Clinic in Mazgoan, Mumbai — our consultant-led orthopaedic care, clinical philosophy, and integrated in-house rehabilitation.',
    canonical: `${SITE_URL}/about`,
  },
  '/contact': {
    title: 'Contact | Pain Cure Ortho & Rehab Clinic',
    description:
      'Contact Pain Cure Ortho & Rehab Clinic in Mazgoan, Mumbai. Inquire by phone or find outpatient clinic location details for consultation scheduling and care.',
    canonical: `${SITE_URL}/contact`,
  },
  '/treatments': {
    title: 'Treatments | Pain Cure Ortho & Rehab Clinic',
    description:
      'Explore orthopaedic treatments at Pain Cure clinic in Mumbai, covering spine care, knee, hip, peripheral joints, sports injuries, and physical rehabilitation.',
    canonical: `${SITE_URL}/treatments`,
  },
  '/treatments/spine': {
    title: 'Spine Care | Pain Cure Ortho & Rehab Clinic',
    description:
      'Spine care at Pain Cure clinic in Mumbai — assessment and conservative management for lumbar pain, neck pain, nerve discomfort, sciatica, and rehabilitation.',
    canonical: `${SITE_URL}/treatments/spine`,
  },
  '/treatments/knee': {
    title: 'Knee Treatment | Pain Cure Ortho & Rehab Clinic',
    description:
      'Knee care at Pain Cure clinic in Mumbai, providing non-operative therapies, unicondylar knee replacement, and dedicated in-house post-operative rehabilitation.',
    canonical: `${SITE_URL}/treatments/knee`,
  },
  '/treatments/hip': {
    title: 'Hip Treatment | Pain Cure Ortho & Rehab Clinic',
    description:
      'Hip treatment at Pain Cure clinic in Mumbai, covering hip replacement, fracture fixation pathways, and supervised in-house post-operative rehabilitation.',
    canonical: `${SITE_URL}/treatments/hip`,
  },
  '/treatments/joints': {
    title: 'Joint Treatment | Pain Cure Ortho & Rehab Clinic',
    description:
      'Clinical orthopaedic care for shoulder, elbow, wrist, hand, ankle, and foot conditions with tailored non-operative treatment and rehabilitation in Mumbai.',
    canonical: `${SITE_URL}/treatments/joints`,
  },
  '/treatments/sports-injury': {
    title: 'Sports Injury | Pain Cure Ortho & Rehab Clinic',
    description:
      'Sports injury assessment and structured in-house rehabilitation at Pain Cure clinic in Mumbai to support safe, progressive recovery and functional movement.',
    canonical: `${SITE_URL}/treatments/sports-injury`,
  },
  '/treatments/physiotherapy': {
    title: 'Physiotherapy | Pain Cure Ortho & Rehab Clinic',
    description:
      'Supervised clinical physiotherapy at Pain Cure clinic in Mumbai featuring IFT, TENS, Short Wave Diathermy, ultrasound therapy, and guided exercise modalities.',
    canonical: `${SITE_URL}/treatments/physiotherapy`,
  },
  '/post-operative-rehab': {
    title: 'Post-Operative Rehabilitation | Pain Cure Ortho & Rehab Clinic',
    description:
      'Dedicated in-house post-operative rehabilitation at Pain Cure clinic in Mumbai, providing supervised, progressive recovery following orthopaedic surgery.',
    canonical: `${SITE_URL}/post-operative-rehab`,
  },
};
