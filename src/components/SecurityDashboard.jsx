import React from "react";
import { FiLock, FiShield } from "react-icons/fi";
import Card from "./Card";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const services = [
  {
    title: "Rapid7",
    lastUpdated: "Today at 10:30 AM",
    icon: <FiLock />,
    color: "text-blue-500",
    graphs: ["Vulnerability SLA (per Department)", "Vulnerability SLA Trend"],
  },
  {
    title: "SonarQube",
    lastUpdated: "Today at 10:30 AM",
    icon: <SiSonarqube />,
    color: "text-blue-500",
  },
  {
    title: "Azure Defender",
    lastUpdated: "Today at 10:30 AM",
    icon: <FiShield />,
    color: "text-blue-500",
  },
  {
    title: "Contrast Security",
    lastUpdated: "Today at 10:30 AM",
    icon: <FiShield />,
    color: "text-blue-500",
  },
];

const lineChartData = [
  { name: "Jan", vulnerabilities: 400, secrets: 240 },
  { name: "Feb", vulnerabilities: 300, secrets: 130 },
  { name: "Mar", vulnerabilities: 500, secrets: 290 },
  { name: "Apr", vulnerabilities: 400, secrets: 500 },
  { name: "May", vulnerabilities: 600, secrets: 350 },
  { name: "Jun", vulnerabilities: 700, secrets: 400 },
];

const SecurityDashboard = () => {
  return (
    <div data-testid="security-dashboard" className="space-y-6">
      {/* Line Chart Section */}
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-bold">Monthly Security Alerts</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={lineChartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="vulnerabilities" stroke="#0088FE" />
            <Line type="monotone" dataKey="secrets" stroke="#00C49F" />
          </LineChart>
        </ResponsiveContainer>
      </div>

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
              graphs={service.graphs}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SecurityDashboard;
