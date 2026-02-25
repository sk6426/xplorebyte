"use client";

import { useState, FC } from "react";
import { ArrowRightIcon } from "@phosphor-icons/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navItems = [
  "Home",
  "About",
  "Services",
  "Case Studies",
  "Insights",
  "Contact",
];

const Header: FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 bg-black bg-opacity-95 shadow-xl backdrop-blur-md font-montserrat">
        <nav
          className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-10 py-4"
          aria-label="Primary Navigation"
        >
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-3 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FFB800]"
          >
            <svg
              width="40"
              height="40"
              viewBox="0 0 400 400"
              fill="none"
              aria-label="XploreByte Logo"
              role="img"
              className="transition-transform hover:scale-105"
              style={{ willChange: "transform" }}
            >
              {/* Logo shapes */}
              <rect
                x="50"
                y="75"
                width="40"
                height="250"
                rx="20"
                transform="rotate(-45 50 75)"
                fill="#FFB800"
              />
              <rect
                x="95"
                y="270"
                width="40"
                height="250"
                rx="20"
                transform="rotate(-135 95 270)"
                fill="#2196F3"
              />
              <rect
                x="137"
                y="137"
                width="50"
                height="50"
                transform="rotate(-45 137 137)"
                fill="#FF8000"
                opacity="0.9"
              />
              <path
                d="M200,90 Q315,90 315,200 Q315,310 200,310"
                stroke="#EB222B"
                strokeWidth="40"
                fill="none"
                strokeLinecap="round"
              />
              <path
                d="M200,200 Q300,200 300,300 Q300,360 200,360"
                stroke="#6F42C1"
                strokeWidth="40"
                fill="none"
                strokeLinecap="round"
              />
              <path
                d="M200,310 Q270,310 270,360 Q270,360 200,360"
                stroke="#21A366"
                strokeWidth="40"
                fill="none"
                strokeLinecap="round"
              />
            </svg>
            <span className="text-white font-extrabold text-2xl tracking-tight select-none">
              XploreByte
            </span>
          </a>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-12 text-white font-semibold text-lg tracking-wider">
            {navItems.map(item => (
              <li key={item} className="relative group cursor-pointer">
                <a
                  href="#"
                  className="py-2 relative before:absolute before:bottom-0 before:left-0 before:h-1 before:w-0 before:rounded-full before:transition-all before:duration-300 before:content-[''] before:bg-gradient-to-r before:from-[#FFB800] before:to-[#11A944] group-hover:before:w-full"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>

          {/* Get Started Button */}
          <button
            type="button"
            className="hidden md:flex bg-gradient-to-r from-[#FFB800] to-[#11A944] px-7 py-3 rounded-full font-semibold text-black shadow-lg hover:brightness-110 transition transform hover:scale-105"
            aria-label="Get Started"
          >
            <ArrowRightIcon size={22} weight="bold" />
            <span className="ml-2">Get Started</span>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            className="md:hidden text-white hover:text-[#FFB800] transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FFB800]"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileMenuOpen(prev => !prev)}
          >
            {mobileMenuOpen ? (
              <XMarkIcon className="w-8 h-8" />
            ) : (
              <Bars3Icon className="w-8 h-8" />
            )}
          </button>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-black bg-opacity-95 shadow-lg flex flex-col items-center py-6 space-y-6 font-semibold text-white text-lg">
            {navItems.map(item => (
              <a
                key={item}
                href="#"
                className="w-full text-center hover:text-[#FFB800] transition py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <button
              type="button"
              className="bg-gradient-to-r from-[#FFB800] to-[#11A944] text-black px-8 py-3 rounded-full font-semibold shadow-lg hover:brightness-110 transition w-3/4"
              aria-label="Get Started"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get Started
            </button>
          </div>
        )}
      </header>

      {/* Sticky WhatsApp Chat Button */}
      <a
        href="https://wa.me/919999999999"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="fixed bottom-6 right-6 bg-[#25D366] rounded-full p-4 shadow-lg flex items-center justify-center transition transform hover:scale-110 z-50"
      >
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-75 animate-ping"></span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
          className="relative"
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.885-4.434 9.888-9.885.002-5.462-4.415-9.89-9.881-9.892-5.451 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.743-.965zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.148-.669.149-.198.297-.768.967-.941 1.166-.173.198-.347.223-.644.075-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.151-.174.2-.298.3-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.611-.916-2.207-.242-.579-.487-.501-.669-.51-.173-.008-.372-.01-.571-.01-.198 0-.52.075-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.363.709.306 1.262.489 1.694.626.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.288.173-1.413z" />
        </svg>
      </a>
    </>
  );
};

export default Header;
