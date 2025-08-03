// "use client";
// import React from "react";

// import { FC, useEffect, useRef } from "react";
// import { ArrowRight, Play } from "@phosphor-icons/react";
// import Image from "next/image";
// import { motion } from "framer-motion";
// import type { Variants } from "framer-motion";
// const trustedCompanies = [
//   { name: "TechCorp", icon: "building" },
//   { name: "SecureVault", icon: "shield" },
//   { name: "Innovate", icon: "zap" },
//   { name: "GlobalTech", icon: "globe" },
//   { name: "GrowthFlow", icon: "trending-up" },
// ];

// const iconMap: { [key: string]: React.ReactNode } = {
//   building: (
//     <svg
//       width="24"
//       height="24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="1.5"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       className="mx-auto mb-1 h-6 w-6 text-slate-400"
//       viewBox="0 0 24 24"
//     >
//       <rect width="16" height="20" x="4" y="2" rx="2" ry="2" />
//       <rect width="4" height="4" x="7" y="6" />
//       <rect width="4" height="4" x="13" y="6" />
//       <rect width="4" height="4" x="7" y="14" />
//       <rect width="4" height="4" x="13" y="14" />
//     </svg>
//   ),
//   shield: (
//     <svg
//       width="24"
//       height="24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="1.5"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       className="mx-auto mb-1 h-6 w-6 text-emerald-400"
//       viewBox="0 0 24 24"
//     >
//       <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 01-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 011-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 011.52 0C14.51 3.81 17 5 19 5a1 1 0 011 1z" />
//     </svg>
//   ),
//   zap: (
//     <svg
//       width="24"
//       height="24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="1.5"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       className="mx-auto mb-1 h-6 w-6 text-yellow-300"
//       viewBox="0 0 24 24"
//     >
//       <polygon points="13 2 2 22 22 8 11 22 13 2" />
//     </svg>
//   ),
//   globe: (
//     <svg
//       width="24"
//       height="24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="1.5"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       className="mx-auto mb-1 h-6 w-6 text-sky-400"
//       viewBox="0 0 24 24"
//     >
//       <circle cx="12" cy="12" r="10" />
//       <path d="M2 12h20M12 2a14.5 14.5 0 000 20 14.5 14.5 0 000-20" />
//     </svg>
//   ),
//   "trending-up": (
//     <svg
//       width="24"
//       height="24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="1.5"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       className="mx-auto mb-1 h-6 w-6 text-fuchsia-400"
//       viewBox="0 0 24 24"
//     >
//       <path d="M16 7h6v6" />
//       <path d="M22 7l-8.5 8.5-5-5L2 17" />
//     </svg>
//   ),
// };

// const stagger = {
//   hidden: {},
//   visible: {
//     transition: {
//       staggerChildren: 0.09,
//     },
//   },
// };

// const fadeUp: Variants = {
//   hidden: { opacity: 0, y: 32 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.7, ease: [0.17, 0.67, 0.83, 0.67] },
//   },
// };

// const Hero: FC = () => {
//   return (
//     <section className="relative bg-gradient-to-br from-[#0a1827] via-[#062833] to-[#0e2030] pt-20 pb-24 overflow-hidden">
//       <div className="absolute inset-0 pointer-events-none z-0">
//         {/* Soft light overlay for depth */}
//         <div className="absolute inset-0 bg-gradient-radial from-[#37ef8d1a] via-[#3e89fa11] to-transparent opacity-70"></div>
//         <div className="absolute left-1/2 top-[30%] w-[700px] h-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-tr from-[#37ef8d44] via-[#70e5fd44] to-transparent blur-3xl opacity-30"></div>
//       </div>
//       <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
//         {/* Left Content */}
//         <motion.div initial="hidden" animate="visible" variants={stagger}>
//           <motion.h1
//             className="mt-12 sm:text-5xl lg:text-6xl text-4xl font-extrabold tracking-tight text-white mb-6 font-manrope leading-tight"
//             variants={fadeUp}
//           >
//             Empowering Your
//             <br />
//             <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-cyan-300 to-sky-500 font-manrope">
//               Vision
//             </span>{" "}
//             with Digital
//             <br className="hidden sm:block" />
//             Excellence
//           </motion.h1>

//           <motion.p
//             className="sm:text-xl leading-relaxed text-lg text-slate-300 mb-8 font-sans"
//             variants={fadeUp}
//           >
//             {/* Empowering businesses by leveraging technology to optimize
//             workflows, accelerate growth, and maintain a competitive edge in
//             today’s fast-paced digital world. */}
//             We leverage technology to streamline workflows, accelerate growth,
//             and keep you competitive.
//           </motion.p>
//           <motion.div
//             className="flex flex-col sm:flex-row gap-4 mb-12"
//             variants={fadeUp}
//           >
//             <button
//               className="inline-flex items-center px-6 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl bg-gradient-to-r from-emerald-400 via-cyan-400 to-sky-500 text-black hover:brightness-110 transition duration-200"
//               aria-label="Let's Work Together"
//             >
//               <ArrowRight size={20} weight="bold" className="mr-2" />
//               Let’s Work Together
//             </button>
//             <button
//               className="inline-flex items-center px-6 py-3 rounded-lg font-semibold border border-cyan-500 text-cyan-400 hover:bg-cyan-900 hover:text-white transition duration-200"
//               aria-label="Watch Demo"
//             >
//               <Play size={20} weight="bold" className="mr-2" />
//               Watch Demo
//             </button>
//           </motion.div>
//           {/* Trusted Companies */}
//           <motion.div variants={fadeUp}>
//             <div className="flex mb-3 space-x-4 items-center">
//               <h2 className="text-sm font-semibold uppercase tracking-wider font-sans text-slate-400">
//                 Trusted by Industry Leaders
//               </h2>
//               <div className="flex items-center space-x-1">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="w-4 h-4 text-yellow-300"
//                   fill="currentColor"
//                   viewBox="0 0 20 20"
//                   aria-hidden="true"
//                 >
//                   <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
//                 </svg>
//                 <span className="text-sm font-semibold font-sans text-slate-300">
//                   4.9/5 Rating
//                 </span>
//               </div>
//             </div>
//             <div className="grid grid-cols-3 lg:grid-cols-5 gap-6 items-center opacity-90">
//               {trustedCompanies.map(({ name, icon }) => (
//                 <motion.div
//                   key={name}
//                   className="rounded-xl px-4 py-2 shadow-sm border text-center bg-black/60 border-cyan-900 hover:scale-105 transition-transform duration-200"
//                   aria-label={name}
//                   whileHover={{ y: -3, scale: 1.09 }}
//                   variants={fadeUp}
//                 >
//                   {iconMap[icon]}
//                   <span className="text-xs font-semibold font-sans text-slate-300">
//                     {name}
//                   </span>
//                 </motion.div>
//               ))}
//             </div>
//           </motion.div>
//         </motion.div>

