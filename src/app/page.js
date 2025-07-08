'use client';
import { useEffect } from "react";
import Lenis from 'lenis';
import TopSection from "./home/topSection";
import AboutMoltenX from "./home/aboutMolten";
import TokenEconomy from "./home/tokenEconomy";
import Subscribe from "./home/subscribe";
import Footer from "./home/footer";


export default function Home() {

  useEffect(() => {
     const lenis = new Lenis({
      autoRaf: true,
      duration: 1.8,  // Increase duration for smoother scrolling
      easing: (t) => 1 - Math.pow(1 - t, 6),  // Custom cubic easing for natural feel
      smooth: true,
      smoothTouch: true,  // Enable smooth scrolling on touch devices
      lerp: 0.04,
    });
    
    // Listen for the scroll event and log the event data
    lenis.on('scroll', (e) => {
      // console.log(e);
    });
  }, [])

  return (
    <>
      <TopSection />
      <AboutMoltenX />
      <TokenEconomy />
      <Subscribe />
      <Footer />
    </>
  );
}
