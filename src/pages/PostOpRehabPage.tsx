import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CheckCircle2, ShieldCheck, Activity, UserCheck } from 'lucide-react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ConsultationCTA } from '../components/ConsultationCTA';
import { CONSULTATION_PATH } from '../data/clinicalData';
import rehabImg from '../assets/post-op-rehab.jpg';

export const PostOpRehabPage: React.FC = () => {
  const highlights = [
    'Supervised in-house rehabilitation following orthopaedic surgical procedures',
    'Care tailored to the specific surgery, tissue healing stage, and individual needs',
    'Focused on the progressive restoration of movement, joint mobility, and functional strength',
    'Guidance aimed at supporting a safe and confident return to everyday activities',
  ];

  const journeySteps = [
    {
      num: '01',
      title: 'Clinical Assessment',
      desc: 'Careful evaluation of post-operative healing, current range of movement, weight-bearing status, and individual recovery requirements.',
    },
    {
      num: '02',
      title: 'Targeted Modalities',
      desc: 'Application of approved therapeutic modalities where clinically indicated to assist with discomfort, ease tissue stiffness, and support healing.',
    },
    {
      num: '03',
      title: 'Supervised Rehabilitation',
      desc: 'Guided, progressive exercise therapy to steadily rebuild muscle support, restore joint mechanics, and improve functional mobility.',
    },
    {
      num: '04',
      title: 'Return to Daily Movement',
      desc: 'Progressive functional training focused on helping patients regain independence in walking, stairs, and routine everyday activities.',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-grow">
        {/* Navigation Breadcrumb */}
        <div className="bg-slate-50 border-b border-slate-200/80 py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              to="/treatments"
              className="inline-flex items-center gap-2 text-xs font-bold text-teal-700 hover:text-teal-800 uppercase tracking-wider group"
            >
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              <span>Back to Treatments</span>
            </Link>
          </div>
        </div>

        {/* Hero Section: Grounded Deep Navy Editorial */}
        <section className="py-12 sm:py-16 bg-navy-950 text-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              <div className="lg:col-span-6 flex flex-col items-start">
                <span className="text-xs sm:text-sm font-bold tracking-widest text-teal-400 uppercase mb-4">
                  Dedicated In-House Service
                </span>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight mb-6">
                  In-house Post-Operative Rehab
                </h1>
                
                <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal mb-6">
                  Orthopaedic surgery creates the anatomical foundation for recovery, but the outcome depends significantly on the rehabilitation that follows. How movement is reintroduced, how joints are mobilized, and how strength is rebuilt all influence the patient's eventual functional independence.
                </p>

                {/* Mobile Hero Image: surfaces photograph early on mobile */}
                <div className="block lg:hidden w-full mb-6 overflow-hidden rounded-2xl border border-white/20 shadow-2xl bg-navy-900">
                  <img
                    src={rehabImg}
                    alt="In-house post-operative rehabilitation session at Pain Cure clinic"
                    className="w-full h-[260px] sm:h-[340px] object-cover"
                    width="640"
                    height="340"
                  />
                </div>

                <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal mb-8">
                  Pain Cure provides dedicated in-house post-operative rehabilitation so that recovery is supervised within the same clinical environment. Care is tailored to each patient's procedure — including <Link to="/treatments/knee" className="text-teal-300 hover:text-white underline decoration-teal-400/60 underline-offset-2 transition-colors">knee replacement</Link>, <Link to="/treatments/hip" className="text-teal-300 hover:text-white underline decoration-teal-400/60 underline-offset-2 transition-colors">hip surgery</Link>, and <Link to="/treatments/spine" className="text-teal-300 hover:text-white underline decoration-teal-400/60 underline-offset-2 transition-colors">spine care</Link> — healing progress, and personal rehabilitation goals.
                </p>

                <div className="space-y-3 mb-10 w-full">
                  {highlights.map((item) => (
                    <div key={item} className="p-3.5 bg-white/[0.06] border border-white/10 rounded-xl flex items-start gap-3.5">
                      <CheckCircle2 className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" />
                      <span className="text-sm sm:text-base text-slate-200 font-medium leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4">
                  <Link
                    to={CONSULTATION_PATH}
                    className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-500 text-white font-semibold px-7 py-3.5 rounded-xl shadow-lg transition-all duration-150 text-sm sm:text-base"
                  >
                    <span>Consult on Post-Op Care</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <a
                    href="#recovery-philosophy"
                    className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 text-white font-semibold px-6 py-3.5 rounded-xl border border-white/20 transition-all duration-150 text-sm sm:text-base"
                  >
                    <span>Our Care Journey</span>
                  </a>
                </div>
              </div>

              {/* Desktop Hero Image */}
              <div className="hidden lg:block lg:col-span-6">
                <div className="overflow-hidden rounded-2xl border border-white/20 shadow-2xl bg-navy-900 group">
                  <img
                    src={rehabImg}
                    alt="In-house post-operative rehabilitation session at Pain Cure clinic"
                    className="w-full h-[460px] object-cover transition-transform duration-500 group-hover:scale-105"
                    width="640"
                    height="460"
                  />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* SECTION 1: Why In-House Rehabilitation Matters */}
        <section className="py-12 sm:py-16 bg-slate-50/60 border-t border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-8 sm:mb-10">
              <span className="text-xs font-bold tracking-widest text-teal-800 uppercase block mb-2">
                Clinical Approach
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight mb-4">
                Principles of Post-Surgical Recovery
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                Post-operative rehabilitation at Pain Cure is structured around three core principles to support steady, patient-centered healing.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-7 sm:p-8 bg-white rounded-2xl border border-slate-200/90 shadow-card flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-200/80 flex items-center justify-center text-teal-800 mb-5 shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold text-navy-900 mb-2">
                    Supervised Care
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    Rehabilitation exercises and modalities are directly supervised by clinical staff, ensuring safe technique and appropriate pacing throughout recovery.
                  </p>
                </div>
              </div>

              <div className="p-7 sm:p-8 bg-white rounded-2xl border border-slate-200/90 shadow-card flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-200/80 flex items-center justify-center text-teal-800 mb-5 shrink-0">
                    <Activity className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold text-navy-900 mb-2">
                    Progressive Restoration
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    Mobility, flexibility, and strength are rebuilt gradually, respecting the natural biological healing stages of surgical tissues and bone.
                  </p>
                </div>
              </div>

              <div className="p-7 sm:p-8 bg-white rounded-2xl border border-slate-200/90 shadow-card flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-200/80 flex items-center justify-center text-teal-800 mb-5 shrink-0">
                    <UserCheck className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold text-navy-900 mb-2">
                    Individual Adaptation
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    Every patient heals differently. Programmes are adapted based on individual comfort, mobility progress, and physician guidance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Philosophy & Care Journey Integration */}
        <section id="recovery-philosophy" className="py-12 sm:py-16 bg-white border-t border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="max-w-3xl mb-8 sm:mb-10">
              <span className="text-xs font-bold tracking-widest text-teal-800 uppercase block mb-3">
                Patient-Centred Philosophy
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-900 tracking-tight leading-tight">
                Our Care Journey
              </h2>
              <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
                The care journey represents our patient-centred recovery philosophy from initial post-surgical evaluation to daily functional independence.
              </p>
            </div>

            {/* Clean Editorial Care Progression Sequence */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8">
              {journeySteps.map((step) => (
                <div
                  key={step.num}
                  className="pt-6 border-t-2 border-teal-700/30 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-mono text-xs font-extrabold text-teal-800 bg-teal-50 border border-teal-200/80 px-2.5 py-1 rounded tracking-wider uppercase">
                        Stage {step.num}
                      </span>
                    </div>
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

            <div className="mt-10 p-6 bg-teal-50/40 border border-teal-100 rounded-xl max-w-3xl">
              <p className="text-xs sm:text-sm text-slate-600 italic leading-relaxed">
                Note: Individual rehabilitation plans and progression are determined strictly according to clinical evaluation, surgical recommendations, and medical advice.
              </p>
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

