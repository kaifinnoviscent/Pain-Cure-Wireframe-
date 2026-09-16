import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { X, ArrowRight, Instagram, ChevronDown } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicalData';

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  returnFocusRef?: React.RefObject<HTMLElement>;
}

export const MobileNav: React.FC<MobileNavProps> = ({ isOpen, onClose, returnFocusRef }) => {
  const [treatmentsExpanded, setTreatmentsExpanded] = useState(true);
  const drawerRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Body scroll lock + focus management
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      // Move focus into the drawer when it opens
      setTimeout(() => {
        closeButtonRef.current?.focus();
      }, 50);
    } else {
      document.body.style.overflow = '';
      // Restore focus to the hamburger button that opened the drawer
      setTimeout(() => {
        returnFocusRef?.current?.focus();
      }, 0);
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen, returnFocusRef]);

  // Focus trap: keep Tab / Shift+Tab inside the drawer
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
        return;
      }
      if (e.key !== 'Tab') return;

      const drawer = drawerRef.current;
      if (!drawer) return;

      const focusable = drawer.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last?.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first?.focus();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const treatmentItems = [
    { name: 'Spine Care', slug: '/treatments/spine' },
    { name: 'Knee Treatment', slug: '/treatments/knee' },
    { name: 'Hip Treatment', slug: '/treatments/hip' },
    { name: 'Joint Treatment', slug: '/treatments/joints' },
    { name: 'Sports Injury', slug: '/treatments/sports-injury' },
    { name: 'Physiotherapy', slug: '/treatments/physiotherapy' },
  ];

  return (
    <div className="fixed inset-0 z-50 lg:hidden" role="dialog" aria-modal="true" aria-label="Mobile Navigation">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-navy-950/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div
        ref={drawerRef}
        className="fixed inset-y-0 right-0 max-w-xs w-full bg-white shadow-2xl flex flex-col justify-between p-6 overflow-y-auto animate-in slide-in-from-right duration-300"
      >
        <div>
          {/* Drawer Header */}
          <div className="flex items-center justify-between pb-4 border-b border-slate-100">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-700">Menu</span>
            <button
              ref={closeButtonRef}
              onClick={onClose}
              className="p-2 -mr-2 text-slate-500 hover:text-navy-900 rounded-lg min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <nav className="mt-6 flex flex-col space-y-1" aria-label="Mobile Navigation Links">
            <Link
              to="/"
              onClick={onClose}
              className="px-3 py-3 rounded-lg text-base font-semibold text-slate-800 hover:text-teal-700 hover:bg-teal-50/50 transition-colors min-h-[44px] flex items-center"
            >
              Home
            </Link>

            {/* Treatments Section with Expandable Sub-items */}
            <div>
              {/* Single unified accordion button — no navigation, only expands/collapses */}
              <button
                type="button"
                onClick={() => setTreatmentsExpanded(!treatmentsExpanded)}
                aria-expanded={treatmentsExpanded}
                className="w-full flex items-center justify-between px-3 py-3 rounded-lg text-base font-semibold text-slate-800 hover:text-teal-700 hover:bg-teal-50/50 transition-colors min-h-[44px]"
              >
                <span>Treatments</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    treatmentsExpanded ? 'rotate-180 text-teal-700' : 'text-slate-400'
                  }`}
                  aria-hidden="true"
                />
              </button>

              {treatmentsExpanded && (
                <div className="pl-4 pr-2 py-1 space-y-0.5 border-l-2 border-teal-200 ml-3 mt-1.5 mb-2">
                  {treatmentItems.map((item) => (
                    <Link
                      key={item.slug}
                      to={item.slug}
                      onClick={onClose}
                      className="block px-3 py-2.5 rounded-md text-[15px] font-semibold text-slate-700 hover:text-teal-800 hover:bg-slate-50 transition-colors min-h-[44px] flex items-center"
                    >
                      {item.name}
                    </Link>
                  ))}
                  <Link
                    to="/treatments"
                    onClick={onClose}
                    className="block px-3 py-2.5 text-sm font-bold text-teal-700 hover:text-teal-900 min-h-[44px] flex items-center"
                  >
                    View All Treatments &rarr;
                  </Link>
                </div>
              )}
            </div>

            <Link
              to="/post-operative-rehab"
              onClick={onClose}
              className="px-3 py-3 rounded-lg text-base font-semibold text-slate-800 hover:text-teal-700 hover:bg-teal-50/50 transition-colors min-h-[44px] flex items-center"
            >
              Post-Operative Rehab
            </Link>

            <Link
              to="/about"
              onClick={onClose}
              className="px-3 py-3 rounded-lg text-base font-semibold text-slate-800 hover:text-teal-700 hover:bg-teal-50/50 transition-colors min-h-[44px] flex items-center"
            >
              About
            </Link>

            <Link
              to="/contact"
              onClick={onClose}
              className="px-3 py-3 rounded-lg text-base font-semibold text-slate-800 hover:text-teal-700 hover:bg-teal-50/50 transition-colors min-h-[44px] flex items-center"
            >
              Contact
            </Link>
          </nav>
        </div>

        {/* Bottom CTA & Social */}
        <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col space-y-4">
          <Link
            to="/contact"
            onClick={onClose}
            className="w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 px-4 rounded-xl text-center flex items-center justify-center gap-2 shadow-sm min-h-[48px] text-sm"
          >
            <span>Request a Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <div className="pt-2">
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-2">Connect on Instagram</span>
            <div className="flex flex-col space-y-1.5">
              {CLINIC_INFO.instagram.map((item) => (
                <a
                  key={item.handle}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs font-medium text-slate-600 hover:text-teal-700 py-1 min-h-[44px]"
                >
                  <Instagram className="w-3.5 h-3.5 text-teal-600" />
                  <span>{item.handle}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
