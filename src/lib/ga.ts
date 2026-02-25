// src/lib/ga.ts

/* --------------------------------------------------
   GA4 helper utilities + TypeScript declaration
   --------------------------------------------------*/

// 1️⃣  Tell TypeScript about the `window.gtag` function that GA injects.
declare global {
  interface Window {
    // Accepts standard GA4 calls e.g. gtag('config', 'G-XXXX');
    gtag?: (...args: unknown[]) => void;
  }
}

// Mark this file as an ES module so the declaration above is applied project‑wide.
export {};

// 2️⃣  Your GA4 Measurement ID from the environment
export const GA_ID = process.env.NEXT_PUBLIC_GA_ID ?? "";

// 3️⃣  Page‑view helper – call it on every route change
export const pageview = (url: string): void => {
  if (typeof window !== "undefined" && window.gtag && GA_ID) {
    window.gtag("config", GA_ID, {
      page_path: url,
    });
  }
};

// 4️⃣  Generic event helper – use for CTA clicks, form submits, etc.
interface GAEventParams {
  action: string;
  category?: string;
  label?: string;
  value?: number;
}

export const gaEvent = ({
  action,
  category,
  label,
  value,
}: GAEventParams): void => {
  if (typeof window !== "undefined" && window.gtag && GA_ID) {
    window.gtag("event", action, {
      event_category: category,
      event_label: label,
      value,
    });
  }
};
