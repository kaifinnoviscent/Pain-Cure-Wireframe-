import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ConsultationCTA } from '../components/ConsultationCTA';
import rehabImg from '../assets/post-op-rehab.jpg';

export const PostOpRehabPage: React.FC = () => {
  const highlights = [
    'In-house Post Operative Rehab',
    'Clinical rehabilitation guidance',
  ];

  const journeySteps = [
    { num: '01', title: 'Assess', desc: 'Clinical evaluation of individual mobility and recovery requirements.' },
    { num: '02', title: 'Treat', desc: 'Clinical modalities applied following post-operative evaluation.' },
    { num: '03', title: 'Rehabilitate', desc: 'Supervised progressive exercise guidance for steady recovery.' },
    { num: '04', title: 'Return to Movement', desc: 'Guiding patients toward daily functional independence.' },
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
        <section className="py-16 sm:py-24 bg-navy-950 text-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              <div className="lg:col-span-6 flex flex-col items-start">
                <span className="text-xs sm:text-sm font-bold tracking-widest text-teal-400 uppercase mb-4">
                  Dedicated In-House Service
                </span>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight mb-6">
                  In-house Post Operative Rehab
                </h1>
                <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal mb-8">
                  Recovery care following orthopaedic procedures is supported through in-house rehabilitation at Pain Cure clinic.
                </p>

                <div className="space-y-4 mb-10 w-full">
                  {highlights.map((item) => (
                    <div key={item} className="flex items-start gap-3.5">
                      <CheckCircle2 className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" />
                      <span className="text-sm sm:text-base text-slate-200 font-normal">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-500 text-white font-semibold px-7 py-3.5 rounded-lg shadow-sm transition-all duration-150 text-sm sm:text-base"
                  >
                    <span>Consult on Post-Op Care</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <a
                    href="#recovery-philosophy"
                    className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 text-white font-semibold px-6 py-3.5 rounded-lg border border-white/20 transition-all duration-150 text-sm sm:text-base"
                  >
                    <span>Our Care Journey</span>
                  </a>
                </div>
              </div>

              <div className="lg:col-span-6">
                <div className="overflow-hidden rounded-2xl border border-white/15 shadow-2xl bg-navy-900">
                  <img
                    src={rehabImg}
                    alt="In-house post-operative rehabilitation at Pain Cure clinic"
                    className="w-full h-[360px] sm:h-[460px] object-cover"
                    width="640"
                    height="460"
                  />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Philosophy & Care Journey Integration */}
        <section id="recovery-philosophy" className="py-20 sm:py-28 bg-white border-t border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="max-w-3xl mb-16 sm:mb-20">
              <span className="text-xs font-bold tracking-widest text-teal-800 uppercase block mb-3">
                Patient-Centred Philosophy
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-900 tracking-tight leading-tight">
                Our Care Journey
              </h2>
              <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
                The care journey represents our patient-centred recovery philosophy from initial evaluation to daily movement.
              </p>
            </div>

            {/* Visual Connected Sequence */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {journeySteps.map((step) => (
                <div
                  key={step.num}
                  className="bg-slate-50 border border-slate-200/90 rounded-2xl p-8 flex flex-col justify-between shadow-xs"
                >
                  <div>
                    <div className="w-10 h-10 rounded-full bg-white border-2 border-teal-600 text-teal-800 font-extrabold text-sm flex items-center justify-center mb-6 shadow-xs">
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

            <div className="mt-12 p-6 bg-mint-50/50 border border-teal-100 rounded-xl max-w-3xl">
              <p className="text-xs sm:text-sm text-slate-600 italic leading-relaxed">
                Note: The care journey reflects the clinic's patient-centred recovery philosophy. Individual rehabilitation plans and progression are determined strictly according to clinical evaluation and medical advice.
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
