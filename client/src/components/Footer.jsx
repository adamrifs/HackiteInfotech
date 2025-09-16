import React from 'react'
import ShinyText from "../components/ShinyText";

const Footer = () => {
  return (
    <footer className="grid grid-cols-1 md:grid-cols-2 border-t border-gray-700 !py-8 !px-4 md:!px-10 h-[250px]">
      {/* Left side: Logo / Company Name */}
      <div className="flex justify-center md:justify-start items-center">
        <ShinyText
          text="Hackite Infotech"
          disabled={false}
          speed={3}
          style={{ fontFamily: 'Nebula', fontSize: '28px', fontWeight: '700' }}
        />
      </div>

      {/* Right side: Copyright & Tagline */}
      <div className="flex flex-col items-center md:items-end justify-end text-center md:text-right">
        <p className="text-sm md:text-lg">
          © 2025 Hackite Infotech. All Rights Reserved.
        </p>
        <p className="text-xs md:text-sm !text-gray-400 !mt-2">
          Innovating the Future, Securing the Present
        </p>
      </div>
    </footer>
  );
};

export default Footer;
