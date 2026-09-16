import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { TreatmentOverviewPage } from './pages/TreatmentOverviewPage';
import { SpineTreatmentPage } from './pages/SpineTreatmentPage';
import { KneeTreatmentPage } from './pages/KneeTreatmentPage';
import { HipTreatmentPage } from './pages/HipTreatmentPage';
import { JointsTreatmentPage } from './pages/JointsTreatmentPage';
import { SportsInjuryPage } from './pages/SportsInjuryPage';
import { PhysiotherapyPage } from './pages/PhysiotherapyPage';
import { PostOpRehabPage } from './pages/PostOpRehabPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { NotFoundPage } from './pages/NotFoundPage';

const ROUTE_TITLES: Record<string, string> = {
  '/': 'Pain Cure Ortho & Rehab Clinic | Orthopaedic Care & Rehabilitation',
  '/about': 'About Us | Pain Cure Ortho & Rehab Clinic',
  '/contact': 'Contact | Pain Cure Ortho & Rehab Clinic',
  '/treatments': 'Treatments | Pain Cure Ortho & Rehab Clinic',
  '/treatments/spine': 'Spine Care | Pain Cure Ortho & Rehab Clinic',
  '/treatments/knee': 'Knee Treatment | Pain Cure Ortho & Rehab Clinic',
  '/treatments/hip': 'Hip Treatment | Pain Cure Ortho & Rehab Clinic',
  '/treatments/joints': 'Joint Treatment | Pain Cure Ortho & Rehab Clinic',
  '/treatments/sports-injury': 'Sports Injury | Pain Cure Ortho & Rehab Clinic',
  '/treatments/physiotherapy': 'Physiotherapy | Pain Cure Ortho & Rehab Clinic',
  '/post-operative-rehab': 'Post-Operative Rehabilitation | Pain Cure Ortho & Rehab Clinic',
};

// Route manager for scroll position, document titles, and robots meta
function RouteManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // 1. Update Document Title
    const title = ROUTE_TITLES[pathname] || 'Page Not Found | Pain Cure Ortho & Rehab Clinic';
    document.title = title;

    // 2. Manage robots meta tag for 404 routes
    let robotsMeta = document.querySelector('meta[name="robots"]');
    if (!ROUTE_TITLES[pathname]) {
      if (!robotsMeta) {
        robotsMeta = document.createElement('meta');
        robotsMeta.setAttribute('name', 'robots');
        document.head.appendChild(robotsMeta);
      }
      robotsMeta.setAttribute('content', 'noindex, nofollow');
    } else if (robotsMeta) {
      robotsMeta.setAttribute('content', 'index, follow');
    }

    // 3. Scroll to hash anchor or top
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}

export const App: React.FC = () => {
  return (
    <>
      <RouteManager />
      <Routes>
        <Route path="/" element={<HomePage />} />
        
        {/* Treatment Routes */}
        <Route path="/treatments" element={<TreatmentOverviewPage />} />
        <Route path="/treatments/spine" element={<SpineTreatmentPage />} />
        <Route path="/treatments/knee" element={<KneeTreatmentPage />} />
        <Route path="/treatments/hip" element={<HipTreatmentPage />} />
        <Route path="/treatments/joints" element={<JointsTreatmentPage />} />
        <Route path="/treatments/sports-injury" element={<SportsInjuryPage />} />
        <Route path="/treatments/physiotherapy" element={<PhysiotherapyPage />} />
        
        {/* Post-Operative Rehab Route */}
        <Route path="/post-operative-rehab" element={<PostOpRehabPage />} />
        
        {/* Structural Core Routes */}
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        
        {/* Fallback 404 Route */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};
export default App;
