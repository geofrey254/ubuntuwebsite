import React from "react";
import { ArrowRight, Play, Zap } from "lucide-react";

function FinalCTABanner() {
  return (
    <section className="w-full bg-amber-600 py-20 px-4 relative overflow-hidden">
      {/* African Print Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <pattern
              id="africanPattern"
              width="80"
              height="80"
              patternUnits="userSpaceOnUse"
            >
              {/* Zigzag Line */}
              <path
                d="M0 40 L20 20 L40 40 L60 20 L80 40"
                stroke="white"
                strokeWidth="4"
                fill="none"
              />
              {/* Triangle Motifs */}
              <polygon points="10,70 20,50 30,70" fill="white" />
              <polygon points="50,70 60,50 70,70" fill="white" />
              {/* Circle Motifs */}
              <circle cx="40" cy="20" r="6" fill="white" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#africanPattern)" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        {/* Icon */}
        <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-8 backdrop-blur-sm border border-white/20">
          <Zap className="w-10 h-10 text-white" />
        </div>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
          Ready to{" "}
          <span className="text-white relative">
            preserve
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-white rounded-full opacity-60"></div>
          </span>
          <br />
          endangered languages?
        </h2>

        <p className="text-lg text-white/90 max-w-3xl mx-auto leading-relaxed">
          Join UbuntuVoices in building a digital legacy for indigenous
          communities. Together, we can keep cultural identity alive for
          generations.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button className="group bg-white text-amber-600 font-bold py-5 px-10 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-2xl flex items-center text-lg min-w-[220px] justify-center">
            <span className="mr-3">Support Preservation</span>
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
          </button>

          <button className="group bg-white/10 hover:bg-white/20 text-white font-bold py-5 px-10 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-xl flex items-center text-lg min-w-[220px] justify-center border-2 border-white/30 backdrop-blur-sm">
            <Play className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform duration-300" />
            <span>See How It Works</span>
          </button>
        </div>
      </div>
    </section>
  );
}

export default FinalCTABanner;
