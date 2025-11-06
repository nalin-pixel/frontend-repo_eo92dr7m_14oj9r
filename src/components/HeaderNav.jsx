import { useState, useEffect } from "react";
import { Home, Phone, Menu, X, Instagram, Linkedin, Facebook } from "lucide-react";

const HeaderNav = () => {
  const [open, setOpen] = useState(false);
  const [elevated, setElevated] = useState(false);

  useEffect(() => {
    const onScroll = () => setElevated(window.scrollY > 8);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const linkClass = "text-sm font-medium text-gray-700 hover:text-indigo-600 transition";

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 ${elevated ? 'bg-white/80 shadow-sm' : 'bg-white/50'} backdrop-blur border-b border-black/5`}> 
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-indigo-600 to-blue-500 text-white grid place-items-center shadow">
              <Home size={18} />
            </div>
            <div>
              <p className="text-xl font-extrabold leading-none tracking-tight text-gray-900">SheltOwn</p>
              <p className="text-[10px] uppercase tracking-widest text-gray-500">Delhi NCR Realty</p>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-6">
            <a href="#listings" className={linkClass}>Properties</a>
            <a href="#about" className={linkClass}>About</a>
            <a href="#services" className={linkClass}>Services</a>
            <a href="#blog" className={linkClass}>Insights</a>
            <a href="#contact" className={linkClass}>Contact</a>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://wa.me/919999999999"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-green-600 px-3 py-2 text-white text-sm font-semibold shadow hover:bg-green-700"
            >
              <Phone size={16} /> Enquire
            </a>
            <div className="flex items-center gap-3 text-gray-500">
              <a href="https://instagram.com" aria-label="Instagram" className="hover:text-indigo-600"><Instagram size={18} /></a>
              <a href="https://linkedin.com" aria-label="LinkedIn" className="hover:text-indigo-600"><Linkedin size={18} /></a>
              <a href="https://facebook.com" aria-label="Facebook" className="hover:text-indigo-600"><Facebook size={18} /></a>
            </div>
          </div>

          <button className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100" aria-label="Toggle menu" onClick={() => setOpen(v=>!v)}>
            {open ? <X size={22}/> : <Menu size={22}/>}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <div className="mx-auto max-w-7xl px-4 py-4 flex flex-col gap-3">
            <a onClick={()=>setOpen(false)} href="#listings" className={linkClass}>Properties</a>
            <a onClick={()=>setOpen(false)} href="#about" className={linkClass}>About</a>
            <a onClick={()=>setOpen(false)} href="#services" className={linkClass}>Services</a>
            <a onClick={()=>setOpen(false)} href="#blog" className={linkClass}>Insights</a>
            <a onClick={()=>setOpen(false)} href="#contact" className={linkClass}>Contact</a>
            <a
              href="tel:+919999999999"
              className="mt-2 inline-flex items-center gap-2 rounded-md bg-indigo-600 px-3 py-2 text-white text-sm font-semibold shadow hover:bg-indigo-700"
            >
              <Phone size={16} /> Call Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default HeaderNav;
