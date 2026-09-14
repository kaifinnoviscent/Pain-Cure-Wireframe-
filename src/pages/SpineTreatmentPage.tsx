import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ConsultationCTA } from '../components/ConsultationCTA';
import spineImg from '../assets/spine-care.jpg';

export const SpineTreatmentPage: React.FC = () => {
  const conditions = [
    'Lumbar pain',
    'Neck pain',
    'Nerve pain',
    'Sciatica',
  ];

  const nonOperativeModalities = [
    'Robotic spine decompression',
    'Selective Nerve Root Block (SNRB)',
    'Physiotherapy',
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

        {/* Hero Section */}
        <section className="py-12 sm:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              <div className="lg:col-span-7">
                <span className="text-xs sm:text-sm font-bold tracking-widest text-teal-800 uppercase block mb-3">
                  Category 01 • Spine Care
                </span>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-navy-900 tracking-tight leading-tight mb-6">
                  Spine Care
                </h1>
                <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl font-normal mb-8">
                  Spine Care for lumbar pain, neck pain, nerve pain and sciatica. Clinical recommendations follow individual medical evaluation.
                </p>

                <div className="flex flex-wrap gap-4">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white font-semibold px-7 py-3.5 rounded-lg shadow-sm transition-all duration-150 text-sm sm:text-base"
                  >
                    <span>Consult on Spine Care</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <a
                    href="#conditions"
                    className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-navy-900 font-semibold px-6 py-3.5 rounded-lg border border-slate-300 transition-all duration-150 text-sm sm:text-base"
                  >
                    <span>View Conditions</span>
                  </a>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm bg-slate-50">
                  <img
                    src={spineImg}
                    alt="Clinical posture and spinal examination at Pain Cure clinic"
                    className="w-full h-[320px] sm:h-[420px] object-cover object-center"
                    width="600"
                    height="420"
                  />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* SECTION 1: Conditions Evaluated */}
        <section id="conditions" className="py-16 sm:py-20 bg-slate-50/60 border-t border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12">
              <span className="text-xs font-bold tracking-widest text-teal-800 uppercase block mb-2">
                Clinical Focus
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900 tracking-tight">
                Conditions Evaluated
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {conditions.map((item) => (
                <div
                  key={item}
                  className="bg-white border border-slate-200/90 rounded-xl p-6 sm:p-8 shadow-xs flex items-center gap-4"
                >
                  <div className="w-2.5 h-2.5 rounded-full bg-teal-600 shrink-0" />
                  <h3 className="text-lg font-bold text-navy-900">{item}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 2: Non-Operative & Interventional Care */}
        <section className="py-16 sm:py-20 bg-white border-t border-slate-200/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              
              <div className="lg:col-span-5">
                <span className="text-xs font-bold tracking-widest text-teal-800 uppercase block mb-2">
                  Interventional Approach
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900 tracking-tight mb-4">
                  Non-Operative &amp; Interventional Care
                </h2>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                  Non-operative modalities and interventional procedures evaluated according to individual clinical presentation.
                </p>
              </div>

              <div className="lg:col-span-7 divide-y divide-slate-100">
                {nonOperativeModalities.map((modality) => (
                  <div key={modality} className="py-5 first:pt-0 last:pb-0 flex items-center justify-between">
                    <h3 className="text-lg font-bold text-navy-900">
                      {modality}
                    </h3>
                    <span className="text-xs font-semibold px-3 py-1 bg-slate-50 text-slate-600 rounded-full border border-slate-200">
                      Non-Operative
                    </span>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </section>

        {/* SECTION 3: Operative Care & Spine Stabilisation */}
        <section className="py-16 sm:py-20 bg-mint-50/40 border-t border-teal-100/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              
              {/* Minimal Invasive MIS Spine Surgery */}
              <div className="bg-white border border-slate-200/90 rounded-2xl p-8 sm:p-10 shadow-xs flex flex-col justify-between">
                <div>
                  <span className="text-xs font-bold tracking-widest text-slate-500 uppercase block mb-3">
                    Surgical Pathway
                  </span>
                  <h2 className="text-2xl font-bold text-navy-900 tracking-tight mb-4">
                    Minimal Invasive MIS Spine Surgery
                  </h2>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-100 border border-slate-200 text-slate-600 text-xs font-semibold mb-6">
                    <span>Extreme / selected cases</span>
                  </div>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                    Minimal invasive MIS spine surgery is evaluated strictly for extreme or selected cases following direct clinical assessment.
                  </p>
                </div>
              </div>

              {/* Spine Stabilisation */}
              <div className="bg-white border border-slate-200/90 rounded-2xl p-8 sm:p-10 shadow-xs">
                <span className="text-xs font-bold tracking-widest text-slate-500 uppercase block mb-3">
                  Stabilisation Care
                </span>
                <h2 className="text-2xl font-bold text-navy-900 tracking-tight mb-6">
                  Spine Stabilisation
                </h2>
                <ul className="space-y-4 text-sm text-slate-700">
                  <li className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl border border-slate-200/60">
                    <CheckCircle2 className="w-5 h-5 text-teal-600 shrink-0" />
                    <span className="text-base font-semibold text-navy-900">Spine stabilisation for fracture</span>
                  </li>
                  <li className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl border border-slate-200/60">
                    <CheckCircle2 className="w-5 h-5 text-teal-600 shrink-0" />
                    <span className="text-base font-semibold text-navy-900">Spine stabilisation for deformity</span>
                  </li>
                </ul>
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
