"use client";
import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { faqData } from "@/constants/Data";
const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className=" px-4 py-16 bg-primaryC">
      <h2 className="TITLE">FAQ?</h2>
      <div className="max-w-3xl mx-auto">
        <p className="text-center CUSTOM-GRAY font-normal leading-[28px] text-[17px]  mx-auto mb-12 max-w-[528px]">
          If you still have any questions, please read the section below or
          contact us directly.
        </p>
        <div className="space-y-4">
          {faqData.map((faq, index: number) => (
            <div key={index} className="bg-gray-800 rounded-lg shadow-md">
              <button
                onClick={() => toggleFAQ(index)}
                className="flex justify-between items-center w-full px-6 py-4 text-left text-white focus:outline-none"
              >
                <span className="text-lg font-medium">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-[#F22801] " />
                ) : (
                  <ChevronDown className="w-5 h-5 text-[#F22801] " />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4 CUSTOM-GRAY transition-all duration-300">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
