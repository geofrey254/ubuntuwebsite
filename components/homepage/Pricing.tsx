"use client";
import React, { useState } from "react";
import { Mic, Check } from "lucide-react";

type BillingCycle = "monthly" | "yearly";

type PricingPlan = {
  pricePerHour: string;
  originalPrice?: string;
  savings?: string;
  features: string[];
};

function PricingSection() {
  const [billingCycle, setBillingCycle] = useState<BillingCycle>("monthly");

  const pricing: Record<BillingCycle, PricingPlan> = {
    monthly: {
      pricePerHour: "500",
      features: [
        "AI-powered transcription with Whisper",
        "Support for indigenous languages",
        "Ethical and community-owned data storage",
        "Multi-format export (Text, PDF)",
        "Developer-friendly API access",
        "Email and chat support",
      ],
    },
    yearly: {
      pricePerHour: "400",
      originalPrice: "500",
      savings: "20%",
      features: [
        "AI-powered transcription with Whisper",
        "Support for indigenous languages",
        "Ethical and community-owned data storage",
        "Multi-format export (Text, PDF)",
        "Developer-friendly API access",
        "Priority email and chat support",
        "Dedicated account manager",
        "Annual usage analytics",
      ],
    },
  };

  const currentPlan = pricing[billingCycle];

  return (
    <section className="w-full min-h-screen bg-white py-16 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-600 rounded-full mb-6">
            <Mic className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Simple Per-Hour Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            No tiers, no limits. Pay only for the audio you process with our
            AI-powered language preservation platform.
          </p>
        </div>

        {/* Billing Toggle */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-full p-2 shadow-lg border border-amber-200">
            <div className="flex space-x-1">
              {[
                { key: "monthly", label: "Monthly" },
                { key: "yearly", label: "Yearly" },
              ].map((option) => (
                <button
                  key={option.key}
                  onClick={() => setBillingCycle(option.key as BillingCycle)}
                  className={`px-8 py-3 rounded-full font-medium transition-all duration-300 ${
                    billingCycle === option.key
                      ? "bg-amber-600 text-white shadow-md"
                      : "text-gray-600 hover:text-gray-800"
                  }`}
                >
                  {option.label}
                  {option.key === "yearly" && (
                    <span className="ml-2 text-sm bg-amber-100 text-amber-700 px-2 py-1 rounded-full">
                      Save 20%
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Main Pricing Card */}
        <div className="max-w-2xl mx-auto">
          <div className="relative bg-white rounded-3xl shadow-2xl border border-amber-200 overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-3xl">
            {/* Savings Badge */}
            {billingCycle === "yearly" && (
              <div className="absolute top-0 left-0 right-0 bg-amber-600 text-white text-center py-3 font-bold">
                💰 SAVE 20% WITH YEARLY BILLING
              </div>
            )}

            <div
              className={`p-12 ${
                billingCycle === "yearly" ? "pt-20" : "pt-12"
              }`}
            >
              {/* Price Display */}
              <div className="text-center mb-12">
                <div className="flex items-baseline justify-center mb-4">
                  <span className="text-3xl font-bold text-gray-800">KSh</span>
                  <span className="text-7xl font-bold text-gray-800 mx-2">
                    {currentPlan.pricePerHour}
                  </span>
                </div>
                <p className="text-xl text-gray-600 font-medium">
                  per audio hour processed
                </p>
                {currentPlan.originalPrice && (
                  <span className="block mt-2 text-lg text-gray-500 line-through">
                    KSh {currentPlan.originalPrice}
                  </span>
                )}
              </div>

              {/* Features */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                  Everything Included
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {currentPlan.features.map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <div className="flex-shrink-0 w-6 h-6 bg-amber-100 rounded-full flex items-center justify-center mr-3 mt-1">
                        <Check className="w-4 h-4 text-amber-600" />
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              <div className="text-center">
                <button className="bg-amber-600 text-white font-bold py-4 px-12 rounded-xl text-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                  Start Preserving Languages
                </button>
                <p className="text-gray-500 text-sm mt-4">
                  No setup fees • No hidden costs • Cancel anytime
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Usage Examples */}
        <div className="mt-16 grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-6 text-center border border-amber-200">
            <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold text-lg">10</span>
            </div>
            <h4 className="font-bold text-gray-800 mb-2">Community Project</h4>
            <p className="text-gray-600 text-sm mb-3">10 hours per month</p>
            <p className="text-2xl font-bold text-gray-800">
              KSh {billingCycle === "monthly" ? "5,000" : "4,000"}
              <span className="text-sm font-normal text-gray-500">/month</span>
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 text-center border-2 border-amber-600">
            <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold text-lg">50</span>
            </div>
            <h4 className="font-bold text-gray-800 mb-2">Research Team</h4>
            <p className="text-gray-600 text-sm mb-3">50 hours per month</p>
            <p className="text-2xl font-bold text-gray-800">
              KSh {billingCycle === "monthly" ? "25,000" : "20,000"}
              <span className="text-sm font-normal text-gray-500">/month</span>
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 text-center border border-amber-200">
            <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold text-lg">100</span>
            </div>
            <h4 className="font-bold text-gray-800 mb-2">Enterprise Partner</h4>
            <p className="text-gray-600 text-sm mb-3">100 hours per month</p>
            <p className="text-2xl font-bold text-gray-800">
              KSh {billingCycle === "monthly" ? "50,000" : "40,000"}
              <span className="text-sm font-normal text-gray-500">/month</span>
            </p>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl shadow-xl border border-amber-200 p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Questions About Pricing?
            </h3>
            <p className="text-gray-600 mb-6">
              Need help calculating costs for your community or research
              project? Our team is here to guide you.
            </p>
            <button className="bg-amber-600 text-white font-bold py-3 px-8 rounded-xl transition-all transform hover:scale-105 shadow-lg">
              Contact Support
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PricingSection;
