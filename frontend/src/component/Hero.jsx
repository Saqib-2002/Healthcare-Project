import React from 'react';
import { Link } from 'react-router-dom';
import bgImage from '../images/rectangle_4.jpg';

function Hero() {
  return (
    <div
      className="relative w-full h-screen flex items-center justify-center bg-cover bg-center px-4 sm:px-8 lg:px-16"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Dark overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl text-left">
        <p className="text-[#00efdf] font-semibold text-xs sm:text-sm md:text-base tracking-wide mb-6 sm:mb-4">
          24/7 EMERGENCY SERVICE
        </p>

        <h1 className="text-white font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-snug mb-4 sm:mb-6">
          Caring for <span className="text-[#00efdf]">Dental</span> <br />
          Caring for You
        </h1>

        <p className="text-white font-normal text-sm sm:text-base md:text-lg mb-6 sm:mb-8 max-w-[500px] leading-relaxed">
          A brief statement outlining the purpose and mission of the clinic.
          This can include the commitment to patient care and community dental
          care.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
          <Link
            to="/appointment"
            className="px-5 py-2 sm:px-6 sm:py-3 bg-[#00efdf] text-white font-semibold rounded-lg text-sm sm:text-base hover:bg-[#00cfcf] transition-all duration-300"
          >
            Book Appointment
          </Link>
          <Link
            to="/about"
            className="px-5 py-2 sm:px-6 sm:py-3 border border-white text-white font-semibold rounded-lg text-sm sm:text-base hover:bg-[#00efdf] transition-all duration-300"
          >
            Know More
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
