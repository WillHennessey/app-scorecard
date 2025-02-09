import React from "react";
import { FiBox, FiSettings, FiMonitor, FiLock } from "react-icons/fi";

function Header() {
  return (
    <header
      data-testid="header"
      className="bg-white shadow-sm fixed w-full z-10"
    >
      <div className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center">
          <FiBox className="text-gray-600 mr-2" />
          <span className="text-xl font-bold header">App-Scorecard</span>
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
