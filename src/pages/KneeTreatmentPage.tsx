import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Activity, Stethoscope, CheckCircle2 } from 'lucide-react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ConsultationCTA } from '../components/ConsultationCTA';
import { TREATMENTS, CONSULTATION_PATH } from '../data/clinicalData';
import kneeImg from '../assets/knee-treatment.jpg';

export const KneeTreatmentPage: React.FC = () => {
  const knee = TREATMENTS.find((t) => t.id === 'knee')!;

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

        {/* Hero Section */}
        <section className="py-12 sm:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              <div className="lg:col-span-7">
                <span className="text-xs sm:text-sm font-bold tracking-widest text-teal-800 uppercase block mb-3">
                  {knee.number} &bull; {knee.disciplineLabel}
                </span>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-navy-900 tracking-tight leading-tight mb-6">
                  {knee.name}
                </h1>
                <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl font-normal mb-8">
                  {knee.whatItIs}
                </p>

                <div className="flex flex-wrap gap-4">
                  <Link
                    to={CONSULTATION_PATH}
                    className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white font-semibold px-7 py-3.5 rounded-xl shadow-card transition-all duration-150 text-sm sm:text-base"
                  >
                    <span>Consult on Knee Care</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <a
                    href="#care-pathways"
                    className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-navy-900 font-semibold px-6 py-3.5 rounded-xl border border-slate-300 shadow-2xs transition-all duration-150 text-sm sm:text-base"
                  >
                    <span>Explore Pathways</span>
                  </a>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-card group bg-slate-50">
                  <img
                    src={kneeImg}
                    alt="Clinical knee examination session at Pain Cure clinic"
                    className="w-full h-[320px] sm:h-[420px] object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    width="600"
                    height="420"
                  />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* SECTION 1: What It Addresses */}
        <section className="py-12 sm:py-16 bg-slate-50/60 border-t border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
              <div className="lg:col-span-5">
                <span className="text-xs font-bold tracking-widest text-teal-800 uppercase block mb-2">
                  What It Addresses
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900 tracking-tight mb-4">
                  Knee Conditions &amp; Symptoms Evaluated
                </h2>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                  {knee.whoItIsFor}
                </p>
              </div>
              <div className="lg:col-span-7">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    'Joint pain and localized stiffness',
                    'Discomfort with walking or weight-bearing',
                    'Reduced range of movement and knee flexion',
                    'Degenerative joint changes and wear',
                  ].map((symptom) => (
                    <div key={symptom} className="flex items-start gap-3.5 p-4 sm:p-5 bg-white rounded-xl border border-slate-200/90 shadow-card">
                      <CheckCircle2 className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                      <span className="text-sm font-semibold text-navy-900 leading-snug">{symptom}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: Pathways Section */}
        <section id="care-pathways" className="py-12 sm:py-16 bg-white border-t border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="max-w-3xl mb-8 sm:mb-10">
              <span className="text-xs font-bold tracking-widest text-teal-800 uppercase block mb-2">
                Clinical Pathways
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight">
                Non-operative &amp; surgical options.
              </h2>
              <p className="mt-4 text-base text-slate-600 leading-relaxed font-normal">
                {knee.careInvolves}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
              
              {/* NON-OPERATIVE PATHWAY */}
              <div className="lg:col-span-7 bg-white border border-teal-100 rounded-2xl p-7 sm:p-10 shadow-card">
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-teal-50">
                  <div className="w-8 h-8 rounded-lg bg-teal-50 border border-teal-200 text-teal-700 flex items-center justify-center">
                    <Activity className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-extrabold tracking-widest text-teal-800 uppercase">
                    Conservative First Line
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-navy-900 tracking-tight mb-3">
                  Non-Operative Modalities
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                  Non-operative management aims to manage discomfort and support joint mobility without surgery wherever the clinical condition permits.
                </p>

                <div className="space-y-3.5">
                  {knee.nonOperative?.map((item) => (
                    <div
                      key={item}
                      className="p-4 sm:p-4.5 bg-teal-50/40 rounded-xl border border-teal-100/80 flex items-center justify-between shadow-2xs"
                    >
                      <h4 className="text-base font-bold text-navy-900">
                        {item}
                      </h4>
                      <span className="text-xs font-semibold px-3 py-1 bg-white border border-teal-200 text-teal-800 rounded-full shadow-2xs">
                        Non-Operative
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* OPERATIVE PATHWAY */}
              <div className="lg:col-span-5 bg-white border border-slate-200/90 rounded-2xl p-7 sm:p-10 shadow-card flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
                    <div className="w-8 h-8 rounded-lg bg-slate-100 border border-slate-200 text-navy-800 flex items-center justify-center">
                      <Stethoscope className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-extrabold tracking-widest text-slate-500 uppercase">
                      Surgical Care
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-navy-900 tracking-tight mb-3">
                    Operative Pathway
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                    When conservative measures are insufficient and joint wear is localized, operative intervention is considered.
                  </p>

                  <div className="p-5 bg-slate-50 rounded-xl border border-slate-200/80 mb-6 shadow-2xs">
                    <span className="text-xs font-bold text-teal-700 uppercase tracking-wider block mb-2">
                      Operative Procedure
                    </span>
                    <h4 className="text-lg font-bold text-navy-900">
                      Unicondylar knee replacement
                    </h4>
                    <p className="text-xs text-slate-600 mt-2 leading-relaxed font-normal">
                      Partial knee replacement targeting the affected compartment of the knee joint. Supported by in-house{' '}
                      <Link to="/post-operative-rehab" className="text-teal-700 hover:text-teal-900 font-semibold underline decoration-teal-300 underline-offset-2">
                        post-operative rehabilitation
                      </Link>.
                    </p>
                  </div>
                </div>

                <div className="mt-4 pt-6 border-t border-slate-100">
                  <Link
                    to={CONSULTATION_PATH}
                    className="inline-flex items-center gap-2 text-sm font-bold text-teal-700 hover:text-teal-800 group"
                  >
                    <span>Discuss Knee Treatment with Our Team</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* SECTION 3: What to Expect */}
        <section className="py-10 sm:py-12 bg-slate-50/60 border-t border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              <div className="lg:col-span-4">
                <span className="text-xs font-bold tracking-widest text-teal-800 uppercase block mb-2">
                  Patient Guidance
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900 tracking-tight">
                  What to Expect
                </h2>
              </div>
              <div className="lg:col-span-8 space-y-4 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                <p>{knee.patientExpectation}</p>
                <p>
                  Whether managed conservatively or through surgical replacement, rehabilitation is focused on restoring joint function and helping you resume daily activities with confidence.
                </p>
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

