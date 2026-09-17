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
  PhoneCall,
  Clock
} from 'lucide-react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { CLINIC_INFO } from '../data/clinicalData';
import { useInView } from '../hooks/useInView';

export const ContactPage: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [prepSectionRef, prepInView] = useInView<HTMLElement>({ threshold: 0.08 });

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

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-grow">
        {/* Navigation Breadcrumb */}
        <div className="bg-slate-50 border-b border-slate-200/80 py-3.5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <span className="text-xs font-semibold text-slate-600 uppercase tracking-wider">
              Pain Cure Ortho &amp; Rehab Clinic &bull; Contact &amp; Inquiries
            </span>
          </div>
        </div>

        {/* Section 1: Hero & Primary Verified Contact Channels */}
        <section className="py-8 sm:py-10 lg:py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Centered Editorial Hero Panel with Layered Color Depth */}
            <div className="max-w-4xl mx-auto mb-8 sm:mb-10 relative overflow-hidden rounded-2xl sm:rounded-3xl border border-teal-200/90 ring-1 ring-inset ring-white/90 bg-gradient-to-b from-teal-50/70 via-mint-50/40 to-slate-50/70 p-6 sm:p-8 lg:p-9 text-center shadow-[0_4px_24px_-4px_rgba(7,36,68,0.06),0_1px_3px_rgba(7,36,68,0.04)] hover:shadow-[0_8px_30px_-4px_rgba(7,36,68,0.08),0_2px_6px_rgba(7,36,68,0.04)] hover:border-teal-300/90 transition-all duration-300 animate-contact-panel group/panel">
              
              {/* Subtle top-center soft teal atmospheric glow */}
              <div 
                className="absolute -top-20 left-1/2 -translate-x-1/2 w-[520px] h-[220px] bg-gradient-to-b from-teal-400/15 via-teal-300/10 to-transparent rounded-full blur-3xl pointer-events-none" 
                aria-hidden="true" 
              />

              {/* Faint subtle corner depth washes */}
              <div 
                className="absolute -bottom-16 -right-10 w-72 h-48 bg-navy-900/[0.03] rounded-full blur-2xl pointer-events-none" 
                aria-hidden="true" 
              />
              <div 
                className="absolute -bottom-16 -left-10 w-72 h-48 bg-teal-600/[0.03] rounded-full blur-2xl pointer-events-none" 
                aria-hidden="true" 
              />
              
              {/* Corner Geometric Framing Accents (Pure CSS, integrated teal framing) */}
              <div className="absolute top-3.5 left-3.5 w-3 h-3 border-t-2 border-l-2 border-teal-600/50 rounded-tl pointer-events-none transition-colors group-hover/panel:border-teal-600/70" aria-hidden="true" />
              <div className="absolute top-3.5 right-3.5 w-3 h-3 border-t-2 border-r-2 border-teal-600/50 rounded-tr pointer-events-none transition-colors group-hover/panel:border-teal-600/70" aria-hidden="true" />
              <div className="absolute bottom-3.5 left-3.5 w-3 h-3 border-b-2 border-l-2 border-teal-600/50 rounded-bl pointer-events-none transition-colors group-hover/panel:border-teal-600/70" aria-hidden="true" />
              <div className="absolute bottom-3.5 right-3.5 w-3 h-3 border-b-2 border-r-2 border-teal-600/50 rounded-br pointer-events-none transition-colors group-hover/panel:border-teal-600/70" aria-hidden="true" />

              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-md bg-white/95 backdrop-blur-xs border border-teal-200/90 mb-4 shadow-2xs relative z-10 animate-contact-eyebrow">
                <span className="w-2 h-2 rounded-full bg-teal-600" aria-hidden="true" />
                <span className="text-xs font-bold tracking-wider text-teal-900 uppercase">
                  CONTACT &amp; INQUIRIES
                </span>
              </div>

              {/* Centered H1 Headline */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-900 tracking-tight leading-[1.18] sm:leading-[1.15] mb-3 sm:mb-4 text-balance relative z-10 animate-contact-h1">
                Let's talk about your care.
              </h1>

              {/* Centered Supporting Copy */}
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal max-w-2xl mx-auto text-balance relative z-10 animate-contact-copy">
                Whether you have questions regarding persistent joint discomfort, require an orthopaedic evaluation, or wish to schedule structured post-operative rehabilitation, our clinic team is here to assist. Reach out directly by telephone or visit our outpatient facility in Mazgaon.
              </p>

              {/* Single Subtle Centered Teal Horizontal Accent Rule */}
              <div 
                className="h-0.5 w-20 sm:w-24 bg-gradient-to-r from-teal-500/10 via-teal-600 to-teal-500/10 mx-auto mt-5 sm:mt-6 rounded-full relative z-10 animate-contact-accent" 
                aria-hidden="true" 
              />
            </div>

            {/* ONE Primary Verified Contact Cards Grid */}
            <div 
              id="consultation"
              className="scroll-mt-24 sm:scroll-mt-28 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-start mb-7 sm:mb-8"
            >
              
              {/* Channel 1: Telephone Consultation & Clinic Hours */}
              <div className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-7 lg:p-8 shadow-card hover:shadow-card-hover hover:border-teal-300/90 hover:-translate-y-1 transition-all duration-300 flex flex-col group animate-contact-card-1">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-teal-50 border border-teal-100 flex items-center justify-center text-teal-700 group-hover:bg-teal-600 group-hover:text-white group-hover:scale-105 transition-all duration-300 mb-5">
                    <PhoneCall className="w-6 h-6" />
                  </div>

                  {/* Block A: Phone Number */}
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-1">
                    Direct Telephone Consultation
                  </span>
                  
                  <div className="text-2xl sm:text-3xl font-bold text-navy-900 mb-2.5 tracking-tight leading-tight group-hover:text-teal-800 transition-colors">
                    {CLINIC_INFO.phoneDisplay}
                  </div>

                  <p className="text-sm text-slate-600 leading-relaxed font-normal mb-5">
                    Speak directly with our clinic desk to schedule an orthopaedic consultation, discuss symptoms, or coordinate post-operative rehabilitation sessions.
                  </p>

                  {/* Subtle Divider */}
                  <div className="border-t border-slate-200/80 my-4" />

                  {/* Block B: Clinic Hours */}
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 mb-5 sm:mb-6">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                      <Clock className="w-4 h-4 text-teal-700 shrink-0" aria-hidden="true" />
                      <span>Clinic Hours</span>
                    </div>
                    <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                      <span className="text-sm sm:text-base font-bold text-navy-900">
                        {CLINIC_INFO.operatingHours.days}
                      </span>
                      <span className="text-sm sm:text-base font-bold text-navy-900">
                        {CLINIC_INFO.operatingHours.hours}
                      </span>
                    </div>
                    <div className="mt-2 pt-2 border-t border-slate-200/60 flex items-center justify-between text-xs text-slate-600">
                      <span className="font-semibold text-slate-700">{CLINIC_INFO.operatingHours.closedDay}</span>
                      <span className="font-bold text-slate-700 bg-slate-200/80 px-2.5 py-0.5 rounded-full text-xs">Closed</span>
                    </div>
                  </div>
                </div>

                {/* Call CTA Button */}
                <div className="mt-auto">
                  <a
                    href={CLINIC_INFO.phoneTel}
                    className="w-full inline-flex items-center justify-center gap-2.5 bg-teal-600 hover:bg-teal-700 text-white font-bold px-6 py-3.5 rounded-xl shadow-sm hover:shadow-card-hover transition-all duration-150 active:scale-[0.99] touch-target min-h-[48px] text-base group/btn"
                    aria-label={`Call Pain Cure Clinic at ${CLINIC_INFO.phoneDisplay}`}
                  >
                    <Phone className="w-4 h-4 transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/btn:scale-110" />
                    <span>Call the Clinic</span>
                  </a>
                </div>
              </div>

              {/* Channel 2: Clinic Location & In-Person Outpatient Care */}
              <div className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-7 lg:p-8 shadow-card hover:shadow-card-hover hover:border-teal-300/90 hover:-translate-y-1 transition-all duration-300 flex flex-col group animate-contact-card-2">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-teal-50 border border-teal-100 flex items-center justify-center text-teal-700 group-hover:bg-teal-600 group-hover:text-white group-hover:scale-105 transition-all duration-300 mb-5">
                    <MapPin className="w-6 h-6" />
                  </div>

                  <span className="text-xs font-bold uppercase tracking-wider text-slate-700 block mb-1">
                    Clinic Address &amp; Location
                  </span>

                  <address className="not-italic text-base sm:text-lg font-bold text-navy-900 mb-2.5 leading-snug">
                    <span className="block">{CLINIC_INFO.addressLines[0]}</span>
                    <span className="block text-slate-800">{CLINIC_INFO.addressLines[1]}</span>
                  </address>

                  {/* Soft animated clinical location pulse badge */}
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-teal-50/80 border border-teal-200/70 text-teal-900 text-xs font-semibold mb-4">
                    <span className="relative flex h-2 w-2" aria-hidden="true">
                      <span className="animate-location-pulse absolute inline-flex h-full w-full rounded-full bg-teal-500 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-600" />
                    </span>
                    <span>Landmark: {CLINIC_INFO.landmark}</span>
                  </div>

                  <p className="text-sm text-slate-700 leading-relaxed font-normal mb-5">
                    Visit our dedicated outpatient clinic for clinical assessment, non-operative treatment planning, and supervised rehabilitation therapy.
                  </p>
                </div>

                {/* Location Actions: Copy Address + Google Maps Directions */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-auto">
                  <button
                    type="button"
                    onClick={handleCopyAddress}
                    className="inline-flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200/80 text-navy-900 font-semibold px-4 py-3.5 rounded-xl border border-slate-200 transition-all active:scale-[0.98] touch-target min-h-[48px] text-sm"
                    aria-label="Copy clinic address to clipboard"
                  >
                    {copied ? (
                      <>
                        <Check className="w-4 h-4 text-teal-700 animate-in zoom-in-50 duration-200" />
                        <span className="text-teal-800 font-bold">Address Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4 text-slate-600 transition-transform group-hover:scale-105" />
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
                    <ExternalLink className="w-4 h-4 transition-transform duration-200 group-hover/map:translate-x-0.5 group-hover/map:-translate-y-0.5" />
                  </a>
                </div>
              </div>

            </div>

            {/* In-person advance consultation reassurance note */}
            <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-700 font-medium bg-slate-50 border border-slate-200/80 rounded-2xl px-5 py-3.5 max-w-2xl animate-contact-reassurance">
              <Shield className="w-4 h-4 text-teal-700 shrink-0" />
              <span>In-person consultations and rehab sessions coordinated by advance telephone inquiry.</span>
            </div>

          </div>
        </section>

        {/* Section 2: First Consultation Preparation Guidance & Official Social Channels */}
        <section 
          ref={prepSectionRef}
          className="py-10 sm:py-12 bg-slate-50/70 border-t border-slate-200"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
              
              {/* Left Column: What to Bring Guidance */}
              <div 
                className={`lg:col-span-6 transition-all duration-600 ease-out ${
                  prepInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                }`}
              >
                <span className="text-xs font-bold tracking-wider text-teal-900 uppercase block mb-2">
                  CONSULTATION PREPARATION
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900 tracking-tight mb-4">
                  What to bring to your consultation.
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal mb-6">
                  To ensure a productive and thorough clinical review, we recommend bringing relevant medical documentation to your visit:
                </p>

                <div className="space-y-3">
                  <div className={`p-4.5 sm:p-5 bg-white border border-slate-200/90 rounded-2xl shadow-xs flex items-start gap-3.5 hover:border-teal-300 hover:-translate-y-0.5 hover:shadow-2xs transition-all duration-200 group ${
                    prepInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
                  }`} style={{ transitionDelay: '80ms' }}>
                    <div className="w-9 h-9 rounded-xl bg-teal-50 border border-teal-100/80 flex items-center justify-center text-teal-700 shrink-0 mt-0.5 group-hover:bg-teal-600 group-hover:text-white transition-colors duration-200">
                      <FileText className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-navy-900 mb-1 group-hover:text-teal-800 transition-colors">Previous Radiological Scans</h3>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                        Recent X-rays, MRI scans, or CT studies relating to your spine, knee, hip, or affected joints.
                      </p>
                    </div>
                  </div>

                  <div className={`p-4.5 sm:p-5 bg-white border border-slate-200/90 rounded-2xl shadow-xs flex items-start gap-3.5 hover:border-teal-300 hover:-translate-y-0.5 hover:shadow-2xs transition-all duration-200 group ${
                    prepInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
                  }`} style={{ transitionDelay: '160ms' }}>
                    <div className="w-9 h-9 rounded-xl bg-teal-50 border border-teal-100/80 flex items-center justify-center text-teal-700 shrink-0 mt-0.5 group-hover:bg-teal-600 group-hover:text-white transition-colors duration-200">
                      <FileText className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-navy-900 mb-1 group-hover:text-teal-800 transition-colors">Prior Medical Reports &amp; Prescriptions</h3>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                        Documentation of previous conservative treatments, medications, physiotherapy notes, or surgical history.
                      </p>
                    </div>
                  </div>

                  <div className={`p-4.5 sm:p-5 bg-white border border-slate-200/90 rounded-2xl shadow-xs flex items-start gap-3.5 hover:border-teal-300 hover:-translate-y-0.5 hover:shadow-2xs transition-all duration-200 group ${
                    prepInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
                  }`} style={{ transitionDelay: '240ms' }}>
                    <div className="w-9 h-9 rounded-xl bg-teal-50 border border-teal-100/80 flex items-center justify-center text-teal-700 shrink-0 mt-0.5 group-hover:bg-teal-600 group-hover:text-white transition-colors duration-200">
                      <FileText className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-navy-900 mb-1 group-hover:text-teal-800 transition-colors">Comfortable Attire for Physical Assessment</h3>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                        Loose-fitting clothing that allows comfortable clinical examination of joint movement and mobility.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Official Clinic Channels */}
              <div 
                className={`lg:col-span-6 transition-all duration-700 ease-out delay-150 ${
                  prepInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                }`}
              >
                <div className="bg-navy-950 text-white rounded-3xl p-6 sm:p-8 lg:p-9 border border-navy-900 shadow-elevated relative overflow-hidden">
                  {/* Subtle decorative wash */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />

                  <div className="relative z-10">
                    <span className="text-xs font-bold tracking-wider text-teal-300 uppercase block mb-2">
                      OFFICIAL CHANNELS
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-3">
                      Connect with Pain Cure Online
                    </h3>
                    <p className="text-sm text-slate-200 leading-relaxed font-normal mb-5">
                      Follow clinic updates, orthopaedic rehabilitation insights, and joint health guidance on our verified Instagram channels:
                    </p>

                    <div className="space-y-3 mb-6">
                      {CLINIC_INFO.instagram.map((item) => (
                        <a
                          key={item.handle}
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-between p-3.5 bg-white/10 hover:bg-white/15 hover:border-teal-400/40 hover:translate-x-1 border border-white/10 rounded-xl text-white transition-all duration-200 group touch-target min-h-[48px]"
                          aria-label={`Visit Pain Cure Instagram channel ${item.handle}`}
                        >
                          <div className="flex items-center gap-3">
                            <Instagram className="w-5 h-5 text-teal-400 group-hover:scale-110 transition-transform duration-200" />
                            <span className="font-semibold text-sm sm:text-base">{item.handle}</span>
                          </div>
                          <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-white group-hover:translate-x-1 transition-transform duration-200" />
                        </a>
                      ))}
                    </div>

                    <div className="pt-4 border-t border-white/15 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-slate-300">
                      <span>Official Website:</span>
                      <span className="text-teal-300 font-bold">{CLINIC_INFO.domain}</span>
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

export default ContactPage;
