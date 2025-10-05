import {
  Zap,
  Shield,
  CheckCircle,
  FileText,
  BarChart,
  Smartphone,
  Mic,
} from "lucide-react";
import React from "react";

export default function FeaturesGrid() {
  const features = [
    {
      icon: Mic,
      title: "AI-Powered Speech Recognition",
      description:
        "State-of-the-art models like Whisper fine-tuned on indigenous audio for highly accurate transcriptions.",
    },
    {
      icon: Zap,
      title: "Fast & Scalable Processing",
      description:
        "Convert hours of oral recordings into structured text within seconds, enabling scalable preservation.",
    },
    {
      icon: Shield,
      title: "Ethical Data Stewardship",
      description:
        "Community-owned, transparent, and secure handling of cultural data with respect and consent.",
    },
    {
      icon: FileText,
      title: "Digital Archives & Transcriptions",
      description:
        "Create searchable, shareable, and permanent digital records of oral traditions and community narratives.",
    },
    {
      icon: Smartphone,
      title: "Mobile-First Collection",
      description:
        "Capture and upload audio directly from mobile devices, empowering communities everywhere.",
    },
    {
      icon: BarChart,
      title: "Insights & Analytics",
      description:
        "Track language usage, measure preservation progress, and generate insights for research and education.",
    },
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-amber-50 rounded-full translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-100 rounded-full -translate-x-1/3 translate-y-1/3"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-amber-50 border border-amber-200 rounded-full text-amber-600 text-sm font-medium mb-8">
            <CheckCircle className="w-4 h-4 mr-2" />
            Core Features
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Empowering Communities with
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-500">
              Ethical AI for Language Preservation
            </span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            UbuntuVoices AI Hub provides the tools to preserve endangered
            languages, empower cultural identity, and unlock access to the
            digital future.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-sm border border-amber-100 hover:shadow-xl hover:border-amber-300 transition-all duration-300 hover:-translate-y-1"
              >
                {/* Icon */}
                <div className="flex items-center justify-center w-16 h-16 bg-amber-50 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="w-8 h-8 text-amber-600" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-amber-600 mb-4 group-hover:text-amber-500 transition-colors">
                  {feature.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover indicator */}
                <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-1 bg-gradient-to-r from-amber-600 to-amber-500 rounded-full"></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