//         {/* Right Content */}
//         <motion.div
//           className="relative"
//           initial={{ opacity: 0, x: 64 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
//         >
//           <div
//             className="relative rounded-3xl shadow-2xl w-full max-w-lg mx-auto border-2 border-cyan-800 bg-gradient-to-br from-[#121c28] via-[#1c384b] to-[#21303f]"
//             style={{ aspectRatio: "16 / 9" }}
//           >
//             <Image
//               src="/assets/hero-image-colored.png"
//               alt="Hero Showcase"
//               width={800}
//               height={600}
//               className="w-full h-full object-cover rounded-3xl"
//               priority
//             />

//             {/* Floating badges */}
//             <motion.div
//               className="absolute -bottom-7 left-6 rounded-xl shadow-lg p-4 flex items-center space-x-3 bg-black/90 backdrop-blur-md border border-emerald-700"
//               initial={{ opacity: 0, y: 18 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.7, delay: 0.7, ease: "easeOut" }}
//             >
//               <div className="p-2 rounded-lg bg-emerald-900/70">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="w-5 h-5 text-emerald-400"
//                   fill="none"
//                   viewBox="0 0 30 30"
//                   stroke="currentColor"
//                 >
//                   <path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2" />
//                   <path d="M16 3.128a4 4 0 100 7.744" />
//                   <path d="M22 21v-2a4 4 0 00-3-3.87" />
//                   <circle cx="9" cy="7" r="4" />
//                 </svg>
//               </div>
//               <div>
//                 <div className="text-sm font-semibold font-sans text-emerald-200">
//                   500+ Projects
//                 </div>
//                 <div className="text-xs text-slate-400 font-sans">
//                   Successfully Delivered
//                 </div>
//               </div>
//             </motion.div>
//             <motion.div
//               className="absolute -top-7 right-6 rounded-xl shadow-lg p-4 flex items-center space-x-3 bg-black/90 backdrop-blur-md border border-sky-700"
//               initial={{ opacity: 0, y: -18 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.7, delay: 0.9, ease: "easeOut" }}
//             >
//               <div className="p-2 rounded-lg bg-sky-900/70">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="w-5 h-5 text-sky-400"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path d="M15.477 12.89l1.515 8.526a.5.5 0 01-.81.47l-3.58-2.687a1 1 0 00-1.197 0l-3.586 2.686a.5.5 0 01-.81-.469l1.514-8.526" />
//                   <circle cx="12" cy="8" r="6" />
//                 </svg>
//               </div>
//               <div>
//                 <div className="text-sm font-semibold font-sans text-sky-200">
//                   98% Success Rate
//                 </div>
//                 <div className="text-xs text-slate-400 font-sans">
//                   Client Satisfaction
//                 </div>
//               </div>
//             </motion.div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Hero;
"use client";
import { FC } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { ArrowRight, Play } from "@phosphor-icons/react";

const trustedCompanies = [
  { name: "TechCorp", icon: "building" },
  { name: "SecureVault", icon: "shield" },
  { name: "Innovate", icon: "zap" },
  { name: "GlobalTech", icon: "globe" },
  { name: "GrowthFlow", icon: "trending-up" },
];

const iconMap: { [key: string]: React.ReactNode } = {
  building: (
    <svg
      width="24"
      height="24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="mx-auto mb-1 h-6 w-6 text-slate-400"
      viewBox="0 0 24 24"
    >
      <rect width="16" height="20" x="4" y="2" rx="2" ry="2" />
      <rect width="4" height="4" x="7" y="6" />
      <rect width="4" height="4" x="13" y="6" />
      <rect width="4" height="4" x="7" y="14" />
      <rect width="4" height="4" x="13" y="14" />
    </svg>
  ),
  shield: (
    <svg
      width="24"
      height="24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="mx-auto mb-1 h-6 w-6 text-emerald-400"
      viewBox="0 0 24 24"
    >
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 01-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 011-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 011.52 0C14.51 3.81 17 5 19 5a1 1 0 011 1z" />
    </svg>
  ),
  zap: (
    <svg
      width="24"
      height="24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="mx-auto mb-1 h-6 w-6 text-yellow-300"
      viewBox="0 0 24 24"
    >
      <polygon points="13 2 2 22 22 8 11 22 13 2" />
    </svg>
  ),
  globe: (
    <svg
      width="24"
      height="24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="mx-auto mb-1 h-6 w-6 text-sky-4 00"
      viewBox="0 0 24 24"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20M12 2a14.5 14.5 0 000 20 14.5 14.5 0 000-20" />
    </svg>
  ),
  "trending-up": (
    <svg
      width="24"
      height="24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="mx-auto mb-1 h-6 w-6 text-fuchsia-400"
      viewBox="0 0 24 24"
    >
      <path d="M16 7h6v6" />
      <path d="M22 7l-8.5 8.5-5-5L2 17" />
    </svg>
  ),
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.17, 0.67, 0.83, 0.67] },
  },
};

