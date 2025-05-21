import type { Gtag } from 'gtag.js';


declare global {
  interface Window {
    // dataLayer: any[];
    dataLayer: Gtag.GtagCommand[];
    gtag: Gtag.Gtag;
  }
}