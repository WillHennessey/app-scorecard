import React from "react";
import { FiBox, FiMonitor, FiShield } from "react-icons/fi";
import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <aside
      title="sidebar"
      className="w-42 fixed left-0 bg-white h-full shadow-md"
    >
      <div className="p-4 space-y-2">
        <h2 className="text-xl font-bold mb-4">Menu</h2>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `w-full flex items-center space-x-3 p-2 rounded-lg ${
              isActive ? "bg-gray-100" : "hover:bg-gray-100"
            } transition-colors`
          }
        >
          <FiBox className="text-blue-500" />
          <span>Dashboard</span>
        </NavLink>
        <NavLink
          to="/security"
          className={({ isActive }) =>
            `w-full flex items-center space-x-3 p-2 rounded-lg ${
              isActive ? "bg-gray-100" : "hover:bg-gray-100"
            } transition-colors`
          }
        >
          <FiShield className="text-blue-500" />
          <span>Security</span>
        </NavLink>
        <NavLink
          to="/monitoring"
          className={({ isActive }) =>
            `w-full flex items-center space-x-3 p-2 rounded-lg ${
              isActive ? "bg-gray-100" : "hover:bg-gray-100"
            } transition-colors`
          }
        >
          <FiMonitor className="text-blue-500" />
          <span>Monitoring</span>
        </NavLink>
      </div>
    </aside>
  );
}

export default Sidebar;
