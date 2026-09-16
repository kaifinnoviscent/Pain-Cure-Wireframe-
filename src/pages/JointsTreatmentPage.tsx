import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ConsultationCTA } from '../components/ConsultationCTA';
import { TREATMENTS } from '../data/clinicalData';
import jointsImg from '../assets/joints-treatment.jpg';

export const JointsTreatmentPage: React.FC = () => {
  const joints = TREATMENTS.find((t) => t.id === 'joints')!;

  const jointDetails = [
    {
      num: '01',
      name: 'Shoulder',
      detail: 'Evaluation of localized shoulder pain, restricted reach, overhead movement difficulty, and joint stiffness.',
    },
    {
      num: '02',
      name: 'Elbow',
      detail: 'Assessment of elbow joint discomfort, pain with gripping or bending, and functional limitations in arm movement.',
    },
    {
      num: '03',
      name: 'Wrist',
      detail: 'Clinical evaluation of wrist joint pain, stiffness, reduced flexibility, and discomfort during daily manual tasks.',
    },
    {
      num: '04',
      name: 'Hand',
      detail: 'Assessment of finger and hand joint pain, reduced grip strength, and mobility limitations affecting fine motor tasks.',
    },
    {
      num: '05',
      name: 'Ankle',
      detail: 'Evaluation of ankle joint stiffness, discomfort during walking or weight-bearing, and reduced joint stability.',
    },
    {
      num: '06',
      name: 'Foot',
      detail: 'Assessment of foot joint discomfort, structural pain with standing or walking, and mobility restrictions.',
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

        {/* Hero Section */}
        <section className="py-12 sm:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              <div className="lg:col-span-7">
                <span className="text-xs sm:text-sm font-bold tracking-widest text-teal-800 uppercase block mb-3">
                  {joints.number} &bull; {joints.disciplineLabel}
                </span>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-navy-900 tracking-tight leading-tight mb-6">
                  {joints.name}
                </h1>
                <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl font-normal mb-8">
                  {joints.whatItIs}
                </p>

                <div className="flex flex-wrap gap-4">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white font-semibold px-7 py-3.5 rounded-lg shadow-sm transition-all duration-150 text-sm sm:text-base"
                  >
                    <span>Consult on Joint Pain</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <a
                    href="#joint-regions"
                    className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-navy-900 font-semibold px-6 py-3.5 rounded-lg border border-slate-300 transition-all duration-150 text-sm sm:text-base"
                  >
                    <span>Explore Joint Areas</span>
                  </a>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm bg-slate-50">
                  <img
                    src={jointsImg}
                    alt="Clinical examination of peripheral joints at Pain Cure clinic"
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
        <section className="py-12 sm:py-16 bg-slate-50/60 border-t border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
              <div className="lg:col-span-5">
                <span className="text-xs font-bold tracking-widest text-teal-800 uppercase block mb-2">
                  What It Addresses
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900 tracking-tight mb-4">
                  Peripheral Joint Conditions Evaluated
                </h2>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                  {joints.whoItIsFor}
                </p>
              </div>
              <div className="lg:col-span-7">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    'Joint stiffness and restricted range of motion',
                    'Persistent discomfort during daily activities',
                    'Localized swelling or joint tenderness',
                    'Loss of functional strength and flexibility',
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3 p-4 bg-white rounded-xl border border-slate-200/80 shadow-xs">
                      <CheckCircle2 className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                      <span className="text-sm font-semibold text-navy-900">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: Anatomical Regions & Clinical Scope */}
        <section id="joint-regions" className="py-12 sm:py-16 bg-white border-t border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="max-w-3xl mb-8 sm:mb-10">
              <span className="text-xs font-bold tracking-widest text-teal-800 uppercase block mb-2">
                Clinical Scope
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight mb-4">
                Peripheral Joints Evaluated
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                {joints.careInvolves}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {jointDetails.map((j) => (
                <div key={j.num} className="p-6 sm:p-7 bg-slate-50 rounded-2xl border border-slate-200/90 shadow-xs flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-mono font-bold text-teal-700">
                        {j.num}
                      </span>
                      <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                        Joint Area
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-navy-900 mb-2">
                      {j.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      {j.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* SECTION 3: What to Expect */}
        <section className="py-12 sm:py-16 bg-slate-50/60 border-t border-slate-200/80">
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
                <p>{joints.patientExpectation}</p>
                <p>
                  Management plans are tailored specifically to the joint affected and the underlying findings of your assessment, with physical modalities and exercises integrated where beneficial.
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

