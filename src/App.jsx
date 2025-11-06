import { useEffect } from 'react'
import HeaderNav from './components/HeaderNav'
import Hero from './components/Hero'
import PropertyFilters from './components/PropertyFilters'
import CompanySections from './components/CompanySections'

function App() {
  useEffect(() => {
    const title = 'SheltOwn — Futuristic Luxury Real Estate in Delhi NCR';
    const description = 'Explore a futuristic catalog of luxury homes, builder floors, plots, and farmhouses across Delhi NCR. Interactive 3D hero, glass UI, and curated listings.';
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
    <div className="font-inter min-h-screen text-slate-100 bg-slate-950">
      {/* Global background image overlay: skyscraper height texture (fixed) */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <img
          aria-hidden
          className="h-full w-full object-cover opacity-25 mix-blend-soft-light"
          src="https://images.unsplash.com/photo-1496302662116-85c35a92a62a?q=80&w=2200&auto=format&fit=crop"
          alt="Dark skyscraper facade texture"
          style={{ filter: 'grayscale(25%)' }}
        />
      </div>

      {/* Global background accents */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute inset-0 [background-image:radial-gradient(1200px_600px_at_50%_-10%,rgba(99,102,241,0.35),transparent),radial-gradient(800px_400px_at_80%_20%,rgba(56,189,248,0.25),transparent)]" />
        <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,transparent_0,transparent_95%,rgba(255,255,255,0.15)_95%),linear-gradient(to_bottom,transparent_0,transparent_95%,rgba(255,255,255,0.15)_95%)] bg-[length:22px_22px]" />
      </div>

      <HeaderNav />
      <main>
        <Hero />
        <PropertyFilters />
        <CompanySections />
      </main>
      <footer className="border-t border-white/10 py-10 bg-slate-950/60 backdrop-blur supports-[backdrop-filter]:backdrop-blur">
        <div className="mx-auto max-w-7xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-400">© {new Date().getFullYear()} SheltOwn. All rights reserved.</p>
          <div className="text-sm text-slate-300 flex items-center gap-2">
            <span>Call/WhatsApp:</span>
            <a href="tel:+919999999999" className="font-semibold text-cyan-300 hover:text-cyan-200">+91 99999 99999</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
