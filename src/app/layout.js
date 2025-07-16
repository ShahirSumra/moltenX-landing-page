import { metaData } from "@/lib/metadata";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import Loader from "./components/loader2";

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
      <body
        className={`${DMSans.variable} antialiased`}
      >
        <Loader />
        {children}
      </body>
    </html>
  );
}
