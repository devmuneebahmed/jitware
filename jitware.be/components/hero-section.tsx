'use client'

import { useEffect, useState } from 'react'

const HeroSection = () => {
  const [windowSize, setWindowSize] = useState({ height: 0, width: 0 });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setWindowSize({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    }
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      <video
        autoPlay
        muted
        loop
        className="absolute w-full h-full object-cover brightness-75"
      >
        <source src="/bg.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-10 text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to Jitware</h1>
        <p className="text-lg md:text-2xl mb-6">Crafting stunning websites with cutting-edge design.</p>
        <a
          href="#contact"
          className="bg-white text-black px-6 py-2 rounded-full font-semibold hover:bg-gray-300 transition"
        >
          Contact Us
        </a>
      </div>
    </section>
  )
}

export default HeroSection
