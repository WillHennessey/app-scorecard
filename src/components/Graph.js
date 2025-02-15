import React from "react";
import {
  BarChart,
  PieChart as RechartsPieChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Bar,
  Cell,
  Pie,
} from "recharts";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#AF19FF"];

const budgetData = [
  { category: "Storage", cost: 500 },
  { category: "Compute", cost: 600 },
  { category: "Networking", cost: 300 },
  { category: "Databases", cost: 200 },
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
  { subscription: "Sub 1", count: 300 },
  { subscription: "Sub 2", count: 200 },
  { subscription: "Sub 3", count: 100 },
  { subscription: "Sub 4", count: 200 },
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
  { alert: "Compliance Alert 1", count: 4 },
  { alert: "Compliance Alert 2", count: 3 },
  { alert: "Compliance Alert 3", count: 5 },
  { alert: "Compliance Alert 4", count: 2 },
  { alert: "Compliance Alert 5", count: 7 },
];

const regulatoryComplianceBySubscriptionData = [
  { subscription: "Sub 1", compliance: 200 },
  { subscription: "Sub 2", compliance: 400 },
  { subscription: "Sub 3", compliance: 300 },
  { subscription: "Sub 4", compliance: 100 },
  { subscription: "Sub 5", compliance: 500 },
];

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
        <BarChart width={450} height={275} data={graphData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="amount" fill="#0088FE" />
        </BarChart>
      )}
      {graphType === "topServices" && (
        <BarChart width={450} height={275} data={graphData} layout="vertical">
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" domain={[0, 50]} />
          <YAxis dataKey="service" type="category" />
          <Tooltip />
          <Legend />
          <Bar dataKey="usage" fill="#00C49F" />
        </BarChart>
      )}
      {graphType === "costBySubscription" && (
        <RechartsPieChart width={450} height={275} data={graphData}>
          <Tooltip />
          <Legend />
          <Pie
            dataKey="cost"
            nameKey="category"
            cx="50%"
            cy="50%"
            labelLine={true}
            label={({ name, percent }) =>
              `${name}: ${(percent * 100).toFixed(0)}%`
            }
            outerRadius={80}
          >
            {graphData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </RechartsPieChart>
      )}
      {graphType === "bar" && (
        <BarChart width={450} height={275} data={graphData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="resourceType" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="alerts" fill="#0088FE" />
        </BarChart>
      )}
      {graphType === "horizontalBar" && (
        <BarChart width={450} height={275} data={graphData} layout="vertical">
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
        <RechartsPieChart width={450} height={275} data={graphData}>
          <Tooltip />
          <Legend />
          <Pie
            dataKey={
              graphData[0]["count"] !== undefined ? "count" : "compliance"
            }
            nameKey="subscription" // Use "subscription" for labels
            cx="50%"
            cy="50%"
            labelLine={true}
            label={({ name, percent }) =>
              `${name}: ${(percent * 100).toFixed(0)}%`
            }
            outerRadius={80}
          >
            {graphData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </RechartsPieChart>
      )}
    </div>
  );
}

export default Graph;
