import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import SecurityDashboard from "./components/SecurityDashboard";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import "./App.css";

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Content  */}
      <Header />
      {/* Main Content */}
      <main className="pt-16 px-6 pb-8 flex">
        {/* Sidebar Content */}
        <Sidebar />
        {/* Content Area */}
        <div className="flex-1 ml-36 p-4">
          <div className="flex flex-col space-y-6">
            {/* Routes */}
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/security" element={<SecurityDashboard />} />
            </Routes>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
