import React from "react";
import { FiLock, FiShield } from "react-icons/fi";
import Card from "./Card";

const services = [
  {
    title: "Contrast Security",
    lastUpdated: "Today at 10:30 AM",
    icon: <FiShield />,
    color: "text-blue-500",
  },
  {
    title: "Rapid7",
    lastUpdated: "Today at 10:30 AM",
    icon: <FiLock />,
    color: "text-blue-500",
  },
  {
    title: "Azure Defender",
    lastUpdated: "Today at 10:30 AM",
    icon: <FiShield />,
    color: "text-blue-500",
  },
];

const SecurityDashboard = () => {
  return (
    <div data-testid="security-dashboard" className="space-y-6">
      {/* Summary Section */}
      <div className="bg-white rounded-lg shadow p-6 space-y-4">
        <h2 className="text-2xl font-bold mb-6">Security Dashboard</h2>
        <div className="grid grid-cols-1 gap-4">
          {services.map((service, index) => (
            <Card
              key={index}
              title={service.title}
              lastUpdated={service.lastUpdated}
              icon={service.icon}
              color={service.color}
              graphs={service.graphs} // Pass the graph data to the Card component if needed
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SecurityDashboard;
