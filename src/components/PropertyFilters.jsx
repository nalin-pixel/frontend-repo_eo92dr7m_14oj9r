import { useMemo, useState } from 'react';
import { MapPin, IndianRupee, Home, Filter } from 'lucide-react';

const mockProperties = [
  {
    id: 'p1',
    title: '3 BHK Luxury Apartment - Gurgaon',
    type: 'Residential',
    price: 24000000,
    location: 'Gurgaon',
    features: ['Pool', 'Gym', 'Park Facing'],
    img: 'https://images.unsplash.com/photo-1502005229762-cf1b2da7c3f5?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 'p2',
    title: 'Premium Builder Floor - South Delhi',
    type: 'Builder Floor',
    price: 32000000,
    location: 'South Delhi',
    features: ['Lift', 'Modular Kitchen'],
    img: 'https://images.unsplash.com/photo-1451976426598-a7593bd6d0b2?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 'p3',
    title: 'Farmhouse Retreat - Chattarpur',
    type: 'Farmhouse',
    price: 65000000,
    location: 'Chattarpur',
    features: ['Landscaped Garden', 'Pool'],
    img: 'https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 'p4',
    title: 'Residential Plot - Noida Sector 150',
    type: 'Plot',
    price: 12000000,
    location: 'Noida',
    features: ['Corner', 'Park Facing'],
    img: 'https://images.unsplash.com/photo-1460317442991-0ec209397118?q=80&w=1600&auto=format&fit=crop',
  },
];

const currency = (n) => new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(n);

const Badge = ({ children }) => (
  <span className="inline-flex items-center rounded-full bg-slate-800/60 text-slate-200 text-xs px-2.5 py-1 ring-1 ring-white/10">{children}</span>
);

const PropertyCard = ({ p }) => (
  <a href={`#property-${p.id}`} className="group rounded-2xl overflow-hidden bg-slate-900/60 border border-white/10 shadow-sm hover:shadow-xl hover:border-white/20 transition">
    <div className="relative h-56 w-full overflow-hidden">
      <img src={p.img} alt={p.title} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" />
      <div className="absolute top-3 left-3 rounded-full bg-slate-900/80 text-white px-3 py-1 text-xs font-semibold shadow ring-1 ring-white/10">{p.type}</div>
    </div>
    <div className="p-5">
      <h3 className="text-lg font-semibold text-white">{p.title}</h3>
      <p className="mt-1 text-cyan-300 font-extrabold flex items-center gap-1"><IndianRupee size={16}/> {currency(p.price).replace('₹','')}</p>
      <p className="mt-1 text-sm text-slate-300 flex items-center gap-1"><MapPin size={14}/> {p.location}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {p.features.map((f) => (
          <Badge key={f}>{f}</Badge>
        ))}
      </div>
      <div className="mt-5 flex items-center justify-between">
        <span className="text-xs text-slate-400">ID: {p.id.toUpperCase()}</span>
        <span className="inline-flex items-center gap-1 text-indigo-300 font-semibold text-sm">View details →</span>
      </div>
    </div>
  </a>
);

const PropertyFilters = () => {
  const [query, setQuery] = useState('');
  const [type, setType] = useState('');
  const [location, setLocation] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  const filtered = useMemo(() => {
    return mockProperties.filter((p) => {
      const matchesQuery = query
        ? p.title.toLowerCase().includes(query.toLowerCase()) || p.location.toLowerCase().includes(query.toLowerCase())
        : true;
      const matchesType = type ? p.type === type : true;
      const matchesLocation = location ? p.location === location : true;
      const matchesMin = minPrice ? p.price >= Number(minPrice) : true;
      const matchesMax = maxPrice ? p.price <= Number(maxPrice) : true;
      return matchesQuery && matchesType && matchesLocation && matchesMin && matchesMax;
    });
  }, [query, type, location, minPrice, maxPrice]);

  return (
    <section id="listings" className="py-20 bg-gradient-to-b from-slate-950 to-slate-950/60">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white flex items-center gap-2"><Home size={28}/> Featured Listings</h2>
            <p className="mt-2 text-slate-300">Browse properties across Delhi NCR and refine by your preferences.</p>
          </div>
          <a href="#contact" className="inline-flex items-center rounded-md bg-gradient-to-r from-indigo-600 to-cyan-500 text-white px-4 py-2 font-semibold shadow hover:from-indigo-500 hover:to-cyan-400">Contact for Site Visit</a>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-4">
          <div className="md:col-span-5 lg:col-span-4 flex gap-2">
            <div className="relative flex-1">
              <input value={query} onChange={(e)=>setQuery(e.target.value)} placeholder="Search by area or keyword" className="w-full rounded-md border border-white/10 bg-slate-900/60 text-white placeholder:text-slate-400 px-3 py-2 pl-10 focus:outline-none focus:ring-2 focus:ring-cyan-500" />
              <svg className="absolute left-3 top-2.5 h-5 w-5 text-slate-400" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M12.9 14.32a8 8 0 111.414-1.414l4.387 4.387a1 1 0 01-1.414 1.414l-4.387-4.387zM14 8a6 6 0 11-12 0 6 6 0 0112 0z" clipRule="evenodd"/></svg>
            </div>
            <button className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-slate-900/60 px-3 py-2 text-sm font-medium text-slate-200 hover:bg-slate-900"><Filter size={16}/> Filters</button>
          </div>
          <select value={type} onChange={(e)=>setType(e.target.value)} className="md:col-span-2 rounded-md border border-white/10 bg-slate-900/60 text-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500">
            <option value="">All Types</option>
            <option>Residential</option>
            <option>Plot</option>
            <option>Farmhouse</option>
            <option>Builder Floor</option>
          </select>
          <select value={location} onChange={(e)=>setLocation(e.target.value)} className="md:col-span-2 rounded-md border border-white/10 bg-slate-900/60 text-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500">
            <option value="">All Locations</option>
            <option>Gurgaon</option>
            <option>South Delhi</option>
            <option>Noida</option>
            <option>Chattarpur</option>
          </select>
          <div className="md:col-span-3 grid grid-cols-2 gap-2">
            <input type="number" min={0} value={minPrice} onChange={(e)=>setMinPrice(e.target.value)} placeholder="Min Price" className="rounded-md border border-white/10 bg-slate-900/60 text-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500" />
            <input type="number" min={0} value={maxPrice} onChange={(e)=>setMaxPrice(e.target.value)} placeholder="Max Price" className="rounded-md border border-white/10 bg-slate-900/60 text-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500" />
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p) => (
            <PropertyCard key={p.id} p={p} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PropertyFilters;
