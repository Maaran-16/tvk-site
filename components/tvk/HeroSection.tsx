"use client";

export default function HeroSection() {
  const scrollToPromises = () => {
    document.querySelector("#promises")?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToAbout = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #9F0A2B 0%, #E11D48 35%, #E11D48 55%, #CA8A04 80%, #FACC15 100%)",
      }}
    >
      {/* Decorative diagonal stripes */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `repeating-linear-gradient(
            -45deg,
            #FACC15 0px,
            #FACC15 2px,
            transparent 2px,
            transparent 28px
          )`,
        }}
      />

      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] rounded-full opacity-20"
        style={{ background: "radial-gradient(circle, #FACC15 0%, transparent 70%)" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-4 pt-40 pb-32 flex flex-col lg:flex-row items-center gap-10 lg:gap-14">
        {/* Left: Premium Circular Banner Image */}
        <div className="flex-1 relative order-2 lg:order-1 flex justify-center lg:justify-start">
          <div className="relative group">
            {/* Background Glow */}
            <div className="absolute inset-0 bg-secondary blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-700 -z-10" />
            
            {/* Image Circle Container */}
            <div className="relative w-[320px] h-[320px] md:w-[450px] md:h-[450px] lg:w-[550px] lg:h-[550px] rounded-full border-10 md:border-16 border-white/20 backdrop-blur-sm shadow-2xl overflow-hidden transform hover:scale-[1.02] transition-transform duration-700 ease-out">
              <div className="absolute inset-0 rounded-full border-4 md:border-8 border-secondary/60 z-10 pointer-events-none" />
              <img 
                src="/images/logo.png" 
                alt="TVK Leader and Flag" 
                className="w-full h-full object-cover scale-100 group-hover:scale-120 transition-transform duration-1000 ease-out"
              />
              {/* Premium filter/overlay */}
              <div className="absolute inset-0 bg-linear-to-tr from-primary/20 via-transparent to-secondary/10 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Right: Content */}
        <div className="flex-1 text-center lg:text-left order-1 lg:order-2">
          {/* Party badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/30 backdrop-blur-sm rounded-full px-5 py-2 mb-8 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
            <span className="text-white/90 text-sm font-medium tracking-wide">2026 தேர்தல் வாக்குறுதி • Election Manifesto</span>
          </div>

          {/* Party name */}
          <div className="mb-8">
            <h1 className="font-heading text-6xl md:text-8xl font-bold text-white drop-shadow-2xl mb-2 tracking-tighter"
              style={{ textShadow: "0 8px 32px rgba(0,0,0,0.5)" }}>
              TVK
            </h1>
            <p className="text-secondary text-xl md:text-3xl font-black tracking-[0.2em] mb-2 uppercase italic">
              தமிழக வெற்றி கழகம்
            </p>
            <p className="text-white/90 text-lg md:text-2xl font-medium tracking-widest">
              Tamizhaga Vetri Kazhagam
            </p>
          </div>

          {/* Slogan */}
          <div className="mb-12">
            <p className="text-white text-xl md:text-[26px] font-extrabold text-balance leading-tight drop-shadow-lg"
              style={{ textShadow: "0 4px 20px rgba(0,0,0,0.4)" }}>
              மக்களின் குரல் — மாற்றத்தின் சக்தி
            </p>
            <p className="text-secondary text-xl md:text-2xl font-bold mt-3 opacity-95">
              Voice of the People — Power of Change
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center lg:justify-start justify-center gap-6">
            <button
              onClick={scrollToPromises}
              className="group relative bg-secondary text-secondary-foreground font-black text-md px-10 py-5 rounded-full shadow-[0_15px_40px_rgba(250,204,21,0.4)] hover:shadow-[0_20px_50px_rgba(250,204,21,0.6)] hover:scale-105 transition-all duration-300"
            >
              வாக்குறுதி பார்க்க
              <span className="block text-sm font-bold opacity-80 mt-1">View Promises</span>
            </button>
            <button
              onClick={scrollToAbout}
              className="bg-white/10 border-2 border-white/30 text-white font-black text-md px-10 py-5 rounded-full backdrop-blur-md hover:bg-white/20 hover:border-white/50 transition-all duration-300"
            >
              எங்களைப் பற்றி
              <span className="block text-sm font-bold opacity-80 mt-1 tracking-wider uppercase">About Us</span>
            </button>
          </div>
        </div>

        {/* Scroll indicator - adjusted position */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40 animate-bounce">
          <span className="text-white text-[10px] tracking-[0.3em] uppercase font-bold">Scroll</span>
          <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
        
      </div>


      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 80L60 66.7C120 53.3 240 26.7 360 20C480 13.3 600 26.7 720 33.3C840 40 960 40 1080 36.7C1200 33.3 1320 26.7 1380 23.3L1440 20V80H1380C1320 80 1200 80 1080 80C960 80 840 80 720 80C600 80 480 80 360 80C240 80 120 80 60 80H0Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
}
