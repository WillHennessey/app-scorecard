import React from "react";
import {
  BarChart,
  PieChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Bar,
  Cell,
  Pie,
  ResponsiveContainer,
} from "recharts";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#AF19FF"];

const budgetData = [
  { name: "Storage", value: 500 },
  { name: "Compute", value: 600 },
  { name: "Networking", value: 300 },
  { name: "Databases", value: 200 },
];

const costData = [
  { month: "Jan", amount: 1200 },
  { month: "Feb", amount: 1500 },
  { month: "Mar", amount: 1800 },
  { month: "Apr", amount: 2100 },
  { month: "May", amount: 2400 },
  { month: "Jun", amount: 2700 },
];

const resourceData = [
  { service: "Storage", usage: 30 },
  { service: "Compute", usage: 45 },
  { service: "Networking", usage: 15 },
  { service: "Databases", usage: 10 },
];

const securityAlertsByResourceData = [
  { resourceType: "VM", alerts: 10 },
  { resourceType: "SQL Database", alerts: 5 },
  { resourceType: "Web Apps", alerts: 8 },
  { resourceType: "Storage Accounts", alerts: 12 },
  { resourceType: "Cosmos DB", alerts: 2 },
];

const top5SecurityAlertsData = [
  { alertName: "Alert A", count: 20 },
  { alertName: "Alert B", count: 15 },
  { alertName: "Alert C", count: 10 },
  { alertName: "Alert D", count: 5 },
  { alertName: "Alert E", count: 25 },
];

const securityAlertsBySubscriptionData = [
  { subscription: "Sub 1", count: 30 },
  { subscription: "Sub 2", count: 20 },
  { subscription: "Sub 3", count: 10 },
  { subscription: "Sub 4", count: 20 },
  { subscription: "Sub 5", count: 100 },
];

const top5PolicyViolationsData = [
  { violation: "Violation A", count: 5 },
  { violation: "Violation B", count: 10 },
  { violation: "Violation C", count: 3 },
  { violation: "Violation D", count: 7 },
  { violation: "Violation E", count: 2 },
];

const top5RegulatoryComplianceAlertsData = [
  { alert: "Alert 1", count: 4 },
  { alert: "Alert 2", count: 3 },
  { alert: "Alert 3", count: 5 },
  { alert: "Alert 4", count: 2 },
  { alert: "Alert 5", count: 7 },
];

const regulatoryComplianceBySubscriptionData = [
  { subscription: "Sub 1", compliance: 20 },
  { subscription: "Sub 2", compliance: 40 },
  { subscription: "Sub 3", compliance: 30 },
  { subscription: "Sub 4", compliance: 10 },
];

const RADIAN = Math.PI / 180;

const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

function Graph({ title }) {
  let graphData;
  let graphType;

  switch (title) {
    case "Monthly Spend":
      graphData = costData;
      graphType = "monthlySpend";
      break;
    case "Top 5 Services":
      graphData = resourceData;
      graphType = "topServices";
      break;
    case "Cost by Subscription":
      graphData = budgetData;
      graphType = "costBySubscription";
      break;
    case "Security Alerts by Resource Type":
      graphData = securityAlertsByResourceData;
      graphType = "bar";
      break;
    case "Top 5 Security Alerts":
      graphData = top5SecurityAlertsData;
      graphType = "horizontalBar";
      break;
    case "Security Alerts by Subscription":
      graphData = securityAlertsBySubscriptionData;
      graphType = "pie";
      break;
    case "Top 5 Azure Policy Violations":
      graphData = top5PolicyViolationsData;
      graphType = "horizontalBar";
      break;
    case "Top 5 Regulatory Compliance Alerts":
      graphData = top5RegulatoryComplianceAlertsData;
      graphType = "horizontalBar";
      break;
    case "Regulatory Compliance by Subscription":
      graphData = regulatoryComplianceBySubscriptionData;
      graphType = "pie";
      break;
    default:
      return null;
  }

  return (
    <div>
      <h3 className="text-center font-bold">{title}</h3>
      {graphType === "monthlySpend" && (
        <BarChart width={375} height={250} data={graphData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="amount" fill="#0088FE" />
        </BarChart>
      )}
      {graphType === "topServices" && (
        <BarChart width={375} height={250} data={graphData} layout="vertical">
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" domain={[0, 50]} />
          <YAxis dataKey="service" type="category" />
          <Tooltip />
          <Legend />
          <Bar dataKey="usage" fill="#00C49F" />
        </BarChart>
      )}
      {graphType === "costBySubscription" && (
        <ResponsiveContainer width="100%" height="100%">
          <PieChart width={375} height={250}>
            <Tooltip />
            <Legend />
            <Pie dataKey="value" data={graphData} fill="#8884d8" label />
          </PieChart>
        </ResponsiveContainer>
      )}
      {graphType === "bar" && (
        <BarChart width={375} height={250} data={graphData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="resourceType" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="alerts" fill="#0088FE" />
        </BarChart>
      )}
      {graphType === "horizontalBar" && (
        <BarChart width={375} height={250} data={graphData} layout="vertical">
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" />
          <YAxis
            dataKey={title.includes("Violation") ? "violation" : "alertName"}
            type="category"
          />
          <Tooltip />
          <Legend />
          <Bar dataKey="count" fill="#82ca9d" />
        </BarChart>
      )}
      {graphType === "pie" && (
        <ResponsiveContainer width="100%" height="100%">
          <PieChart width={375} height={250}>
            <Tooltip />
            <Legend />
            <Pie dataKey="value" data={graphData} fill="#8884d8" label />
          </PieChart>
        </ResponsiveContainer>
      )}
    </div>
  );
}

export default Graph;
