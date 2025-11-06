import { useEffect } from 'react'
import HeaderNav from './components/HeaderNav'
import Hero from './components/Hero'
import PropertyFilters from './components/PropertyFilters'
import CompanySections from './components/CompanySections'

function App() {
  useEffect(() => {
    const title = 'SheltOwn | Luxury Real Estate in Delhi NCR';
    const description = 'Discover luxury homes, builder floors, plots, and farmhouses across Delhi NCR. Transparent advisory, curated listings, and on-site visits with SheltOwn.';
    document.title = title;

    const ensureMeta = (name, content) => {
      let el = document.querySelector(`meta[name="${name}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute('name', name);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    const ensureProperty = (property, content) => {
      let el = document.querySelector(`meta[property="${property}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute('property', property);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    ensureMeta('description', description);
    ensureProperty('og:title', title);
    ensureProperty('og:description', description);
    ensureProperty('og:type', 'website');
    ensureMeta('twitter:card', 'summary_large_image');
    ensureMeta('twitter:title', title);
    ensureMeta('twitter:description', description);
  }, [])

  return (
    <div className="font-inter text-gray-900 bg-gradient-to-b from-white to-gray-50 min-h-screen">
      <HeaderNav />
      <main>
        <Hero />
        <PropertyFilters />
        <CompanySections />
      </main>
      <footer className="border-t border-gray-200 py-10 bg-white/70 backdrop-blur">
        <div className="mx-auto max-w-7xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-600">© {new Date().getFullYear()} SheltOwn. All rights reserved.</p>
          <div className="text-sm text-gray-600 flex items-center gap-2">
            <span>Call/WhatsApp:</span>
            <a href="tel:+919999999999" className="font-semibold text-indigo-700 hover:underline">+91 99999 99999</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
