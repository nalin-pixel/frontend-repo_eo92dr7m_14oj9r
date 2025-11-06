import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <section id="home" className="relative h-[84vh] md:h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/1VHYoewWfi45VYZ5/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 h-full">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-white pointer-events-none" />
        <div className="mx-auto max-w-7xl px-6 h-full flex items-end md:items-center pb-16">
          <div className="text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.4)] max-w-3xl">
            <p className="inline-flex items-center rounded-full bg-white/15 px-3 py-1 text-xs uppercase tracking-wider ring-1 ring-white/30">Delhi NCR Realty Experts</p>
            <h1 className="mt-3 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight">
              Luxury Homes Curated For You
            </h1>
            <p className="mt-3 text-sm sm:text-base md:text-lg text-white/90">
              Find exceptional residences, builder floors, plots and farmhouses across Gurgaon, Noida and South Delhi with transparent, client-first advisory.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a href="#listings" className="inline-flex justify-center items-center rounded-md bg-white/95 text-gray-900 px-5 py-3 font-semibold shadow hover:bg-white">
                Browse Listings
              </a>
              <a href="#contact" className="inline-flex justify-center items-center rounded-md bg-indigo-600 text-white px-5 py-3 font-semibold shadow hover:bg-indigo-700">
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
