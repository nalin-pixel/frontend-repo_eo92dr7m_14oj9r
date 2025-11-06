import { Home, Phone, Mail, Instagram, Linkedin, Facebook } from "lucide-react";

const HeaderNav = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur bg-white/60 border-b border-black/5">
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

          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-700">
            <a href="#listings" className="hover:text-indigo-600">Properties</a>
            <a href="#about" className="hover:text-indigo-600">About</a>
            <a href="#services" className="hover:text-indigo-600">Services</a>
            <a href="#blog" className="hover:text-indigo-600">Blog</a>
            <a href="#contact" className="hover:text-indigo-600">Contact</a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="https://wa.me/919999999999"
              target="_blank"
              rel="noreferrer"
              className="hidden sm:inline-flex items-center gap-2 rounded-md bg-green-600 px-3 py-2 text-white text-sm font-semibold shadow hover:bg-green-700"
            >
              <Phone size={16} /> Enquire
            </a>
            <div className="hidden sm:flex items-center gap-3 text-gray-500">
              <a href="https://instagram.com" aria-label="Instagram" className="hover:text-indigo-600"><Instagram size={18} /></a>
              <a href="https://linkedin.com" aria-label="LinkedIn" className="hover:text-indigo-600"><Linkedin size={18} /></a>
              <a href="https://facebook.com" aria-label="Facebook" className="hover:text-indigo-600"><Facebook size={18} /></a>
            </div>
            <a
              href="tel:+919999999999"
              className="inline-flex md:hidden items-center gap-2 rounded-md bg-indigo-600 px-3 py-2 text-white text-sm font-semibold shadow hover:bg-indigo-700"
            >
              <Phone size={16} /> Call
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderNav;
