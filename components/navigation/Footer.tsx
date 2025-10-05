"use client";

import { useState } from "react";
import {
  Mail,
  Phone,
  ChevronUp,
  Send,
  AlertCircle,
  Brain,
  Camera,
  Award,
  Globe,
  BarChart,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [alreadySubscribed, setAlreadySubscribed] = useState(false);

  const handleSubscribe = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email) return;

    setSubscribed(false);
    setAlreadySubscribed(false);

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (res.status === 409) {
        setAlreadySubscribed(true);
        setTimeout(() => setAlreadySubscribed(false), 5000);
      } else if (res.ok) {
        setSubscribed(true);
        setEmail("");
        setTimeout(() => setSubscribed(false), 5000);
      } else {
        alert(data.error || "Something went wrong. Please try again later.");
      }
    } catch (error) {
      alert("Failed to subscribe. Please try again later.");
      console.error(error);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-white text-gray-800">
      {/* Decorative top border */}
      <div className="h-2 bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600"></div>

      {/* Wave separator */}
      <div className="absolute top-0 left-0 w-full overflow-hidden">
        <svg
          className="relative block w-full h-16"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
        >
          <path
            fill="#f59e0b"
            fillOpacity="0.05"
            d="M0,64L80,58.7C160,53,320,43,480,48C640,53,800,75,960,74.7C1120,75,1280,53,1360,42.7L1440,32L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-20 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* UbuntuVoices Info */}
          <div className="relative z-10">
            <div className="flex items-center mb-6">
              {/* swap to your UbuntuVoices logo file */}
              <Image
                src="/logo.png"
                alt="UbuntuVoices logo"
                width={140}
                height={140}
                className="mr-2 drop-shadow-md"
              />
            </div>
            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
              UbuntuVoices AI Hub — preserving endangered indigenous languages
              through ethical, community-driven AI-powered speech recognition.
            </p>
            <div className="space-y-4">
              <div className="flex items-center group">
                <div className="bg-amber-500 bg-opacity-20 p-2.5 rounded-full mr-4 group-hover:bg-opacity-30 transition-all">
                  <Phone className="h-5 w-5 text-amber-600" />
                </div>
                <p className="text-gray-700 group-hover:text-amber-600 transition-colors">
                  +254 720 206088
                </p>
              </div>
              <div className="flex items-center group">
                <div className="bg-amber-500 bg-opacity-20 p-2.5 rounded-full mr-4 group-hover:bg-opacity-30 transition-all">
                  <Mail className="h-5 w-5 text-amber-600" />
                </div>
                <p className="text-gray-700 group-hover:text-amber-600 transition-colors">
                  info@ubuntuvoices.ai
                </p>
              </div>
            </div>
          </div>

          {/* UbuntuVoices Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 relative inline-block">
              <Brain className="w-5 h-5 text-amber-600 mr-2 inline" />
              Projects & Tools
              <span className="bg-gradient-to-r from-amber-500 to-transparent w-16 h-0.5 absolute -bottom-2 left-0"></span>
            </h3>

            <ul className="space-y-4">
              {[
                {
                  href: "/projects",
                  label: "Preservation Projects",
                  icon: Award,
                },
                {
                  href: "/collect",
                  label: "Data Collection",
                  icon: Camera,
                },
                {
                  href: "/transcription-api",
                  label: "Transcription API",
                  icon: Globe,
                },
                {
                  href: "/research",
                  label: "Research & Analytics",
                  icon: BarChart || Globe, // BarChart not imported in this file; keep Globe as fallback
                },
                {
                  href: "/partners",
                  label: "Partners & Grants",
                  icon: Award,
                },
              ].map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-600 hover:text-amber-600 flex items-center group transition-all duration-300"
                  >
                    <div className="bg-amber-500/0 group-hover:bg-amber-500/20 p-2 rounded-full mr-3 transition-all duration-300">
                      <link.icon className="h-4 w-4 text-amber-600" />
                    </div>
                    <span className="border-b border-transparent group-hover:border-amber-600 pb-1 transition-all">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="relative z-10">
            <h3 className="text-2xl font-bold mb-8 relative inline-block">
              Stay Connected
              <span className="bg-amber-600 w-12 h-1 absolute -bottom-3 left-0 rounded-full"></span>
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Subscribe for updates on language projects, research releases, and
              community opportunities.
            </p>

            <form onSubmit={handleSubscribe} className="mb-6">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="w-full px-5 py-4 pr-14 rounded-lg bg-gray-100 border border-gray-300 text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all"
                  required
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-amber-600 text-white p-2.5 rounded-md hover:bg-amber-500 transition-all"
                  aria-label="Subscribe"
                >
                  <Send className="h-5 w-5" />
                </button>
              </div>

              {/* Success */}
              {subscribed && (
                <div className="mt-4 px-4 py-3 bg-amber-500/20 rounded-md border-l-4 border-amber-600 animate-fade-in">
                  <p className="text-gray-800 text-sm">
                    Thank you for subscribing! We’ll be in touch soon.
                  </p>
                </div>
              )}

              {/* Already subscribed */}
              {alreadySubscribed && (
                <div className="mt-4 px-4 py-3 bg-amber-600/10 rounded-md border-l-4 border-amber-600 animate-fade-in flex items-start">
                  <AlertCircle className="h-5 w-5 text-amber-600 mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-gray-800 text-sm font-medium">
                      Already Subscribed
                    </p>
                    <p className="text-gray-600 text-sm">
                      This email is already in our list. Thanks for staying
                      connected!
                    </p>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-gray-200 flex justify-center items-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} UbuntuVoices AI Hub. Powered by{" "}
            <span className="text-amber-600 font-bold">UbuntuVoices</span>.
          </p>
        </div>
      </div>

      {/* Back to top button */}
      <button
        onClick={scrollToTop}
        className="bg-amber-600 text-white p-3 rounded-full shadow-lg absolute -top-6 right-8 hover:bg-amber-500 transition-all duration-300"
        aria-label="Back to top"
      >
        <ChevronUp className="h-6 w-6" />
      </button>

      {/* Keyframe animations */}
      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fadeIn 0.3s ease-out forwards;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
