import React, { useState, useEffect } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ConsultationCTA } from '../components/ConsultationCTA';
import { AboutDesktopChapterIndex, AboutMobileChapterIndex } from '../components/about/AboutScrollSpy';
import { DoctorSection } from '../components/about/DoctorSection';
import { ApproachSection } from '../components/about/ApproachSection';
import { PainCureSection } from '../components/about/PainCureSection';

export const AboutPage: React.FC = () => {
  const [activeSection, setActiveSection] = useState('doctor');
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set(['doctor']));

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
          setVisibleSections((prev) => {
            const next = new Set(prev);
            if (entry.isIntersecting) {
              next.add(entry.target.id);
            } else {
              next.delete(entry.target.id);
            }
            return next;
          });
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
        <div className="bg-slate-50 border-b border-slate-200/80 py-3">
          <div className="max-w-7xl xl:max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
              Pain Cure Ortho &amp; Rehab Clinic &bull; About the Clinic
            </span>
          </div>
        </div>

        {/* Hero Section — Clean, Independent, Zero Navigation Overlap */}
        <section className="py-14 sm:py-20 lg:py-24 bg-white border-b border-slate-200/80">
          <div className="max-w-7xl xl:max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
            <div className="max-w-4xl">
              <span className="text-xs sm:text-sm font-mono font-extrabold tracking-widest text-teal-800 uppercase block mb-3 sm:mb-4">
                ABOUT PAIN CURE
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-navy-900 tracking-tight leading-[1.08] mb-6">
                Orthopedic Care Focused on Understanding Pain and Recovery
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl text-slate-600 leading-relaxed font-normal max-w-3xl">
                Pain Cure Ortho &amp; Rehab brings orthopedic treatment and rehabilitation together, with care focused on understanding the factors contributing to pain and supporting patients through treatment and recovery.
              </p>
            </div>
          </div>
        </section>

        {/* Mobile Chapter Navigator — sticky below global header */}
        <AboutMobileChapterIndex activeSection={activeSection} />

        {/* Three-Chapter Content Region with Sticky Editorial Chapter Index */}
        <div className="relative w-full">
          {/* Sticky Desktop Chapter Index Column */}
          <div className="hidden xl:block absolute inset-y-0 left-0 right-0 pointer-events-none max-w-7xl xl:max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 z-20">
            <div className="sticky top-28 w-[160px] pt-16 sm:pt-24 lg:pt-32 pointer-events-auto">
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



