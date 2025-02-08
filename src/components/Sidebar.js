import React from "react";
import { FiBox, FiMonitor, FiShield } from "react-icons/fi";

function Sidebar() {
  return (
    <aside className="w-42 fixed left-0 bg-white h-full shadow-md">
      <div className="p-4 space-y-2">
        <h2 className="text-xl font-bold mb-4">Menu</h2>
        <button className="w-full flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-100 transition-colors">
          <FiBox className="text-blue-500" />
          <span>Dashboard</span>
        </button>
        <button className="w-full flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-100 transition-colors">
          <FiShield className="text-blue-500" />
          <span>Security</span>
        </button>
        <button className="w-full flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-100 transition-colors">
          <FiMonitor className="text-blue-500" />
          <span>Monitoring</span>
        </button>
      </div>
    </aside>
  );
}
export default Sidebar;
