import React from "react";
import Card from "./Card";
import { FiShield, FiLock } from "react-icons/fi";
import { FaMicrosoft } from "react-icons/fa";
import { SiSonarqube } from "react-icons/si";
import { VscAzureDevops } from "react-icons/vsc";

const services = [
  {
    title: "Azure Cost Management",
    lastUpdated: "Last updated 2h ago",
    icon: <VscAzureDevops />,
    color: "text-blue-500",
    graphs: ["Monthly Spend", "Top 5 Services", "Cost by Subscription"],
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
  {
    title: "Azure Advisor",
    lastUpdated: "Today at 10:30 AM",
    icon: <FaMicrosoft />,
    color: "text-blue-500",
    graphs: [
      "Top 5 Reliability Recommendations",
      "Top 5 Cost Recommendations",
      "Top 5 Operational Excellence Recommendations",
    ],
  },
  {
    title: "SonarQube",
    lastUpdated: "Today at 10:30 AM",
    icon: <SiSonarqube />,
    color: "text-blue-500",
    graphs: [
      "Releasability",
      "Reliability",
      "Maintainability",
      "Security Review",
      "Security Vulnerabilities",
    ],
    columns: "2",
  },
  {
    title: "Rapid7",
    lastUpdated: "Today at 10:30 AM",
    icon: <FiLock />,
    color: "text-blue-500",
    graphs: ["Vulnerability SLA (per Department)", "Vulnerability SLA Trend"],
    columns: "2",
  },
  // {
  //   title: "Contrast Security",
  //   lastUpdated: "Today at 10:30 AM",
  //   icon: <FiShield />,
  //   color: "text-blue-500",
  // },
];

const Dashboard = () => {
  return (
    <div title="dashboard" className="space-y-6">
      {/* Summary Section */}
      <div className="bg-white rounded-lg shadow p-4 space-y-4">
        <h2 className="text-2xl font-bold mb-4">RxI Dashboard</h2>
        <p className="text-gray-600">
          This dashboard provides a summary of the current status and metrics
          from various service monitoring tools.
        </p>
        <div className="grid grid-cols-1 gap-3">
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

export default Dashboard;
