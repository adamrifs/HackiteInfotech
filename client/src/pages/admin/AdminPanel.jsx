import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RxDashboard } from "react-icons/rx";
import { TbBrandBlogger } from "react-icons/tb";
import Logo from "../../assets/logo-2.png"
import { Outlet } from "react-router-dom";

const AdminPanel = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(true)

  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }

  const toggleMobilebar = () => {
    setMobileOpen(!mobileOpen)
  }

  return (
    <div className="flex w-full">
      {/* Desktop Sidebar */}
      <aside
        className={`${isOpen ? "w-72" : "w-16 !py-3"} bg-gray-900 min-h-screen !px-4 !py-1 transition-all ease-in-out duration-300 overflow-hidden hidden md:block`}
      >
        <button onClick={toggleSidebar} className="!mb-6 flex flex-row items-center gap-2">
            <img src={Logo} alt="logo" width={50} className="hover:bg-gray-700 rounded-md"/>
            {isOpen &&  <p className="font-semibold text-3xl" style={{fontFamily: "Nebula"}}>Hackite</p>}
        </button>
        <div className="flex flex-col gap-3">
          <Link to="/admin" className="flex flex-row items-center gap-2 hover:bg-gray-700 !px-2 !py-1 rounded-md">
            <RxDashboard size={20} />
            {isOpen && <p className="text-xl">Dashboard</p>}
          </Link>
          <Link to="/admin/addblog" className="flex flex-row items-center gap-2 hover:bg-gray-700 !px-2 !py-1 rounded-md">
            <TbBrandBlogger size={20} />
            {isOpen && <p className="text-xl">Blog</p>}
          </Link>
        </div>
      </aside>
      {/* Mobile Sidebar */}
      <div className="md:hidden ">
        <button className="" onClick={toggleMobilebar}>
          <img src={Logo} alt="logo" width={48} className="bg-gray-800"/>
        </button>

        {/* Black Overlay */}
        {mobileOpen && (
          <div onClick={toggleMobilebar} className="bg-black/80 inset-0 fixed z-40"></div>
        )
        }

        <aside className={`bg-gray-900 w-52 min-h-screen top-0 left-0 fixed !p-2 z-50 transform transition-transform duration-300 ease-in-out ${mobileOpen ? "translate-x-0" : "-translate-x-full"}`}>
          <button onClick={toggleMobilebar} className="flex items-center gap-1 !mb-5">
            <img src={Logo} alt="logo" width={48} className=""/>
            <p className="font-semibold text-xl" style={{fontFamily: "Nebula"}}>Hackeit</p>
          </button>
          <div className="flex flex-col gap-3">
          <Link onClick={toggleMobilebar} to="/admin" className="flex flex-row items-center gap-2 hover:bg-gray-700 !px-2 !py-1 rounded-md">
            <RxDashboard size={20} />
            {isOpen && <p className="text-xl">Dashboard</p>}
          </Link>
          <Link onClick={toggleMobilebar} to="/admin/addblog" className="flex flex-row items-center gap-2 hover:bg-gray-700 !px-2 !py-1 rounded-md">
            <TbBrandBlogger size={20} />
            {isOpen && <p className="text-xl">Blog</p>}
          </Link>
        </div>
        </aside>


      </div>
      
    <main className="flex-1">
        <Outlet />
    </main>
    </div>
  );
};

export default AdminPanel;
