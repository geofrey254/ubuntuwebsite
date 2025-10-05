import React from "react";
import {
  Mic,
  Book,
  Music,
  Gift,
  Shield,
  CheckCircle,
  Coins,
} from "lucide-react";

function Hero() {
  return (
    <section className="w-full min-h-screen bg-white flex items-center justify-center pt-16 md:pt-32 md:pb-20 px-4 relative overflow-hidden">
      {/* Background decorative elements - Subtle African patterns */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-amber-500 blur-3xl"></div>
        <div className="absolute bottom-32 right-16 w-48 h-48 rounded-full bg-orange-400 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 rounded-full bg-amber-600 blur-2xl"></div>
        <div className="absolute top-40 right-1/4 w-40 h-40 rounded-full bg-orange-500 blur-3xl"></div>
      </div>

      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-3">
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(217, 119, 6, 0.02) 35px, rgba(217, 119, 6, 0.02) 70px)`,
          }}
        ></div>
      </div>

      <div className="max-w-6xl 2xl:max-w-7xl w-full overflow-hidden relative z-10">
        <div className="p-8 md:p-0 flex flex-col md:flex-row items-center gap-12">
          {/* Left Content */}
          <div className="flex-1 text-center md:text-left">
            <div className="mb-6">
              <div className="inline-flex items-center bg-amber-50 rounded-full px-4 py-2 mb-6 border-2 border-amber-200">
                <Shield className="w-4 h-4 mr-2 text-amber-700" />
                <span className="text-sm font-medium text-amber-900">
                  Preserve & Earn
                </span>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 text-stone-900">
                Share Your Stories,
                <span className="block bg-gradient-to-r from-amber-600 via-orange-600 to-amber-700 bg-clip-text text-transparent">
                  Preserve Culture
                </span>
                <span className="block text-amber-600">Earn Rewards</span>
              </h1>
            </div>

            <p className="text-xl md:text-2xl mb-8 text-stone-700 font-light leading-relaxed max-w-2xl">
              Record indigenous stories, songs, and fables to preserve your
              heritage. Get rewarded with CHT tokens for every contribution.
            </p>

            {/* Feature highlights */}
            <div className="flex flex-wrap gap-6 mb-10 justify-center md:justify-start">
              <div className="flex items-center bg-amber-50 rounded-lg px-4 py-3 border border-amber-200">
                <Mic className="w-5 h-5 mr-3 text-amber-600" />
                <span className="text-sm font-medium text-stone-800">
                  Easy recording
                </span>
              </div>
              <div className="flex items-center bg-amber-50 rounded-lg px-4 py-3 border border-amber-200">
                <Coins className="w-5 h-5 mr-3 text-amber-600" />
                <span className="text-sm font-medium text-stone-800">
                  Earn CHT tokens
                </span>
              </div>
              <div className="flex items-center bg-amber-50 rounded-lg px-4 py-3 border border-amber-200">
                <CheckCircle className="w-5 h-5 mr-3 text-amber-600" />
                <span className="text-sm font-medium text-stone-800">
                  Instant rewards
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href="/record"
                className="group bg-amber-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-90 hover:shadow-xl shadow-lg relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center">
                  Start Recording
                  <Mic className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-amber-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>

              <a
                href="#how-it-works"
                className="bg-white border-2 border-amber-300 hover:border-amber-500 hover:bg-amber-50 text-stone-800 font-semibold py-4 px-8 rounded-lg transition-all duration-300"
              >
                How It Works
              </a>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex-1 relative">
            <div className="relative max-w-md mx-auto">
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl p-8 border-2 border-amber-200 shadow-xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="bg-white rounded-2xl p-6 mb-4 shadow-md border border-amber-100">
                  <div className="flex items-center justify-center mb-4">
                    <div className="bg-amber-500 rounded-full p-3 shadow-lg">
                      <Mic className="w-12 h-12 text-white" />
                    </div>
                  </div>
                  <div className="text-center">
                    <h3 className="font-semibold mb-2 text-stone-900">
                      Record Your Heritage
                    </h3>
                    <p className="text-sm text-stone-600">
                      Choose what to share with the world
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center bg-white rounded-lg p-3 border border-amber-200 hover:border-amber-400 hover:shadow-md transition-all duration-300">
                    <Book className="w-5 h-5 text-amber-600 mr-3" />
                    <span className="text-sm text-stone-800">
                      Traditional Stories
                    </span>
                  </div>
                  <div className="flex items-center bg-white rounded-lg p-3 border border-amber-200 hover:border-amber-400 hover:shadow-md transition-all duration-300">
                    <Music className="w-5 h-5 text-amber-600 mr-3" />
                    <span className="text-sm text-stone-800">
                      Indigenous Songs
                    </span>
                  </div>
                  <div className="flex items-center bg-white rounded-lg p-3 border border-amber-200 hover:border-amber-400 hover:shadow-md transition-all duration-300">
                    <Gift className="w-5 h-5 text-amber-600 mr-3" />
                    <span className="text-sm text-stone-800">
                      Cultural Fables
                    </span>
                  </div>
                </div>
              </div>

              <div className="absolute -top-4 -right-4 bg-amber-600 rounded-full p-3 shadow-lg animate-pulse">
                <Coins className="w-6 h-6 text-white" />
              </div>

              <div className="absolute -bottom-6 -left-6 bg-gradient-to-br from-orange-500 to-amber-600 rounded-full p-4 border-2 border-white shadow-xl">
                <Shield className="w-8 h-8 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