const Hero: FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-[#0a1827] via-[#062833] to-[#0e2030] pt-28 md:pt-36 pb-24 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-gradient-radial from-[#37ef8d1a] via-[#3e89fa11] to-transparent opacity-70" />
        <div className="absolute left-1/2 top-[30%] w-[700px] h-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-tr from-[#37ef8d44] via-[#70e5fd44] to-transparent blur-3xl opacity-30" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left */}
        <motion.div initial="hidden" animate="visible" variants={stagger}>
          <motion.h1
            className="text-balance sm:text-5xl lg:text-6xl text-4xl font-extrabold tracking-tight text-white mb-6 font-manrope leading-tight"
            variants={fadeUp}
          >
            Engineering Your
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-cyan-300 to-sky-500 font-manrope">
              Vision
            </span>{" "}
            with Digital
            <br className="hidden sm:block" />
            Excellence
          </motion.h1>

          <motion.p
            className="sm:text-xl leading-relaxed text-lg text-slate-300 mb-8 font-sans"
            variants={fadeUp}
          >
            We leverage technology to streamline workflows, accelerate growth,
            and keep you competitive.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 mb-12"
            variants={fadeUp}
          >
            <button
              className="inline-flex items-center px-6 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl bg-gradient-to-r from-emerald-400 via-cyan-400 to-sky-500 text-black hover:brightness-110 transition duration-200"
              aria-label="Let's Work Together"
            >
              <ArrowRight size={20} weight="bold" className="mr-2" />
              Let’s Work Together
            </button>
            <button
              className="inline-flex items-center px-6 py-3 rounded-lg font-semibold border border-cyan-500 text-cyan-400 hover:bg-cyan-900 hover:text-white transition duration-200"
              aria-label="Watch Demo"
            >
              <Play size={20} weight="bold" className="mr-2" />
              Watch Demo
            </button>
          </motion.div>

          {/* Trusted */}
          <motion.div variants={fadeUp}>
            <div className="flex mb-3 space-x-4 items-center">
              <h2 className="text-sm font-semibold uppercase tracking-wider font-sans text-slate-400">
                Trusted by Industry Leaders
              </h2>
              <div className="flex items-center space-x-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 text-yellow-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
                </svg>
                <span className="text-sm font-semibold font-sans text-slate-300">
                  4.9/5 Rating
                </span>
              </div>
            </div>

            <div className="grid grid-cols-3 lg:grid-cols-5 gap-6 items-center opacity-90">
              {trustedCompanies.map(({ name, icon }) => (
                <motion.div
                  key={name}
                  className="rounded-xl px-4 py-2 shadow-sm border text-center bg-black/60 border-cyan-900 hover:scale-105 transition-transform duration-200"
                  aria-label={name}
                  whileHover={{ y: -3, scale: 1.09 }}
                  variants={fadeUp}
                >
                  {iconMap[icon]}
                  <span className="text-xs font-semibold font-sans text-slate-300">
                    {name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Right */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, x: 64 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
        >
          <div
            className="relative rounded-3xl shadow-2xl w-full max-w-lg mx-auto border-2 border-cyan-800 bg-gradient-to-br from-[#121c28] via-[#1c384b] to-[#21303f]"
            style={{ aspectRatio: "16 / 9" }}
          >
            <Image
              src="/assets/hero-image-colored.png"
              alt="Abstract digital spiral showcasing engineering excellence"
              width={800}
              height={600}
              className="w-full h-full object-cover rounded-3xl"
              priority
            />

            {/* Floating badges */}
            <motion.div
              className="absolute -bottom-7 left-6 rounded-xl shadow-lg p-4 flex items-center space-x-3 bg-black/90 backdrop-blur-md border border-emerald-700"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.7, ease: "easeOut" }}
            >
              <div className="p-2 rounded-lg bg-emerald-900/70">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-emerald-400"
                  fill="none"
                  viewBox="0 0 30 30"
                  stroke="currentColor"
                >
                  <path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2" />
                  <path d="M16 3.128a4 4 0 100 7.744" />
                  <path d="M22 21v-2a4 4 0 00-3-3.87" />
                  <circle cx="9" cy="7" r="4" />
                </svg>
              </div>
              <div>
                <div className="text-sm font-semibold font-sans text-emerald-200">
                  500+ Projects
                </div>
                <div className="text-xs text-slate-400 font-sans">
                  Successfully Delivered
                </div>
              </div>
            </motion.div>

            <motion.div
              className="absolute -top-7 right-6 rounded-xl shadow-lg p-4 flex items-center space-x-3 bg-black/90 backdrop-blur-md border border-sky-700"
              initial={{ opacity: 0, y: -18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.9, ease: "easeOut" }}
            >
              <div className="p-2 rounded-lg bg-sky-900/70">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-sky-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M15.477 12.89l1.515 8.526a.5.5 0 01-.81.47l-3.58-2.687a1 1 0 00-1.197 0l-3.586 2.686a.5.5 0 01-.81-.469l1.514-8.526" />
                  <circle cx="12" cy="8" r="6" />
                </svg>
              </div>
              <div>
                <div className="text-sm font-semibold font-sans text-sky-200">
                  98% Success Rate
                </div>
                <div className="text-xs text-slate-400 font-sans">
                  Client Satisfaction
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

// "use client";

// import { FC, useEffect, useRef } from "react";
// import { ArrowRight, Play } from "@phosphor-icons/react";
// import Image from "next/image";

// const trustedCompanies = [
//   { name: "TechCorp", icon: "building" },
//   { name: "SecureVault", icon: "shield" },
//   { name: "Innovate", icon: "zap" },
//   { name: "GlobalTech", icon: "globe" },
//   { name: "GrowthFlow", icon: "trending-up" },
// ];

// const Hero: FC = () => {
//   const containerRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const elements = containerRef.current?.querySelectorAll(".fade-in-up");
//     if (!elements) return;

//     const observer = new IntersectionObserver(
//       entries => {
//         entries.forEach(entry => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add("animate-fade-in-up");
//             observer.unobserve(entry.target);
//           }
//         });
//       },
//       { threshold: 0.1 }
//     );

//     elements.forEach(el => observer.observe(el));

//     return () => observer.disconnect();
//   }, []);

//   return (
//     <section
//       className="bg-[url('https://images.unsplash.com/photo-1635776062360-af423602aff3?w=3840&q=80')] bg-cover pt-20 pb-24"
//       ref={containerRef}
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
//         {/* Left Content */}
//         <div>
//           <h1
//             className="sm:text-5xl lg:text-6xl text-4xl font-extrabold tracking-tight text-gray-100 mb-6 font-manrope leading-tight fade-in-up"
//             style={{ animationDelay: "0.2s" }}
//           >
//             Empowering Your
//             <br />
//             <span className="bg-clip-text text-transparent bg-gradient-to-b from-gray-900 to-black font-manrope">
//               Vision
//             </span>{" "}
//             with Digital
//             <br className="hidden sm:block" />
//             Excellence
//           </h1>
//           <p
//             className="sm:text-xl leading-relaxed text-lg text-gray-700 mb-8 font-sans fade-in-up"
//             style={{ animationDelay: "0.4s" }}
//           >
//             Empowering businesses by leveraging technology to optimize
//             workflows, accelerate growth, and maintain a competitive edge in
//             today’s fast-paced digital world.
//           </p>
//           <div
//             className="flex flex-col sm:flex-row gap-4 mb-12 fade-in-up"
//             style={{ animationDelay: "0.6s" }}
//           >
//             <button
//               className="inline-flex items-center px-6 py-3 rounded-lg font-medium shadow-lg hover:shadow-xl font-sans bg-gray-100 text-black hover:bg-gray-200 transition duration-200"
//               aria-label="Let's Work Together"
//             >
//               <ArrowRight size={20} weight="bold" className="mr-2" />
//               Lets Work Together
//             </button>
//             <button
//               className="inline-flex items-center px-6 py-3 rounded-lg font-medium border border-gray-700 text-gray-800 hover:bg-gray-950 hover:text-gray-100 transition duration-200 font-sans"
//               aria-label="Watch Demo"
//             >
//               <Play size={20} weight="bold" className="mr-2" />
//               Watch Demo
//             </button>
//           </div>
//           {/* Trusted Companies */}
//           <div className="fade-in-up" style={{ animationDelay: "0.8s" }}>
//             <div className="flex mb-4 space-x-4 items-center">
//               <h2 className="text-sm font-semibold uppercase tracking-wider font-sans text-gray-500">
//                 Trusted by Industry Leaders
//               </h2>
//               <div className="flex items-center space-x-1">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="w-4 h-4 text-yellow-400"
//                   fill="currentColor"
//                   viewBox="0 0 20 20"
//                   aria-hidden="true"
//                 >
//                   <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
//                 </svg>
//                 <span className="text-sm font-medium font-sans text-gray-300">
//                   4.9/5 Rating
//                 </span>
//               </div>
//             </div>
//             <div className="grid grid-cols-3 lg:grid-cols-5 gap-6 items-center opacity-70">
//               {trustedCompanies.map(({ name, icon }) => (
//                 <div
//                   key={name}
//                   className="rounded-lg px-4 py-2 shadow-sm border text-center bg-black border-gray-900"
//                   aria-label={name}
//                 >
//                   {/* Icons simplified for example */}
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="mx-auto mb-1 h-6 w-6 text-gray-400"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                     aria-hidden="true"
//                   >
//                     {icon === "building" && (
//                       <rect width="16" height="20" x="4" y="2" rx="2" ry="2" />
//                     )}
//                     {icon === "shield" && (
//                       <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 01-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 011-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 011.52 0C14.51 3.81 17 5 19 5a1 1 0 011 1z" />
//                     )}
//                     {icon === "zap" && (
//                       <path d="M4 14a1 1 0 01-.78-1.63l9.9-10.2a.5.5 0 01.86.46l-1.92 6.02A1 1 0 0013 10h7a1 1 0 01.78 1.63l-9.9 10.2a.5.5 0 01-.86-.46l1.92-6.02A1 1 0 0011 14z" />
//                     )}
//                     {icon === "globe" && (
//                       <>
//                         <circle cx="12" cy="12" r="10" />
//                         <path d="M12 2a14.5 14.5 0 000 20 14.5 14.5 0 000-20" />
//                         <path d="M2 12h20" />
//                       </>
//                     )}
//                     {icon === "trending-up" && (
//                       <>
//                         <path d="M16 7h6v6" />
//                         <path d="M22 7l-8.5 8.5-5-5L2 17" />
//                       </>
//                     )}
//                   </svg>
//                   <span className="text-xs font-medium font-sans text-gray-400">
//                     {name}
//                   </span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Right Content */}
//         {/* Right Content */}
//         <div className="relative fade-in-up" style={{ animationDelay: "1s" }}>
//           <div
//             className="relative rounded-2xl shadow-2xl w-full max-w-lg mx-auto"
//             style={{ aspectRatio: "16 / 9" }} // maintain aspect ratio of container
//           >
//             <Image
//               src="/assets/hero-image-colored.png"
//               alt="Describe your image"
//               width={800} // Use the actual image size or what fits your design
//               height={600}
//               className="w-full h-full object-cover rounded-2xl"
//             />

//             {/* Floating badges */}
//             <div className="absolute -bottom-6 left-6 rounded-xl shadow-lg p-4 flex items-center space-x-3 bg-black bg-opacity-80">
//               <div className="p-2 rounded-lg bg-emerald-900">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="w-5 h-5 text-emerald-400"
//                   fill="none"
//                   viewBox="0 0 30 30"
//                   stroke="currentColor"
//                   aria-hidden="true"
//                 >
//                   <path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2" />
//                   <path d="M16 3.128a4 4 0 100 7.744" />
//                   <path d="M22 21v-2a4 4 0 00-3-3.87" />
//                   <circle cx="9" cy="7" r="4" />
//                 </svg>
//               </div>
//               <div>
//                 <div className="text-sm font-semibold font-sans text-gray-100">
//                   500+ Projects
//                 </div>
//                 <div className="text-xs text-gray-500 font-sans">
//                   Successfully Delivered
//                 </div>
//               </div>
//             </div>
//             <div className="absolute -top-6 right-6 rounded-xl shadow-lg p-4 flex items-center space-x-3 bg-black bg-opacity-80">
//               <div className="p-2 rounded-lg bg-blue-900">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="w-5 h-5 text-blue-400"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                   aria-hidden="true"
//                 >
//                   <path d="M15.477 12.89l1.515 8.526a.5.5 0 01-.81.47l-3.58-2.687a1 1 0 00-1.197 0l-3.586 2.686a.5.5 0 01-.81-.469l1.514-8.526" />
//                   <circle cx="12" cy="8" r="6" />
//                 </svg>
//               </div>
//               <div>
//                 <div className="text-sm font-semibold font-sans text-gray-100">
//                   98% Success Rate
//                 </div>
//                 <div className="text-xs text-gray-500 font-sans">
//                   Client Satisfaction
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;

// "use client";

// import { FC, useEffect, useRef } from "react";
// import { ArrowRight, Play } from "@phosphor-icons/react";

// const trustedCompanies = [
//   { name: "TechCorp", icon: "building" },
//   { name: "SecureVault", icon: "shield" },
//   { name: "Innovate", icon: "zap" },
//   { name: "GlobalTech", icon: "globe" },
//   { name: "GrowthFlow", icon: "trending-up" },
// ];

// const Hero: FC = () => {
//   const containerRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const elements = containerRef.current?.querySelectorAll(".fade-in-up");
//     if (!elements) return;

//     const observer = new IntersectionObserver(
//       entries => {
//         entries.forEach(entry => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add("animate-fade-in-up");
//             observer.unobserve(entry.target);
//           }
//         });
//       },
//       { threshold: 0.1 }
//     );

//     elements.forEach(el => observer.observe(el));

//     return () => observer.disconnect();
//   }, []);

//   return (
//     <section
//       className="bg-[url('https://images.unsplash.com/photo-1635776062360-af423602aff3?w=3840&q=80')] bg-cover pt-20 pb-24"
//       ref={containerRef}
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
//         {/* Left Content */}
//         <div>
//           <h1
//             className="sm:text-5xl lg:text-6xl text-4xl font-extrabold tracking-tight text-gray-100 mb-6 font-manrope leading-tight fade-in-up"
//             style={{ animationDelay: "0.2s" }}
//           >
//             Empowering Your
//             <br />
//             <span className="bg-clip-text text-transparent bg-gradient-to-b from-gray-900 to-black font-manrope">
//               Vision
//             </span>{" "}
//             with Digital
//             <br className="hidden sm:block" />
//             Excellence
//           </h1>
//           <p
//             className="sm:text-xl leading-relaxed text-lg text-gray-700 mb-8 font-sans fade-in-up"
//             style={{ animationDelay: "0.4s" }}
//           >
//             Empowering businesses by leveraging technology to optimize
//             workflows, accelerate growth, and maintain a competitive edge in
//             today’s fast-paced digital world.
//           </p>
//           <div
//             className="flex flex-col sm:flex-row gap-4 mb-12 fade-in-up"
//             style={{ animationDelay: "0.6s" }}
//           >
//             <button
//               className="inline-flex items-center px-6 py-3 rounded-lg font-medium shadow-lg hover:shadow-xl font-sans bg-gray-100 text-black hover:bg-gray-200 transition duration-200"
//               aria-label="Let's Work Together"
//             >
//               <ArrowRight size={20} weight="bold" className="mr-2" />
//               Lets Work Together
//             </button>
//             <button
//               className="inline-flex items-center px-6 py-3 rounded-lg font-medium border border-gray-700 text-gray-800 hover:bg-gray-950 hover:text-gray-100 transition duration-200 font-sans"
//               aria-label="Watch Demo"
//             >
//               <Play size={20} weight="bold" className="mr-2" />
//               Watch Demo
//             </button>
//           </div>
//           {/* Trusted Companies */}
//           <div className="fade-in-up" style={{ animationDelay: "0.8s" }}>
//             <div className="flex mb-4 space-x-4 items-center">
//               <h2 className="text-sm font-semibold uppercase tracking-wider font-sans text-gray-500">
//                 Trusted by Industry Leaders
//               </h2>
//               <div className="flex items-center space-x-1">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="w-4 h-4 text-yellow-400"
//                   fill="currentColor"
//                   viewBox="0 0 20 20"
//                   aria-hidden="true"
//                 >
//                   <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
//                 </svg>
//                 <span className="text-sm font-medium font-sans text-gray-300">
//                   4.9/5 Rating
//                 </span>
//               </div>
//             </div>
//             <div className="grid grid-cols-3 lg:grid-cols-5 gap-6 items-center opacity-70">
//               {trustedCompanies.map(({ name, icon }) => (
//                 <div
//                   key={name}
//                   className="rounded-lg px-4 py-2 shadow-sm border text-center bg-black border-gray-900"
//                   aria-label={name}
//                 >
//                   {/* Icons simplified for example */}
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="mx-auto mb-1 h-6 w-6 text-gray-400"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                     aria-hidden="true"
//                   >
//                     {icon === "building" && (
//                       <rect width="16" height="20" x="4" y="2" rx="2" ry="2" />
//                     )}
//                     {icon === "shield" && (
//                       <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 01-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 011-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 011.52 0C14.51 3.81 17 5 19 5a1 1 0 011 1z" />
//                     )}
//                     {icon === "zap" && (
//                       <path d="M4 14a1 1 0 01-.78-1.63l9.9-10.2a.5.5 0 01.86.46l-1.92 6.02A1 1 0 0013 10h7a1 1 0 01.78 1.63l-9.9 10.2a.5.5 0 01-.86-.46l1.92-6.02A1 1 0 0011 14z" />
//                     )}
//                     {icon === "globe" && (
//                       <>
//                         <circle cx="12" cy="12" r="10" />
//                         <path d="M12 2a14.5 14.5 0 000 20 14.5 14.5 0 000-20" />
//                         <path d="M2 12h20" />
//                       </>
//                     )}
//                     {icon === "trending-up" && (
//                       <>
//                         <path d="M16 7h6v6" />
//                         <path d="M22 7l-8.5 8.5-5-5L2 17" />
//                       </>
//                     )}
//                   </svg>
//                   <span className="text-xs font-medium font-sans text-gray-400">
//                     {name}
//                   </span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Right Content */}
//         <div className="relative fade-in-up" style={{ animationDelay: "1s" }}>
//           <div className="relative rounded-2xl overflow-hidden shadow-2xl w-full max-w-lg mx-auto">
//             <img
//               src="https://images.unsplash.com/photo-1698807390276-725f3a7e41cf?w=1600&q=80"
//               alt="Team collaboration"
//               className="w-full object-cover rounded-2xl"
//             />
//             {/* Floating badges */}
//             <div className="absolute -bottom-6 -left-6 rounded-xl shadow-lg p-4 flex items-center space-x-3 bg-black bg-opacity-80">
//               <div className="p-2 rounded-lg bg-emerald-900">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="w-5 h-5 text-emerald-400"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                   aria-hidden="true"
//                 >
//                   <path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2" />
//                   <path d="M16 3.128a4 4 0 100 7.744" />
//                   <path d="M22 21v-2a4 4 0 00-3-3.87" />
//                   <circle cx="9" cy="7" r="4" />
//                 </svg>
//               </div>
//               <div>
//                 <div className="text-sm font-semibold font-sans text-gray-100">
//                   500+ Projects
//                 </div>
//                 <div className="text-xs text-gray-500 font-sans">
//                   Successfully Delivered
//                 </div>
//               </div>
//             </div>
//             <div className="absolute -top-6 -right-6 rounded-xl shadow-lg p-4 flex items-center space-x-3 bg-black bg-opacity-80">
//               <div className="p-2 rounded-lg bg-blue-900">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="w-5 h-5 text-blue-400"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                   aria-hidden="true"
//                 >
//                   <path d="M15.477 12.89l1.515 8.526a.5.5 0 01-.81.47l-3.58-2.687a1 1 0 00-1.197 0l-3.586 2.686a.5.5 0 01-.81-.469l1.514-8.526" />
//                   <circle cx="12" cy="8" r="6" />
//                 </svg>
//               </div>
//               <div>
//                 <div className="text-sm font-semibold font-sans text-gray-100">
//                   98% Success Rate
//                 </div>
//                 <div className="text-xs text-gray-500 font-sans">
//                   Client Satisfaction
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;

// // components/Hero.tsx
// "use client";

// import { FC } from "react";
// import { ArrowRight, Play } from "@phosphor-icons/react";

// const trustedCompanies = [
//   { name: "TechCorp", icon: "building" },
//   { name: "SecureVault", icon: "shield" },
//   { name: "Innovate", icon: "zap" },
//   { name: "GlobalTech", icon: "globe" },
//   { name: "GrowthFlow", icon: "trending-up" },
// ];

// const Hero: FC = () => {
//   return (
//     <section className="bg-[url('https://images.unsplash.com/photo-1635776062360-af423602aff3?w=3840&q=80')] bg-cover pt-20 pb-24">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
//         {/* Left Content */}
//         <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
//           <h1 className="sm:text-5xl lg:text-6xl text-4xl font-extrabold tracking-tight text-gray-100 mb-6 font-manrope leading-tight">
//             Empowering Your
//             <br />
//             <span className="bg-clip-text text-transparent bg-gradient-to-b from-gray-900 to-black font-manrope">
//               Vision
//             </span>{" "}
//             with Digital
//             <br className="hidden sm:block" />
//             Excellence
//           </h1>
//           <p className="sm:text-xl leading-relaxed text-lg text-gray-700 mb-8 font-sans">
//             Empowering businesses by leveraging technology to optimize
//             workflows, accelerate growth, and maintain a competitive edge in
//             today’s fast-paced digital world.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 mb-12">
//             <button
//               className="inline-flex items-center px-6 py-3 rounded-lg font-medium shadow-lg hover:shadow-xl font-sans bg-gray-100 text-black hover:bg-gray-200 transition duration-200"
//               aria-label="Let's Work Together"
//             >
//               <ArrowRight size={20} weight="bold" className="mr-2" />
//               Lets Work Together
//             </button>
//             <button
//               className="inline-flex items-center px-6 py-3 rounded-lg font-medium border border-gray-700 text-gray-800 hover:bg-gray-950 hover:text-gray-100 transition duration-200 font-sans"
//               aria-label="Watch Demo"
//             >
//               <Play size={20} weight="bold" className="mr-2" />
//               Watch Demo
//             </button>
//           </div>
//           {/* Trusted Companies */}
//           <div
//             className="animate-fade-in-up"
//             style={{ animationDelay: "0.4s" }}
//           >
//             <div className="flex mb-4 space-x-4 items-center">
//               <h2 className="text-sm font-semibold uppercase tracking-wider font-sans text-gray-500">
//                 Trusted by Industry Leaders
//               </h2>
//               <div className="flex items-center space-x-1">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="w-4 h-4 text-yellow-400"
//                   fill="currentColor"
//                   viewBox="0 0 20 20"
//                   aria-hidden="true"
//                 >
//                   <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.974a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.388 2.462a1 1 0 00-.364 1.118l1.287 3.974c.3.921-.755 1.688-1.54 1.118l-3.388-2.462a1 1 0 00-1.175 0l-3.388 2.462c-.785.57-1.838-.197-1.539-1.118l1.287-3.974a1 1 0 00-.364-1.118L2.045 9.4c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.286-3.974z" />
//                 </svg>
//                 <span className="text-sm font-medium font-sans text-gray-300">
//                   4.9/5 Rating
//                 </span>
//               </div>
//             </div>
//             <div className="grid grid-cols-3 lg:grid-cols-5 gap-6 items-center opacity-70">
//               {trustedCompanies.map(({ name, icon }) => (
//                 <div
//                   key={name}
//                   className="rounded-lg px-4 py-2 shadow-sm border text-center bg-black border-gray-900"
//                   aria-label={name}
//                 >
//                   {/* For icons you can replace with Phosphor or HeroIcons or your custom SVG */}
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="mx-auto mb-1 h-6 w-6 text-gray-400"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                     aria-hidden="true"
//                   >
//                     {/* Example simple icons by name, you should customize this */}
//                     {icon === "building" && (
//                       <rect width="16" height="20" x="4" y="2" rx="2" ry="2" />
//                     )}
//                     {icon === "shield" && (
//                       <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 01-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 011-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 011.52 0C14.51 3.81 17 5 19 5a1 1 0 011 1z" />
//                     )}
//                     {icon === "zap" && (
//                       <path d="M4 14a1 1 0 01-.78-1.63l9.9-10.2a.5.5 0 01.86.46l-1.92 6.02A1 1 0 0013 10h7a1 1 0 01.78 1.63l-9.9 10.2a.5.5 0 01-.86-.46l1.92-6.02A1 1 0 0011 14z" />
//                     )}
//                     {icon === "globe" && (
//                       <>
//                         <circle cx="12" cy="12" r="10" />
//                         <path d="M12 2a14.5 14.5 0 000 20 14.5 14.5 0 000-20" />
//                         <path d="M2 12h20" />
//                       </>
//                     )}
//                     {icon === "trending-up" && (
//                       <>
//                         <path d="M16 7h6v6" />
//                         <path d="M22 7l-8.5 8.5-5-5L2 17" />
//                       </>
//                     )}
//                   </svg>
//                   <span className="text-xs font-medium font-sans text-gray-400">
//                     {name}
//                   </span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Right Content */}
//         <div
//           className="relative animate-fade-in-up"
//           style={{ animationDelay: "0.6s" }}
//         >
//           <div className="relative rounded-2xl overflow-hidden shadow-2xl w-full max-w-lg mx-auto">
//             <img
//               src="https://images.unsplash.com/photo-1698807390276-725f3a7e41cf?w=1600&q=80"
//               alt="Team collaboration"
//               className="w-full object-cover rounded-2xl"
//             />
//             {/* Floating badges */}
//             <div className="absolute -bottom-6 -left-6 rounded-xl shadow-lg p-4 flex items-center space-x-3 bg-black bg-opacity-80">
//               <div className="p-2 rounded-lg bg-emerald-900">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="w-5 h-5 text-emerald-400"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                   aria-hidden="true"
//                 >
//                   <path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2" />
//                   <path d="M16 3.128a4 4 0 100 7.744" />
//                   <path d="M22 21v-2a4 4 0 00-3-3.87" />
//                   <circle cx="9" cy="7" r="4" />
//                 </svg>
//               </div>
//               <div>
//                 <div className="text-sm font-semibold font-sans text-gray-100">
//                   500+ Projects
//                 </div>
//                 <div className="text-xs text-gray-500 font-sans">
//                   Successfully Delivered
//                 </div>
//               </div>
//             </div>
//             <div className="absolute -top-6 -right-6 rounded-xl shadow-lg p-4 flex items-center space-x-3 bg-black bg-opacity-80">
//               <div className="p-2 rounded-lg bg-blue-900">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="w-5 h-5 text-blue-400"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                   aria-hidden="true"
//                 >
//                   <path d="M15.477 12.89l1.515 8.526a.5.5 0 01-.81.47l-3.58-2.687a1 1 0 00-1.197 0l-3.586 2.686a.5.5 0 01-.81-.469l1.514-8.526" />
//                   <circle cx="12" cy="8" r="6" />
//                 </svg>
//               </div>
//               <div>
//                 <div className="text-sm font-semibold font-sans text-gray-100">
//                   98% Success Rate
//                 </div>
//                 <div className="text-xs text-gray-500 font-sans">
//                   Client Satisfaction
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;

// // components/Hero.tsx
// "use client";

// import { ArrowRightIcon, PlayIcon } from "@phosphor-icons/react";
// import { BuildingOffice2Icon } from "@heroicons/react/24/solid";
// import { FC } from "react";

// const trustedCompanies = [
//   "TechCorp",
//   "SecureVault",
//   "Innovate",
//   "GlobalTech",
//   "GrowthFlow",
// ];

// const Hero: FC = () => {
//   return (
//     // <section className="flex flex-col md:flex-row gap-10 justify-between items-center w-full max-w-7xl mx-auto px-8 py-20 md:py-32">
//     <section className="flex flex-col md:flex-row gap-10 justify-between items-center w-full max-w-7xl mx-auto px-8 py-12 md:py-20">
//       {/* Left: Headline, CTA */}
//       <div className="flex-1 flex flex-col items-start max-w-xl">
//         {/* Breadcrumb */}
//         {/* <nav
//           aria-label="Breadcrumb"
//           className="flex items-center gap-2 mb-3 text-sm text-gray-500"
//         >
//           <ol className="inline-flex items-center space-x-2">
//             <li>
//               <a href="#" className="hover:underline">
//                 Home
//               </a>
//             </li>
//             <li aria-current="page" className="text-gray-400">
//               › About Us
//             </li>
//           </ol>
//         </nav> */}

//         <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-white mb-6">
//           Empowering Your
//           <br />
//           <span className="text-black/90">Vision</span> with Digital
//           <br />
//           Excellence
//         </h1>

//         <p className="text-lg text-white/80 mb-8">
//           Empowering businesses by leveraging technology to optimize workflows,
//           accelerate growth, and maintain a competitive edge in today’s
//           fast-paced digital world.
//         </p>

//         <div className="flex gap-4 mb-8">
//           <button
//             type="button"
//             className="bg-white text-black font-semibold px-6 py-3 rounded-xl shadow flex items-center gap-2 hover:bg-gray-100 transition"
//             aria-label="Let’s Work Together"
//           >
//             <ArrowRightIcon size={22} /> Let’s Work Together
//           </button>

//           <button
//             type="button"
//             className="border border-white/50 text-white font-semibold px-6 py-3 rounded-xl shadow flex items-center gap-2 hover:bg-white/10 transition"
//             aria-label="Watch Demo"
//           >
//             <PlayIcon size={22} /> Watch Demo
//           </button>
//         </div>

//         {/* Trusted logos */}
//         <div>
//           <div className="mb-2 text-xs font-medium text-gray-400 tracking-widest flex items-center gap-2">
//             TRUSTED BY INDUSTRY LEADERS{" "}
//             <span className="text-[#FFB800] text-lg">★</span>
//           </div>
//           <div className="flex gap-4 flex-wrap">
//             {trustedCompanies.map(name => (
//               <div
//                 key={name}
//                 className="bg-[#111827]/70 rounded-xl px-4 py-3 flex flex-col items-center shadow text-white/80 text-xs font-medium gap-1"
//               >
//                 <BuildingOffice2Icon
//                   className="w-6 h-6 text-[#FFB800] mb-1"
//                   aria-hidden="true"
//                 />
//                 <span>{name}</span>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Right: Hero Image + Floating Stats Badges */}
//       {/* Right: Hero Image + Floating Stats Badges */}
//       <div className="flex-1 flex flex-col items-center md:items-end w-full max-w-lg relative">
//         {/* Background glow */}
//         <div
//           aria-hidden="true"
//           className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-[#0296FE]/30 via-transparent to-[#11A944]/40 filter blur-3xl opacity-60"
//         />

//         {/* Product/Interface Mockup Container */}
//         <div
//           className="relative rounded-3xl overflow-hidden bg-black/90 shadow-2xl w-[370px] h-[260px] flex items-center justify-center cursor-pointer
//       hover:scale-[1.04] transition-transform duration-500 ease-in-out"
//           aria-label="BusiOrbitX product snapshot"
//           role="img"
//         >
//           {/* Replace this SVG with your real product image or design */}
//           <img
//             src="/images/busiorbitx-snapshot.png"
//             alt="BusiOrbitX dashboard preview"
//             className="object-cover w-full h-full"
//             loading="lazy"
//           />
//         </div>

//         {/* Floating Stats Badges */}
//         <div
//           className="absolute top-4 right-6 bg-black/90 rounded-xl px-5 py-2 shadow-lg flex items-center gap-3 text-white text-sm font-semibold cursor-default select-none
//       animate-fadeIn"
//         >
//           <svg
//             className="w-5 h-5 text-[#0296FE]"
//             fill="currentColor"
//             viewBox="0 0 24 24"
//             aria-hidden="true"
//           >
//             {/* Icon for success */}
//             <path
//               d="M9 12l2 2 4-4"
//               stroke="currentColor"
//               strokeWidth={2}
//               fill="none"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             />
//           </svg>
//           <span className="bg-[#0236A1] rounded-full px-2 py-1 text-xs mr-2">
//             98% Success Rate
//           </span>
//           Client Satisfaction
//         </div>

//         <div
//           className="absolute bottom-6 left-6 bg-black/90 rounded-xl px-5 py-2 shadow-lg flex items-center gap-3 text-white text-sm font-semibold cursor-default select-none
//       animate-fadeIn delay-500"
//         >
//           <svg
//             className="w-5 h-5 text-[#11A944]"
//             fill="currentColor"
//             viewBox="0 0 24 24"
//             aria-hidden="true"
//           >
//             {/* Icon for projects */}
//             <path
//               d="M3 7h18M3 12h18M3 17h18"
//               stroke="currentColor"
//               strokeWidth={2}
//               fill="none"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             />
//           </svg>
//           <span className="bg-[#07c38f] rounded-full px-2 py-1 text-xs mr-2">
//             500+ Projects
//           </span>
//           Successfully Delivered
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;
