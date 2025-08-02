"use client";

import { FC, useState, useEffect } from "react";
import Image from "next/image";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "About", href: "#" },
  { label: "Services", href: "#" },
  { label: "Case Studies", href: "#" },
  { label: "Insights", href: "#" },
  { label: "Contact", href: "#" },
];

const Header: FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close mobile menu on window resize > lg
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="bg-black/80 backdrop-blur-md border-b border-gray-800 fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 h-16">
        {/* Logo */}
        <a
          href="#"
          className="flex items-center space-x-2 group"
          aria-label="XploreByte Solutions Home"
        >
          {/* SVG Logo */}
          {/* <img
            src="/assets/logo_7.svg"
            alt="XploreByte Logo"
            className="h-8 w-auto"
            style={{ display: "block" }}
          /> */}
          <Image
            src="/assets/logo_7.svg"
            alt="XploreByte Logo"
            width={40} // or whatever size you want (required)
            height={40} // or whatever size you want (required)
            style={{ display: "block" }}
            className="h-8 w-auto"
          />
          <span className="flex items-center space-x-3 group">
            <span className="text-white">XploreByte</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav
          className="hidden lg:flex space-x-8"
          aria-label="Primary Navigation"
        >
          {navLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="relative text-gray-300 hover:text-white transition-colors duration-200 font-sans"
            >
              {label}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-emerald-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center space-x-4">
          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-controls="mobile-menu"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle mobile menu"
            className="lg:hidden p-2 rounded-md hover:bg-gray-900 text-gray-300 hover:text-white transition-colors duration-200"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          {/* Get Started Button */}
          <a
            href="#"
            className="hidden sm:inline-flex items-center px-4 py-2 rounded-lg bg-emerald-500 text-black font-semibold font-sans text-sm shadow-lg hover:bg-emerald-600 transition duration-200"
          >
            Get Started
          </a>
        </div>
      </div>

      {/* Mobile menu */}
      <nav
        id="mobile-menu"
        className={`lg:hidden bg-black border-t border-gray-800 transition-max-height duration-300 ease-in-out overflow-hidden ${
          mobileMenuOpen ? "max-h-screen" : "max-h-0"
        }`}
        aria-label="Mobile Navigation"
      >
        <div className="px-4 pt-2 pb-4 space-y-1">
          {navLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="block px-3 py-2 rounded-md font-sans text-gray-300 hover:bg-gray-900 hover:text-white transition-colors duration-200"
              onClick={() => setMobileMenuOpen(false)}
            >
              {label}
            </a>
          ))}
          {/* Mobile get started */}
          <a
            href="#"
            className="block mt-3 px-4 py-2 rounded-lg bg-emerald-500 text-black font-semibold text-center font-sans shadow-lg hover:bg-emerald-600 transition duration-200"
            onClick={() => setMobileMenuOpen(false)}
          >
            Get Started
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;

// "use client";

// import { FC, useState, useEffect } from "react";

// const navLinks = [
//   { label: "Home", href: "#" },
//   { label: "About", href: "#" },
//   { label: "Services", href: "#" },
//   { label: "Case Studies", href: "#" },
//   { label: "Insights", href: "#" },
//   { label: "Contact", href: "#" },
// ];

// const Header: FC = () => {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//   // Close mobile menu on window resize > lg
//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth >= 1024) {
//         setMobileMenuOpen(false);
//       }
//     };
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   return (
//     <header className="bg-black/80 backdrop-blur-md border-b border-gray-800 fixed top-0 w-full z-50">
//       <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 h-16">
//         {/* Logo */}
//         <a
//           href="#"
//           className="flex items-center space-x-2 group"
//           aria-label="XploreByte Solutions Home"
//         >
//           {/* Add your SVG logo here or replace with text */}
//           <span className="font-bold text-xl tracking-wide text-white font-sans">
//             XploreByte
//           </span>
//         </a>

//         {/* Desktop Nav */}
//         <nav
//           className="hidden lg:flex space-x-8"
//           aria-label="Primary Navigation"
//         >
//           {navLinks.map(({ label, href }) => (
//             <a
//               key={label}
//               href={href}
//               className="relative text-gray-300 hover:text-white transition-colors duration-200 font-sans"
//             >
//               {label}
//               <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-emerald-500 transition-all duration-300 group-hover:w-full"></span>
//             </a>
//           ))}
//         </nav>

//         {/* Actions */}
//         <div className="flex items-center space-x-4">
//           {/* Mobile menu button */}
//           <button
//             onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//             aria-controls="mobile-menu"
//             aria-expanded={mobileMenuOpen}
//             aria-label="Toggle mobile menu"
//             className="lg:hidden p-2 rounded-md hover:bg-gray-900 text-gray-300 hover:text-white transition-colors duration-200"
//           >
//             <svg
//               className="w-6 h-6"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               aria-hidden="true"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               {mobileMenuOpen ? (
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M6 18L18 6M6 6l12 12"
//                 />
//               ) : (
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M4 6h16M4 12h16M4 18h16"
//                 />
//               )}
//             </svg>
//           </button>

//           {/* Get Started Button */}
//           <a
//             href="#"
//             className="hidden sm:inline-flex items-center px-4 py-2 rounded-lg bg-emerald-500 text-black font-semibold font-sans text-sm shadow-lg hover:bg-emerald-600 transition duration-200"
//           >
//             Get Started
//           </a>
//         </div>
//       </div>

//       {/* Mobile menu */}
//       <nav
//         id="mobile-menu"
//         className={`lg:hidden bg-black border-t border-gray-800 transition-max-height duration-300 ease-in-out overflow-hidden ${
//           mobileMenuOpen ? "max-h-screen" : "max-h-0"
//         }`}
//         aria-label="Mobile Navigation"
//       >
//         <div className="px-4 pt-2 pb-4 space-y-1">
//           {navLinks.map(({ label, href }) => (
//             <a
//               key={label}
//               href={href}
//               className="block px-3 py-2 rounded-md font-sans text-gray-300 hover:bg-gray-900 hover:text-white transition-colors duration-200"
//               onClick={() => setMobileMenuOpen(false)}
//             >
//               {label}
//             </a>
//           ))}
//           {/* Mobile get started */}
//           <a
//             href="#"
//             className="block mt-3 px-4 py-2 rounded-lg bg-emerald-500 text-black font-semibold text-center font-sans shadow-lg hover:bg-emerald-600 transition duration-200"
//             onClick={() => setMobileMenuOpen(false)}
//           >
//             Get Started
//           </a>
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Header;
