// "use client";

// import { FC } from "react";
// import Image from "next/image";

// const InnovationSection: FC = () => {
//   return (
//     <section className="py-24 bg-gray-950">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
//         {/* Text Content */}
//         <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
//           <div className="flex items-center space-x-2 mb-4">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="lucide lucide-compass w-5 h-5 text-emerald-400"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth={2}
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               viewBox="0 0 24 24"
//             >
//               <path d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z"></path>
//               <circle cx="12" cy="12" r="10"></circle>
//             </svg>
//             <h2 className="text-sm font-semibold uppercase tracking-wider font-sans text-emerald-400">
//               Our Mission
//             </h2>
//           </div>
//           <h3 className="sm:text-4xl lg:text-5xl text-3xl text-gray-100 tracking-tight font-manrope mb-6">
//             Innovating Today.
//             <br className="hidden sm:block" />
//             <span className="text-transparent bg-clip-text bg-gradient-to-r font-manrope from-emerald-400 to-emerald-600">
//               Empowering Tomorrow.
//             </span>
//           </h3>
//           <p className="text-lg mb-8 leading-relaxed font-sans text-gray-400">
//             With over 8 years of hands-on experience in cloud-native
//             development, enterprise architecture, and digital transformation, we
//             empower businesses to adopt change-centric cultures and thrive in an
//             increasingly competitive digital ecosystem.
//           </p>
//           <div className="space-y-4 mb-8">
//             {[
//               "Enterprise-grade security and compliance",
//               "Scalable cloud-native architectures",
//               "24/7 dedicated support and monitoring",
//             ].map(text => (
//               <div key={text} className="flex items-center space-x-3">
//                 <div className="p-2 rounded-lg bg-emerald-900">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="lucide lucide-check w-4 h-4 text-emerald-400"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth={2}
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     viewBox="0 0 24 24"
//                   >
//                     <path d="M20 6 9 17l-5-5"></path>
//                   </svg>
//                 </div>
//                 <span className="font-sans text-gray-300">{text}</span>
//               </div>
//             ))}
//           </div>
//           <button className="inline-flex items-center px-6 py-3 rounded-lg font-medium transition-all duration-200 shadow-lg hover:shadow-xl font-sans bg-gray-100 text-black hover:bg-gray-200">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="lucide lucide-book-open w-4 h-4 mr-2"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth={2}
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               viewBox="0 0 24 24"
//             >
//               <path d="M12 7v14"></path>
//               <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path>
//             </svg>
//             Learn More
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="lucide lucide-arrow-right w-4 h-4 ml-2"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth={2}
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               viewBox="0 0 24 24"
//             >
//               <path d="M5 12h14"></path>
//               <path d="m12 5 7 7-7 7"></path>
//             </svg>
//           </button>
//         </div>

//         {/* Image Content */}
//         <div
//           className="relative animate-fade-in-up"
//           style={{ animationDelay: "0.4s" }}
//         >
//           {/* Added padding to create space for badges */}
//           <div className="relative rounded-2xl shadow-2xl p-6">
//             <Image
//               src="https://images.unsplash.com/photo-1623150502742-6a849aa94be4?w=1600&q=80"
//               alt="Innovation team"
//               width={1600} // Set to the image's true pixel width
//               height={900} // Set to the image's true pixel height (adjust if needed)
//               className="w-full object-cover rounded-2xl overflow-hidden"
//             />
//             {/* Top Left Stat */}
//             <div className="absolute top-6 left-6 p-4 rounded-xl shadow-lg flex items-center space-x-3 bg-black bg-opacity-80">
//               <div className="flex -space-x-2">
//                 <Image
//                   src="https://images.unsplash.com/photo-1623150502742-6a849aa94be4?w=1600&q=80"
//                   alt="Innovation team"
//                   width={1600}
//                   height={900} // adjust to your actual image aspect ratio if known
//                   className="w-full object-cover rounded-2xl overflow-hidden"
//                 />
//                 {/* Top Left Stat */}
//                 <div className="absolute top-6 left-6 p-4 rounded-xl shadow-lg flex items-center space-x-3 bg-black bg-opacity-80">
//                   <div className="flex -space-x-2">
//                     <Image
//                       src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=40&q=80"
//                       alt="Team"
//                       width={32} // w-8 = 2rem = 32px
//                       height={32} // h-8 = 2rem = 32px
//                       className="w-8 h-8 rounded-full border-2 border-black"
//                     />
//                     <Image
//                       src="https://images.unsplash.com/photo-1470406852806-b97e5d92e2aa?w=320&q=80"
//                       alt="Team"
//                       width={32}
//                       height={32}
//                       className="w-8 h-8 rounded-full border-2 border-black object-cover"
//                     />
//                     <Image
//                       src="https://images.unsplash.com/photo-1456321710263-fb5054efe647?w=320&q=80"
//                       alt="Team"
//                       width={32}
//                       height={32}
//                       className="w-8 h-8 rounded-full border-2 border-black object-cover"
//                     />
//                   </div>
//                 </div>
//               </div>
//               <div>
//                 <div className="text-sm font-semibold font-sans text-gray-100">
//                   Expert Team
//                 </div>
//                 <div className="text-xs text-gray-500 font-sans">
//                   50+ Specialists
//                 </div>
//               </div>
//             </div>
//             {/* Bottom Right Stat */}
//             <div className="absolute bottom-6 right-6 p-4 rounded-xl shadow-lg flex items-center space-x-3 bg-black bg-opacity-80">
//               <div className="p-2 rounded-lg bg-green-900">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="lucide lucide-trending-up w-5 h-5 text-green-400"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth={2}
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   viewBox="0 0 24 24"
//                 >
//                   <path d="M16 7h6v6"></path>
//                   <path d="m22 7-8.5 8.5-5-5L2 17"></path>
//                 </svg>
//               </div>
//               <div>
//                 <div className="text-sm font-semibold font-sans text-gray-100">
//                   250% ROI
//                 </div>
//                 <div className="text-xs text-gray-500 font-sans">
//                   Average Client Growth
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default InnovationSection;

