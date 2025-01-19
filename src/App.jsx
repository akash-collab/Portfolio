import { useEffect, useRef } from "react";
import * as THREE from "three"; // Required for Vanta.js
import FOG from "vanta/dist/vanta.fog.min"; // Vanta.js Fog effect
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Education from "./components/Education";
import Internship from "./components/Internship";
import Contacts from "./components/Contacts";
import { SpeedInsights } from "@vercel/speed-insights/next"

const App = () => {
  const vantaRef = useRef(null);

  useEffect(() => {
    let vantaEffect;

    if (vantaRef.current) {
      // Initialize Vanta.js Fog effect with darker, vibrant colors
      vantaEffect = FOG({
        el: vantaRef.current,
        THREE: THREE,
        highlightColor: 0xff4d4d, // Darker red
        midtoneColor: 0x5e6ef5, // Slightly darker blue
        lowlightColor: 0x3d94e4, // Deep blue
        baseColor: 0x222222, // Dark gray
        blurFactor: 0.65,
        speed: 1.2, // Speed for smoother movement
        zoom: 1.1, // Slight zoom for depth
      });
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy(); // Cleanup on unmount
    };
  }, []);

  return (
    <div ref={vantaRef} className="relative min-h-screen text-white">
      <Navbar />
      <main className="antialiased overflow-x-hidden max-w-7xl mx-auto relative z-10">
        <SpeedInsights />
        <Navbar />
        <Hero />
        <Projects />
        <About />
        <Education />
        <Internship />
        <Contacts />
      </main>
    </div>
  );
};

export default App;
