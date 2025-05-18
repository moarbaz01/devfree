"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface FaqItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  toggleOpen: () => void;
  index: number;
}

function FaqItem({ question, answer, isOpen, toggleOpen, index }: FaqItemProps) {
  return (
    <div className={`w-full ${index !== 0 ? "mt-6" : ""}`}>
      <button
        className={`flex justify-between items-center shadow-sm w-full text-left p-5 rounded-xl transition-all duration-200 ${
          isOpen 
            ? " bg-primary/5 " 
            : " bg-primary/5 hover:bg-gray-50 border border-gray-100"
        }`}
        onClick={toggleOpen}
        aria-expanded={isOpen}
      >
        <span className={`font-medium ${isOpen ? "text-primary" : "text-gray-800"}`}>
          {question}
        </span>
        {isOpen ? (
          <ChevronUp className={`h-5 w-5 ${isOpen ? "text-primary" : "text-gray-400"}`} />
        ) : (
          <ChevronDown className={`h-5 w-5 ${isOpen ? "text-primary" : "text-gray-400"}`} />
        )}
      </button>
      <div
        className={`px-5 overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 mt-3 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="pb-4 text-gray-600">{answer}</div>
      </div>
    </div>
  );
}

export default function Faq() {
  const faqs = [
    {
      question: "Is DevFree really free?",
      answer:
        "Yes, DevFree is completely free for individual developers. We offer paid plans for teams and businesses that need more advanced features and higher sending limits.",
    },
    {
      question: "How many emails can I send with the free plan?",
      answer:
        "The free plan allows you to send up to 100 emails per day and manage up to 1,000 contacts. This is perfect for most individual developers and small startups.",
    },
    {
      question: "Will my emails go to spam?",
      answer:
        "DevFree includes built-in deliverability features like SPF, DKIM, and domain verification to ensure your emails reach the inbox. We also provide best practices to help you maintain a good sender reputation.",
    },
    {
      question: "Can I use my own email address?",
      answer:
        "Yes, you can connect your own email address from Gmail, Outlook, or any other provider that supports SMTP. This helps with deliverability and makes your emails look more professional.",
    },
    {
      question: "How do I track email engagement?",
      answer:
        "DevFree provides real-time tracking for opens, clicks, and replies. You can see exactly who engaged with your emails and when, allowing you to follow up at the perfect time.",
    },
    {
      question: "Can I export my data?",
      answer:
        "Yes, you can export all your contacts, templates, and campaign data at any time. Your data belongs to you, and we make it easy to take it with you.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-16 ">
      <div className="max-w-3xl mx-auto  sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Everything you need to know about DevFree. Can't find what you're looking for?
            <a href="#" className="text-primary hover:text-primary/50 ml-1">
              Contact our support team
            </a>.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <FaqItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={index === openIndex}
              toggleOpen={() => setOpenIndex(index === openIndex ? null : index)}
              index={index}
            />
          ))}
        </div>
      
      </div>
    </section>
  );
}