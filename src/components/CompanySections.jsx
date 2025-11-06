import { Building2, ShieldCheck, Sparkles, Handshake, MapPin, Phone, Mail, Star } from "lucide-react";

const SectionTitle = ({ eyebrow, title, subtitle }) => (
  <div>
    {eyebrow && (
      <span className="inline-flex items-center rounded-full bg-white/10 text-white px-3 py-1 text-xs font-semibold ring-1 ring-white/20">
        {eyebrow}
      </span>
    )}
    <h2 className="mt-2 text-3xl md:text-4xl font-extrabold tracking-tight text-white">{title}</h2>
    {subtitle && <p className="mt-2 text-slate-300">{subtitle}</p>}
  </div>
);

const About = () => (
  <section id="about" className="py-20 bg-gradient-to-b from-slate-950/60 to-slate-900">
    <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-10 items-center">
      <div>
        <SectionTitle eyebrow="Who we are" title="About SheltOwn" subtitle="Delhi NCR-focused realty advisory delivering curated homes and seamless experiences." />
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[{
            icon: <ShieldCheck className="text-cyan-400" size={20} />, title: 'Trusted & Transparent', desc: 'Verified listings, fair pricing and honest advisory.'
          },{
            icon: <Sparkles className="text-cyan-400" size={20} />, title: 'Curated Inventory', desc: 'Handpicked homes, builder floors, plots & farmhouses.'
          },{
            icon: <Handshake className="text-cyan-400" size={20} />, title: 'End-to-End Support', desc: 'From site visits to negotiations and paperwork.'
          },{
            icon: <Building2 className="text-cyan-400" size={20} />, title: 'Local Expertise', desc: 'Decade of experience in Delhi NCR sub-markets.'
          }].map((i) => (
            <div key={i.title} className="rounded-xl border border-white/10 p-5 bg-slate-900/60 shadow-sm hover:shadow-md transition">
              <div className="flex items-start gap-3">
                {i.icon}
                <div>
                  <p className="font-semibold text-white">{i.title}</p>
                  <p className="text-sm text-slate-300">{i.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="rounded-2xl overflow-hidden shadow bg-gradient-to-br from-indigo-600/20 to-cyan-500/20 border border-white/10 p-6">
        <img src="https://images.unsplash.com/photo-1650327980007-e110ebe90250?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxEZWxoaSUyME5DUiUyMHNreWxpbmV8ZW58MHwwfHx8MTc2MjQzNzQ1Nnww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Delhi NCR skyline" className="rounded-lg object-cover w-full h-64" />
        <div className="mt-4 grid grid-cols-3 text-center">
          <div>
            <p className="text-2xl font-extrabold text-cyan-300">10+</p>
            <p className="text-xs uppercase tracking-wider text-slate-400">Years</p>
          </div>
          <div>
            <p className="text-2xl font-extrabold text-cyan-300">500+</p>
            <p className="text-xs uppercase tracking-wider text-slate-400">Deals</p>
          </div>
          <div>
            <p className="text-2xl font-extrabold text-cyan-300">95%</p>
            <p className="text-xs uppercase tracking-wider text-slate-400">Client Happiness</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Services = () => {
  const images = [
    'https://images.unsplash.com/photo-1505692794403-34d4982f88aa?q=80&w=1600&auto=format&fit=crop', // Buy
    'https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=1600&auto=format&fit=crop', // Sell
    'https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1600&auto=format&fit=crop', // Rent
    'https://images.unsplash.com/photo-1473186578172-c141e6798cf4?q=80&w=1600&auto=format&fit=crop', // REITs
    'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=1600&auto=format&fit=crop', // Consulting
    'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1600&auto=format&fit=crop', // Site Visits
  ];
  const services = [
    { title: 'Buy', desc: 'Find the right home at the right price with our curated inventory.' },
    { title: 'Sell', desc: 'Professional marketing to attract qualified buyers and maximize value.' },
    { title: 'Rent', desc: 'Trusted tenants and seamless rental management.' },
    { title: 'Invest in REITs', desc: 'Diversify with income-generating real estate instruments.' },
    { title: 'Property Consulting', desc: 'Market insights, legal guidance and negotiation strategy.' },
    { title: 'Site Visits', desc: 'Flexible scheduling and on-ground assistance across NCR.' },
  ];
  return (
    <section id="services" className="py-20 bg-slate-900">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle eyebrow="What we do" title="Services" subtitle="Buy, sell, rent or invest with confidence. Tailored to your goals." />
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((s, idx) => (
            <div key={s.title} className="rounded-2xl border border-white/10 bg-slate-900/60 shadow-sm hover:shadow-lg hover:border-white/20 transition overflow-hidden">
              <div className="h-36 w-full overflow-hidden">
                <img src={images[idx]} alt={`${s.title} service`} className="h-full w-full object-cover" />
              </div>
              <div className="p-6">
                <p className="text-lg font-semibold text-white">{s.title}</p>
                <p className="mt-1 text-slate-300 text-sm">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Blog = () => (
  <section id="blog" className="py-20 bg-slate-900">
    <div className="mx-auto max-w-7xl px-6">
      <SectionTitle eyebrow="Insights" title="Market Insights" subtitle="Tips and updates for buyers, sellers and investors in NCR." />
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { title: 'Gurgaon Micro-Markets to Watch in 2025', img: 'https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=1600&auto=format&fit=crop' },
          { title: 'Is Now a Good Time to Buy in Noida?', img: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1600&auto=format&fit=crop' },
          { title: 'Builder Floors vs Apartments: What Suits You?', img: 'https://images.unsplash.com/photo-1536376072261-38c75010e6c9?q=80&w=1600&auto=format&fit=crop' },
        ].map((b) => (
          <a key={b.title} href="#" className="group rounded-2xl overflow-hidden border bg-slate-900/60 border-white/10 hover:border-white/20 shadow-sm hover:shadow-lg transition">
            <div className="h-44 w-full overflow-hidden">
              <img src={b.img} alt={b.title} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-4">
              <p className="font-semibold text-white group-hover:text-cyan-300">{b.title}</p>
              <p className="mt-1 text-xs text-slate-400">Read more →</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  </section>
);

const Contact = () => (
  <section id="contact" className="py-20 bg-gradient-to-b from-slate-900 to-slate-950">
    <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-10">
      <div>
        <SectionTitle eyebrow="Get in touch" title="Contact Us" subtitle="Visit our office or schedule a free consultation." />
        <div className="mt-6 space-y-3 text-slate-200">
          <p className="flex items-center gap-2"><MapPin size={18} className="text-cyan-400" /> SheltOwn, Delhi NCR, India</p>
          <p className="flex items-center gap-2"><Phone size={18} className="text-cyan-400" /> +91 99999 99999</p>
          <p className="flex items-center gap-2"><Mail size={18} className="text-cyan-400" /> hello@sheltown.in</p>
        </div>
        <div className="mt-6 flex gap-3">
          <a href="https://wa.me/919999999999" target="_blank" rel="noreferrer" className="inline-flex items-center rounded-md bg-gradient-to-r from-emerald-500 to-cyan-500 text-white px-4 py-2 font-semibold shadow hover:from-emerald-400 hover:to-cyan-400">WhatsApp</a>
          <a href="tel:+919999999999" className="inline-flex items-center rounded-md bg-gradient-to-r from-indigo-600 to-cyan-500 text-white px-4 py-2 font-semibold shadow hover:from-indigo-500 hover:to-cyan-400">Call Now</a>
        </div>
      </div>
      <form onSubmit={(e)=>e.preventDefault()} className="rounded-2xl border border-white/10 bg-slate-900/60 p-6 shadow-sm">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input required placeholder="Full Name" className="rounded-md border border-white/10 bg-slate-900/60 text-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500" />
          <input required type="tel" placeholder="Phone" className="rounded-md border border-white/10 bg-slate-900/60 text-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500" />
          <input required type="email" placeholder="Email" className="sm:col-span-2 rounded-md border border-white/10 bg-slate-900/60 text-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500" />
          <select className="rounded-md border border-white/10 bg-slate-900/60 text-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500">
            <option>Buying</option>
            <option>Selling</option>
            <option>Renting</option>
            <option>Investment</option>
          </select>
          <input placeholder="Preferred Location (e.g. Gurgaon)" className="rounded-md border border-white/10 bg-slate-900/60 text-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500" />
          <textarea rows={4} placeholder="Message" className="sm:col-span-2 rounded-md border border-white/10 bg-slate-900/60 text-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500" />
        </div>
        <button className="mt-4 inline-flex items-center rounded-md bg-gradient-to-r from-indigo-600 to-cyan-500 text-white px-5 py-2.5 font-semibold shadow hover:from-indigo-500 hover:to-cyan-400">Submit Enquiry</button>
        <p className="mt-2 text-xs text-slate-400">By submitting, you consent to being contacted for property assistance.</p>
      </form>
    </div>
  </section>
);

const Testimonials = () => (
  <section className="py-20 bg-slate-900">
    <div className="mx-auto max-w-7xl px-6">
      <SectionTitle eyebrow="Social proof" title="What Clients Say" />
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        {[{
          text: 'Smooth buying experience and genuine advice.',
          img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop',
          name: 'Aarav K.'
        },{
          text: 'Great inventory and transparent process.',
          img: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=800&auto=format&fit=crop',
          name: 'Nisha S.'
        },{
          text: 'Professional team with deep area knowledge.',
          img: 'https://images.unsplash.com/photo-1541534401786-2077eed87a62?q=80&w=800&auto=format&fit=crop',
          name: 'Rohit M.'
        }].map((t, i) => (
          <div key={i} className="rounded-2xl border border-white/10 bg-slate-900/60 p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-3">
              <img src={t.img} alt={`${t.name} avatar`} className="h-10 w-10 rounded-full object-cover" />
              <div>
                <p className="text-sm font-semibold text-white">{t.name}</p>
                <div className="flex items-center gap-1 text-amber-300">
                  {[...Array(5)].map((_, idx) => <Star key={idx} size={14} />)}
                </div>
              </div>
            </div>
            <p className="text-slate-200">“{t.text}”</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const CompanySections = () => (
  <>
    <About />
    <Services />
    <Testimonials />
    <Blog />
    <Contact />
  </>
);

export default CompanySections;
