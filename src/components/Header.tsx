import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, ArrowRight, ChevronDown } from 'lucide-react';
import { MobileNav } from './MobileNav';
const logoUrl = '/Pain Cure.png';

export const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const mobileMenuBtnRef = useRef<HTMLButtonElement>(null);
  const enterTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const leaveTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const location = useLocation();

  const isTreatmentsActive = location.pathname.startsWith('/treatments');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown on route change
  useEffect(() => {
    setIsDropdownOpen(false);
  }, [location.pathname]);

  // Handle outside click to close dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Handle keyboard: Escape closes dropdown, focus returns to trigger
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isDropdownOpen) {
        setIsDropdownOpen(false);
        triggerRef.current?.focus();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isDropdownOpen]);

  // Hover bridge: open after 120ms, close after 160ms (allows pointer to travel to dropdown)
  const handleMouseEnterTriggerZone = useCallback(() => {
    if (leaveTimerRef.current) clearTimeout(leaveTimerRef.current);
    enterTimerRef.current = setTimeout(() => {
      setIsDropdownOpen(true);
    }, 120);
  }, []);

  const handleMouseLeaveTriggerZone = useCallback(() => {
    if (enterTimerRef.current) clearTimeout(enterTimerRef.current);
    leaveTimerRef.current = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 160);
  }, []);

  const handleDropdownMouseEnter = useCallback(() => {
    if (leaveTimerRef.current) clearTimeout(leaveTimerRef.current);
  }, []);

  const handleDropdownMouseLeave = useCallback(() => {
    leaveTimerRef.current = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 160);
  }, []);

  // Keyboard: trigger opens dropdown on Enter/Space/ArrowDown
  const handleTriggerKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === 'Enter' || event.key === ' ' || event.key === 'ArrowDown') {
      event.preventDefault();
      setIsDropdownOpen((prev) => !prev);
    }
  };

  const treatmentItems = [
    { num: '01', category: 'SPINE', name: 'Spine Care', slug: '/treatments/spine' },
    { num: '02', category: 'KNEE', name: 'Knee Treatment', slug: '/treatments/knee' },
    { num: '03', category: 'HIP', name: 'Hip Treatment', slug: '/treatments/hip' },
    { num: '04', category: 'JOINTS', name: 'Peripheral Joints', slug: '/treatments/joints' },
    { num: '05', category: 'SPORTS INJURY', name: 'Sports Injury', slug: '/treatments/sports-injury' },
    { num: '06', category: 'PHYSIOTHERAPY', name: 'Physiotherapy', slug: '/treatments/physiotherapy' },
  ];

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-200 bg-white/98 backdrop-blur-md ${
          isScrolled
            ? 'border-b border-slate-200 shadow-sm py-3.5'
            : 'border-b border-slate-200/70 py-4 sm:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between min-h-[52px]">
          {/* Logo & Brand Identity */}
          <Link
            to="/"
            className="flex items-center gap-3 focus-visible:outline-teal-600 rounded-md group"
            aria-label="Pain Cure Ortho & Rehab Clinic Home"
          >
            <img
              src={logoUrl}
              alt="Pain Cure Ortho & Rehab Clinic"
              className="h-11 sm:h-13 md:h-14 w-auto object-contain transition-transform group-hover:scale-[1.01]"
              width="160"
              height="108"
            />
          </Link>

          {/* Desktop Navigation — relative container so dropdown anchors to full nav width */}
          <div
            ref={dropdownRef}
            onMouseLeave={handleMouseLeaveTriggerZone}
            className="relative hidden lg:block"
          >
            <nav
              className="flex items-center gap-5 xl:gap-8 2xl:gap-10 text-[15px] font-semibold text-slate-800"
              aria-label="Main Navigation"
            >
              {/* Treatments Unified Trigger */}
              <div
                onMouseEnter={handleMouseEnterTriggerZone}
              >
                {/* ONE unified button — no split link+chevron */}
                <button
                  ref={triggerRef}
                  type="button"
                  aria-expanded={isDropdownOpen}
                  aria-haspopup="true"
                  aria-controls="treatments-dropdown"
                  onKeyDown={handleTriggerKeyDown}
                  className={`inline-flex items-center gap-1.5 py-2 px-1 rounded focus-visible:outline-teal-600 transition-colors ${
                    isTreatmentsActive
                      ? 'text-teal-800 font-bold'
                      : 'text-slate-800 hover:text-teal-800'
                  }`}
                >
                  <span>Treatments</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-[220ms] ease-in-out ${
                      isDropdownOpen ? 'rotate-180 text-teal-800' : ''
                    }`}
                    aria-hidden="true"
                  />
                </button>
              </div>

              <Link
                to="/post-operative-rehab"
                className={`hover:text-teal-800 transition-colors py-2 focus-visible:outline-teal-600 rounded ${
                  location.pathname === '/post-operative-rehab' ? 'text-teal-800 font-bold' : ''
                }`}
              >
                Post-Operative Rehab
              </Link>

              <Link
                to="/about"
                className={`hover:text-teal-800 transition-colors py-2 focus-visible:outline-teal-600 rounded ${
                  location.pathname === '/about' ? 'text-teal-800 font-bold' : ''
                }`}
              >
                About
              </Link>

              <Link
                to="/contact"
                className={`hover:text-teal-800 transition-colors py-2 focus-visible:outline-teal-600 rounded ${
                  location.pathname === '/contact' ? 'text-teal-800 font-bold' : ''
                }`}
              >
                Contact
              </Link>
            </nav>

            {/* Dropdown Panel — anchored relative to full nav container */}
            {isDropdownOpen && (
              <div
                id="treatments-dropdown"
                role="region"
                aria-label="Treatments navigation"
                onMouseEnter={handleDropdownMouseEnter}
                onMouseLeave={handleDropdownMouseLeave}
                className={`absolute left-0 top-[calc(100%+8px)] w-[700px] xl:w-[780px] max-w-[calc(100vw-2rem)] bg-white rounded-2xl shadow-2xl border border-slate-200/95 p-8 z-50 ${
                  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
                    ? ''
                    : 'animate-in fade-in slide-in-from-top-2 duration-[160ms]'
                }`}
              >
                {/* Invisible hover bridge — fills the 8px gap between nav bottom and dropdown top */}
                <div
                  className="absolute -top-3 left-0 right-0 h-3"
                  aria-hidden="true"
                />
                <div className="grid grid-cols-12 gap-8 items-start">
                  {/* Left Column: Short Editorial Intro */}
                  <div className="col-span-12 md:col-span-4 border-b md:border-b-0 md:border-r border-slate-100 pb-6 md:pb-0 md:pr-6">
                    <span className="text-xs font-extrabold tracking-widest text-teal-800 uppercase block mb-2">
                      Treatments
                    </span>
                    <h3 className="text-xl font-extrabold text-navy-900 tracking-tight leading-snug mb-3">
                      Explore care by area.
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed font-normal mb-6">
                      Dedicated clinical disciplines spanning joint care, interventional procedures, and in-house rehabilitation.
                    </p>
                    <Link
                      to="/treatments"
                      onClick={() => setIsDropdownOpen(false)}
                      className="inline-flex items-center gap-2 text-sm font-bold text-teal-700 hover:text-teal-900 group"
                    >
                      <span>View All Treatments</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>

                  {/* Right Column: Clean Scan List */}
                  <div className="col-span-12 md:col-span-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-1">
                      {treatmentItems.map((item) => (
                        <Link
                          key={item.slug}
                          to={item.slug}
                          onClick={() => setIsDropdownOpen(false)}
                          className="group px-2 py-3 rounded-xl hover:bg-slate-50 transition-colors flex items-baseline gap-3"
                        >
                          <span className="text-xs font-mono font-bold text-teal-700 shrink-0 w-6">
                            {item.num}
                          </span>
                          <div>
                            <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block leading-none mb-0.5">
                              {item.category}
                            </span>
                            <span className="text-base font-bold text-navy-900 group-hover:text-teal-700 transition-colors leading-tight">
                              {item.name}
                            </span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2.5 bg-teal-600 hover:bg-teal-700 text-white text-[15px] font-semibold px-6 py-3 rounded-xl shadow-sm hover:shadow transition-all duration-150 active:scale-[0.99] touch-target focus-visible:outline-teal-600"
            >
              <span>Request a Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Actions */}
          <div className="flex items-center gap-3 lg:hidden">
            <Link
              to="/contact"
              className="bg-teal-600 hover:bg-teal-700 text-white text-xs font-semibold px-3.5 py-2.5 rounded-xl touch-target flex items-center justify-center shadow-xs"
            >
              Consult
            </Link>
            <button
              ref={mobileMenuBtnRef}
              type="button"
              onClick={() => setIsMobileMenuOpen(true)}
              className="p-2 text-slate-700 hover:text-navy-900 rounded-lg touch-target flex items-center justify-center focus-visible:outline-teal-600"
              aria-label="Open navigation menu"
              aria-expanded={isMobileMenuOpen}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <MobileNav
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        returnFocusRef={mobileMenuBtnRef as React.RefObject<HTMLElement>}
      />
    </>
  );
};
