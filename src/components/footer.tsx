import React from "react";
import {FaFacebook,FaLinkedin,FaTwitter} from 'react-icons/fa'
export const Footer = () => {
  return (
    <footer className="bg-gray-900 py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Links */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">
              TruckMaster Pro
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#about"
                  className="text-gray-400 hover:text-blue-300 transition"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#features"
                  className="text-gray-400 hover:text-blue-300 transition"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  className="text-gray-400 hover:text-blue-300 transition"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#blog"
                  className="text-gray-400 hover:text-blue-300 transition"
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#contact"
                  className="text-gray-400 hover:text-blue-300 transition"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="text-gray-400 hover:text-blue-300 transition"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="#support"
                  className="text-gray-400 hover:text-blue-300 transition"
                >
                  Support Center
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">
              Get in Touch
            </h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                Email:{" "}
                <a
                  href="mailto:support@truckmasterpro.com"
                  className="hover:text-blue-300 transition"
                >
                  support@truckmasterpro.com
                </a>
              </li>
              <li>
                Phone:{" "}
                <a
                  href="tel:+1234567890"
                  className="hover:text-blue-300 transition"
                >
                  +1 (234) 567-890
                </a>
              </li>
              <li>Address: 123 Logistics Lane, Trucking City, USA</li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-300 transition"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-300 transition"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-300 transition"
              >
                <FaFacebook size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Notice */}
        <div className="mt-12 border-t border-gray-700 pt-6 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} TruckMaster Pro. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
