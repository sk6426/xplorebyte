// import "../styles/globals.css";
// import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700&display=swap');

// import { Inter } from "next/font/google";

// const inter = Inter({
//   subsets: ["latin"],
//   variable: "--font-inter",
//   display: "swap",
// });

// export const metadata = {
//   title: "XploreByte Solutions",
//   description: "Elite SaaS and digital solutions for ambitious businesses.",
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en" className={inter.className}>
//       <body>{children}</body>
//     </html>
//   );
// }
import "../styles/globals.css";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["200", "300", "300"],
  variable: "--font-montserrat",
  display: "swap",
});
export const metadata = {
  title: "XploreByte Solutions",
  description: "Elite SaaS and digital solutions for ambitious businesses.",
  icons: [
    { rel: "icon", url: "/assets/logo_7.svg", type: "image/svg+xml" },
    { rel: "icon", url: "/favicon.png", type: "image/png", sizes: "32x32" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
