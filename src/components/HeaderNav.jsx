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

  const linkClass = "text-sm font-medium text-slate-200/90 hover:text-white transition";

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 ${elevated ? 'bg-slate-900/75 shadow-[0_2px_12px_rgba(0,0,0,0.25)]' : 'bg-slate-900/40'} backdrop-blur border-b border-white/10`}> 
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-indigo-600 to-cyan-500 text-white grid place-items-center shadow">
              <Home size={18} />
            </div>
            <div>
              <p className="text-xl font-extrabold leading-none tracking-tight text-white">SheltOwn</p>
              <p className="text-[10px] uppercase tracking-widest text-slate-400">Delhi NCR Realty</p>
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
              className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-emerald-500 to-cyan-500 px-3 py-2 text-white text-sm font-semibold shadow hover:from-emerald-400 hover:to-cyan-400"
            >
              <Phone size={16} /> Enquire
            </a>
            <div className="flex items-center gap-3 text-slate-400">
              <a href="https://instagram.com" aria-label="Instagram" className="hover:text-white"><Instagram size={18} /></a>
              <a href="https://linkedin.com" aria-label="LinkedIn" className="hover:text-white"><Linkedin size={18} /></a>
              <a href="https://facebook.com" aria-label="Facebook" className="hover:text-white"><Facebook size={18} /></a>
            </div>
          </div>

          <button className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-white/90 hover:bg-white/10" aria-label="Toggle menu" onClick={() => setOpen(v=>!v)}>
            {open ? <X size={22}/> : <Menu size={22}/>}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-slate-900/80 backdrop-blur">
          <div className="mx-auto max-w-7xl px-4 py-4 flex flex-col gap-3">
            <a onClick={()=>setOpen(false)} href="#listings" className={linkClass}>Properties</a>
            <a onClick={()=>setOpen(false)} href="#about" className={linkClass}>About</a>
            <a onClick={()=>setOpen(false)} href="#services" className={linkClass}>Services</a>
            <a onClick={()=>setOpen(false)} href="#blog" className={linkClass}>Insights</a>
            <a onClick={()=>setOpen(false)} href="#contact" className={linkClass}>Contact</a>
            <a
              href="tel:+919999999999"
              className="mt-2 inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-indigo-600 to-cyan-500 px-3 py-2 text-white text-sm font-semibold shadow hover:from-indigo-500 hover:to-cyan-400"
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
