import React from 'react';
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <section
      id="hero"
      className="bg-gradient-to-r from-blue-600 to-blue-400 text-white min-h-screen flex items-center justify-center pt-20 px-4"
    >
      <div className="text-center max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Sell Unused Software Licenses with Ease
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Turn your unused or surplus software licenses into cash in just a few clicks.
          Safe, secure, and fast transactions – powered by SoftSell.
        </p>
        <Link to="contact" smooth={true} duration={500}>
          <button className="bg-yellow-300 text-blue-900 px-6 py-3 rounded-full font-semibold shadow-md hover:bg-yellow-400 transition duration-300">
            Sell My Licenses
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
