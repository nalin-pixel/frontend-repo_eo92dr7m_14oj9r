import { useEffect } from 'react'
import HeaderNav from './components/HeaderNav'
import Hero from './components/Hero'
import PropertyFilters from './components/PropertyFilters'
import { About, Services, Blog, Contact, Testimonials } from './components/CompanySections'

function App() {
  useEffect(() => {
    document.title = 'SheltOwn | Luxury Real Estate in Delhi NCR';
    const meta = document.querySelector('meta[name="description"]');
    const text = 'SheltOwn is a Delhi NCR focused real estate company offering premium homes, plots, farmhouses and builder floors with transparent, client-first advisory.';
    if (meta) {
      meta.setAttribute('content', text);
    } else {
      const m = document.createElement('meta');
      m.name = 'description';
      m.content = text;
      document.head.appendChild(m);
    }
  }, [])

  return (
    <div className="font-inter text-gray-900">
      <HeaderNav />
      <main>
        <Hero />
        <PropertyFilters />
        <About />
        <Services />
        <Testimonials />
        <Blog />
        <Contact />
      </main>
      <footer className="border-t border-gray-200 py-8">
        <div className="mx-auto max-w-7xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-600">© {new Date().getFullYear()} SheltOwn. All rights reserved.</p>
          <p className="text-sm text-gray-600">Call or WhatsApp: +91 99999 99999</p>
        </div>
      </footer>
    </div>
  )
}

export default App