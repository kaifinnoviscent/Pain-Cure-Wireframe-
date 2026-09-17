import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Activity, CheckCircle2, Shield, Stethoscope } from 'lucide-react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ConsultationCTA } from '../components/ConsultationCTA';
import { TREATMENTS, CONSULTATION_PATH } from '../data/clinicalData';
import sportsImg from '../assets/sports-injury.jpg';

export const SportsInjuryPage: React.FC = () => {
  const sports = TREATMENTS.find((t) => t.id === 'sports-injury')!;

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
                  {sports.number} &bull; {sports.disciplineLabel}
                </span>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-navy-900 tracking-tight leading-tight mb-6">
                  {sports.name}
                </h1>
                <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl font-normal mb-8">
                  {sports.whatItIs}
                </p>

                <div className="flex flex-wrap gap-4">
                  <Link
                    to={CONSULTATION_PATH}
                    className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white font-semibold px-7 py-3.5 rounded-lg shadow-sm transition-all duration-150 text-sm sm:text-base"
                  >
                    <span>Consult on Sports Injury</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <a
                    href="#care-approach"
                    className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-navy-900 font-semibold px-6 py-3.5 rounded-lg border border-slate-300 transition-all duration-150 text-sm sm:text-base"
                  >
                    <span>Our Care Approach</span>
                  </a>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm bg-slate-50">
                  <img
                    src={sportsImg}
                    alt="Sports injury rehabilitation session at Pain Cure clinic"
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
                  Injuries &amp; Activity-Related Conditions
                </h2>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                  {sports.whoItIsFor}
                </p>
              </div>
              <div className="lg:col-span-7">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    'Acute sports injuries from impact, twisting, or falls',
                    'Overuse injuries developed through repetitive athletic training',
                    'Joint instability and restricted athletic mobility',
                    'Post-injury functional limitations and muscular weakness',
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

        {/* SECTION 2: How Care Works */}
        <section id="care-approach" className="py-12 sm:py-16 bg-white border-t border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              
              <div className="lg:col-span-6">
                <span className="text-xs font-bold tracking-widest text-teal-800 uppercase block mb-2">
                  Clinical Process
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight mb-4">
                  Assessment &amp; Guided Rehabilitation
                </h2>
                <div className="space-y-4 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                  <p>{sports.careInvolves}</p>
                  <p>
                    Rehabilitation is structured progressively. Rather than relying on generic exercise sheets, exercises are supervised and adjusted based on your physical progress and tissue response.
                  </p>
                </div>
              </div>

              <div className="lg:col-span-6 divide-y divide-slate-200">
                
                {/* Step 01 */}
                <div className="pb-6">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="font-mono text-xs font-bold text-teal-800 bg-teal-50 border border-teal-200/80 px-2 py-0.5 rounded">
                      01
                    </span>
                    <Stethoscope className="w-4 h-4 text-teal-700 shrink-0" />
                    <h3 className="text-base sm:text-lg font-bold text-navy-900">
                      Clinical Assessment
                    </h3>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed pl-0 sm:pl-9">
                    Detailed examination of the injury, identifying affected joints, ligaments, tendons, and surrounding muscle groups, alongside movement pattern evaluation.
                  </p>
                </div>

                {/* Step 02 */}
                <div className="py-6">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="font-mono text-xs font-bold text-teal-800 bg-teal-50 border border-teal-200/80 px-2 py-0.5 rounded">
                      02
                    </span>
                    <Activity className="w-4 h-4 text-teal-700 shrink-0" />
                    <h3 className="text-base sm:text-lg font-bold text-navy-900">
                      In-House Physical Modalities
                    </h3>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed pl-0 sm:pl-9">
                    Application of approved physiotherapy modalities to help manage pain, ease localized stiffness, and prepare tissues for active exercise.
                  </p>
                </div>

                {/* Step 03 */}
                <div className="pt-6">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="font-mono text-xs font-bold text-teal-800 bg-teal-50 border border-teal-200/80 px-2 py-0.5 rounded">
                      03
                    </span>
                    <Shield className="w-4 h-4 text-teal-700 shrink-0" />
                    <h3 className="text-base sm:text-lg font-bold text-navy-900">
                      Progressive Movement Restoration
                    </h3>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed pl-0 sm:pl-9">
                    Controlled resistance exercises and functional movement training designed to safely rebuild strength and joint stability toward normal activity.
                  </p>
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
                <p>{sports.patientExpectation}</p>
                <p>
                  Rehabilitation is an active collaboration between the patient and the clinical team. Every phase of progression is evaluated carefully to support safe recovery without re-injury.
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

