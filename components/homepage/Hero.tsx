import React from "react";
import { Mic, Book, Music, Sparkles, Award, Globe } from "lucide-react";

function Hero() {
  return (
    <section className="w-full min-h-screen bg-gradient-to-br from-amber-50 via-white to-amber-100 flex items-center justify-center pt-16 md:pt-24 md:pb-20 px-12 relative overflow-hidden">
      {/* Animated background patterns */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Circular patterns */}
        <div className="absolute top-20 left-20 w-96 h-96 border-2 border-amber-200/30 rounded-full animate-pulse"></div>
        <div
          className="absolute bottom-20 right-20 w-80 h-80 border-2 border-amber-300/20 rounded-full animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/4 w-64 h-64 border border-amber-200/40 rounded-full"
          style={{ animationDelay: "2s" }}
        ></div>

        {/* Floating elements */}
        <div className="absolute top-40 right-1/4 w-3 h-3 bg-amber-400 rounded-full opacity-60"></div>
        <div className="absolute bottom-40 left-1/3 w-2 h-2 bg-amber-500 rounded-full opacity-40"></div>
        <div className="absolute top-1/3 right-1/3 w-4 h-4 bg-amber-300 rounded-full opacity-50"></div>
      </div>

      <div className="max-w-7xl w-full relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 px-6 md:px-0">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 text-white px-5 py-2 rounded-full shadow-lg shadow-amber-500/30">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-semibold tracking-wide">
                Cultural Heritage Platform
              </span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-5xl font-black leading-tight">
                <span className="text-amber-900">Your Voice,</span>
                <br />
                <span className="text-amber-600">Your Story,</span>
                <br />
                <span className="bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 bg-clip-text text-transparent">
                  Your Legacy
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-700 leading-relaxed max-w-xl">
                Preserve indigenous knowledge through storytelling. Record
                traditional songs, fables, and oral histories—earn CHT tokens
                while keeping culture alive.
              </p>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 py-4">
              <div className="space-y-1">
                <div className="text-4xl font-bold text-amber-600">5K+</div>
                <div className="text-sm text-gray-600 font-medium">
                  Stories Recorded
                </div>
              </div>
              <div className="space-y-1">
                <div className="text-4xl font-bold text-amber-600">50+</div>
                <div className="text-sm text-gray-600 font-medium">
                  Languages
                </div>
              </div>
              <div className="space-y-1">
                <div className="text-4xl font-bold text-amber-600">∞</div>
                <div className="text-sm text-gray-600 font-medium">
                  Cultural Impact
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="/record"
                className="group relative bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-bold py-5 px-10 rounded-2xl transition-all duration-300 shadow-xl shadow-amber-500/30 hover:shadow-2xl hover:shadow-amber-600/40 hover:-translate-y-1"
              >
                <span className="flex items-center justify-center gap-3">
                  <Mic className="w-6 h-6" />
                  Begin Your Journey
                </span>
              </a>

              <a
                href="#explore"
                className="group bg-white border-2 border-amber-300 hover:border-amber-500 text-amber-900 font-bold py-5 px-10 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
              >
                <span className="flex items-center justify-center gap-3">
                  <Globe className="w-5 h-5 text-amber-600" />
                  Explore Stories
                </span>
              </a>
            </div>
          </div>

          {/* Right Side - Creative Card Stack */}
          <div className="relative h-[600px] hidden md:block">
            {/* Card 1 - Background */}
            <div className="absolute top-12 left-8 right-0 bg-gradient-to-br from-amber-100 to-amber-200 rounded-3xl p-8 shadow-2xl transform rotate-6 border border-amber-300/50">
              <div className="space-y-4 opacity-40">
                <div className="h-4 bg-amber-300/50 rounded w-3/4"></div>
                <div className="h-4 bg-amber-300/50 rounded w-1/2"></div>
              </div>
            </div>

            {/* Card 2 - Middle */}
            <div className="absolute top-6 left-4 right-4 bg-white rounded-3xl p-8 shadow-2xl transform rotate-3 border-2 border-amber-200">
              <div className="space-y-4 opacity-50">
                <Music className="w-10 h-10 text-amber-500" />
                <div className="h-3 bg-gray-200 rounded w-2/3"></div>
                <div className="h-3 bg-gray-200 rounded w-1/2"></div>
              </div>
            </div>

            {/* Card 3 - Front (Main Card) */}
            <div className="absolute top-0 left-0 right-8 bg-gradient-to-br from-white to-amber-50 rounded-3xl p-10 shadow-2xl border-2 border-amber-300 hover:rotate-0 transition-transform duration-500">
              <div className="space-y-6">
                {/* Icon Group */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-amber-500 p-4 rounded-2xl shadow-lg">
                    <Book className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-amber-900">
                      Record & Share
                    </h3>
                    <p className="text-sm text-gray-600">Three simple steps</p>
                  </div>
                </div>

                {/* Steps */}
                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-4 bg-amber-50 rounded-xl border border-amber-200">
                    <div className="flex-shrink-0 w-8 h-8 bg-amber-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                      1
                    </div>
                    <div>
                      <div className="font-semibold text-amber-900 mb-1">
                        Choose Your Story
                      </div>
                      <div className="text-sm text-gray-600">
                        Select from songs, fables, or traditions
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-amber-50 rounded-xl border border-amber-200">
                    <div className="flex-shrink-0 w-8 h-8 bg-amber-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                      2
                    </div>
                    <div>
                      <div className="font-semibold text-amber-900 mb-1">
                        Record Your Voice
                      </div>
                      <div className="text-sm text-gray-600">
                        High-quality audio capture
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-amber-100 to-amber-50 rounded-xl border-2 border-amber-400">
                    <div className="flex-shrink-0 w-8 h-8 bg-amber-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                      3
                    </div>
                    <div>
                      <div className="font-semibold text-amber-900 mb-1 flex items-center gap-2">
                        Earn CHT Tokens
                        <Sparkles className="w-4 h-4 text-amber-600" />
                      </div>
                      <div className="text-sm text-gray-600">
                        Get rewarded instantly
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -top-4 -right-4 bg-amber-600 rounded-full p-4 shadow-2xl shadow-amber-500/50 animate-pulse">
              <Award className="w-8 h-8 text-white" />
            </div>

            {/* Bottom Accent */}
            <div className="absolute -bottom-4 left-12 bg-white rounded-2xl p-4 shadow-xl border border-amber-200 flex items-center gap-3">
              <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-sm font-bold text-amber-900">
                  Active Now
                </div>
                <div className="text-xs text-gray-600">328 storytellers</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
