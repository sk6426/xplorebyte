"use client";
import React from "react";

// Socials Array (add or update icons easily)
const socials = [
  {
    label: "LinkedIn",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <rect width="24" height="24" rx="6" fill="#0077b5" />
        <rect width="4" height="12" x="4" y="8" fill="white" />
        <circle cx="6" cy="6" r="2" fill="white" />
        <rect width="4" height="8" x="10" y="12" fill="white" />
        <rect width="4" height="6" x="16" y="14" fill="white" />
      </svg>
    ),
    hover: "hover:bg-emerald-500/80",
  },
  {
    label: "Twitter/X",
    href: "#",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
      </svg>
    ),
    hover: "hover:bg-blue-400/80",
  },
  {
    label: "Instagram",
    href: "#",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
      </svg>
    ),
    hover: "hover:bg-purple-400/80",
  },
  {
    label: "GitHub",
    href: "#",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
        <path d="M9 18c-4.51 2-5-2-7-2" />
      </svg>
    ),
    hover: "hover:bg-gray-700/80",
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/xxxxxxxxxx",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path d="M21.1 16.9A9.8 9.8 0 1 0 4.2 19.6L2 22l6.3-1.6a9.8 9.8 0 0 0 12.8-3.5z" />
        <path d="M7.6 10.4a6.1 6.1 0 0 1 2.1-2.1l1.6 1.6a.6.6 0 0 0 .7.1l2.6-1.2a.6.6 0 0 1 .6.1l1.2 1.2a.6.6 0 0 1-.1.8l-1.6 1.2a.6.6 0 0 1-.7-.1l-1.6-1.6a6.1 6.1 0 0 1-2.1 2.1z" />
      </svg>
    ),
    hover: "hover:bg-green-500/90 text-white",
  },
];

const Footer = () => (
  <footer className="bg-gradient-to-t from-gray-950 via-gray-900 to-gray-800 text-gray-200 relative overflow-hidden border-t border-gray-800">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-10">
        {/* Brand & Socials */}
        <div className="lg:col-span-2 flex flex-col gap-5">
          <div className="flex items-center space-x-3 mb-2">
            <img
              src="/assets/logo_7.svg"
              alt="XploreByte Logo"
              className="h-8 w-auto"
            />
            <span className="font-bold text-xl bg-gradient-to-br from-white via-emerald-400 to-sky-400 bg-clip-text text-transparent tracking-tight">
              XploreByte{" "}
              <span className="font-light text-gray-300">Solutions</span>
            </span>
          </div>
          <p className="max-w-md font-sans text-gray-400">
            Your trusted partner in digital innovation—empowering your growth
            with next-gen technology, strategy, and talent.
          </p>
          <div className="flex space-x-2 mt-3">
            {socials.map(({ label, href, icon, hover }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener"
                aria-label={label}
                className={`rounded-full bg-gray-900/80 text-gray-300 transition-colors duration-200 p-2 ${
                  hover || ""
                }`}
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-semibold mb-4 font-sans tracking-wide text-gray-100">
            Services
          </h3>
          <ul className="space-y-2 text-gray-400 text-[15px]">
            <li>
              <a
                href="#"
                className="hover:text-emerald-400 transition-colors duration-200"
              >
                Cloud Solutions
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-emerald-400 transition-colors duration-200"
              >
                Web Development
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-emerald-400 transition-colors duration-200"
              >
                Mobile Apps
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-emerald-400 transition-colors duration-200"
              >
                Digital Strategy
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-emerald-400 transition-colors duration-200"
              >
                Data Analytics
              </a>
            </li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="font-semibold mb-4 font-sans tracking-wide text-gray-100">
            Company
          </h3>
          <ul className="space-y-2 text-gray-400 text-[15px]">
            <li>
              <a
                href="#"
                className="hover:text-emerald-400 transition-colors duration-200"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-emerald-400 transition-colors duration-200"
              >
                Case Studies
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-emerald-400 transition-colors duration-200"
              >
                Careers
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-emerald-400 transition-colors duration-200"
              >
                Blog
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-emerald-400 transition-colors duration-200"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Call To Action & Legal */}
      <div className="flex flex-col sm:flex-row items-center justify-between border-t border-gray-800 pt-8 gap-3">
        <div className="flex items-center gap-3 mb-2 sm:mb-0">
          <span className="text-xs font-mono text-gray-400">
            © {new Date().getFullYear()} XploreByte Solutions. All rights
            reserved.
          </span>
          <a
            href="#"
            className="text-xs font-mono text-gray-400 hover:text-emerald-400 transition"
          >
            Privacy Policy
          </a>
          <span className="mx-1">|</span>
          <a
            href="#"
            className="text-xs font-mono text-gray-400 hover:text-emerald-400 transition"
          >
            Terms
          </a>
        </div>
        {/* Quick Contact or CTA */}
        <a
          href="mailto:hello@xplorebyte.com"
          className="inline-flex items-center px-4 py-2 rounded-lg bg-emerald-500 text-black font-semibold font-sans text-sm shadow-lg hover:bg-emerald-600 transition duration-200"
        >
          Contact Us
        </a>
      </div>

      {/* Back to Top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="absolute right-6 bottom-6 rounded-full p-2 bg-black/70 hover:bg-emerald-500 transition"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 15l7-7 7 7"
          />
        </svg>
      </button>
    </div>
  </footer>
);

export default Footer;
