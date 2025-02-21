import React from "react";
import { FiSettings, FiMonitor, FiLock } from "react-icons/fi";
import walgreensLogo from "../assets/Walgreens_initial_W_logo.png";
import { NavLink } from "react-router-dom";

function Header() {
  const handleLogoClick = () => {
    // Add your desired functionality here, e.g., navigate to a different page
    console.log("Walgreens Logo Clicked");
  };

  return (
    <header title="header" className="bg-white shadow-sm fixed w-full z-10">
      <div className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center">
          <NavLink to="/" className="flex items-center">
            <img
              src={walgreensLogo}
              alt="Walgreens Logo"
              className="mr-2 w-8 h-8"
            />
          </NavLink>
          <span className="text-xl font-bold header">App Scorecard</span>
        </div>
        <div className="flex items-center space-x-4">
          <button className="p-2 rounded-lg hover:bg-gray-100 transition-colors">
            <FiMonitor className="text-gray-600" />
          </button>
          <button className="p-2 rounded-lg hover:bg-gray-100 transition-colors">
            <FiLock className="text-gray-600" />
          </button>
          <button className="p-2 rounded-lg hover:bg-gray-100 transition-colors">
            <FiSettings className="text-gray-600" />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
