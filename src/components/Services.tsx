// components/Services.tsx
import { FC, ReactNode } from "react";

interface Service {
  title: string;
  desc: string;
  icon: ReactNode;
}

const services: Service[] = [
  {
    title: "Website Development",
    desc: "Elite web & app experiences for growth.",
    icon: (
      <svg
        width="36"
        height="36"
        fill="none"
        viewBox="0 0 24 24"
        aria-hidden="true"
        focusable="false"
      >
        <rect
          x="3"
          y="5"
          width="18"
          height="14"
          rx="3"
          fill="#0296FE"
          fillOpacity="0.1"
        />
        <rect x="3" y="5" width="18" height="3" rx="1.5" fill="#0296FE" />
        <rect x="6" y="11" width="12" height="2" rx="1" fill="#11A944" />
      </svg>
    ),
  },
  {
    title: "ERP & Automation",
    desc: "Custom ERP, automation & process tools.",
    icon: (
      <svg
        width="36"
        height="36"
        fill="none"
        viewBox="0 0 24 24"
        aria-hidden="true"
        focusable="false"
      >
        <circle cx="12" cy="12" r="10" fill="#11A944" fillOpacity="0.12" />
        <path
          d="M12 8v8M8 12h8"
          stroke="#11A944"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Invoice & GST Software",
    desc: "Simplify billing, compliance & finances.",
    icon: (
      <svg
        width="36"
        height="36"
        fill="none"
        viewBox="0 0 24 24"
        aria-hidden="true"
        focusable="false"
      >
        <rect
          x="4"
          y="4"
          width="16"
          height="16"
          rx="3"
          fill="#FFB800"
          fillOpacity="0.14"
        />
        <path
          d="M8 8h8M8 12h8M8 16h4"
          stroke="#FFB800"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Custom Solutions",
    desc: "API, integration & SaaS innovation.",
    icon: (
      <svg
        width="36"
        height="36"
        fill="none"
        viewBox="0 0 24 24"
        aria-hidden="true"
        focusable="false"
      >
        <circle cx="12" cy="12" r="10" fill="#7D47C4" fillOpacity="0.14" />
        <path
          d="M8 16l8-8M16 16l-8-8"
          stroke="#7D47C4"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
];

const Services: FC = () => {
  return (
    <section
      aria-labelledby="services-title"
      className="w-full flex justify-center py-16 px-4 bg-gradient-to-tr from-[#0f1225] to-[#181b32]"
    >
      <div className="w-full max-w-6xl">
        <h2
          id="services-title"
          className="text-3xl md:text-4xl font-extrabold mb-12 text-white text-center"
        >
          Our Services
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {services.map(({ title, desc, icon }, i) => (
            <li key={i} role="listitem">
              <button
                type="button"
                aria-label={title}
                className="w-full bg-[#181B32]/90 rounded-2xl p-7 flex flex-col items-center shadow-lg border border-white/20 hover:scale-105 hover:bg-gradient-to-br from-[#0296FE]/30 to-[#11A944]/30 transition-transform focus:outline-none focus:ring-4 focus:ring-[#11A944] focus:ring-opacity-70 cursor-pointer"
              >
                <div className="mb-5">{icon}</div>
                <h3 className="font-bold text-lg text-white mb-3">{title}</h3>
                <p className="text-white/70 text-center text-sm">{desc}</p>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Services;

// // components/Services.tsx
// import { FC, ReactNode } from "react";

// interface Service {
//   title: string;
//   desc: string;
//   icon: ReactNode;
// }

// const services: Service[] = [
//   {
//     title: "Website Development",
//     desc: "Elite web & app experiences for growth.",
//     icon: (
//       <svg
//         width="36"
//         height="36"
//         fill="none"
//         viewBox="0 0 24 24"
//         aria-hidden="true"
//         focusable="false"
//       >
//         <rect
//           x="3"
//           y="5"
//           width="18"
//           height="14"
//           rx="3"
//           fill="#0296FE"
//           fillOpacity="0.1"
//         />
//         <rect x="3" y="5" width="18" height="3" rx="1.5" fill="#0296FE" />
//         <rect x="6" y="11" width="12" height="2" rx="1" fill="#11A944" />
//       </svg>
//     ),
//   },
//   {
//     title: "ERP & Automation",
//     desc: "Custom ERP, automation & process tools.",
//     icon: (
//       <svg
//         width="36"
//         height="36"
//         fill="none"
//         viewBox="0 0 24 24"
//         aria-hidden="true"
//         focusable="false"
//       >
//         <circle cx="12" cy="12" r="10" fill="#11A944" fillOpacity="0.12" />
//         <path
//           d="M12 8v8M8 12h8"
//           stroke="#11A944"
//           strokeWidth="2"
//           strokeLinecap="round"
//         />
//       </svg>
//     ),
//   },
//   {
//     title: "Invoice & GST Software",
//     desc: "Simplify billing, compliance & finances.",
//     icon: (
//       <svg
//         width="36"
//         height="36"
//         fill="none"
//         viewBox="0 0 24 24"
//         aria-hidden="true"
//         focusable="false"
//       >
//         <rect
//           x="4"
//           y="4"
//           width="16"
//           height="16"
//           rx="3"
//           fill="#FFB800"
//           fillOpacity="0.14"
//         />
//         <path
//           d="M8 8h8M8 12h8M8 16h4"
//           stroke="#FFB800"
//           strokeWidth="2"
//           strokeLinecap="round"
//         />
//       </svg>
//     ),
//   },
//   {
//     title: "Custom Solutions",
//     desc: "API, integration & SaaS innovation.",
//     icon: (
//       <svg
//         width="36"
//         height="36"
//         fill="none"
//         viewBox="0 0 24 24"
//         aria-hidden="true"
//         focusable="false"
//       >
//         <circle cx="12" cy="12" r="10" fill="#7D47C4" fillOpacity="0.14" />
//         <path
//           d="M8 16l8-8M16 16l-8-8"
//           stroke="#7D47C4"
//           strokeWidth="2"
//           strokeLinecap="round"
//         />
//       </svg>
//     ),
//   },
// ];

// const Services: FC = () => {
//   return (
//     <section className="w-full flex justify-center py-16 px-4">
//       <div className="w-full max-w-6xl">
//         <h2 className="text-2xl md:text-4xl font-bold mb-10 text-white text-center">
//           Our Services
//         </h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-7">
//           {services.map(({ title, desc, icon }, i) => (
//             <div
//               key={i}
//               className="bg-[#181B32]/80 rounded-2xl p-7 flex flex-col items-center shadow-lg border border-white/10 hover:scale-105 hover:bg-gradient-to-br from-[#0296FE]/30 to-[#11A944]/30 transition-transform cursor-pointer"
//               role="region"
//               aria-label={title}
//               tabIndex={0}
//             >
//               <div className="mb-4">{icon}</div>
//               <div className="font-bold text-lg text-white mb-2">{title}</div>
//               <div className="text-white/70 text-center text-sm">{desc}</div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Services;
