import React, { useState, useEffect } from 'react';
import { ShieldCheck, ArrowRight, Compass, PhoneCall } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ConsultationCTA } from '../components/ConsultationCTA';
import { DoctorSection } from '../components/about/DoctorSection';
import { ApproachSection } from '../components/about/ApproachSection';
import { PainCureSection } from '../components/about/PainCureSection';
import { IntegratedCareGraphic } from '../components/about/IntegratedCareGraphic';
import { CONSULTATION_PATH } from '../data/clinicalData';

export const AboutPage: React.FC = () => {
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set(['doctor', 'approach', 'pain-cure']));

  // Entrance animation observer that keeps sections visible once in view
  useEffect(() => {
    const sectionIds = ['doctor', 'approach', 'pain-cure'];

    const animObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => {
              const next = new Set(prev);
              next.add(entry.target.id);
              return next;
            });
            animObserver.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: '0px 0px -80px 0px',
        threshold: 0.05,
      }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) {
        animObserver.observe(el);
      }
    });

    return () => {
      animObserver.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800 selection:bg-teal-600 selection:text-white">
      <Header />

      <main className="flex-grow">
        {/* Navigation Breadcrumb */}
        <div className="bg-slate-50 border-b border-slate-200/80 py-2.5 sm:py-3.5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <span className="text-xs font-semibold text-slate-600 uppercase tracking-wider">
              Pain Cure Ortho &amp; Rehab Clinic &bull; About the Clinic
            </span>
          </div>
        </div>

        {/* 01: Doctor Hero Opening — Primary Visual & Clinical Identity */}
        <DoctorSection isActive={visibleSections.has('doctor')} />

        {/* Clinic Positioning & Integrated Care Model Section */}
        <section 
          id="clinic-positioning" 
          className="py-10 sm:py-12 bg-slate-50/60 border-b border-slate-200/80 overflow-hidden"
          aria-label="About Pain Cure Ortho & Rehab Clinic"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Left Column: Clinic Identity & Core Mission */}
              <div className="lg:col-span-6 animate-hero-fade-up">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-teal-50 border border-teal-200/80 mb-3 sm:mb-4">
                  <span className="w-2 h-2 rounded-full bg-teal-600" aria-hidden="true" />
                  <span className="text-xs font-bold tracking-wider text-teal-900 uppercase">
                    ABOUT PAIN CURE ORTHO &amp; REHAB
                  </span>
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-900 tracking-tight leading-[1.18] sm:leading-[1.12] mb-3 sm:mb-4">
                  Orthopedic Care Focused on Understanding Pain and Recovery
                </h1>

                <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal mb-6 max-w-xl">
                  Pain Cure Ortho &amp; Rehab integrates consultant-led orthopedic evaluation with dedicated in-house rehabilitation in Mazgaon, providing patients with connected clinical assessment, conservative care, and structured recovery under one roof.
                </p>

                {/* Primary Action Buttons */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-6">
                  <a
                    href="#approach"
                    className="inline-flex items-center justify-center gap-2 bg-teal-600 hover:bg-teal-700 text-white font-bold px-5 py-3 rounded-xl shadow-xs hover:shadow-card-hover transition-all duration-150 active:scale-[0.99] touch-target min-h-[44px] text-sm sm:text-base group"
                  >
                    <Compass className="w-4 h-4 text-white" />
                    <span>Our Clinical Approach</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                  </a>

                  <Link
                    to={CONSULTATION_PATH}
                    className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-700 hover:text-navy-900 font-semibold px-5 py-3 rounded-xl border border-slate-200/90 transition-colors touch-target min-h-[44px] text-sm sm:text-base group"
                  >
                    <PhoneCall className="w-4 h-4 text-teal-700" />
                    <span>Request Consultation</span>
                  </Link>
                </div>

                {/* Reassurance note */}
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-600 pt-3 border-t border-slate-200/80">
                  <ShieldCheck className="w-4 h-4 text-teal-700 shrink-0" />
                  <span>Integrated orthopedic precision and supervised rehabilitation under one roof.</span>
                </div>
              </div>

              {/* Right Column: Clean Editorial Care Pathway Graphic */}
              <div className="lg:col-span-6 animate-hero-fade-in">
                <IntegratedCareGraphic />
              </div>

            </div>
          </div>
        </section>

        {/* Full-Width Visual Chapters */}
        <div className="w-full">
          <ApproachSection isActive={visibleSections.has('approach')} />
          <PainCureSection isActive={visibleSections.has('pain-cure')} />
        </div>

        <ConsultationCTA />
      </main>

      <Footer />
    </div>
  );
};

export default AboutPage;

