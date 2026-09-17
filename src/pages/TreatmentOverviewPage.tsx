import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone, MapPin, Clock } from 'lucide-react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { CLINIC_INFO, TREATMENTS, CONSULTATION_PATH } from '../data/clinicalData';
import spineImg from '../assets/spine-care.jpg';
import kneeImg from '../assets/knee-treatment.jpg';
import hipImg from '../assets/hip-treatment.jpg';
import jointsImg from '../assets/joints-treatment.jpg';
import sportsImg from '../assets/sports-injury.jpg';
import physioImg from '../assets/physiotherapy.jpg';
import rehabImg from '../assets/post-op-rehab.jpg';

export const TreatmentOverviewPage: React.FC = () => {
  const spine = TREATMENTS.find((t) => t.id === 'spine')!;
  const knee = TREATMENTS.find((t) => t.id === 'knee')!;
  const hip = TREATMENTS.find((t) => t.id === 'hip')!;
  const joints = TREATMENTS.find((t) => t.id === 'joints')!;
  const sports = TREATMENTS.find((t) => t.id === 'sports-injury')!;
  const physio = TREATMENTS.find((t) => t.id === 'physiotherapy')!;
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-grow">
        {/* Editorial Breadcrumb */}
        <div className="bg-slate-50 border-b border-slate-200/80 py-3.5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <span className="text-xs font-semibold text-slate-600 uppercase tracking-wider">
              Pain Cure Ortho &amp; Rehab Clinic &bull; Treatments Directory
            </span>
          </div>
        </div>

        {/* HERO SECTION — Pure editorial, centered, balanced whitespace */}
        <section className="py-10 sm:py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-md bg-teal-50/80 border border-teal-200/80 mb-4 shadow-2xs">
                <span className="w-1.5 h-1.5 rounded-full bg-teal-600" aria-hidden="true" />
                <span className="text-xs font-bold tracking-wider text-teal-900 uppercase">
                  Treatments Directory &bull; 01&ndash;06 Disciplines
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-navy-900 tracking-tight leading-[1.18] sm:leading-[1.15] mb-6">
                Orthopaedic care, explored by what brings you here.
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-slate-700 leading-relaxed font-normal mb-6 max-w-2xl mx-auto">
                Explore the clinic's orthopaedic treatment areas, non-operative care, and in-house rehabilitation.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link
                  to={CONSULTATION_PATH}
                  className="inline-flex items-center gap-2.5 bg-teal-600 hover:bg-teal-700 text-white font-semibold px-8 py-4 rounded-xl shadow-card transition-all duration-150 text-base"
                >
                  <span>Request a Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="#spine-section"
                  className="inline-flex items-center gap-2 bg-slate-50 hover:bg-slate-100 text-navy-900 font-semibold px-7 py-4 rounded-xl border border-slate-300 transition-all duration-150 text-base"
                >
                  <span>Explore Treatment Areas</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 01. SPINE CARE — PRIMARY EDITORIAL FEATURE                     */}
        {/* (Expansive, unboxed editorial layout with rich content)       */}
        {/* ============================================================ */}
        <section id="spine-section" className="py-10 sm:py-12 bg-slate-50/70 border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="flex items-center gap-4 mb-4">
              <span className="text-xs sm:text-sm font-bold tracking-wider text-teal-900 uppercase">
                01 &bull; {spine.disciplineLabel}
              </span>
              <div className="h-px w-16 bg-teal-700/30" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
              
              <div className="lg:col-span-7">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-900 tracking-tight leading-tight mb-3">
                  Spine Care
                </h2>
                <p className="text-base text-slate-700 leading-relaxed font-normal mb-5 max-w-2xl">
                  {spine.description}
                </p>

                {/* Prominent Conditions List (Structured Elevated Chips) */}
                <div className="mb-6">
                  <span className="text-xs font-bold tracking-wider text-slate-700 uppercase block mb-2.5">
                    Conditions Evaluated
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {spine.conditions?.map((cond) => (
                      <div key={cond} className="p-3 bg-white border border-slate-200/90 rounded-xl shadow-card flex items-center gap-3">
                        <span className="w-2 h-2 rounded-full bg-teal-600 shrink-0" />
                        <span className="text-sm sm:text-base font-bold text-navy-900">{cond}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Secondary Clinical Options */}
                <div className="pt-5 border-t border-slate-200 mb-6">
                  <span className="text-xs font-bold tracking-wider text-slate-700 uppercase block mb-2.5">
                    Pathways &amp; Procedures
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {[
                      ...(spine.nonOperative ?? []),
                      ...(spine.operative ?? []),
                      ...(spine.other ?? []),
                    ].map((proc) => (
                      <div key={proc} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-800 bg-white p-2.5 rounded-lg border border-slate-200/90">
                        <span className="text-teal-700 font-bold mt-0.5">&bull;</span>
                        <span className="font-semibold text-navy-900">{proc}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Link
                  to="/treatments/spine"
                  className="inline-flex items-center gap-3 text-base sm:text-lg font-bold text-teal-700 hover:text-teal-900 group"
                >
                  <span>Explore Spine Care Details</span>
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>

              <div className="lg:col-span-5">
                <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-card group">
                  <img
                    src={spineImg}
                    alt="Spine care examination"
                    className="w-full h-[360px] sm:h-[440px] object-cover transition-transform duration-500 group-hover:scale-105"
                    width="600"
                    height="440"
                  />
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* ============================================================ */}
        {/* 02. KNEE & 03. HIP — ASYMMETRIC EDITORIAL PAIRING            */}
        {/* ============================================================ */}
        <section className="py-10 sm:py-12 bg-white border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              
              {/* 02 KNEE TREATMENT */}
              <div className="lg:col-span-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-4 mb-3">
                    <span className="text-xs sm:text-sm font-bold tracking-wider text-teal-900 uppercase">
                      02 &bull; {knee.disciplineLabel}
                    </span>
                    <div className="h-px w-12 bg-teal-700/30" />
                  </div>

                  <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight leading-tight mb-4">
                    Knee Treatment
                  </h2>
                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal mb-5">
                    {knee.description}
                  </p>

                  <div className="mb-5 space-y-4">
                    <div>
                      <span className="text-xs font-bold tracking-wider text-teal-900 uppercase block mb-2">
                        Non-Operative Care
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {knee.nonOperative?.map((item) => (
                          <span key={item} className="px-3 py-1.5 bg-teal-50/70 border border-teal-200/80 rounded-lg text-xs sm:text-sm font-semibold text-teal-900 shadow-2xs">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="pt-3.5 border-t border-slate-100">
                      <span className="text-xs font-bold tracking-wider text-slate-700 uppercase block mb-1.5">
                        Operative Care
                      </span>
                      <div className="p-3 bg-slate-50 border border-slate-200/80 rounded-xl shadow-2xs">
                        <p className="text-sm sm:text-base font-bold text-navy-900">
                          {knee.operative?.[0] || 'Unicondylar knee replacement'}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mb-6 overflow-hidden rounded-2xl border border-slate-200 shadow-card group">
                    <img
                      src={kneeImg}
                      alt="Knee clinical assessment"
                      className="w-full h-[220px] sm:h-[260px] object-cover transition-transform duration-500 group-hover:scale-105"
                      width="500"
                      height="260"
                    />
                  </div>
                </div>

                <Link
                  to="/treatments/knee"
                  className="inline-flex items-center gap-2.5 text-base font-bold text-teal-700 hover:text-teal-900 group"
                >
                  <span>Explore Knee Treatment</span>
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>

              {/* 03 HIP TREATMENT */}
              <div className="lg:col-span-6 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-slate-200 pt-8 lg:pt-0 lg:pl-12 xl:pl-16">
                <div>
                  <div className="flex items-center gap-4 mb-3">
                    <span className="text-xs sm:text-sm font-bold tracking-wider text-teal-900 uppercase">
                      03 &bull; {hip.disciplineLabel}
                    </span>
                    <div className="h-px w-12 bg-teal-700/30" />
                  </div>

                  <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight leading-tight mb-4">
                    Hip Treatment
                  </h2>
                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal mb-5">
                    {hip.description}
                  </p>

                  <div className="mb-5 space-y-4">
                    <div>
                      <span className="text-xs font-bold tracking-wider text-slate-700 uppercase block mb-2">
                        Surgical Interventions
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {hip.operative?.map((item) => (
                          <span key={item} className="px-3 py-1.5 bg-slate-50 border border-slate-200/80 rounded-lg text-xs sm:text-sm font-bold text-navy-900 shadow-2xs">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mb-6 overflow-hidden rounded-2xl border border-slate-200 shadow-card group">
                    <img
                      src={hipImg}
                      alt="Hip clinical assessment"
                      className="w-full h-[220px] sm:h-[260px] object-cover transition-transform duration-500 group-hover:scale-105"
                      width="500"
                      height="260"
                    />
                  </div>
                </div>

                <Link
                  to="/treatments/hip"
                  className="inline-flex items-center gap-2.5 text-base font-bold text-teal-700 hover:text-teal-900 group"
                >
                  <span>Explore Hip Treatment</span>
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>

            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 04. JOINTS, 05. SPORTS INJURY & 06. PHYSIOTHERAPY            */}
        {/* (Supporting editorial group with distinct visual rhythm)    */}
        {/* ============================================================ */}
        <section className="py-10 sm:py-12 bg-slate-50/70 border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
              
              {/* 04 JOINTS */}
              <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-card hover:shadow-card-hover flex flex-col justify-between transition-all duration-300 group">
                <div>
                  <span className="text-xs font-bold tracking-wider text-teal-900 uppercase block mb-2">
                    04 &bull; {joints.disciplineLabel}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-navy-900 tracking-tight mb-3">
                    Peripheral Joints
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal mb-5">
                    {joints.description}
                  </p>

                  <div className="mb-5 overflow-hidden rounded-xl border border-slate-200/80 shadow-2xs">
                    <img
                      src={jointsImg}
                      alt="Joint care clinical assessment at Pain Cure clinic"
                      className="w-full h-[190px] object-cover transition-transform duration-500 group-hover:scale-105"
                      width="400"
                      height="190"
                    />
                  </div>

                  <div className="space-y-1.5 mb-5">
                    <span className="text-xs font-bold text-navy-900 block mb-1">Joint regions evaluated:</span>
                    <div className="flex flex-wrap gap-1.5">
                      {joints.areas?.map((j) => (
                        <span key={j} className="px-2.5 py-1 bg-teal-50/60 border border-teal-200/70 rounded-md text-xs font-semibold text-teal-900">
                          {j}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <Link
                  to="/treatments/joints"
                  className="inline-flex items-center gap-2 text-sm sm:text-base font-bold text-teal-700 hover:text-teal-900 pt-4 border-t border-slate-100 group"
                >
                  <span>Explore Joint Care</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>

              {/* 05 SPORTS INJURY */}
              <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-card hover:shadow-card-hover flex flex-col justify-between transition-all duration-300 group">
                <div>
                  <span className="text-xs font-bold tracking-wider text-teal-900 uppercase block mb-2">
                    05 &bull; {sports.disciplineLabel}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-navy-900 tracking-tight mb-3">
                    Sports Injury
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal mb-5">
                    {sports.description}
                  </p>

                  <div className="mb-5 overflow-hidden rounded-xl border border-slate-200/80 shadow-2xs">
                    <img
                      src={sportsImg}
                      alt="Sports injury physical rehabilitation"
                      className="w-full h-[190px] object-cover transition-transform duration-500 group-hover:scale-105"
                      width="400"
                      height="190"
                    />
                  </div>

                  <div className="space-y-1.5 mb-5">
                    <span className="text-xs font-bold text-navy-900 block mb-1">Injury presentations evaluated:</span>
                    <div className="flex flex-wrap gap-1.5">
                      {['Acute sprains', 'Tendon & ligament strain', 'Joint instability', 'Overuse injuries'].map((item) => (
                        <span key={item} className="px-2.5 py-1 bg-teal-50/60 border border-teal-200/70 rounded-md text-xs font-semibold text-teal-900">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <Link
                  to="/treatments/sports-injury"
                  className="inline-flex items-center gap-2 text-sm sm:text-base font-bold text-teal-700 hover:text-teal-900 pt-4 border-t border-slate-100 group"
                >
                  <span>Explore Sports Injury</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>

              {/* 06 PHYSIOTHERAPY */}
              <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-card hover:shadow-card-hover flex flex-col justify-between transition-all duration-300 group">
                <div>
                  <span className="text-xs font-bold tracking-wider text-teal-900 uppercase block mb-2">
                    06 &bull; {physio.disciplineLabel}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-navy-900 tracking-tight mb-3">
                    Physiotherapy
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal mb-5">
                    {physio.description}
                  </p>

                  <div className="mb-5 overflow-hidden rounded-xl border border-slate-200/80 shadow-2xs">
                    <img
                      src={physioImg}
                      alt="Physiotherapy modalities at Pain Cure clinic"
                      className="w-full h-[190px] object-cover transition-transform duration-500 group-hover:scale-105"
                      width="400"
                      height="190"
                    />
                  </div>

                  <div className="space-y-1.5 mb-5">
                    <span className="text-xs font-bold text-navy-900 block mb-1">Approved clinical modalities:</span>
                    <div className="flex flex-wrap gap-1.5">
                      {physio.modalities?.map((m) => (
                        <span key={m} className="px-2.5 py-1 bg-teal-50/60 border border-teal-200/70 rounded-md text-xs font-semibold text-teal-900">
                          {m}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <Link
                  to="/treatments/physiotherapy"
                  className="inline-flex items-center gap-2 text-sm sm:text-base font-bold text-teal-700 hover:text-teal-900 pt-4 border-t border-slate-100 group"
                >
                  <span>Explore Modalities</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>

            </div>

          </div>
        </section>

        {/* ============================================================ */}
        {/* IN-HOUSE POST OPERATIVE REHAB (PRESERVE DARK NAVY QUALITY)   */}
        {/* ============================================================ */}
        <section className="py-10 sm:py-12 bg-navy-950 text-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              <div className="lg:col-span-7 flex flex-col items-start">
                <span className="text-xs sm:text-sm font-bold tracking-wider text-teal-300 uppercase mb-4">
                  Dedicated In-House Service
                </span>
                <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
                  In-house Post Operative Rehab
                </h2>
                <div className="space-y-4 text-base sm:text-lg text-slate-200 leading-relaxed font-normal mb-6 max-w-xl">
                  <p>
                    Orthopaedic surgery provides the surgical repair or joint reconstruction, but functional recovery depends on guided post-operative rehabilitation.
                  </p>
                  <p>
                    Pain Cure provides supervised in-house rehabilitation tailored to each patient's procedure and recovery pace, supporting steady restoration of movement and daily independence.
                  </p>
                </div>

                <div className="space-y-2.5 mb-7 w-full max-w-xl">
                  {[
                    'Supervised rehabilitation following orthopaedic procedures',
                    "Care tailored to the individual's surgical pathway and healing pace",
                    'Focused on progressive restoration of movement, strength, and function',
                  ].map((item) => (
                    <div key={item} className="p-3 bg-white/[0.06] border border-white/10 rounded-xl flex items-center gap-3">
                      <span className="w-2.5 h-2.5 rounded-full bg-teal-400 shrink-0" />
                      <span className="text-slate-200 font-medium text-sm sm:text-base">{item}</span>
                    </div>
                  ))}
                </div>

                <Link
                  to="/post-operative-rehab"
                  className="inline-flex items-center gap-2.5 bg-teal-600 hover:bg-teal-500 text-white font-semibold px-8 py-4 rounded-xl shadow-lg transition-all duration-150 text-base"
                >
                  <span>Learn More About Post-Op Rehab</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="lg:col-span-5">
                <div className="overflow-hidden rounded-2xl border border-white/20 shadow-2xl bg-navy-900 group">
                  <img
                    src={rehabImg}
                    alt="In-house Post Operative Rehab session at Pain Cure clinic"
                    className="w-full h-[360px] sm:h-[440px] object-cover transition-transform duration-500 group-hover:scale-105"
                    width="600"
                    height="440"
                  />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* EDITORIAL CONSULTATION SECTION (STRONGER, SIMPLER, PREMIUM)  */}
        {/* ============================================================ */}
        <section className="py-10 sm:py-12 bg-white border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <span className="text-xs sm:text-sm font-bold tracking-wider text-teal-900 uppercase block mb-3">
                Consultation &amp; Inquiries
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-navy-900 tracking-tight leading-tight mb-4">
                Ready to take the next step?
              </h2>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal mb-6 max-w-2xl">
                Let's discuss your condition and determine the appropriate path forward. Our team is here to guide you from thorough clinical assessment through to dedicated rehabilitation.
              </p>

              <div className="mb-8 sm:mb-10">
                <Link
                  to={CONSULTATION_PATH}
                  className="inline-flex items-center gap-2.5 bg-teal-600 hover:bg-teal-700 text-white font-semibold px-8 py-4 rounded-xl shadow-card transition-all duration-150 text-base"
                >
                  <span>Request a Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Verified Contact Details Grid — 3 Balanced Columns */}
            <div className="pt-8 border-t border-slate-200 grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/90 shadow-card">
                <span className="flex items-center gap-2 text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  <Phone className="w-4 h-4 text-teal-700" />
                  <span>Phone Inquiries</span>
                </span>
                <a
                  href={CLINIC_INFO.phoneTel}
                  className="text-xl font-bold text-navy-900 block hover:text-teal-700 transition-colors"
                >
                  {CLINIC_INFO.phoneDisplay}
                </a>
                <span className="text-xs text-slate-600 font-normal block mt-1">Direct clinic line for appointments and care inquiries.</span>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/90 shadow-card">
                <span className="flex items-center gap-2 text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  <MapPin className="w-4 h-4 text-teal-700" />
                  <span>Clinic Address</span>
                </span>
                <span className="text-sm font-bold text-navy-900 block leading-snug">
                  {CLINIC_INFO.address}
                </span>
                <span className="text-xs text-slate-600 font-normal block mt-1">Landmark: {CLINIC_INFO.landmark}</span>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/90 shadow-card">
                <span className="flex items-center gap-2 text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  <Clock className="w-4 h-4 text-teal-700" />
                  <span>Clinic Hours</span>
                </span>
                <span className="text-sm font-bold text-navy-900 block leading-snug">
                  {CLINIC_INFO.operatingHours.days}
                </span>
                <span className="text-xs text-teal-900 font-bold block mt-1">
                  {CLINIC_INFO.operatingHours.hours}
                </span>
                <span className="text-xs text-slate-600 font-normal block mt-0.5">
                  {CLINIC_INFO.operatingHours.closedDay}: Closed
                </span>
              </div>
            </div>

          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
};
