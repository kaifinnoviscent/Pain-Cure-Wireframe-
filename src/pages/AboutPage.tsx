import React, { useState, useEffect } from 'react';
import { ShieldCheck, ArrowRight, UserCheck, Compass } from 'lucide-react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ConsultationCTA } from '../components/ConsultationCTA';
import { AboutDesktopChapterIndex, AboutMobileChapterIndex } from '../components/about/AboutScrollSpy';
import { DoctorSection } from '../components/about/DoctorSection';
import { ApproachSection } from '../components/about/ApproachSection';
import { PainCureSection } from '../components/about/PainCureSection';
import { IntegratedCareGraphic } from '../components/about/IntegratedCareGraphic';

export const AboutPage: React.FC = () => {
  const [activeSection, setActiveSection] = useState('doctor');
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set(['doctor', 'approach', 'pain-cure']));

  // Dual IntersectionObservers:
  // 1. navObserver: Single focal point activation for Desktop & Mobile Chapter Index
  // 2. animObserver: Smooth entrance animations that keep sections visible while on screen
  useEffect(() => {
    const sectionIds = ['doctor', 'approach', 'pain-cure'];

    const navObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-20% 0px -50% 0px',
        threshold: 0,
      }
    );

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
        navObserver.observe(el);
        animObserver.observe(el);
      }
    });

    return () => {
      navObserver.disconnect();
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
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
              Pain Cure Ortho &amp; Rehab Clinic &bull; About the Clinic
            </span>
          </div>
        </div>

        {/* Hero Section — Clean Editorial Care Pathway */}
        <section className="py-8 sm:py-14 lg:py-16 bg-white border-b border-slate-200/80 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Left Column: Clinic Identity & Core Mission */}
              <div className="lg:col-span-6 animate-hero-fade-up">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-teal-50 border border-teal-200/80 mb-3 sm:mb-4">
                  <span className="w-2 h-2 rounded-full bg-teal-600" aria-hidden="true" />
                  <span className="text-xs font-mono font-bold tracking-widest text-teal-800 uppercase">
                    ABOUT PAIN CURE ORTHO &amp; REHAB
                  </span>
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-900 tracking-tight leading-[1.12] mb-3 sm:mb-4">
                  Orthopedic Care Focused on Understanding Pain and Recovery
                </h1>

                <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal mb-4.5 sm:mb-6 max-w-xl">
                  Pain Cure Ortho &amp; Rehab integrates consultant-led orthopedic evaluation with dedicated in-house rehabilitation in Mazgaon, providing patients with connected clinical assessment, conservative care, and structured recovery under one roof.
                </p>

                {/* Primary Action Buttons */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 mb-4 sm:mb-5">
                  <a
                    href="#doctor"
                    className="inline-flex items-center justify-center gap-2 bg-teal-600 hover:bg-teal-700 text-white font-bold px-5 py-2.5 sm:py-3 rounded-xl shadow-xs hover:shadow-card-hover transition-all duration-150 active:scale-[0.99] touch-target min-h-[44px] text-sm sm:text-base group"
                  >
                    <UserCheck className="w-4 h-4 transition-transform group-hover:scale-110" />
                    <span>Meet Dr. Mohsin Merchant</span>
                  </a>

                  <a
                    href="#approach"
                    className="inline-flex items-center justify-center gap-2 bg-slate-50 hover:bg-slate-100 text-slate-700 hover:text-navy-900 font-semibold px-4 py-2.5 sm:py-3 rounded-xl border border-slate-200/90 transition-colors touch-target min-h-[44px] text-sm sm:text-base group"
                  >
                    <Compass className="w-4 h-4 text-teal-700" />
                    <span>Our Clinical Approach</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                  </a>
                </div>

                {/* Reassurance note */}
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-500 pt-2.5 sm:pt-3 border-t border-slate-100">
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

        {/* Mobile Chapter Navigator — sticky below global header */}
        <AboutMobileChapterIndex activeSection={activeSection} />

        {/* Three-Chapter Content Region with Sticky Editorial Chapter Index */}
        <div className="relative w-full">
          {/* Sticky Desktop Chapter Index Column */}
          <div className="hidden xl:block absolute inset-y-0 left-0 right-0 pointer-events-none max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-20">
            <div className="sticky top-28 w-[160px] pt-12 sm:pt-16 pointer-events-auto">
              <AboutDesktopChapterIndex activeSection={activeSection} />
            </div>
          </div>

          {/* Full-Width Visual Chapters */}
          <div className="w-full">
            <DoctorSection isActive={visibleSections.has('doctor')} />
            <ApproachSection isActive={visibleSections.has('approach')} />
            <PainCureSection isActive={visibleSections.has('pain-cure')} />
          </div>
        </div>

        <ConsultationCTA />
      </main>

      <Footer />
    </div>
  );
};

export default AboutPage;
