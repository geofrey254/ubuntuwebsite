import {
  AlertTriangle,
  CheckCircle,
  Clock,
  Target,
  TrendingUp,
  Zap,
} from "lucide-react";
import React from "react";

export default function Problem() {
  return (
    <section className="py-20 bg-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-[48px] font-bold text-[#041740] mb-4">
            The Problem with <br /> Indigenous Language Preservation
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Centuries of oral tradition and cultural identity are at risk of
            extinction due to the lack of digital speech data and online
            presence for indigenous languages. UbuntuVoices exists to change
            this.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Pain Points */}
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center">
                <Clock className="w-6 h-6 text-amber-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Vanishing Languages
                </h3>
                <p className="text-gray-600">
                  Every two weeks, an indigenous language disappears, erasing
                  irreplaceable cultural heritage and knowledge.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center">
                <Target className="w-6 h-6 text-amber-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Lack of Digital Access
                </h3>
                <p className="text-gray-600">
                  Indigenous communities are excluded from the benefits of AI
                  and digital platforms due to the absence of structured speech
                  data.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center">
                <AlertTriangle className="w-6 h-6 text-amber-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Cultural Identity at Risk
                </h3>
                <p className="text-gray-600">
                  Without action, oral traditions, stories, and collective
                  wisdom may disappear from history entirely.
                </p>
              </div>
            </div>

            <div className="mt-8 p-6 bg-white rounded-2xl shadow-sm border">
              <h4 className="font-semibold text-gray-900 mb-2">The Result:</h4>
              <p className="text-amber-600 font-medium">
                Loss of heritage, weakened community identity, and reduced
                opportunities for global participation.
              </p>
            </div>
          </div>

          {/* Right: Solution Comparison */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-amber-200">
              <div className="bg-amber-50 px-6 py-4 border-b">
                <h4 className="font-semibold text-amber-700 flex items-center">
                  <AlertTriangle className="w-4 h-4 mr-2" />
                  Traditional Documentation
                </h4>
              </div>
              <div className="p-6 text-sm text-gray-600 space-y-3">
                <div className="flex justify-between">
                  <span>Scalability:</span>
                  <span className="text-amber-600 font-medium">Very Low</span>
                </div>
                <div className="flex justify-between">
                  <span>Accessibility:</span>
                  <span className="text-amber-600 font-medium">Limited</span>
                </div>
                <div className="flex justify-between">
                  <span>Accuracy:</span>
                  <span className="text-amber-600 font-medium">
                    Prone to Human Error
                  </span>
                </div>
                <div className="mt-4 p-3 bg-amber-50 rounded-lg">
                  <p className="text-xs text-amber-700">
                    ❌ Handwritten notes, inconsistent transcription, risk of
                    loss over generations.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border-2 border-amber-200">
              <div className="bg-amber-50 px-6 py-4 border-b">
                <h4 className="font-semibold text-amber-700 flex items-center">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  UbuntuVoices AI Hub
                </h4>
              </div>
              <div className="p-6 text-sm text-gray-600 space-y-3">
                <div className="flex justify-between">
                  <span>Scalability:</span>
                  <span className="text-amber-600 font-medium">
                    Global & Community-driven
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Accessibility:</span>
                  <span className="text-amber-600 font-medium">
                    Easy Digital Access
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Accuracy:</span>
                  <span className="text-amber-600 font-medium">High (99%)</span>
                </div>
                <div className="mt-4 p-3 bg-amber-50 rounded-lg">
                  <p className="text-xs text-amber-700">
                    ✅ Ethical AI pipeline using Whisper, accurate
                    transcriptions, and preservation of community narratives.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Transformation */}
        <div className="bg-white rounded-3xl p-8 md:p-12 border-2 border-amber-100 mt-8">
          <div className="text-center mb-10">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              The Transformation
            </h3>
            <p className="text-gray-600 text-lg">
              UbuntuVoices revolutionizes language preservation with AI.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-amber-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <TrendingUp className="w-10 h-10 text-white" />
              </div>
              <div className="text-3xl font-bold text-amber-600 mb-2">100+</div>
              <div className="text-gray-600 font-medium">Languages at Risk</div>
              <div className="text-sm text-gray-500 mt-1">
                Scalable preservation pipeline
              </div>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-amber-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Target className="w-10 h-10 text-white" />
              </div>
              <div className="text-3xl font-bold text-amber-600 mb-2">99%</div>
              <div className="text-gray-600 font-medium">Accurate AI</div>
              <div className="text-sm text-gray-500 mt-1">
                Tested successfully with Maasai audio
              </div>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-amber-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <CheckCircle className="w-10 h-10 text-white" />
              </div>
              <div className="text-3xl font-bold text-amber-600 mb-2">
                Global
              </div>
              <div className="text-gray-600 font-medium">
                Scalable & Ethical Model
              </div>
              <div className="text-sm text-gray-500 mt-1">
                API-as-a-Service for education, tourism, healthcare, and more
              </div>
            </div>
          </div>

          <div className="text-center mt-10">
            <div className="inline-flex items-center px-8 py-4 bg-amber-600 text-white rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all cursor-pointer">
              <Zap className="w-6 h-6 mr-3" />
              Support Language Preservation Today
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
