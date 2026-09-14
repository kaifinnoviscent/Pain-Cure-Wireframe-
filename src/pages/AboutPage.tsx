import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Shield } from 'lucide-react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ConsultationCTA } from '../components/ConsultationCTA';
import heroImg from '../assets/hero-rehab.jpg';
import rehabImg from '../assets/post-op-rehab.jpg';

export const AboutPage: React.FC = () => {
  const principles = [
    {
      num: '01',
      title: 'Thorough Clinical Assessment',
      desc: 'Careful clinical evaluation to understand symptoms, individual needs, and recovery goals.',
    },
    {
      num: '02',
      title: 'Balanced Clinical Pathways',
      desc: 'Recommending appropriate non-operative modalities or operative care where indicated.',
    },
    {
      num: '03',
      title: 'Integrated In-House Rehabilitation',
      desc: 'In-house Post Operative Rehab and physical modalities to support steady recovery.',
    },
  ];

  const journeySteps = [
    {
      num: '01',
      title: 'Assess',
      desc: 'Clinical evaluation to understand symptoms, physical baseline, and personal recovery goals.',
    },
    {
      num: '02',
      title: 'Treat',
      desc: 'Appropriate clinical intervention — non-operative modalities or surgical care as indicated.',
    },
    {
      num: '03',
      title: 'Rehabilitate',
      desc: 'Supervised physical therapy and In-house Post Operative Rehab for steady, progressive recovery.',
    },
    {
      num: '04',
      title: 'Return to Movement',
      desc: 'Guiding patients toward daily functional independence, routine activities, and everyday movement with confidence.',
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
              Pain Cure Ortho &amp; Rehab Clinic &bull; About the Clinic
            </span>
          </div>
        </div>

        {/* Hero Section */}
        <section className="py-16 sm:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              <div className="lg:col-span-7">
                <span className="text-xs sm:text-sm font-bold tracking-widest text-teal-800 uppercase block mb-3">
                  Clinic Philosophy &amp; Approach
                </span>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-navy-900 tracking-tight leading-tight mb-6">
                  A connected approach to orthopaedic recovery.
                </h1>
                <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl font-normal mb-8">
                  At Pain Cure Ortho &amp; Rehab Clinic, orthopaedic intervention and rehabilitation are not separate phases. They are integrated parts of a cohesive, patient-centred care philosophy.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white font-semibold px-7 py-3.5 rounded-lg shadow-sm transition-all duration-150 text-sm sm:text-base"
                  >
                    <span>Request a Consultation</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <a
                    href="#care-journey"
                    className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-navy-900 font-semibold px-6 py-3.5 rounded-lg border border-slate-300 transition-all duration-150 text-sm sm:text-base"
                  >
                    <span>Explore Our Care Journey</span>
                  </a>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm bg-slate-50">
                  <img
                    src={heroImg}
                    alt="Patient-centred physical rehabilitation at Pain Cure clinic"
                    className="w-full h-[340px] sm:h-[440px] object-cover object-center"
                    width="600"
                    height="440"
                  />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Section 1: Philosophy & Core Principles */}
        <section className="py-20 sm:py-28 bg-mint-50/40 border-t border-teal-100/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
              
              <div className="lg:col-span-5">
                <span className="text-xs font-bold tracking-widest text-teal-800 uppercase block mb-3">
                  Our Principles
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight leading-tight mb-6">
                  Patient-centred care at every stage.
                </h2>
                <p className="text-base text-slate-600 leading-relaxed font-normal mb-6">
                  Every patient's condition is unique. Our clinical framework emphasises careful individual assessment, appropriate treatment selection, and dedicated in-house rehabilitation.
                </p>
                <div className="p-5 bg-white border border-teal-100 rounded-xl shadow-xs text-xs sm:text-sm text-slate-600 space-y-2">
                  <div className="flex items-center gap-2 font-semibold text-navy-900">
                    <Shield className="w-4 h-4 text-teal-700" />
                    <span>Evidence-Informed Practice</span>
                  </div>
                  <p>
                    Clinical recommendations are made following thorough individual evaluation.
                  </p>
                </div>
              </div>

              <div className="lg:col-span-7 space-y-6">
                {principles.map((p) => (
                  <div
                    key={p.num}
                    className="bg-white border border-slate-200/90 rounded-2xl p-7 sm:p-8 shadow-xs flex items-start gap-6"
                  >
                    <span className="text-2xl sm:text-3xl font-extrabold text-teal-800 font-mono shrink-0">
                      {p.num}
                    </span>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-navy-900 mb-2">
                        {p.title}
                      </h3>
                      <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                        {p.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </section>

        {/* Section 2: The Care Journey (Editorial sequence — NOT a universal medical guarantee) */}
        <section id="care-journey" className="py-20 sm:py-28 bg-white border-t border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="max-w-3xl mb-16 sm:mb-20">
              <span className="text-xs font-bold tracking-widest text-teal-800 uppercase block mb-3">
                Continuum of Care
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-900 tracking-tight leading-tight">
                The Care Journey
              </h2>
              <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
                Our care philosophy is built around a cohesive four-stage pathway from initial assessment through to everyday movement.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {journeySteps.map((step) => (
                <div
                  key={step.num}
                  className="bg-slate-50 border border-slate-200/90 rounded-2xl p-8 flex flex-col justify-between shadow-xs"
                >
                  <div>
                    <div className="w-11 h-11 rounded-full bg-white border-2 border-teal-600 text-teal-800 font-extrabold text-sm flex items-center justify-center mb-6 shadow-xs">
                      {step.num}
                    </div>
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">
                      Stage {step.num}
                    </span>
                    <h3 className="text-xl font-bold text-navy-900 tracking-tight mb-3">
                      {step.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed font-normal">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 p-6 bg-slate-50 border border-slate-200 rounded-2xl max-w-3xl">
              <p className="text-xs sm:text-sm text-slate-600 italic leading-relaxed">
                Note: The Care Journey represents our overarching patient-centred care philosophy. Individual clinical plans, stages, and progression are determined strictly according to clinical assessment and medical advice.
              </p>
            </div>

          </div>
        </section>

        {/* Section 3: In-House Post Operative Rehab Connection */}
        <section className="py-20 sm:py-28 bg-navy-950 text-white border-t border-navy-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              <div className="lg:col-span-6">
                <span className="text-xs sm:text-sm font-bold tracking-widest text-teal-400 uppercase block mb-3">
                  Dedicated In-House Service
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
                  In-house Post Operative Rehab
                </h2>
                <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal mb-8">
                  Recovery care following orthopaedic procedures is supported through dedicated in-house rehabilitation at Pain Cure clinic.
                </p>
                <div className="space-y-4 mb-10">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-teal-400 shrink-0" />
                    <span className="text-slate-200 font-medium text-sm sm:text-base">In-house Post Operative Rehab</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-teal-400 shrink-0" />
                    <span className="text-slate-200 font-medium text-sm sm:text-base">Focused on returning patients to everyday movement</span>
                  </div>
                </div>

                <Link
                  to="/post-operative-rehab"
                  className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-500 text-white font-semibold px-7 py-3.5 rounded-lg shadow-sm transition-all duration-150 text-sm sm:text-base"
                >
                  <span>Learn More About Post-Op Rehab</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="lg:col-span-6">
                <div className="overflow-hidden rounded-2xl border border-white/15 shadow-xl bg-navy-900">
                  <img
                    src={rehabImg}
                    alt="In-house post-operative rehabilitation at Pain Cure clinic"
                    className="w-full h-[360px] sm:h-[460px] object-cover"
                    width="600"
                    height="460"
                  />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Consultation Section */}
        <ConsultationCTA />
      </main>

      <Footer />
    </div>
  );
};
