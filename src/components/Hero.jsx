import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <section id="home" className="relative h-[84vh] md:h-[92vh] w-full overflow-hidden">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/wwTRdG1D9CkNs368/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Subtle photo texture overlay instead of blur bg */}
      <img
        aria-hidden
        className="absolute inset-0 h-full w-full object-cover opacity-40 mix-blend-soft-light pointer-events-none"
        src="https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=2000&auto=format&fit=crop"
        alt="Luxury interior background"
      />

      {/* Content + neutral slate gradients (do not block interactions) */}
      <div className="relative z-10 h-full">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-slate-950/80 via-slate-900/30 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-slate-950/90 via-slate-900/40 to-transparent" />
        </div>

        <div className="mx-auto max-w-7xl px-6 h-full flex items-end md:items-center pb-20">
          <div className="text-white max-w-3xl">
            <span className="inline-flex items-center rounded-full bg-white/10 backdrop-blur px-3 py-1 text-[11px] uppercase tracking-widest ring-1 ring-white/20">
              Futuristic Realty Interface
            </span>
            <h1 className="mt-4 text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight">
              Discover Bold, Next‑Gen Homes in Delhi NCR
            </h1>
            <p className="mt-3 text-sm sm:text-lg text-white/90">
              Immerse in an interactive 3D experience. Curated luxury residences, builder floors, plots and farmhouses—guided by transparent, client‑first advisory.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a href="#listings" className="inline-flex justify-center items-center rounded-lg bg-white text-slate-900 px-5 py-3 font-semibold shadow-sm hover:bg-slate-100">
                Browse Listings
              </a>
              <a href="#contact" className="inline-flex justify-center items-center rounded-lg bg-gradient-to-r from-indigo-600 to-cyan-500 text-white px-5 py-3 font-semibold shadow-sm hover:from-indigo-500 hover:to-cyan-400">
                Book a Free Consultation
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
