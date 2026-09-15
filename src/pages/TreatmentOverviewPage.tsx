import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone, Mail, MapPin, Clock } from 'lucide-react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { CLINIC_INFO, TREATMENTS } from '../data/clinicalData';
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
            <span className="text-xs font-bold tracking-widest text-slate-500 uppercase">
              Pain Cure Ortho &amp; Rehab Clinic &bull; Treatments Directory
            </span>
          </div>
        </div>

        {/* HERO SECTION — Pure editorial, text-only, generous whitespace */}
        <section className="py-20 sm:py-28 lg:py-36 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <span className="text-xs sm:text-sm font-extrabold tracking-widest text-teal-800 uppercase block mb-5">
                Treatments
              </span>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-navy-900 tracking-tight leading-[1.06] mb-8">
                Orthopaedic care, explored by what brings you here.
              </h1>
              <p className="text-lg sm:text-xl text-slate-600 leading-relaxed font-normal mb-12 max-w-2xl">
                Explore the clinic's orthopaedic treatment areas, non-operative care, and in-house rehabilitation.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2.5 bg-teal-600 hover:bg-teal-700 text-white font-semibold px-8 py-4 rounded-lg shadow-sm transition-all duration-150 text-base"
                >
                  <span>Request a Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="#spine-section"
                  className="inline-flex items-center gap-2 bg-slate-50 hover:bg-slate-100 text-navy-900 font-semibold px-7 py-4 rounded-lg border border-slate-300 transition-all duration-150 text-base"
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
        <section id="spine-section" className="py-20 sm:py-28 bg-slate-50/70 border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="flex items-center gap-4 mb-4">
              <span className="text-sm font-mono font-bold tracking-widest text-teal-800 uppercase">
                01 &bull; {spine.disciplineLabel}
              </span>
              <div className="h-px w-16 bg-teal-700/30" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              
              <div className="lg:col-span-7">
                <h2 className="text-3xl sm:text-5xl font-extrabold text-navy-900 tracking-tight leading-tight mb-4">
                  Spine Care
                </h2>
                <p className="text-base text-slate-600 leading-relaxed font-normal mb-8 max-w-2xl">
                  {spine.description}
                </p>

                {/* Prominent Conditions List (Large, Confident Type) */}
                <div className="mb-10">
                  <span className="text-xs font-extrabold tracking-widest text-slate-500 uppercase block mb-4">
                    Conditions Evaluated
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6">
                    {['Lumbar pain', 'Neck pain', 'Nerve pain', 'Sciatica'].map((cond) => (
                      <div key={cond} className="flex items-center gap-3">
                        <span className="w-2.5 h-2.5 rounded-full bg-teal-600 shrink-0" />
                        <span className="text-lg sm:text-xl font-bold text-navy-900">{cond}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Secondary Clinical Options (Unboxed, clean editorial listing) */}
                <div className="pt-8 border-t border-slate-200 mb-10">
                  <span className="text-xs font-extrabold tracking-widest text-slate-500 uppercase block mb-4">
                    Pathways &amp; Procedures
                  </span>
                  <ul className="space-y-3 text-base text-slate-700">
                    <li className="flex items-baseline gap-3">
                      <span className="text-teal-700 font-bold">&bull;</span>
                      <span className="font-semibold text-navy-900">Robotic spine decompression</span>
                    </li>
                    <li className="flex items-baseline gap-3">
                      <span className="text-teal-700 font-bold">&bull;</span>
                      <span className="font-semibold text-navy-900">Selective Nerve Root Block (SNRB)</span>
                    </li>
                    <li className="flex items-baseline gap-3">
                      <span className="text-teal-700 font-bold">&bull;</span>
                      <span className="font-semibold text-navy-900">Physiotherapy</span>
                    </li>
                    <li className="flex items-baseline gap-3">
                      <span className="text-teal-700 font-bold">&bull;</span>
                      <span className="font-semibold text-navy-900">Minimal invasive MIS spine surgery in extreme / selected cases</span>
                    </li>
                    <li className="flex items-baseline gap-3">
                      <span className="text-teal-700 font-bold">&bull;</span>
                      <span className="font-semibold text-navy-900">Spine stabilisation for fracture &amp; deformity</span>
                    </li>
                  </ul>
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
                <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-md">
                  <img
                    src={spineImg}
                    alt="Spine care examination"
                    className="w-full h-[380px] sm:h-[460px] object-cover"
                    width="600"
                    height="460"
                  />
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* ============================================================ */}
        {/* 02. KNEE & 03. HIP — ASYMMETRIC EDITORIAL PAIRING            */}
        {/* ============================================================ */}
        <section className="py-20 sm:py-28 bg-white border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-start">
              
              {/* 02 KNEE TREATMENT */}
              <div className="lg:col-span-6 flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center gap-4 mb-3">
                    <span className="text-sm font-mono font-bold tracking-widest text-teal-800 uppercase">
                      02 &bull; {knee.disciplineLabel}
                    </span>
                    <div className="h-px w-12 bg-teal-700/30" />
                  </div>

                  <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight leading-tight mb-4">
                    Knee Treatment
                  </h2>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal mb-6">
                    {knee.description}
                  </p>

                  <div className="mb-8 space-y-6">
                    <div>
                      <span className="text-xs font-extrabold tracking-widest text-teal-800 uppercase block mb-3">
                        Non-Operative Care
                      </span>
                      <ul className="space-y-2 text-base sm:text-lg font-semibold text-navy-900">
                        <li className="flex items-center gap-2.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-teal-600"></span>
                          <span>ERP / ozone</span>
                        </li>
                        <li className="flex items-center gap-2.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-teal-600"></span>
                          <span>IR Lamp</span>
                        </li>
                        <li className="flex items-center gap-2.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-teal-600"></span>
                          <span>Physiotherapy</span>
                        </li>
                      </ul>
                    </div>

                    <div className="pt-4 border-t border-slate-100">
                      <span className="text-xs font-extrabold tracking-widest text-slate-500 uppercase block mb-2">
                        Operative Care
                      </span>
                      <p className="text-base sm:text-lg font-bold text-navy-900">
                        Unicondylar knee replacement
                      </p>
                    </div>
                  </div>

                  <div className="mb-8 overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
                    <img
                      src={kneeImg}
                      alt="Knee clinical assessment"
                      className="w-full h-[240px] sm:h-[280px] object-cover"
                      width="500"
                      height="280"
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
              <div className="lg:col-span-6 flex flex-col justify-between h-full border-t lg:border-t-0 lg:border-l border-slate-200 pt-12 lg:pt-0 lg:pl-16">
                <div>
                  <div className="flex items-center gap-4 mb-3">
                    <span className="text-sm font-mono font-bold tracking-widest text-teal-800 uppercase">
                      03 &bull; {hip.disciplineLabel}
                    </span>
                    <div className="h-px w-12 bg-teal-700/30" />
                  </div>

                  <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight leading-tight mb-4">
                    Hip Treatment
                  </h2>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal mb-6">
                    {hip.description}
                  </p>

                  <div className="mb-8 space-y-6">
                    <div>
                      <span className="text-xs font-extrabold tracking-widest text-slate-500 uppercase block mb-3">
                        Surgical Interventions
                      </span>
                      <ul className="space-y-2 text-base sm:text-lg font-semibold text-navy-900">
                        <li className="flex items-center gap-2.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-teal-600"></span>
                          <span>Hip replacement</span>
                        </li>
                        <li className="flex items-center gap-2.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-teal-600"></span>
                          <span>Fracture fixation</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="mb-8 overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
                    <img
                      src={hipImg}
                      alt="Hip clinical assessment"
                      className="w-full h-[240px] sm:h-[280px] object-cover"
                      width="500"
                      height="280"
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
        <section className="py-20 sm:py-28 bg-slate-50/70 border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-14">
              
              {/* 04 JOINTS */}
              <div className="flex flex-col justify-between">
                <div>
                  <span className="text-xs font-mono font-bold tracking-widest text-teal-800 uppercase block mb-2">
                    04 &bull; {joints.disciplineLabel}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-navy-900 tracking-tight mb-3">
                    Peripheral Joints
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mb-6">
                    {joints.description}
                  </p>

                  <div className="mb-6 overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
                    <img
                      src={jointsImg}
                      alt="Joint care clinical assessment at Pain Cure clinic"
                      className="w-full h-[200px] object-cover"
                      width="400"
                      height="200"
                    />
                  </div>

                  <div className="space-y-2 mb-6">
                    <span className="text-xs font-bold text-navy-900 block mb-1">Joint regions evaluated:</span>
                    <div className="flex flex-wrap gap-1.5">
                      {joints.areas?.map((j) => (
                        <span key={j} className="px-2.5 py-1 bg-white border border-slate-200 rounded-md text-xs font-semibold text-navy-900">
                          {j}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <Link
                  to="/treatments/joints"
                  className="inline-flex items-center gap-2 text-base font-bold text-teal-700 hover:text-teal-900 pt-6 border-t border-slate-200 group"
                >
                  <span>Explore Joint Care</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>

              {/* 05 SPORTS INJURY */}
              <div className="flex flex-col justify-between">
                <div>
                  <span className="text-xs font-mono font-bold tracking-widest text-teal-800 uppercase block mb-2">
                    05 &bull; {sports.disciplineLabel}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-navy-900 tracking-tight mb-3">
                    Sports Injury
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mb-6">
                    {sports.description}
                  </p>

                  <div className="mb-6 overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
                    <img
                      src={sportsImg}
                      alt="Sports injury physical rehabilitation"
                      className="w-full h-[200px] object-cover"
                      width="400"
                      height="200"
                    />
                  </div>

                  <div className="p-4 bg-white rounded-xl border border-slate-200/80 mb-6 text-xs text-slate-600">
                    <span className="font-bold text-navy-900 block mb-0.5">Clinical Focus:</span>
                    In-house rehabilitation tailored to acute injury assessment and progressive functional movement recovery.
                  </div>
                </div>

                <Link
                  to="/treatments/sports-injury"
                  className="inline-flex items-center gap-2 text-base font-bold text-teal-700 hover:text-teal-900 pt-6 border-t border-slate-200 group"
                >
                  <span>Explore Sports Injury</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>

              {/* 06 PHYSIOTHERAPY */}
              <div className="flex flex-col justify-between">
                <div>
                  <span className="text-xs font-mono font-bold tracking-widest text-teal-800 uppercase block mb-2">
                    06 &bull; {physio.disciplineLabel}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-navy-900 tracking-tight mb-3">
                    Physiotherapy
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mb-6">
                    {physio.description}
                  </p>

                  <div className="mb-6 overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
                    <img
                      src={physioImg}
                      alt="Physiotherapy modalities at Pain Cure clinic"
                      className="w-full h-[200px] object-cover"
                      width="400"
                      height="200"
                    />
                  </div>

                  <div className="space-y-2 mb-6">
                    <span className="text-xs font-bold text-navy-900 block mb-1">Approved clinical modalities:</span>
                    <div className="flex flex-wrap gap-1.5">
                      {physio.modalities?.map((m) => (
                        <span key={m} className="px-2.5 py-1 bg-white border border-slate-200 rounded-md text-xs font-semibold text-navy-900">
                          {m}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <Link
                  to="/treatments/physiotherapy"
                  className="inline-flex items-center gap-2 text-base font-bold text-teal-700 hover:text-teal-900 pt-6 border-t border-slate-200 group"
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
        <section className="py-20 sm:py-28 bg-navy-950 text-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              <div className="lg:col-span-7 flex flex-col items-start">
                <span className="text-xs sm:text-sm font-bold tracking-widest text-teal-400 uppercase mb-4">
                  Dedicated In-House Service
                </span>
                <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
                  In-house Post Operative Rehab
                </h2>
                <div className="space-y-4 text-base sm:text-lg text-slate-300 leading-relaxed font-normal mb-8 max-w-xl">
                  <p>
                    Orthopaedic surgery provides the surgical repair or joint reconstruction, but functional recovery depends on guided post-operative rehabilitation.
                  </p>
                  <p>
                    Pain Cure provides supervised in-house rehabilitation tailored to each patient's procedure and recovery pace, supporting steady restoration of movement and daily independence.
                  </p>
                </div>

                <div className="space-y-3 mb-10">
                  <div className="flex items-center gap-3">
                    <span className="w-2.5 h-2.5 rounded-full bg-teal-400 shrink-0" />
                    <span className="text-slate-200 font-medium text-base">Supervised rehabilitation following orthopaedic procedures</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-2.5 h-2.5 rounded-full bg-teal-400 shrink-0" />
                    <span className="text-slate-200 font-medium text-base">Care tailored to the individual's surgical pathway and healing pace</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-2.5 h-2.5 rounded-full bg-teal-400 shrink-0" />
                    <span className="text-slate-200 font-medium text-base">Focused on progressive restoration of movement, strength, and function</span>
                  </div>
                </div>

                <Link
                  to="/post-operative-rehab"
                  className="inline-flex items-center gap-2.5 bg-teal-600 hover:bg-teal-500 text-white font-semibold px-8 py-4 rounded-lg shadow-sm transition-all duration-150 text-base"
                >
                  <span>Learn More About Post-Op Rehab</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="lg:col-span-5">
                <div className="overflow-hidden rounded-2xl border border-white/15 shadow-2xl bg-navy-900">
                  <img
                    src={rehabImg}
                    alt="In-house Post Operative Rehab session at Pain Cure clinic"
                    className="w-full h-[360px] sm:h-[440px] object-cover"
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
        <section className="py-20 sm:py-28 bg-white border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <span className="text-xs sm:text-sm font-extrabold tracking-widest text-teal-800 uppercase block mb-3">
                Consultation &amp; Inquiries
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-navy-900 tracking-tight leading-tight mb-6">
                Ready to take the next step?
              </h2>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal mb-8 max-w-2xl">
                Let's discuss your condition and determine the appropriate path forward. Our team is here to guide you from thorough clinical assessment through to dedicated rehabilitation.
              </p>

              <div className="mb-14">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2.5 bg-teal-600 hover:bg-teal-700 text-white font-semibold px-8 py-4 rounded-lg shadow-sm transition-all duration-150 text-base"
                >
                  <span>Request a Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Official Placeholders Grid with comfortable scale */}
              <div className="pt-10 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                <div>
                  <span className="flex items-center gap-2 text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">
                    <Phone className="w-3.5 h-3.5 text-teal-700" />
                    <span>Phone Inquiries</span>
                  </span>
                  <span className="text-base font-bold text-navy-900 font-mono block mt-1">
                    {CLINIC_INFO.placeholders.phone}
                  </span>
                </div>

                <div>
                  <span className="flex items-center gap-2 text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">
                    <Mail className="w-3.5 h-3.5 text-teal-700" />
                    <span>Email Desk</span>
                  </span>
                  <span className="text-base font-bold text-navy-900 font-mono block mt-1">
                    {CLINIC_INFO.placeholders.email}
                  </span>
                </div>

                <div>
                  <span className="flex items-center gap-2 text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">
                    <MapPin className="w-3.5 h-3.5 text-teal-700" />
                    <span>Clinic Address</span>
                  </span>
                  <span className="text-base font-bold text-navy-900 font-mono block mt-1">
                    {CLINIC_INFO.placeholders.address}
                  </span>
                </div>

                <div>
                  <span className="flex items-center gap-2 text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">
                    <Clock className="w-3.5 h-3.5 text-teal-700" />
                    <span>Consultation Timings</span>
                  </span>
                  <span className="text-base font-bold text-navy-900 font-mono block mt-1">
                    {CLINIC_INFO.placeholders.timings}
                  </span>
                </div>
              </div>

            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
};
