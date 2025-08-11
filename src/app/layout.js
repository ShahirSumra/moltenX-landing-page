import { metaData } from "@/lib/metadata";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import Loader from "./components/loader2";
import Script from 'next/script';

const DMSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700']
});

export const metadata = {
  ...metaData
};

export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
      <head>
        <Script
          id="gtm-script"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-M8TDWWQ7');
            `,
          }}
        />
      </head>
      <body
        className={`${DMSans.variable} antialiased`}
      >
        <noscript
          dangerouslySetInnerHTML={{
            __html: `
              <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-M8TDWWQ7" height="0" width="0" style="display:none;visibility:hidden"></iframe>
            `,
          }}
        />
        <Loader />
        {children}
      </body>
    </html>
  );
}
