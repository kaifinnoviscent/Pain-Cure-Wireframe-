import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ConsultationCTA } from '../components/ConsultationCTA';
import { TREATMENTS } from '../data/clinicalData';
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
                  {spine.number} &bull; {spine.disciplineLabel}
                </span>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-navy-900 tracking-tight leading-tight mb-6">
                  {spine.name}
                </h1>
                <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl font-normal mb-8">
                  {spine.whatItIs}
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
                    <span>View Conditions &amp; Care</span>
                  </a>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm bg-slate-50">
                  <img
                    src={spineImg}
                    alt="Clinical spinal assessment at Pain Cure clinic"
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
        <section id="conditions" className="py-12 sm:py-16 bg-slate-50/60 border-t border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
              
              <div className="lg:col-span-5">
                <span className="text-xs font-bold tracking-widest text-teal-800 uppercase block mb-2">
                  What It Addresses
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900 tracking-tight mb-4">
                  Conditions Evaluated
                </h2>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                  {spine.whoItIsFor}
                </p>
              </div>

              <div className="lg:col-span-7">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {spine.conditions?.map((item) => (
                    <div
                      key={item}
                      className="bg-white border border-slate-200/90 rounded-xl p-6 shadow-xs flex items-start gap-4"
                    >
                      <div className="w-2.5 h-2.5 rounded-full bg-teal-600 shrink-0 mt-1.5" />
                      <h3 className="text-lg font-bold text-navy-900">{item}</h3>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* SECTION 2: How Care Works */}
        <section className="py-12 sm:py-16 bg-white border-t border-slate-200/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

              <div className="lg:col-span-5">
                <span className="text-xs font-bold tracking-widest text-teal-800 uppercase block mb-2">
                  How Care Works
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900 tracking-tight mb-4">
                  Non-Operative &amp; Interventional Care
                </h2>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                  The emphasis in spine care at Pain Cure is on conservative, non-surgical management wherever clinically appropriate. Assessment findings guide which non-operative modalities or interventional procedures are most suitable for each patient's presentation.
                </p>
              </div>

              <div className="lg:col-span-7 divide-y divide-slate-100 border border-slate-200/90 rounded-2xl bg-white shadow-xs">
                {spine.nonOperative?.map((modality) => (
                  <div key={modality} className="py-5 px-6 sm:px-8 flex items-center justify-between gap-4">
                    <h3 className="text-base sm:text-lg font-bold text-navy-900">
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
        <section className="py-12 sm:py-16 bg-slate-50/60 border-t border-teal-100/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-10">
              <span className="text-xs font-bold tracking-widest text-slate-500 uppercase block mb-2">
                Surgical Pathways
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900 tracking-tight">
                When Surgery Is Considered
              </h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              
              <div className="bg-white border border-slate-200/90 rounded-2xl p-8 sm:p-10 shadow-xs">
                <span className="text-xs font-bold tracking-widest text-slate-500 uppercase block mb-3">
                  Surgical Pathway
                </span>
                <h3 className="text-xl font-bold text-navy-900 tracking-tight mb-3">
                  Minimally Invasive Spine Surgery
                </h3>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-100 border border-slate-200 text-slate-600 text-xs font-semibold mb-5">
                  <span>Considered for extreme or selected cases only</span>
                </div>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                  Minimally invasive spine surgery is not a routine or first-line approach. It is evaluated as an option in extreme or specifically selected cases where non-operative management has been insufficient or where the clinical presentation requires surgical intervention. The decision is made following thorough direct clinical assessment.
                </p>
              </div>

              <div className="bg-white border border-slate-200/90 rounded-2xl p-8 sm:p-10 shadow-xs">
                <span className="text-xs font-bold tracking-widest text-slate-500 uppercase block mb-3">
                  Stabilisation Care
                </span>
                <h3 className="text-xl font-bold text-navy-900 tracking-tight mb-4">
                  Spine Stabilisation
                </h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal mb-6">
                  In specific clinical situations — such as spinal fractures resulting from trauma or structural deformity — stabilisation procedures are provided to restore spinal integrity and support recovery.
                </p>
                <ul className="space-y-4">
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

        {/* SECTION 4: What to Expect */}
        <section className="py-12 sm:py-16 bg-white border-t border-slate-200/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
              <div className="lg:col-span-5">
                <span className="text-xs font-bold tracking-widest text-teal-800 uppercase block mb-2">
                  Patient Guidance
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900 tracking-tight mb-4">
                  What to Expect
                </h2>
              </div>
              <div className="lg:col-span-7 space-y-4 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                <p>{spine.patientExpectation}</p>
                <p>
                  Where physiotherapy is recommended, this is integrated into the spine care pathway and provided in-house. All treatment decisions — whether conservative or surgical — are made on the basis of individual clinical assessment.
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

