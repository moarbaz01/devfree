import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "./input";

export default function Footer() {
  return (
    <footer className="bg-primary border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div className="md:col-span-1">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-full bg-blue-900 flex items-center justify-center mr-2">
                <Mail className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold text-secondary">DevFree</span>
            </div>
            <p className="text-secondary/50 text-sm mb-4">
              The free email outreach tool built specifically for developers and
              technical founders.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-secondary/50 hover:text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a href="#" className="text-secondary/50 hover:text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
              <a href="#" className="text-secondary/50 hover:text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-semibold text-secondary mb-4">Product</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-secondary/50 hover:text-white text-sm"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-secondary/50 hover:text-white text-sm"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-secondary/50 hover:text-white text-sm"
                >
                  Integrations
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-secondary/50 hover:text-white text-sm"
                >
                  Roadmap
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold mb-4 text-secondary">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-secondary/50 hover:text-white text-sm"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-secondary/50 hover:text-white text-sm"
                >
                  Documentation
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-secondary/50 hover:text-white text-sm"
                >
                  Templates
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-secondary/50 hover:text-white text-sm"
                >
                  Support
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold mb-4 text-secondary">
              Subscribe to our newsletter
            </h3>
            <p className="text-secondary/50 hover:text-white text-sm mb-4">
              Get the latest updates and news straight to your inbox.
            </p>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-white"
              />
              <Button size="sm" className="bg-blue-900 hover:bg-blue-800">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-secondary mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-secondary/50 hover:text-white text-sm">
            © 2025 DevFree. All rights reserved.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="text-secondary/50 hover:text-white text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-secondary/50 hover:text-white text-sm">
              Terms of Service
            </a>
            <a href="#" className="text-secondary/50 hover:text-white text-sm">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
