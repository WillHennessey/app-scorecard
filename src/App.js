import React from "react";
import Dashboard from "./components/Dashboard";
import Header from "./components/Header"; // Import the Header component
import Sidebar from "./components/Sidebar";
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
        <div className="flex-1 ml-36 p-6">
          <h2 className="text-2xl font-bold mb-6">Services Overview</h2>
          <Dashboard />
        </div>
      </main>
    </div>
  );
}

export default App;
