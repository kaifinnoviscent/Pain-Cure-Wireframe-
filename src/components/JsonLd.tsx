import React from 'react';
import { CLINIC_INFO } from '../data/clinicalData';
import { SITE_URL, DEFAULT_OG_IMAGE } from '../data/seoData';

export interface OpeningHoursSpecificationSchema {
  '@type': 'OpeningHoursSpecification';
  dayOfWeek: string[];
  opens: string;
  closes: string;
}

export interface MedicalClinicSchema {
  '@context': 'https://schema.org';
  '@type': 'MedicalClinic';
  name: string;
  url: string;
  logo: string;
  image: string;
  telephone: string;
  slogan: string;
  address: {
    '@type': 'PostalAddress';
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode?: string;
    addressCountry: string;
  };
  openingHoursSpecification?: OpeningHoursSpecificationSchema[];
}

export const CLINIC_JSON_LD: MedicalClinicSchema = {
  '@context': 'https://schema.org',
  '@type': 'MedicalClinic',
  name: CLINIC_INFO.name,
  url: `${SITE_URL}/`,
  logo: DEFAULT_OG_IMAGE,
  image: DEFAULT_OG_IMAGE,
  telephone: CLINIC_INFO.phoneDisplay,
  slogan: CLINIC_INFO.headline,
  address: {
    '@type': 'PostalAddress',
    streetAddress: '42/44 Patra Chawl New Compound, Seth Motisa Lane, Opp. Sahakari Bhandar',
    addressLocality: 'Mazgoan, Mumbai',
    addressRegion: 'Maharashtra',
    addressCountry: 'IN',
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: CLINIC_INFO.operatingHours.schemaDays,
      opens: CLINIC_INFO.operatingHours.opens,
      closes: CLINIC_INFO.operatingHours.closes,
    },
  ],
};

interface JsonLdProps {
  data?: Record<string, unknown>;
}

export const JsonLd: React.FC<JsonLdProps> = ({ data = CLINIC_JSON_LD }) => {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
};
