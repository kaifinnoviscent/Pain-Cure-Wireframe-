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

import { ROUTE_SEO, SITE_URL, DEFAULT_OG_IMAGE } from './data/seoData';

// Helper to update or create a meta tag in document.head
function setMetaTag(attrName: 'name' | 'property', attrValue: string, content: string) {
  let el = document.querySelector(`meta[${attrName}="${attrValue}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attrName, attrValue);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

// Route manager for scroll position, document titles, canonical, descriptions, OG/Twitter meta, and robots
function RouteManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    const seo = ROUTE_SEO[pathname];
    const title = seo?.title || 'Page Not Found | Pain Cure Ortho & Rehab Clinic';
    const description =
      seo?.description ||
      'The requested page could not be found. Return to Pain Cure Ortho & Rehab Clinic home or treatments.';
    const canonicalUrl = seo?.canonical || `${SITE_URL}${pathname}`;

    // 1. Document Title
    document.title = title;

    // 2. Meta Description
    setMetaTag('name', 'description', description);

    // 3. Canonical URL
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonicalUrl);

    // 4. Open Graph Tags
    setMetaTag('property', 'og:title', title);
    setMetaTag('property', 'og:description', description);
    setMetaTag('property', 'og:url', canonicalUrl);
    setMetaTag('property', 'og:image', DEFAULT_OG_IMAGE);

    // 5. Twitter Card Tags
    setMetaTag('name', 'twitter:title', title);
    setMetaTag('name', 'twitter:description', description);
    setMetaTag('name', 'twitter:url', canonicalUrl);
    setMetaTag('name', 'twitter:image', DEFAULT_OG_IMAGE);

    // 6. Robots Meta (noindex 404 routes)
    let robotsMeta = document.querySelector('meta[name="robots"]');
    if (!seo) {
      if (!robotsMeta) {
        robotsMeta = document.createElement('meta');
        robotsMeta.setAttribute('name', 'robots');
        document.head.appendChild(robotsMeta);
      }
      robotsMeta.setAttribute('content', 'noindex, nofollow');
    } else if (robotsMeta) {
      robotsMeta.setAttribute('content', 'index, follow');
    }

    // 7. Scroll to hash anchor or top
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        return;
      }
      const frameId = requestAnimationFrame(() => {
        const el = document.querySelector(hash);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      });
      return () => cancelAnimationFrame(frameId);
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
