import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone, Mail, MapPin, Clock } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicalData';

export const ConsultationCTA: React.FC = () => {
  return (
    <section id="contact" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main CTA Surface */}
        <div className="rounded-3xl bg-navy-950 text-white p-10 sm:p-14 lg:p-18 relative overflow-hidden shadow-xl border border-navy-900">
          <div className="relative max-w-3xl">
            <span className="text-xs sm:text-sm font-extrabold tracking-widest text-teal-400 uppercase block mb-4">
              Consultation &amp; Inquiries
            </span>

            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight text-white mb-6">
              Ready to take the next step?
            </h2>

            <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal mb-10 max-w-2xl">
              Let’s discuss your condition and determine the appropriate path forward. Our team is here to guide you from thorough clinical assessment through to dedicated rehabilitation.
            </p>

            {/* Primary Action Button */}
            <div className="mb-12">
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 bg-teal-600 hover:bg-teal-500 text-white font-semibold px-8 py-4 rounded-lg shadow-sm transition-all duration-150 group touch-target text-base"
              >
                <span>Request a Consultation</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Editorial Contact Details with confident typographic scale */}
            <div className="pt-10 border-t border-white/15 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <div>
                <span className="flex items-center gap-2 text-slate-500 uppercase tracking-wider text-xs font-bold mb-1">
                  <Phone className="w-3.5 h-3.5 text-teal-400" />
                  <span>Phone Inquiries</span>
                </span>
                <span className="text-base font-bold text-white font-mono block mt-1">{CLINIC_INFO.placeholders.phone}</span>
              </div>

              <div>
                <span className="flex items-center gap-2 text-slate-500 uppercase tracking-wider text-xs font-bold mb-1">
                  <Mail className="w-3.5 h-3.5 text-teal-400" />
                  <span>Email Desk</span>
                </span>
                <span className="text-base font-bold text-white font-mono block mt-1">{CLINIC_INFO.placeholders.email}</span>
              </div>

              <div>
                <span className="flex items-center gap-2 text-slate-500 uppercase tracking-wider text-xs font-bold mb-1">
                  <MapPin className="w-3.5 h-3.5 text-teal-400" />
                  <span>Clinic Address</span>
                </span>
                <span className="text-base font-bold text-white font-mono block mt-1">{CLINIC_INFO.placeholders.address}</span>
              </div>

              <div>
                <span className="flex items-center gap-2 text-slate-500 uppercase tracking-wider text-xs font-bold mb-1">
                  <Clock className="w-3.5 h-3.5 text-teal-400" />
                  <span>Consultation Timings</span>
                </span>
                <span className="text-base font-bold text-white font-mono block mt-1">{CLINIC_INFO.placeholders.timings}</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
