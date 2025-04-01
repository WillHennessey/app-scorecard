import React from "react";
import { FiLock, FiShield } from "react-icons/fi";
import Card from "./Card";
import { SiSonarqube } from "react-icons/si";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { lineChartData } from "../data/sampleData";

const services = [
  {
    title: "Rapid7",
    lastUpdated: "Today at 10:30 AM",
    icon: <FiLock />,
    color: "text-blue-500",
    graphs: ["Vulnerability SLA (per Department)", "Vulnerability SLA Trend"],
    columns: "2",
  },
  {
    title: "SonarQube",
    lastUpdated: "Today at 10:30 AM",
    icon: <SiSonarqube />,
    graphs: [
      "Security Review New Code",
      "Security Review Overall Code",
      "Vulnerabilities New Code",
      "Vulnerabilities Overall Code",
    ],
    columns: "2",
    color: "text-blue-500",
  },
  {
    title: "Azure Defender",
    lastUpdated: "Today at 10:30 AM",
    icon: <FiShield />,
    color: "text-blue-500",
    graphs: [
      "Security Alerts by Resource Type",
      "Top 5 Security Alerts",
      "Security Alerts by Subscription",
      "Top 5 Azure Policy Violations",
      "Top 5 Regulatory Compliance Alerts",
      "Regulatory Compliance by Subscription",
    ],
  },
  // {
  //   title: "Contrast Security",
  //   lastUpdated: "Today at 10:30 AM",
  //   icon: <FiShield />,
  //   color: "text-blue-500",
  // },
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
            <Line type="monotone" dataKey="vulnerabilities" stroke="#4D96FF" />
            <Line type="monotone" dataKey="secrets" stroke="#6BCB77" />
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
              columns={service.columns}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SecurityDashboard;
