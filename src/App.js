import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import SecurityDashboard from "./components/SecurityDashboard"; // Import the new component
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        {/* Header Content  */}
        <Header />
        {/* Main Content */}
        <main className="pt-16 px-6 pb-8 flex">
          {/* Sidebar Content */}
          <Sidebar />
          {/* Content Area */}
          <div className="flex-1 ml-36 p-6">
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <h2 className="text-2xl font-bold mb-6">
                      Services Overview
                    </h2>
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
    </Router>
  );
}

export default App;
