import { useMemo, useState } from 'react';

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
    <section id="listings" className="py-16 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">Featured Listings</h2>
            <p className="mt-2 text-gray-600">Browse properties across Delhi NCR and refine by your preferences.</p>
          </div>
          <a href="#contact" className="inline-flex items-center rounded-md bg-indigo-600 text-white px-4 py-2 font-semibold shadow hover:bg-indigo-700">Contact for Site Visit</a>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <input value={query} onChange={(e)=>setQuery(e.target.value)} placeholder="Search by area or keyword" className="col-span-1 md:col-span-2 lg:col-span-1 rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-600" />
          <select value={type} onChange={(e)=>setType(e.target.value)} className="rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-600">
            <option value="">All Types</option>
            <option>Residential</option>
            <option>Plot</option>
            <option>Farmhouse</option>
            <option>Builder Floor</option>
          </select>
          <select value={location} onChange={(e)=>setLocation(e.target.value)} className="rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-600">
            <option value="">All Locations</option>
            <option>Gurgaon</option>
            <option>South Delhi</option>
            <option>Noida</option>
            <option>Chattarpur</option>
          </select>
          <div className="grid grid-cols-2 gap-2">
            <input type="number" min={0} value={minPrice} onChange={(e)=>setMinPrice(e.target.value)} placeholder="Min Price" className="rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-600" />
            <input type="number" min={0} value={maxPrice} onChange={(e)=>setMaxPrice(e.target.value)} placeholder="Max Price" className="rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-600" />
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p) => (
            <a key={p.id} href={`#property-${p.id}`} className="group rounded-xl overflow-hidden bg-white border border-gray-200 shadow-sm hover:shadow-md transition">
              <div className="relative h-52 w-full overflow-hidden">
                <img src={p.img} alt={p.title} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300" />
                <div className="absolute top-3 left-3 rounded bg-white/90 px-2 py-1 text-xs font-semibold">{p.type}</div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900">{p.title}</h3>
                <p className="mt-1 text-indigo-700 font-bold">{currency(p.price)}</p>
                <p className="mt-1 text-sm text-gray-600">{p.location}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.features.map((f) => (
                    <span key={f} className="rounded-full bg-gray-100 text-gray-700 text-xs px-2 py-1">{f}</span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PropertyFilters;
