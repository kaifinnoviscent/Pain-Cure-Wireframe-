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

// Scroll to top or anchor on route change
function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
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
      <ScrollManager />
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
