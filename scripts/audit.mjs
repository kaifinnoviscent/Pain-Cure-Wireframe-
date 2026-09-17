import { chromium } from 'playwright';
import { createServer } from 'vite';
import fs from 'fs';
import path from 'path';

const scratchDir = 'C:\\Users\\there\\.gemini\\antigravity\\brain\\ec69d649-e95a-4eb4-b8a9-cacec8cae44a\\scratch';

const routes = [
  '/',
  '/about',
  '/contact',
  '/treatments',
  '/treatments/spine',
  '/treatments/knee',
  '/treatments/hip',
  '/treatments/joints',
  '/treatments/sports-injury',
  '/treatments/physiotherapy',
  '/post-operative-rehab',
];

const viewports = [
  { name: '1536px', width: 1536, height: 960 },
  { name: '1440px', width: 1440, height: 900 },
  { name: '1280px', width: 1280, height: 800 },
  { name: '430px', width: 430, height: 932 },
  { name: '390px', width: 390, height: 844 },
  { name: '375px', width: 375, height: 667 },
];

async function runAudit() {
  const server = await createServer({
    server: { port: 5174 },
  });
  await server.listen();
  const baseUrl = 'http://localhost:5174';

  const browser = await chromium.launch();
  const results = [];

  for (const vp of viewports) {
    const context = await browser.newContext({
      viewport: { width: vp.width, height: vp.height },
      deviceScaleFactor: 1,
    });
    const page = await context.newPage();

    for (const route of routes) {
      await page.goto(`${baseUrl}${route}`, { waitUntil: 'networkidle' });
      await page.waitForTimeout(400);

      // Measure sections
      const auditData = await page.evaluate(() => {
        const sections = Array.from(document.querySelectorAll('section, main > div, main > section'));
        const measurements = [];

        sections.forEach((sec, sIdx) => {
          const secRect = sec.getBoundingClientRect();
          const secClasses = sec.className;
          const secId = sec.id || `section-${sIdx}`;
          const headings = Array.from(sec.querySelectorAll('h1, h2, h3'));
          const headingText = headings.map(h => h.innerText.trim()).join(' | ');

          // Measure gaps between key content blocks
          const internalGaps = [];

          // Find intro header block vs card grid
          const container = sec.querySelector('.max-w-7xl') || sec;
          const visibleChildren = Array.from(container.children).filter(c => {
            const r = c.getBoundingClientRect();
            const s = window.getComputedStyle(c);
            return r.height > 0 && r.width > 0 && s.display !== 'none';
          });
          for (let i = 0; i < visibleChildren.length - 1; i++) {
            const b1 = visibleChildren[i].getBoundingClientRect();
            const b2 = visibleChildren[i+1].getBoundingClientRect();
            const gap = Math.round(b2.top - b1.bottom);
            internalGaps.push({
              type: 'direct_child_gap',
              el1: visibleChildren[i].tagName + '.' + (visibleChildren[i].className || '').slice(0, 30),
              el2: visibleChildren[i+1].tagName + '.' + (visibleChildren[i+1].className || '').slice(0, 30),
              gap: gap,
            });
          }

          // Inspect two-column grids
          const gridEls = sec.querySelectorAll('.grid');
          gridEls.forEach((grid, gIdx) => {
            const gridStyle = window.getComputedStyle(grid);
            const cols = Array.from(grid.children);
            if (cols.length >= 2) {
              const colRects = cols.map(c => ({
                height: Math.round(c.getBoundingClientRect().height),
                top: Math.round(c.getBoundingClientRect().top),
                bottom: Math.round(c.getBoundingClientRect().bottom),
                classes: c.className.slice(0, 40),
                contentHeight: Math.round(Array.from(c.children).reduce((acc, el) => acc + el.getBoundingClientRect().height, 0))
              }));
              internalGaps.push({
                type: 'grid_analysis',
                gridClasses: grid.className.slice(0, 40),
                alignItems: gridStyle.alignItems,
                colCount: cols.length,
                colRects,
                heightDiff: Math.max(...colRects.map(c => c.height)) - Math.min(...colRects.map(c => c.height)),
              });
            }
          });

          // Check if any flex container has justify-between or items-stretch causing dead whitespace
          const flexEls = sec.querySelectorAll('.flex');
          flexEls.forEach((fl) => {
            const flStyle = window.getComputedStyle(fl);
            if (flStyle.justifyContent === 'space-between' && fl.children.length >= 2) {
              const rects = Array.from(fl.children).map(c => c.getBoundingClientRect());
              const childGap = flStyle.flexDirection.includes('column')
                ? rects[1].top - rects[0].bottom
                : rects[1].left - rects[0].right;
              if (flStyle.flexDirection.includes('column') && childGap > 50) {
                internalGaps.push({
                  type: 'flex_justify_between_tall',
                  classes: fl.className.slice(0, 40),
                  gap: Math.round(childGap),
                });
              }
            }
          });

          measurements.push({
            id: secId,
            heading: headingText,
            classes: secClasses,
            height: Math.round(secRect.height),
            internalGaps,
          });
        });

        return measurements;
      });

      // Save screenshot for key viewports
      const safeRouteName = route === '/' ? 'home' : route.replace(/\//g, '_').replace(/^_/, '');
      const screenshotPath = path.join(scratchDir, `${safeRouteName}_${vp.name}.png`);
      await page.screenshot({ path: screenshotPath, fullPage: true });

      results.push({
        viewport: vp.name,
        route,
        measurements: auditData,
      });
    }

    await context.close();
  }

  await browser.close();
  await server.close();

  fs.writeFileSync(
    path.join(scratchDir, 'audit_results.json'),
    JSON.stringify(results, null, 2)
  );
  console.log('Audit complete! Results written to audit_results.json');
}

runAudit().catch(err => {
  console.error(err);
  process.exit(1);
});
