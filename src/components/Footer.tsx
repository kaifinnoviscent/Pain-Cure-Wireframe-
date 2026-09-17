import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Instagram, Shield, MapPin, Phone } from 'lucide-react';
import { CLINIC_INFO, CONSULTATION_PATH } from '../data/clinicalData';
const logoUrl = '/pain-cure-og.png';

export const Footer: React.FC = () => {
  const treatments = [
    { name: 'Spine', slug: '/treatments/spine' },
    { name: 'Knee', slug: '/treatments/knee' },
    { name: 'Hip', slug: '/treatments/hip' },
    { name: 'Joints', slug: '/treatments/joints' },
    { name: 'Sports Injury', slug: '/treatments/sports-injury' },
    { name: 'Physiotherapy', slug: '/treatments/physiotherapy' },
  ];

  const clinicLinks = [
    { name: 'About', slug: '/about' },
    { name: 'Post-Operative Rehab', slug: '/post-operative-rehab' },
    { name: 'Contact', slug: '/contact' },
  ];

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 sm:pt-20 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Calm, Spacious 3-Part Editorial Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 pb-14 border-b border-slate-800 items-start">
          
          {/* Brand & Clinic Statement (5 cols) */}
          <div className="md:col-span-5 space-y-6">
            <Link to="/" className="inline-block bg-white p-4 sm:p-5 rounded-2xl shadow-sm" aria-label="Pain Cure Home">
              <img
                src={logoUrl}
                alt="Pain Cure Ortho &amp; Rehab Clinic"
                className="h-16 sm:h-[72px] w-auto object-contain"
                width="180"
                height="122"
              />
            </Link>
            
            <p className="text-base text-slate-300 leading-relaxed font-normal max-w-md">
              Personalised orthopaedic care and in-house rehabilitation focused on restoring movement, function, and everyday confidence.
            </p>

            {/* Verified Clinic NAP */}
            <div className="pt-2 space-y-3 text-sm text-slate-400 border-t border-slate-800/80 max-w-md">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-teal-400 shrink-0 mt-1" />
                <address className="not-italic text-slate-300 leading-relaxed text-sm">
                  {CLINIC_INFO.addressLines[0]}<br />
                  {CLINIC_INFO.addressLines[1]}
                </address>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-teal-400 shrink-0" />
                <a
                  href={CLINIC_INFO.phoneTel}
                  className="text-slate-200 hover:text-teal-400 transition-colors font-medium font-mono text-sm"
                >
                  {CLINIC_INFO.phoneDisplay}
                </a>
              </div>
            </div>

            <div className="pt-1 flex flex-col space-y-2 text-sm text-slate-400">
              <span className="font-semibold text-slate-300">Connect with us on Instagram:</span>
              <div className="flex flex-wrap items-center gap-4">
                {CLINIC_INFO.instagram.map((item) => (
                  <a
                    key={item.handle}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-slate-300 hover:text-teal-400 transition-colors font-medium"
                  >
                    <Instagram className="w-4 h-4 text-teal-400" />
                    <span>{item.handle}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Treatments Column (3 cols) */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-extrabold text-white uppercase tracking-widest mb-6">
              Treatments
            </h4>
            <ul className="space-y-3.5 text-base">
              {treatments.map((t) => (
                <li key={t.name}>
                  <Link
                    to={t.slug}
                    className="text-slate-300 hover:text-teal-400 transition-colors block py-0.5"
                  >
                    {t.name}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Link
                  to="/treatments"
                  className="text-teal-400 hover:text-teal-300 transition-colors block py-0.5 font-semibold text-sm"
                >
                  View All Treatments &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Clinic & Consultation CTA Column (4 cols) */}
          <div className="md:col-span-4 flex flex-col justify-between">
            <div>
              <h4 className="text-xs font-extrabold text-white uppercase tracking-widest mb-6">
                Clinic
              </h4>
              <ul className="space-y-3.5 text-base">
                {clinicLinks.map((c) => (
                  <li key={c.name}>
                    <Link
                      to={c.slug}
                      className="text-slate-300 hover:text-teal-400 transition-colors block py-0.5"
                    >
                      {c.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-800">
              <Link
                to={CONSULTATION_PATH}
                className="inline-flex items-center gap-2.5 bg-teal-600 hover:bg-teal-700 text-white text-base font-semibold px-6 py-3.5 rounded-lg shadow-sm transition-all duration-150"
              >
                <span>Request a Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

        </div>

        {/* Disclaimer & Bottom Row (Clear, Legible Type) */}
        <div className="pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs sm:text-sm text-slate-400">
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-teal-500 shrink-0" />
            <p>
              Medical Disclaimer: Information on this website is for educational and introductory purposes only and does not substitute professional clinical consultation.
            </p>
          </div>
          <p className="shrink-0">&copy; {new Date().getFullYear()} Pain Cure Ortho &amp; Rehab Clinic.</p>
        </div>

      </div>
    </footer>
  );
};
