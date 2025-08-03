import Script from "next/script";
import { GA_ID } from "@/lib/ga";

export default function GoogleAnalytics() {
  if (!GA_ID) return null;
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga-init" strategy="afterInteractive">{`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${GA_ID}', { debug_mode: ${
        process.env.NODE_ENV !== "production"
      } });
      `}</Script>
    </>
  );
}
