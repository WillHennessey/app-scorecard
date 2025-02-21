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
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <h2 className="text-2xl font-bold mb-6">Services Overview</h2>
                  <Dashboard />
                </>
              }
            />
            <Route path="/security" element={<SecurityDashboard />} />
            {/* Add more routes as needed */}
          </Routes>
        </div>
      </main>
    </div>
  );
}

export default App;
