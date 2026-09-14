import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ConsultationCTA } from '../components/ConsultationCTA';
import hipImg from '../assets/hip-treatment.jpg';

export const HipTreatmentPage: React.FC = () => {
  const hipProcedures = [
    {
      title: 'Hip replacement',
      badge: 'Operative Procedure',
    },
    {
      title: 'Fracture fixation',
      badge: 'Operative Procedure',
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

        {/* Hero Section with Generous Whitespace */}
        <section className="py-16 sm:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-14 sm:mb-20">
              <span className="text-xs sm:text-sm font-bold tracking-widest text-teal-800 uppercase block mb-3">
                Category 03 • Hip Care
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-navy-900 tracking-tight leading-tight mb-6">
                Hip Treatment
              </h1>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
                Clinical assessment and surgical intervention pathways for hip conditions. Treatment recommendations follow individual medical evaluation.
              </p>
            </div>

            {/* Editorial Feature Image Spread */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              <div className="lg:col-span-6">
                <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm bg-slate-50">
                  <img
                    src={hipImg}
                    alt="Clinical hip and lower limb mobility examination at Pain Cure clinic"
                    className="w-full h-[360px] sm:h-[460px] object-cover object-center"
                    width="640"
                    height="460"
                  />
                </div>
              </div>

              {/* Treatment Pathways: Elegant & Focused Presentation */}
              <div className="lg:col-span-6 flex flex-col justify-center space-y-8">
                <div>
                  <span className="text-xs font-bold tracking-widest text-slate-500 uppercase block mb-2">
                    Surgical Pathways
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-bold text-navy-900 tracking-tight mb-4">
                    Intervention &amp; Fixation
                  </h2>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                    The clinic provides dedicated surgical intervention pathways for hip conditions:
                  </p>
                </div>

                <div className="space-y-6">
                  {hipProcedures.map((proc) => (
                    <div key={proc.title} className="p-7 bg-slate-50 rounded-2xl border border-slate-200/90 flex items-center justify-between">
                      <h3 className="text-xl sm:text-2xl font-bold text-navy-900">
                        {proc.title}
                      </h3>
                      <span className="text-xs font-semibold px-3 py-1 bg-white border border-slate-200 text-teal-800 rounded-full">
                        {proc.badge}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="pt-4">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2.5 bg-teal-600 hover:bg-teal-700 text-white font-semibold px-7 py-3.5 rounded-lg shadow-sm transition-all duration-150 text-sm sm:text-base"
                  >
                    <span>Consult on Hip Care</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
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
