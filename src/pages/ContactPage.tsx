import React from 'react';
import { Phone, Mail, MapPin, Clock, Instagram, Shield, ArrowRight, FileText } from 'lucide-react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { CLINIC_INFO } from '../data/clinicalData';

export const ContactPage: React.FC = () => {
  const contactDetails = [
    {
      icon: Phone,
      title: 'Phone Consultation',
      value: CLINIC_INFO.placeholders.phone,
      desc: 'Speak with our clinic coordination team for inquiries and appointments.',
      actionText: 'Call Clinic',
      href: `tel:${CLINIC_INFO.placeholders.phone}`,
    },
    {
      icon: Mail,
      title: 'Email Correspondence',
      value: CLINIC_INFO.placeholders.email,
      desc: 'Send medical inquiries, reports, or scheduling requests directly to our desk.',
      actionText: 'Email Clinic',
      href: `mailto:${CLINIC_INFO.placeholders.email}`,
    },
    {
      icon: MapPin,
      title: 'Clinic Location',
      value: CLINIC_INFO.placeholders.address,
      desc: 'Visit our outpatient clinic for direct clinical consultation.',
      actionText: 'Clinic Directions',
      href: '#',
    },
    {
      icon: Clock,
      title: 'Consultation Hours',
      value: CLINIC_INFO.placeholders.timings,
      desc: 'Outpatient consultation hours and rehabilitation session timings.',
      actionText: 'Hours Notice',
      href: '#',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-grow">
        {/* Navigation Breadcrumb */}
        <div className="bg-slate-50 border-b border-slate-200/80 py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
              Pain Cure Ortho &amp; Rehab Clinic &bull; Contact &amp; Inquiries
            </span>
          </div>
        </div>

        {/* Hero Section */}
        <section className="py-16 sm:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="text-xs sm:text-sm font-bold tracking-widest text-teal-800 uppercase block mb-3">
                Contact &amp; Inquiries
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-navy-900 tracking-tight leading-tight mb-6">
                Let's talk about your care.
              </h1>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal mb-8">
                Whether you have questions about ongoing joint discomfort, require an orthopaedic opinion, or are planning post-operative rehabilitation, our clinic team is here to assist.
              </p>
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl max-w-xl text-xs sm:text-sm text-slate-600 flex items-center gap-3">
                <Shield className="w-5 h-5 text-teal-700 shrink-0" />
                <span>Verified contact details and consultation timings will be updated upon official clinic confirmation.</span>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Cards Grid (Clean, Editorial, Non-dashboard) */}
        <section className="py-16 sm:py-20 bg-slate-50/60 border-t border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
              {contactDetails.map((item) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={item.title}
                    className="bg-white border border-slate-200/90 rounded-3xl p-8 sm:p-10 shadow-xs flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-12 h-12 rounded-2xl bg-teal-50 border border-teal-100 flex items-center justify-center text-teal-800 mb-6">
                        <IconComponent className="w-6 h-6" />
                      </div>

                      <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-1">
                        {item.title}
                      </span>
                      <h2 className="text-xl sm:text-2xl font-bold text-navy-900 mb-3 font-mono">
                        {item.value}
                      </h2>
                      <p className="text-sm text-slate-600 leading-relaxed font-normal mb-6">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* First Consultation Preparation Guidance */}
        <section className="py-16 sm:py-24 bg-white border-t border-slate-200/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              <div className="lg:col-span-6">
                <span className="text-xs font-bold tracking-widest text-teal-800 uppercase block mb-3">
                  Consultation Preparation
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight leading-tight mb-6">
                  What to bring to your consultation.
                </h2>
                <p className="text-base text-slate-600 leading-relaxed font-normal mb-8">
                  To ensure a productive and thorough clinical review, we recommend bringing relevant medical history documents to your visit:
                </p>

                <div className="space-y-4">
                  <div className="p-5 bg-slate-50 border border-slate-200 rounded-2xl flex items-start gap-4">
                    <FileText className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-base font-bold text-navy-900 mb-1">Previous Radiological Scans</h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        Recent X-rays, MRI scans, or CT studies relating to your condition.
                      </p>
                    </div>
                  </div>

                  <div className="p-5 bg-slate-50 border border-slate-200 rounded-2xl flex items-start gap-4">
                    <FileText className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-base font-bold text-navy-900 mb-1">Prior Medical Reports &amp; Prescriptions</h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        Documentation of previous treatments, medications, or surgical history.
                      </p>
                    </div>
                  </div>

                  <div className="p-5 bg-slate-50 border border-slate-200 rounded-2xl flex items-start gap-4">
                    <FileText className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-base font-bold text-navy-900 mb-1">Comfortable Attire for Physical Assessment</h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        Loose-fitting clothing that allows comfortable examination of affected joints.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Channels Connect Box */}
              <div className="lg:col-span-6">
                <div className="bg-navy-950 text-white rounded-3xl p-8 sm:p-12 border border-navy-900 shadow-xl">
                  <span className="text-xs font-bold tracking-widest text-teal-400 uppercase block mb-3">
                    Social Channels
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-4">
                    Connect with Pain Cure Online
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed mb-8">
                    Follow clinic updates, orthopaedic insights, and recovery guidance on our official Instagram channels:
                  </p>

                  <div className="space-y-4 mb-8">
                    {CLINIC_INFO.instagram.map((item) => (
                      <a
                        key={item.handle}
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between p-4 bg-white/10 hover:bg-white/15 border border-white/10 rounded-xl text-white transition-colors group"
                      >
                        <div className="flex items-center gap-3">
                          <Instagram className="w-5 h-5 text-teal-400" />
                          <span className="font-semibold text-sm">{item.handle}</span>
                        </div>
                        <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-white group-hover:translate-x-1 transition-transform" />
                      </a>
                    ))}
                  </div>

                  <div className="pt-6 border-t border-white/15 text-xs text-slate-400">
                    <p>Official Website: <span className="text-teal-400 font-mono">www.paincureotho.com</span></p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
};
