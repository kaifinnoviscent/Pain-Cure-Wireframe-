import React, { useState } from 'react';
import { 
  Phone, 
  MapPin, 
  Instagram, 
  Shield, 
  ArrowRight, 
  FileText, 
  Check, 
  Copy, 
  ExternalLink,
  PhoneCall
} from 'lucide-react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { CLINIC_INFO } from '../data/clinicalData';
export const ContactPage: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = async () => {
    let success = false;
    try {
      if (navigator.clipboard && typeof navigator.clipboard.writeText === 'function') {
        await navigator.clipboard.writeText(CLINIC_INFO.address);
        success = true;
      }
    } catch {
      // Handled by fallback below
    }

    if (!success) {
      try {
        const textArea = document.createElement('textarea');
        textArea.value = CLINIC_INFO.address;
        textArea.setAttribute('readonly', '');
        textArea.style.position = 'fixed';
        textArea.style.opacity = '0';
        document.body.appendChild(textArea);
        textArea.select();
        success = document.execCommand('copy');
        document.body.removeChild(textArea);
      } catch {
        success = false;
      }
    }

    if (success) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  /* =========================================================================
     NOTE ON UNVERIFIED DATA (Timings & Email):
     Clinic timings and official contact email are currently unconfirmed.
     Per clinical integrity requirements, they are preserved below for future
     reactivation but are EXCLUDED from the rendered user interface.
     ========================================================================= */
  /*
  const unverifiedChannels = [
    {
      icon: Mail,
      title: 'Email Correspondence',
      value: CLINIC_INFO.placeholders.email,
      desc: 'Send medical inquiries, reports, or scheduling requests directly to our desk.',
      actionText: 'Email Clinic',
      href: `mailto:${CLINIC_INFO.placeholders.email}`,
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
  */

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-grow">
        {/* Navigation Breadcrumb */}
        <div className="bg-slate-50 border-b border-slate-200/80 py-3.5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
              Pain Cure Ortho &amp; Rehab Clinic &bull; Contact &amp; Inquiries
            </span>
          </div>
        </div>

        {/* Section 1: Compact Introduction & Primary Verified Contact Channels */}
        <section className="py-10 sm:py-14 lg:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Compact Introduction */}
            <div className="max-w-3xl mb-8 sm:mb-10 animate-hero-fade-up">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-teal-50 border border-teal-200/80 mb-3.5 sm:mb-4">
                <span className="w-2 h-2 rounded-full bg-teal-600" aria-hidden="true" />
                <span className="text-xs font-mono font-bold tracking-widest text-teal-800 uppercase">
                  CONTACT &amp; INQUIRIES
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-900 tracking-tight leading-[1.12] mb-4">
                Let's talk about your care.
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
                Whether you have questions regarding persistent joint discomfort, require an orthopaedic evaluation, or wish to schedule structured post-operative rehabilitation, our clinic team is here to assist. Reach out directly by telephone or visit our outpatient facility in Mazgaon.
              </p>
            </div>

            {/* ONE Primary Verified Contact Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch mb-8">
              
              {/* Channel 1: Telephone Consultation (Priority Action) */}
              <div className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-8 lg:p-9 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group">
                <div>
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-teal-50 border border-teal-100 flex items-center justify-center text-teal-700 group-hover:bg-teal-600 group-hover:text-white transition-colors">
                      <PhoneCall className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono font-bold text-teal-800 bg-teal-50/80 px-2.5 py-1 rounded-md">
                      01 &bull; PRIMARY CHANNEL
                    </span>
                  </div>

                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-1">
                    Direct Telephone Consultation
                  </span>
                  
                  <div className="text-2xl sm:text-3xl font-extrabold text-navy-900 mb-3 font-mono tracking-tight">
                    {CLINIC_INFO.phoneDisplay}
                  </div>

                  <p className="text-sm text-slate-600 leading-relaxed font-normal mb-8">
                    Speak directly with our clinic desk to schedule an orthopaedic consultation, discuss symptoms, or coordinate post-operative rehabilitation sessions.
                  </p>
                </div>

                <div>
                  <a
                    href={CLINIC_INFO.phoneTel}
                    className="w-full inline-flex items-center justify-center gap-2.5 bg-teal-600 hover:bg-teal-700 text-white font-bold px-6 py-4 rounded-xl shadow-sm hover:shadow-card-hover transition-all duration-150 active:scale-[0.99] touch-target min-h-[48px] text-base group/btn"
                    aria-label={`Call Pain Cure Clinic at ${CLINIC_INFO.phoneDisplay}`}
                  >
                    <Phone className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5" />
                    <span>Call {CLINIC_INFO.phoneDisplay}</span>
                  </a>
                </div>
              </div>

              {/* Channel 2: Clinic Location & In-Person Outpatient Care */}
              <div className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-8 lg:p-9 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group">
                <div>
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-teal-50 border border-teal-100 flex items-center justify-center text-teal-700 group-hover:bg-teal-600 group-hover:text-white transition-colors">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono font-bold text-teal-800 bg-teal-50/80 px-2.5 py-1 rounded-md">
                      02 &bull; OUTPATIENT CLINIC
                    </span>
                  </div>

                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-1">
                    Clinic Address &amp; Location
                  </span>

                  <address className="not-italic text-base sm:text-lg font-bold text-navy-900 mb-3 leading-snug">
                    <span className="block">{CLINIC_INFO.addressLines[0]}</span>
                    <span className="block text-slate-800">{CLINIC_INFO.addressLines[1]}</span>
                  </address>

                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-100 text-slate-700 text-xs font-semibold mb-6">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-600" />
                    <span>Landmark: {CLINIC_INFO.landmark}</span>
                  </div>

                  <p className="text-sm text-slate-600 leading-relaxed font-normal mb-8">
                    Visit our dedicated outpatient clinic for clinical assessment, non-operative treatment planning, and supervised rehabilitation therapy.
                  </p>
                </div>

                {/* Location Actions: Copy Address + Google Maps Directions */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={handleCopyAddress}
                    className="inline-flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200/80 text-navy-900 font-semibold px-4 py-3.5 rounded-xl border border-slate-200 transition-all active:scale-[0.98] touch-target min-h-[48px] text-sm"
                    aria-label="Copy clinic address to clipboard"
                  >
                    {copied ? (
                      <>
                        <Check className="w-4 h-4 text-teal-700" />
                        <span className="text-teal-800 font-bold">Address Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4 text-slate-600" />
                        <span>Copy Address</span>
                      </>
                    )}
                  </button>

                  <a
                    href={CLINIC_INFO.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-teal-50 hover:bg-teal-100/80 text-teal-800 font-bold px-4 py-3.5 rounded-xl border border-teal-200 transition-all active:scale-[0.98] touch-target min-h-[48px] text-sm group/map"
                    aria-label="Open clinic location in Google Maps in a new tab"
                  >
                    <span>Open in Maps</span>
                    <ExternalLink className="w-4 h-4 transition-transform group-hover/map:translate-x-0.5 group-hover/map:-translate-y-0.5" />
                  </a>
                </div>
              </div>

            </div>

            {/* In-person advance consultation reassurance note */}
            <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-600 bg-slate-50 border border-slate-200/80 rounded-2xl px-5 py-3.5 max-w-2xl">
              <Shield className="w-4 h-4 text-teal-700 shrink-0" />
              <span>In-person consultations and rehab sessions coordinated by advance telephone inquiry.</span>
            </div>

          </div>
        </section>

        {/* Section 2: First Consultation Preparation Guidance & Official Social Channels */}
        <section className="py-12 sm:py-16 bg-slate-50/70 border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
              
              {/* Left Column: What to Bring Guidance */}
              <div className="lg:col-span-6">
                <span className="text-xs font-mono font-bold tracking-widest text-teal-800 uppercase block mb-2">
                  CONSULTATION PREPARATION
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900 tracking-tight mb-4">
                  What to bring to your consultation.
                </h2>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal mb-8">
                  To ensure a productive and thorough clinical review, we recommend bringing relevant medical documentation to your visit:
                </p>

                <div className="space-y-4">
                  <div className="p-5 bg-white border border-slate-200/90 rounded-2xl shadow-xs flex items-start gap-4 hover:border-teal-300 transition-colors">
                    <div className="w-9 h-9 rounded-xl bg-teal-50 flex items-center justify-center text-teal-700 shrink-0 mt-0.5">
                      <FileText className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-navy-900 mb-1">Previous Radiological Scans</h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        Recent X-rays, MRI scans, or CT studies relating to your spine, knee, hip, or affected joints.
                      </p>
                    </div>
                  </div>

                  <div className="p-5 bg-white border border-slate-200/90 rounded-2xl shadow-xs flex items-start gap-4 hover:border-teal-300 transition-colors">
                    <div className="w-9 h-9 rounded-xl bg-teal-50 flex items-center justify-center text-teal-700 shrink-0 mt-0.5">
                      <FileText className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-navy-900 mb-1">Prior Medical Reports &amp; Prescriptions</h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        Documentation of previous conservative treatments, medications, physiotherapy notes, or surgical history.
                      </p>
                    </div>
                  </div>

                  <div className="p-5 bg-white border border-slate-200/90 rounded-2xl shadow-xs flex items-start gap-4 hover:border-teal-300 transition-colors">
                    <div className="w-9 h-9 rounded-xl bg-teal-50 flex items-center justify-center text-teal-700 shrink-0 mt-0.5">
                      <FileText className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-navy-900 mb-1">Comfortable Attire for Physical Assessment</h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        Loose-fitting clothing that allows comfortable clinical examination of joint movement and mobility.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Official Clinic Channels */}
              <div className="lg:col-span-6">
                <div className="bg-navy-950 text-white rounded-3xl p-8 sm:p-10 border border-navy-900 shadow-elevated relative overflow-hidden">
                  {/* Subtle decorative wash */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />

                  <div className="relative z-10">
                    <span className="text-xs font-mono font-bold tracking-widest text-teal-400 uppercase block mb-2">
                      OFFICIAL CHANNELS
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-3">
                      Connect with Pain Cure Online
                    </h3>
                    <p className="text-sm text-slate-300 leading-relaxed mb-6">
                      Follow clinic updates, orthopaedic rehabilitation insights, and joint health guidance on our verified Instagram channels:
                    </p>

                    <div className="space-y-3 mb-8">
                      {CLINIC_INFO.instagram.map((item) => (
                        <a
                          key={item.handle}
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-between p-4 bg-white/10 hover:bg-white/15 border border-white/10 rounded-xl text-white transition-all group touch-target min-h-[48px]"
                          aria-label={`Visit Pain Cure Instagram channel ${item.handle}`}
                        >
                          <div className="flex items-center gap-3">
                            <Instagram className="w-5 h-5 text-teal-400 group-hover:scale-110 transition-transform" />
                            <span className="font-semibold text-sm sm:text-base font-mono">{item.handle}</span>
                          </div>
                          <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-white group-hover:translate-x-1 transition-transform" />
                        </a>
                      ))}
                    </div>

                    <div className="pt-5 border-t border-white/15 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-slate-400">
                      <span>Official Website:</span>
                      <span className="text-teal-400 font-mono font-semibold">{CLINIC_INFO.domain}</span>
                    </div>
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
