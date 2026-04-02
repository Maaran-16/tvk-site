"use client";

import React from "react";

export default function WhistleSection() {
  return (
    <section id="whistle" className="relative py-24 md:py-32 overflow-hidden bg-white">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-secondary/5 -skew-x-12 transform translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Left Side: Emblem Image with Premium Styling */}
          <div className="flex-1 relative group w-full max-w-[500px] lg:max-w-none">
            {/* Outer Glow Effect */}
            <div className="absolute -inset-4 bg-secondary/20 rounded-[2.5rem] blur-2xl group-hover:bg-secondary/40 transition-all duration-700 opacity-60" />
            
            {/* Image Container */}
            <div className="relative rounded-[2rem] overflow-hidden border-8 border-white shadow-2xl transform hover:scale-[1.02] transition-transform duration-500 ease-out z-10">
              <img 
                src="/images/whistle-emblem.jpg" 
                alt="TVK Whistle Emblem" 
                className="w-full h-auto object-cover"
              />
              
              {/* Premium Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 pointer-events-none" />
              
              {/* Badge Overlay */}
              <div className="absolute bottom-6 left-6 bg-secondary text-secondary-foreground font-black px-6 py-2 rounded-full text-sm shadow-xl tracking-wider uppercase">
                Official Symbol
              </div>
            </div>

            {/* Decorative Dots/Shapes */}
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/10 rounded-full blur-xl animate-pulse" />
            <div className="absolute -bottom-10 -right-10 w-40 h-40 border-2 border-secondary/20 rounded-full opacity-50" />
          </div>

          {/* Right Side: Powerful Content */}
          <div className="flex-1 text-center lg:text-left space-y-8">
            <div className="inline-flex items-center gap-2 bg-primary/5 border border-primary/20 rounded-full px-4 py-1.5 self-center lg:self-start">
              <span className="w-2 h-2 rounded-full bg-primary animate-ping" />
              <span className="text-primary font-bold text-xs tracking-widest uppercase">எம் சின்னம் - விஸில்</span>
            </div>

            <div className="space-y-4">
              <h2 className="text-4xl md:text-6xl font-heading font-black text-slate-900 leading-tight">
                மாற்றத்திற்கான ஒரு <span className="text-primary italic">குரல்</span>
                <br />
                <span className="text-secondary drop-shadow-sm">விஸில் சின்னம்</span>
              </h2>
              <p className="text-xl md:text-2xl font-bold text-slate-600 tracking-wide uppercase">
                The Sound of Awakening and Transparency
              </p>
            </div>

            <div className="space-y-6">
              <p className="text-lg md:text-xl text-slate-700 leading-relaxed font-medium">
                விஸில் சின்னம் ஊழலுக்கு எதிரான ஒரு எச்சரிக்கை மணி. இது தமிழகத்தின் விடிவிற்கான முதல் குரல். வலிமையான தலைமை, வெளிப்படையான நிர்வாகம், மக்களின் உரிமைக்கான போர்.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:border-secondary transition-colors duration-300">
                  <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary text-2xl font-bold">
                    📢
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">விழிப்புணர்வு</h4>
                    <p className="text-sm text-slate-500">அரசியல் விழிப்புணர்வு ஊட்டுதல்</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:border-primary transition-colors duration-300">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary text-2xl font-bold">
                    🛡️
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">பாதுகாப்பு</h4>
                    <p className="text-sm text-slate-500">மக்களின் உரிமைகளுக்கு பாதுகாப்பு</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <button className="group relative bg-slate-900 text-white font-black px-10 py-5 rounded-full overflow-hidden transition-all duration-300 hover:pr-14 hover:shadow-2xl">
                <span className="relative z-10 flex flex-col items-start leading-none gap-1">
                  <span>இணைந்து பணியாற்றுவோம்</span>
                  <span className="text-[10px] opacity-60 tracking-[0.2em] uppercase">Join the Movement</span>
                </span>
                <div className="absolute right-0 top-0 h-full w-0 bg-secondary group-hover:w-full transition-all duration-500 -z-0" />
                <svg className="absolute right-4 top-1/2 -translate-y-1/2 w-6 h-6 opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-4 group-hover:translate-x-0" fill="none" stroke="black" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
