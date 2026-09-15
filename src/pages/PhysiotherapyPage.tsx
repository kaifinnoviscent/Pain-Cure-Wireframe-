import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ConsultationCTA } from '../components/ConsultationCTA';
import { TREATMENTS, PHYSIOTHERAPY_MODALITIES } from '../data/clinicalData';
import physioImg from '../assets/physiotherapy.jpg';

export const PhysiotherapyPage: React.FC = () => {
  const physio = TREATMENTS.find((t) => t.id === 'physiotherapy')!;

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
        <section className="py-12 sm:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              <div className="lg:col-span-7">
                <span className="text-xs sm:text-sm font-bold tracking-widest text-teal-800 uppercase block mb-3">
                  {physio.number} &bull; {physio.disciplineLabel}
                </span>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-navy-900 tracking-tight leading-tight mb-6">
                  {physio.name}
                </h1>
                <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl font-normal mb-8">
                  {physio.whatItIs}
                </p>

                <div className="flex flex-wrap gap-4">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white font-semibold px-7 py-3.5 rounded-lg shadow-sm transition-all duration-150 text-sm sm:text-base"
                  >
                    <span>Consult on Physiotherapy</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <a
                    href="#modalities-list"
                    className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-navy-900 font-semibold px-6 py-3.5 rounded-lg border border-slate-300 transition-all duration-150 text-sm sm:text-base"
                  >
                    <span>View Approved Modalities</span>
                  </a>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm bg-slate-50">
                  <img
                    src={physioImg}
                    alt="Clinical physiotherapy session at Pain Cure clinic"
                    className="w-full h-[320px] sm:h-[420px] object-cover object-center"
                    width="600"
                    height="420"
                  />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* SECTION 1: What It Addresses */}
        <section className="py-16 sm:py-20 bg-slate-50/60 border-t border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="text-xs font-bold tracking-widest text-teal-800 uppercase block mb-2">
                Clinical Focus
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900 tracking-tight mb-4">
                When Physiotherapy Is Recommended
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal mb-6">
                {physio.whoItIsFor}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  'Post-operative rehabilitation following orthopaedic procedures',
                  'Conservative management of joint pain and stiffness',
                  'Recovery from sports and musculoskeletal injuries',
                  'Restoration of functional movement, balance, and strength',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 p-4 bg-white rounded-xl border border-slate-200/80 shadow-xs">
                    <CheckCircle2 className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                    <span className="text-sm font-semibold text-navy-900">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: Approved Modalities — Detailed Clinical Explanation */}
        <section id="modalities-list" className="py-16 sm:py-24 bg-white border-t border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="max-w-3xl mb-14">
              <span className="text-xs font-bold tracking-widest text-teal-800 uppercase block mb-2">
                Approved Modalities
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight mb-4">
                Clinical Modalities &amp; Their Purpose
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                {physio.careInvolves}
              </p>
            </div>

            <div className="space-y-6 max-w-4xl">
              {PHYSIOTHERAPY_MODALITIES.map((mod, index) => (
                <div
                  key={mod.id}
                  className="p-7 sm:p-8 bg-slate-50/70 rounded-2xl border border-slate-200/90 shadow-xs"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-slate-200 mb-4">
                    <div className="flex items-center gap-3">
                      <span className="w-8 h-8 rounded-lg bg-teal-50 border border-teal-200 text-teal-800 font-mono font-bold text-xs flex items-center justify-center">
                        0{index + 1}
                      </span>
                      <div>
                        <h3 className="text-xl font-bold text-navy-900">
                          {mod.name}
                        </h3>
                        <span className="text-xs text-slate-500 font-medium">
                          {mod.fullName}
                        </span>
                      </div>
                    </div>
                    <span className="inline-block self-start sm:self-auto px-3 py-1 bg-white border border-slate-200 rounded-full text-xs font-semibold text-teal-800">
                      Approved Clinical Modality
                    </span>
                  </div>

                  <div className="space-y-3.5 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    <div>
                      <span className="font-bold text-navy-900 block mb-0.5 text-xs">What it is:</span>
                      <p>{mod.whatItIs}</p>
                    </div>
                    <div>
                      <span className="font-bold text-navy-900 block mb-0.5 text-xs">General clinical use:</span>
                      <p>{mod.generalUse}</p>
                    </div>
                    <div>
                      <span className="font-bold text-navy-900 block mb-0.5 text-xs">Role in rehabilitation:</span>
                      <p>{mod.rehabilitationRole}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* SECTION 3: What to Expect */}
        <section className="py-16 sm:py-20 bg-slate-50/60 border-t border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="text-xs font-bold tracking-widest text-teal-800 uppercase block mb-2">
                Patient Guidance
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900 tracking-tight mb-6">
                What to Expect
              </h2>
              <div className="space-y-4 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                <p>{physio.patientExpectation}</p>
                <p>
                  Modalities are never applied blindly; they are selected to complement active exercise and rehabilitation according to your individual assessment.
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

