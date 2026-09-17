import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ConsultationCTA } from '../components/ConsultationCTA';
import { TREATMENTS, CONSULTATION_PATH } from '../data/clinicalData';
import spineImg from '../assets/spine-care.jpg';

export const SpineTreatmentPage: React.FC = () => {
  const spine = TREATMENTS.find((t) => t.id === 'spine')!;

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-grow">
        {/* Navigation Breadcrumb */}
        <div className="bg-slate-50 border-b border-slate-200/80 py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              to="/treatments"
              className="inline-flex items-center gap-2 text-xs font-bold text-teal-800 hover:text-teal-950 uppercase tracking-wider group"
            >
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              <span>Back to Treatments</span>
            </Link>
          </div>
        </div>

        {/* Hero Section */}
        <section className="py-8 sm:py-10 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              
              <div className="lg:col-span-7">
                <span className="text-xs sm:text-sm font-bold tracking-wider text-teal-900 uppercase block mb-2.5">
                  {spine.number} &bull; {spine.disciplineLabel}
                </span>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-900 tracking-tight leading-[1.18] sm:leading-[1.15] mb-4">
                  {spine.name}
                </h1>
                <p className="text-base sm:text-lg text-slate-700 leading-relaxed max-w-2xl font-normal mb-6">
                  {spine.whatItIs}
                </p>

                <div className="flex flex-wrap gap-3.5">
                  <Link
                    to={CONSULTATION_PATH}
                    className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white font-semibold px-6 py-3.5 rounded-lg shadow-sm transition-all duration-150 text-sm sm:text-base focus-visible:outline-teal-600"
                  >
                    <span>Consult on Spine Care</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <a
                    href="#conditions"
                    className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-navy-900 font-semibold px-5 py-3.5 rounded-lg border border-slate-300 transition-all duration-150 text-sm sm:text-base"
                  >
                    <span>View Conditions &amp; Care</span>
                  </a>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm bg-slate-50">
                  <img
                    src={spineImg}
                    alt="Clinical spinal assessment at Pain Cure clinic"
                    className="w-full h-[280px] sm:h-[360px] lg:h-[380px] object-cover object-center"
                    width="600"
                    height="380"
                  />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* SECTION 1: Conditions Evaluated */}
        <section id="conditions" className="py-8 sm:py-10 bg-slate-50/60 border-t border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              
              <div className="lg:col-span-5">
                <span className="text-xs font-bold tracking-wider text-teal-900 uppercase block mb-1.5">
                  What It Addresses
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900 tracking-tight mb-3">
                  Conditions Evaluated
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                  {spine.whoItIsFor}
                </p>
              </div>

              <div className="lg:col-span-7">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {spine.conditions?.map((item) => (
                    <div
                      key={item}
                      className="bg-white border border-slate-200/90 rounded-xl p-4 sm:p-4.5 shadow-xs flex items-start gap-3"
                    >
                      <div className="w-2.5 h-2.5 rounded-full bg-teal-600 shrink-0 mt-1.5" />
                      <h3 className="text-base sm:text-lg font-bold text-navy-900">{item}</h3>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* SECTION 2: How Care Works */}
        <section className="py-8 sm:py-10 bg-white border-t border-slate-200/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

              <div className="lg:col-span-5">
                <span className="text-xs font-bold tracking-wider text-teal-900 uppercase block mb-1.5">
                  How Care Works
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900 tracking-tight mb-3">
                  Non-Operative &amp; Interventional Care
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                  The emphasis in spine care at Pain Cure is on conservative, non-surgical management wherever clinically appropriate. Assessment findings guide which non-operative modalities or interventional procedures are most suitable for each patient's presentation.
                </p>
              </div>

              <div className="lg:col-span-7 divide-y divide-slate-100 border border-slate-200/90 rounded-2xl bg-white shadow-xs">
                {spine.nonOperative?.map((modality) => (
                  <div key={modality} className="py-3.5 px-5 sm:px-6 flex items-center justify-between gap-4">
                    <h3 className="text-sm sm:text-base font-bold text-navy-900">
                      {modality}
                    </h3>
                    <span className="shrink-0 text-xs font-semibold px-3 py-1 bg-teal-50 text-teal-800 rounded-full border border-teal-200">
                      Non-Operative
                    </span>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </section>

        {/* SECTION 3: Operative Care & Spine Stabilisation */}
        <section className="py-8 sm:py-10 bg-slate-50/60 border-t border-teal-100/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-6 sm:mb-7">
              <span className="text-xs font-bold tracking-wider text-slate-700 uppercase block mb-1.5">
                Surgical Pathways
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900 tracking-tight">
                When Surgery Is Considered
              </h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6 items-start">
              
              <div className="bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-7 shadow-xs">
                <span className="text-xs font-bold tracking-wider text-slate-700 uppercase block mb-1.5">
                  Surgical Pathway
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-navy-900 tracking-tight mb-2">
                  Minimally Invasive Spine Surgery
                </h3>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-100 border border-slate-200 text-slate-700 text-xs font-semibold mb-3.5">
                  <span>Considered for extreme or selected cases only</span>
                </div>
                <p className="text-sm text-slate-700 leading-relaxed font-normal">
                  Minimally invasive spine surgery is not a routine or first-line approach. It is evaluated as an option in extreme or specifically selected cases where non-operative management has been insufficient or where the clinical presentation requires surgical intervention. The decision is made following thorough direct clinical assessment.
                </p>
              </div>

              <div className="bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-7 shadow-xs">
                <span className="text-xs font-bold tracking-wider text-slate-700 uppercase block mb-1.5">
                  Stabilisation Care
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-navy-900 tracking-tight mb-2.5">
                  Spine Stabilisation
                </h3>
                <p className="text-sm text-slate-700 leading-relaxed font-normal mb-4">
                  In specific clinical situations — such as spinal fractures resulting from trauma or structural deformity — stabilisation procedures are provided to restore spinal integrity and support recovery.
                </p>
                <ul className="space-y-2.5">
                  <li className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl border border-slate-200/60">
                    <CheckCircle2 className="w-4.5 h-4.5 text-teal-600 shrink-0" />
                    <span className="text-sm sm:text-base font-semibold text-navy-900">Spine stabilisation for fracture</span>
                  </li>
                  <li className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl border border-slate-200/60">
                    <CheckCircle2 className="w-4.5 h-4.5 text-teal-600 shrink-0" />
                    <span className="text-sm sm:text-base font-semibold text-navy-900">Spine stabilisation for deformity</span>
                  </li>
                </ul>
              </div>

            </div>
          </div>
        </section>

        {/* SECTION 4: Patient Guidance & What to Expect */}
        <section className="pt-8 sm:pt-10 pb-0 bg-white border-t border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Section Heading Area — Sitting Naturally Above the Panel */}
            <div className="max-w-3xl mb-5 sm:mb-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-md bg-teal-50 border border-teal-200/90 mb-2.5 shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-teal-600" aria-hidden="true" />
                <span className="text-xs font-bold tracking-wider text-teal-900 uppercase">
                  Patient Guidance
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-navy-900 tracking-tight mb-2.5">
                What to Expect
              </h2>
              <div className="w-12 h-1 bg-gradient-to-r from-teal-600 to-teal-400 rounded-full" aria-hidden="true" />
            </div>

            {/* Main Mint/Teal Graphic Feature Panel */}
            <div className="relative rounded-2xl sm:rounded-3xl border border-teal-300/90 bg-gradient-to-br from-[#D7F4EE] via-[#E2F7F2] to-[#CCEFE7] overflow-hidden shadow-[0_4px_24px_-4px_rgba(13,139,131,0.15)]">
              
              {/* Solid Left Teal Accent Strip */}
              <div className="absolute left-0 top-0 bottom-0 w-2.5 sm:w-3.5 bg-teal-600 z-20" aria-hidden="true" />

              {/* Decorative Architectural / Geometric Graphics */}
              {/* Top Right Dot Matrix Grid */}
              <div className="absolute top-6 right-6 sm:top-8 sm:right-8 opacity-20 select-none pointer-events-none hidden sm:block" aria-hidden="true">
                <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="6" cy="6" r="2.5" className="fill-teal-800" />
                  <circle cx="26" cy="6" r="2.5" className="fill-teal-800" />
                  <circle cx="46" cy="6" r="2.5" className="fill-teal-800" />
                  <circle cx="66" cy="6" r="2.5" className="fill-teal-800" />
                  <circle cx="6" cy="26" r="2.5" className="fill-teal-800" />
                  <circle cx="26" cy="26" r="2.5" className="fill-teal-800" />
                  <circle cx="46" cy="26" r="2.5" className="fill-teal-800" />
                  <circle cx="66" cy="26" r="2.5" className="fill-teal-800" />
                  <circle cx="6" cy="46" r="2.5" className="fill-teal-800" />
                  <circle cx="26" cy="46" r="2.5" className="fill-teal-800" />
                  <circle cx="46" cy="46" r="2.5" className="fill-teal-800" />
                  <circle cx="66" cy="46" r="2.5" className="fill-teal-800" />
                  <circle cx="6" cy="66" r="2.5" className="fill-teal-800" />
                  <circle cx="26" cy="66" r="2.5" className="fill-teal-800" />
                  <circle cx="46" cy="66" r="2.5" className="fill-teal-800" />
                  <circle cx="66" cy="66" r="2.5" className="fill-teal-800" />
                </svg>
              </div>

              {/* Bottom Right Overlapping Concentric Arcs & Geometric Shapes */}
              <div className="absolute -bottom-20 -right-20 w-72 h-72 sm:w-96 sm:h-96 rounded-full border-[32px] sm:border-[44px] border-teal-500/10 sm:border-teal-500/15 select-none pointer-events-none hidden sm:block" aria-hidden="true" />
              <div className="absolute bottom-0 right-0 w-28 h-28 sm:w-60 sm:h-60 rounded-tl-full bg-teal-500/10 sm:bg-teal-500/15 select-none pointer-events-none" aria-hidden="true" />
              <div className="absolute bottom-0 right-0 w-12 h-10 sm:w-28 sm:h-20 bg-teal-600/10 sm:bg-teal-600/15 select-none pointer-events-none" aria-hidden="true" />

              {/* Clinical Reading Content Surface */}
              <div className="relative z-10 pl-6 sm:pl-12 lg:pl-14 pr-6 sm:pr-14 lg:pr-20 py-6 sm:py-8 lg:py-9 max-w-4xl space-y-4 text-sm sm:text-base lg:text-[16.5px] text-navy-950 leading-relaxed font-normal">
                <p>{spine.patientExpectation}</p>
                <div className="border-t border-teal-700/20 my-3.5" aria-hidden="true" />
                <p>
                  Where{' '}
                  <Link to="/treatments/physiotherapy" className="text-teal-900 hover:text-navy-950 font-bold underline decoration-teal-600 decoration-2 underline-offset-2">
                    physiotherapy
                  </Link>{' '}
                  is recommended, this is integrated into the spine care pathway and provided in-house. All treatment decisions — whether conservative or surgical — are made on the basis of individual clinical assessment.
                </p>
              </div>

            </div>

          </div>
        </section>

        <ConsultationCTA />
      </main>

      <Footer />
    </div>
  );
};

