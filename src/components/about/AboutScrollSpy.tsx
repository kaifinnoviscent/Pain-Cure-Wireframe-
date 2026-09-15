import React from 'react';

export interface Chapter {
  id: string;
  num: string;
  title: string;
  shortTitle: string;
}

export const CHAPTERS: Chapter[] = [
  { id: 'doctor', num: '01', title: 'THE DOCTOR', shortTitle: 'DOCTOR' },
  { id: 'approach', num: '02', title: 'OUR APPROACH', shortTitle: 'APPROACH' },
  { id: 'pain-cure', num: '03', title: 'PAIN CURE', shortTitle: 'PAIN CURE' },
];

function smoothScrollTo(id: string): void {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

export interface ChapterIndexProps {
  activeSection: string;
}

/* ─────────────────────────────────────────────────────── */
/* DESKTOP EDITORIAL CHAPTER INDEX                         */
/* Pure typography, clear hierarchy, no timeline graphics  */
/* ─────────────────────────────────────────────────────── */
export const AboutDesktopChapterIndex: React.FC<ChapterIndexProps> = ({ activeSection }) => {
  const isDark = activeSection === 'pain-cure';

  return (
    <aside className="w-full select-none" aria-label="Chapter Navigation">
      <nav className="flex flex-col gap-6" aria-label="Page chapters">
        {/* Eyebrow Label */}
        <span
          className={`font-mono text-[11px] font-extrabold tracking-[0.2em] uppercase transition-colors duration-300 ${
            isDark ? 'text-teal-400' : 'text-teal-700'
          }`}
        >
          CHAPTERS
        </span>

        {/* 3 Editorial Chapter Destinations */}
        <div className="flex flex-col gap-5">
          {CHAPTERS.map((ch) => {
            const isActive = activeSection === ch.id;

            return (
              <button
                key={ch.id}
                type="button"
                onClick={() => smoothScrollTo(ch.id)}
                aria-label={`Go to chapter ${ch.num}: ${ch.title}`}
                aria-current={isActive ? 'step' : undefined}
                className={`group flex flex-col items-start text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 rounded transition-all duration-300 ${
                  isActive
                    ? 'opacity-100 translate-y-0'
                    : isDark
                      ? 'opacity-55 hover:opacity-85 translate-y-[2px]'
                      : 'opacity-55 hover:opacity-85 translate-y-[2px]'
                }`}
              >
                {/* Chapter Number */}
                <span
                  className={`font-mono text-xs font-extrabold tracking-widest block mb-0.5 transition-colors duration-300 ${
                    isActive
                      ? isDark
                        ? 'text-teal-400'
                        : 'text-teal-700'
                      : isDark
                        ? 'text-slate-400 group-hover:text-slate-200'
                        : 'text-slate-400 group-hover:text-slate-600'
                  }`}
                >
                  {ch.num}
                </span>

                {/* Chapter Title */}
                <span
                  className={`text-xs xl:text-[13px] tracking-wider uppercase leading-snug transition-colors duration-300 ${
                    isActive
                      ? isDark
                        ? 'text-white font-extrabold'
                        : 'text-navy-950 font-extrabold'
                      : isDark
                        ? 'text-slate-300 font-semibold group-hover:text-white'
                        : 'text-slate-600 font-semibold group-hover:text-navy-900'
                  }`}
                >
                  {ch.title}
                </span>

                {/* Active Accent Underline */}
                <div className="w-full mt-1.5 overflow-hidden h-[2px]">
                  <span
                    className={`block h-full transition-all duration-300 ${
                      isActive
                        ? isDark
                          ? 'w-16 bg-teal-400'
                          : 'w-16 bg-teal-600'
                        : 'w-0 bg-transparent'
                    }`}
                  />
                </div>
              </button>
            );
          })}
        </div>
      </nav>
    </aside>
  );
};

/* ─────────────────────────────────────────────────────── */
/* MOBILE CHAPTER NAVIGATOR                                */
/* 2-tier compact header: current chapter + 3 targets     */
/* ─────────────────────────────────────────────────────── */
export const AboutMobileChapterIndex: React.FC<ChapterIndexProps> = ({ activeSection }) => {
  const activeIdx = CHAPTERS.findIndex((c) => c.id === activeSection);
  const current = CHAPTERS[Math.max(0, activeIdx)];
  const isDark = activeSection === 'pain-cure';
  const isMint = activeSection === 'approach';

  return (
    <div
      className={`sticky top-[56px] sm:top-[66px] z-30 xl:hidden border-b backdrop-blur-md transition-colors duration-400 shadow-xs ${
        isDark
          ? 'bg-navy-950/98 border-white/15 text-white'
          : isMint
            ? 'bg-[#E6F3EF]/98 border-teal-200 text-slate-800'
            : 'bg-white/98 border-slate-200/90 text-slate-800'
      }`}
      role="navigation"
      aria-label="Chapter Progress"
    >
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 py-2">
        {/* Tier 1: Current Chapter Context */}
        <div className="flex items-center justify-between pb-1.5 border-b border-current/10">
          <div className="flex items-center gap-1.5">
            <span
              className={`font-mono text-[11px] font-extrabold tracking-wider ${
                isDark ? 'text-teal-400' : 'text-teal-700'
              }`}
            >
              {current.num}&thinsp;/&thinsp;03
            </span>
            <span className="text-[10px] text-current/40 uppercase font-bold tracking-wider">
              CHAPTER
            </span>
          </div>

          <div className="text-right overflow-hidden">
            <span
              key={current.id}
              className={`inline-block font-mono text-[11px] sm:text-xs font-extrabold tracking-[0.14em] uppercase about-chapter-title-enter ${
                isDark ? 'text-teal-300' : 'text-teal-800'
              }`}
            >
              {current.title}
            </span>
          </div>
        </div>

        {/* Tier 2: Three Clear Navigation Targets */}
        <div
          className="grid grid-cols-3 gap-2 pt-1.5"
          role="group"
          aria-label="Jump to chapter"
        >
          {CHAPTERS.map((ch) => {
            const isActive = activeSection === ch.id;

            return (
              <button
                key={ch.id}
                type="button"
                onClick={() => smoothScrollTo(ch.id)}
                aria-label={`Go to chapter ${ch.num}: ${ch.title}`}
                aria-current={isActive ? 'step' : undefined}
                className={`group flex flex-col items-center justify-center py-1.5 px-1 rounded-md transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 ${
                  isActive
                    ? isDark
                      ? 'bg-white/5 text-white'
                      : 'bg-teal-50/70 text-navy-950'
                    : isDark
                      ? 'text-slate-400 hover:text-white'
                      : 'text-slate-500 hover:text-navy-900'
                }`}
              >
                <div className="flex items-center gap-1 leading-tight">
                  <span
                    className={`font-mono text-[10px] font-bold ${
                      isActive
                        ? isDark
                          ? 'text-teal-400'
                          : 'text-teal-700'
                        : isDark
                          ? 'text-slate-500'
                          : 'text-slate-400'
                    }`}
                  >
                    {ch.num}
                  </span>
                  <span
                    className={`text-[11px] sm:text-xs tracking-wider uppercase ${
                      isActive ? 'font-extrabold' : 'font-semibold'
                    }`}
                  >
                    {ch.shortTitle}
                  </span>
                </div>

                {/* Active Indicator Bar */}
                <div className="w-full mt-1 px-1">
                  <span
                    className={`block h-[2px] rounded-full transition-all duration-300 ${
                      isActive
                        ? isDark
                          ? 'bg-teal-400 w-full'
                          : 'bg-teal-600 w-full'
                        : 'bg-transparent w-0'
                    }`}
                  />
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

