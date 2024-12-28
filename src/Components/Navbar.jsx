import React, { useState } from 'react';
import pic from '../../public/gopaldp.jpg';
import { TiThMenu } from "react-icons/ti";
import { RxCross2 } from "react-icons/rx";
import {Link} from "react-scroll"
function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuItems = ["Home", "About", "Portfolio", "Experience", "Contact"];

  return (
    <div className="w-full shadow-2xl bg-white z-50 fixed top-0 left-0 right-0">
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo and Profile */}
          <div className="flex items-center space-x-2">
            <img src={pic} className="h-20 w-20 rounded-full" alt="Profile" />
            <h1 className="font-semibold text-xl cursor-pointer">
              Gopa<span className="text-green-600 text-2xl">l</span>
              <p className="text-sm">Web Developer</p>
            </h1>
          </div>

          {/* Desktop Navbar */}
          <ul className="hidden md:flex space-x-8">
            {menuItems.map((item, index) => (
              <li key={index} className="cursor-pointer hover:text-green-600">
                <Link to={item}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  activeClass='active'
                  
                  >
                  {item}
                  </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Icon */}
          <div
            className="md:hidden text-2xl cursor-pointer"
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? <RxCross2 /> : <TiThMenu />}
          </div>
        </div>

        {/* Mobile Navbar */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute bg-white w-full shadow-lg">
            <ul className="flex flex-col items-center space-y-4 py-4">
              {menuItems.map((item, index) => (
                <li key={index} className="cursor-pointer hover:text-green-600">
                  <Link to={item}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  activeClass='active'
                  
                  >
                  {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