"use client";

import { FC } from "react";
import Image from "next/image";

const InnovationSection: FC = () => {
  return (
    <section className="py-24 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
        {/* Text Content */}
        <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          <div className="flex items-center space-x-2 mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="lucide lucide-compass w-5 h-5 text-emerald-400"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <path d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z"></path>
              <circle cx="12" cy="12" r="10"></circle>
            </svg>
            <h2 className="text-sm font-semibold uppercase tracking-wider font-sans text-emerald-400">
              Our Mission
            </h2>
          </div>
          <h3 className="sm:text-4xl lg:text-5xl text-3xl text-gray-100 tracking-tight font-manrope mb-6">
            Innovating Today.
            <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r font-manrope from-emerald-400 to-emerald-600">
              Empowering Tomorrow.
            </span>
          </h3>
          <p className="text-lg mb-8 leading-relaxed font-sans text-gray-400">
            With over 8 years of hands-on experience in cloud-native
            development, enterprise architecture, and digital transformation, we
            empower businesses to adopt change-centric cultures and thrive in an
            increasingly competitive digital ecosystem.
          </p>
          <div className="space-y-4 mb-8">
            {[
              "Enterprise-grade security and compliance",
              "Scalable cloud-native architectures",
              "24/7 dedicated support and monitoring",
            ].map(text => (
              <div key={text} className="flex items-center space-x-3">
                <div className="p-2 rounded-lg bg-emerald-900">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="lucide lucide-check w-4 h-4 text-emerald-400"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                </div>
                <span className="font-sans text-gray-300">{text}</span>
              </div>
            ))}
          </div>
          <button className="inline-flex items-center px-6 py-3 rounded-lg font-medium transition-all duration-200 shadow-lg hover:shadow-xl font-sans bg-gray-100 text-black hover:bg-gray-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="lucide lucide-book-open w-4 h-4 mr-2"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <path d="M12 7v14"></path>
              <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path>
            </svg>
            Learn More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="lucide lucide-arrow-right w-4 h-4 ml-2"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </button>
        </div>

        {/* Image Content */}
        <div
          className="relative animate-fade-in-up"
          style={{ animationDelay: "0.4s" }}
        >
          <div className="relative rounded-2xl shadow-2xl p-6">
            {/* Main Hero Image */}
            <Image
              src="https://images.unsplash.com/photo-1623150502742-6a849aa94be4?w=1600&q=80"
              alt="Innovation team"
              width={1600}
              height={900}
              className="w-full object-cover rounded-2xl overflow-hidden"
              priority
            />

            {/* Top Left Stat Badge */}
            <div className="absolute top-6 left-6 p-4 rounded-xl shadow-lg flex items-center space-x-3 bg-black bg-opacity-80">
              <div className="flex -space-x-2">
                <Image
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=40&q=80"
                  alt="Team member 1"
                  width={32}
                  height={32}
                  className="w-8 h-8 rounded-full border-2 border-black"
                />
                <Image
                  src="https://images.unsplash.com/photo-1470406852806-b97e5d92e2aa?w=320&q=80"
                  alt="Team member 2"
                  width={32}
                  height={32}
                  className="w-8 h-8 rounded-full border-2 border-black object-cover"
                />
                <Image
                  src="https://images.unsplash.com/photo-1456321710263-fb5054efe647?w=320&q=80"
                  alt="Team member 3"
                  width={32}
                  height={32}
                  className="w-8 h-8 rounded-full border-2 border-black object-cover"
                />
              </div>
              <div>
                <div className="text-sm font-semibold font-sans text-gray-100">
                  Expert Team
                </div>
                <div className="text-xs text-gray-500 font-sans">
                  50+ Specialists
                </div>
              </div>
            </div>

            {/* Bottom Right Stat Badge */}
            <div className="absolute bottom-6 right-6 p-4 rounded-xl shadow-lg flex items-center space-x-3 bg-black bg-opacity-80">
              <div className="p-2 rounded-lg bg-green-900">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="lucide lucide-trending-up w-5 h-5 text-green-400"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M16 7h6v6"></path>
                  <path d="m22 7-8.5 8.5-5-5L2 17"></path>
                </svg>
              </div>
              <div>
                <div className="text-sm font-semibold font-sans text-gray-100">
                  250% ROI
                </div>
                <div className="text-xs text-gray-500 font-sans">
                  Average Client Growth
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Image Content */}
      </div>
    </section>
  );
};

export default InnovationSection;
