import React from "react";
import Card from "./Card";
import { FiShield, FiMonitor, FiLock, FiCode } from "react-icons/fi";
import { FaMicrosoft } from "react-icons/fa";
const services = [
  {
    title: "Azure Cost Management",
    lastUpdated: "Last updated 2h ago",
    icon: <FaMicrosoft />,
    color: "text-blue-500",
    graphs: ["Cost by Subscription", "Top 5 Services", "Monthly Spend"],
  },
  {
    title: "Azure Defender",
    lastUpdated: "Today at 10:30 AM",
    icon: <FiShield />,
    color: "text-blue-500",
  },
  {
    title: "Azure Advisor",
    lastUpdated: "Today at 10:30 AM",
    icon: <FiMonitor />,
    color: "text-blue-500",
  },
  {
    title: "SonarQube",
    status: "Active",
    lastUpdated: "Today at 10:30 AM",
    icon: <FiCode />,
    color: "text-blue-500",
  },
  {
    title: "Rapid7",
    lastUpdated: "Today at 10:30 AM",
    icon: <FiLock />,
    color: "text-blue-500",
  },
  {
    title: "Contrast Security",
    lastUpdated: "Today at 10:30 AM",
    icon: <FiShield />,
    color: "text-blue-500",
  },
];

function Dashboard() {
  return (
    <div className="space-y-6">
      {/* Summary Section */}
      <div className="bg-white rounded-lg shadow p-6 space-y-4">
        <h3 className="text-xl font-bold">Summary</h3>
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
}

export default Dashboard;
