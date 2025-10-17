import React from 'react'
import ShinyText from "../components/ShinyText";
import logo from '../assets/logo-2.png'
import { IoLocationSharp } from "react-icons/io5";
const Footer = () => {
  return (
    <footer className="grid grid-cols-1 md:grid-cols-2 border-t relative border-gray-700 !py-8 !px-4 md:!px-10 h-[400px] md:h-[250px]">
      {/* Left side: Logo / Company Name */}
      <div className="flex justify-center md:justify-start items-center">
        {/* <ShinyText
          text="Hackite Infotech"
          disabled={false}
          speed={3}
          style={{ fontFamily: 'Nebula', fontSize: '28px', fontWeight: '700' }}
        /> */}
        <img src={logo} alt="logo" className='w-[200px] h-[200px]'  />
      </div>

      {/* Right side: Copyright & Tagline */}
      <div className="flex flex-col items-start md:items-end justify-end text-center md:text-right !pb-12">
        <p className='!text-gray-400 text-4xl !mb-1'><IoLocationSharp /></p>
        <p className='text-lg !text-gray-300 '>Hackite Infotech Pvt Ltd</p>
        <p className='text-xs !text-gray-300 md:w-auto w-[200px] text-left '>Door No. 52/1067/52, Dew Space, 4th Floor,<br/>Chowallur Tower, Thrissur, 680004, Kerala</p>
        <p className="text-xs md:text-sm !text-gray-400 !mt-2">
          Innovating the Future, Securing the Present
        </p>
        <p className="text-xs md:text-sm absolute bottom-[-25px] md:bottom-2 left-[50%] -translate-x-1/2 w-full md:w-auto">
          © 2025 Hackite Infotech. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
