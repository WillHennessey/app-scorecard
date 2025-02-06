import React from "react";
import Dashboard from "./components/Dashboard";
import { FiBox, FiShield, FiMonitor, FiLock, FiSettings } from "react-icons/fi";

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm fixed w-full z-10">
        <div className="flex items-center justify-between px-6 py-4">
          <div className="flex items-center">
            <FiBox className="text-gray-600 mr-2" />
            <span className="text-xl font-bold">App-Scorecard</span>
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

      {/* Main Content */}
      <main className="pt-16 px-6 pb-8 flex">
        {/* Sidebar */}
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

        {/* Content Area */}
        <div className="flex-1 ml-36 p-6">
          <h2 className="text-2xl font-bold mb-6">Services Overview</h2>
          <Dashboard />
        </div>
      </main>
    </div>
  );
}

export default App;