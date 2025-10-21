import React from "react";
import { IoLocationSharp } from "react-icons/io5";
import logo from "../assets/logo-2.png";

const Footer = () => {
  return (
    <footer className="grid grid-cols-1 md:grid-cols-4 border-t relative border-gray-700 !py-8 !px-4 md:!px-10 md:h-[280px] gap-6">
      {/* Left side: Logo / Company Name */}
      <div className="flex justify-center md:justify-start items-center">
        <img src={logo} alt="logo" className="w-[200px] h-[200px]" />
      </div>

      {/* Middle Left: Quick Links */}
      <div className="flex flex-col justify-center items-center md:items-start gap-2 text-gray-300">
        <h3 className="text-lg font-semibold !mb-2">Quick Links</h3>
        <a href="#" className="text-sm transition-colors duration-300">
          Home
        </a>
        <a href="#" className="text-sm transition-colors duration-300">
          About Us
        </a>
        <a href="#" className="text-sm transition-colors duration-300">
          Services
        </a>
        <a href="#" className="text-sm transition-colors duration-300">
          Careers
        </a>
        <a href="#" className="text-sm transition-colors duration-300">
          Contact
        </a>
      </div>

      {/* Middle Right: Resources */}
      <div className="flex flex-col justify-center items-center md:items-start gap-2 text-gray-300">
        <h3 className="text-lg font-semibold !mb-2">Resources</h3>
        <a href="#" className="text-sm transition-colors duration-300">
          Privacy Policy
        </a>
        <a href="#" className="text-sm transition-colors duration-300">
          Terms & Conditions
        </a>
        <a href="#" className="text-sm transition-colors duration-300">
          FAQs
        </a>
        <a href="#" className="text-sm transition-colors duration-300">
          Blog
        </a>
        <a href="#" className="text-sm transition-colors duration-300">
          Support
        </a>
      </div>

      {/* Right side: Address & Tagline */}
      <div className="flex flex-col items-start md:items-end justify-end text-center md:text-right !pb-5 relative">
        <p className="text-gray-400 text-4xl !mb-1">
          <IoLocationSharp />
        </p>
        <p className="text-lg text-gray-300">Hackite Infotech Pvt Ltd</p>
        <p className="text-xs text-gray-300 md:w-auto w-[200px] text-left md:text-right">
          Door No. 52/1067/52, Dew Space, 4th Floor,
          <br />
          Chowallur Tower, Thrissur, 680004, Kerala
        </p>

        {/* Copyright */}
      </div>
        <p className="text-xs md:text-sm absolute bottom-[-25px] md:bottom-2 left-1/2 -translate-x-1/2 w-full md:w-auto text-center">
          © 2025 Hackite Infotech. All Rights Reserved.
        </p>
    </footer>
  );
};

export default Footer;
