import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Home } from 'lucide-react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-grow flex items-center justify-center py-24 sm:py-32">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <span className="text-xs sm:text-sm font-bold tracking-wider text-teal-900 uppercase block mb-4">
            404 Error &bull; Page Not Found
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-navy-900 tracking-tight leading-[1.18] sm:leading-[1.15] mb-6">
            Page not found
          </h1>
          <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal mb-10 max-w-lg mx-auto">
            Let's get you back to the clinic. The page you are looking for does not exist or may have been moved.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/"
              className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white font-semibold px-7 py-3.5 rounded-lg shadow-sm transition-all duration-150 text-sm sm:text-base"
            >
              <Home className="w-4 h-4" />
              <span>Back to Home</span>
            </Link>
            <Link
              to="/treatments"
              className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-navy-900 font-semibold px-6 py-3.5 rounded-lg border border-slate-300 transition-all duration-150 text-sm sm:text-base"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>View Treatments</span>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};
