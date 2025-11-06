import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <section id="home" className="relative h-[80vh] md:h-[88vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/1VHYoewWfi45VYZ5/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 h-full">
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-white pointer-events-none" />
        <div className="mx-auto max-w-7xl px-6 h-full flex items-end pb-16">
          <div className="text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.3)]">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
              Luxury Homes in Delhi NCR
            </h1>
            <p className="mt-3 max-w-2xl text-sm sm:text-base md:text-lg text-white/90">
              Discover handpicked residences, builder floors, plots and farmhouses. Expert guidance, transparent deals, and on-site visits on your schedule.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#listings" className="inline-flex items-center rounded-md bg-white/95 text-gray-900 px-5 py-2.5 font-semibold shadow hover:bg-white">
                Browse Listings
              </a>
              <a href="#contact" className="inline-flex items-center rounded-md bg-indigo-600 text-white px-5 py-2.5 font-semibold shadow hover:bg-indigo-700">
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
