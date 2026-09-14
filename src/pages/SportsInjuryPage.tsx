import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ConsultationCTA } from '../components/ConsultationCTA';
import sportsImg from '../assets/sports-injury.jpg';

export const SportsInjuryPage: React.FC = () => {
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
        <section className="py-16 sm:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              <div className="lg:col-span-7">
                <span className="text-xs sm:text-sm font-bold tracking-widest text-teal-800 uppercase block mb-3">
                  Category 05 • Sports Injury
                </span>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-navy-900 tracking-tight leading-tight mb-6">
                  Sports Injury
                </h1>
                <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl font-normal mb-8">
                  In-house care and rehabilitation for sports injuries at Pain Cure Ortho &amp; Rehab Clinic.
                </p>

                <div className="pt-2">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white font-semibold px-7 py-3.5 rounded-lg shadow-sm transition-all duration-150 text-sm sm:text-base"
                  >
                    <span>Request a Consultation</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm bg-slate-50">
                  <img
                    src={sportsImg}
                    alt="Sports injury rehabilitation at Pain Cure clinic"
                    className="w-full h-[340px] sm:h-[440px] object-cover object-center"
                    width="600"
                    height="440"
                  />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Statement of Category Scope (Honest & concise, zero invented protocols) */}
        <section className="py-16 sm:py-20 bg-slate-50/60 border-t border-slate-200/80">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white border border-slate-200/90 rounded-2xl p-8 sm:p-12 shadow-xs">
              <span className="text-xs font-bold tracking-widest text-slate-500 uppercase block mb-3">
                Clinical Care
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900 tracking-tight mb-6">
                Sports Injury Care &amp; Rehabilitation
              </h2>
              <div className="space-y-4 text-base text-slate-600 leading-relaxed font-normal">
                <p>
                  Sports injury care at Pain Cure Ortho &amp; Rehab Clinic provides dedicated in-house rehabilitation.
                </p>
                <p>
                  Individual treatment pathways are determined through direct consultation at the clinic.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between flex-wrap gap-4 text-xs text-slate-500">
                <span>Sports Injury</span>
                <span>•</span>
                <span>In-house Rehabilitation</span>
                <span>•</span>
                <span>Pain Cure Clinic</span>
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
