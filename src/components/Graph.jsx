import React from "react";
import { PureComponent } from "react";
import {
  BarChart,
  PieChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Bar,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts";

const COLORS = [
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "#AA00FF",
  "#FF4081",
  "#00E5FF",
  "#8884d8",
  "#A3C1DA",
  "#D5B2E0",
  "#B7E4B5",
  "#F8BBD0",
  "#FFCCBC",
];

const budgetData = [
  { name: "Storage", value: 500 },
  { name: "Compute", value: 600 },
  { name: "Network", value: 300 },
  { name: "Database", value: 200 },
];

const securityAlertsBySubscriptionData = [
  { name: "Sub 1", value: 30 },
  { name: "Sub 2", value: 20 },
  { name: "Sub 3", value: 10 },
  { name: "Sub 4", value: 20 },
  { name: "Sub 5", value: 100 },
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
  { service: "Network", usage: 15 },
  { service: "Database", usage: 10 },
];

const securityAlertsByResourceData = [
  { resourceType: "VM", alerts: 10 },
  { resourceType: "SQL", alerts: 5 },
  { resourceType: "Web", alerts: 8 },
  { resourceType: "Storage", alerts: 12 },
  { resourceType: "Cosmos", alerts: 2 },
];

const top5SecurityAlertsData = [
  { name: "Alert A", count: 20 },
  { name: "Alert B", count: 15 },
  { name: "Alert C", count: 10 },
  { name: "Alert D", count: 5 },
  { name: "Alert E", count: 25 },
];

const top5PolicyViolationsData = [
  { violation: "Violation A", count: 5 },
  { violation: "Violation B", count: 10 },
  { violation: "Violation C", count: 3 },
  { violation: "Violation D", count: 7 },
  { violation: "Violation E", count: 2 },
];

const top5RegulatoryComplianceAlertsData = [
  { name: "Alert 1", count: 4 },
  { name: "Alert 2", count: 3 },
  { name: "Alert 3", count: 5 },
  { name: "Alert 4", count: 2 },
  { name: "Alert 5", count: 7 },
];

const regulatoryComplianceBySubscriptionData = [
  { name: "Sub 1", value: 20 },
  { name: "Sub 2", value: 40 },
  { name: "Sub 3", value: 30 },
  { name: "Sub 4", value: 10 },
];

const vulnerabilitySLAData = [
  { name: "Pharmacy", "0-30": 10, "30-90": 5, "90-180": 3, "180-220": 2 },
  {
    name: "Infrastructure",
    "0-30": 7,
    "30-90": 10,
    "90-180": 5,
    "180-220": 1,
  },
  { name: "Data", "0-30": 8, "30-90": 4, "90-180": 6, "180-220": 3 },
];

const vulnerabilitySLATrendData = [
  { name: "Jan", "0-30": 5, "30-90": 2, "90-180": 1 },
  { name: "Feb", "0-30": 6, "30-90": 3, "90-180": 0 },
  { name: "Mar", "0-30": 7, "30-90": 1, "90-180": 2 },
  { name: "Apr", "0-30": 8, "30-90": 4, "90-180": 1 },
];

class Graph extends PureComponent {
  getGraphData = (title) => {
    switch (title) {
      case "Monthly Spend":
        return { data: costData, type: "monthlySpend" };
      case "Top 5 Services":
        return { data: resourceData, type: "topServices" };
      case "Cost by Subscription":
        return { data: budgetData, type: "pie" };
      case "Security Alerts by Resource Type":
        return { data: securityAlertsByResourceData, type: "bar" };
      case "Top 5 Security Alerts":
        return { data: top5SecurityAlertsData, type: "horizontalBar" };
      case "Security Alerts by Subscription":
        return { data: securityAlertsBySubscriptionData, type: "pie" };
      case "Top 5 Azure Policy Violations":
        return { data: top5PolicyViolationsData, type: "horizontalBar" };
      case "Top 5 Regulatory Compliance Alerts":
        return {
          data: top5RegulatoryComplianceAlertsData,
          type: "horizontalBar",
        };
      case "Regulatory Compliance by Subscription":
        return { data: regulatoryComplianceBySubscriptionData, type: "pie" };
      case "Vulnerability SLA (per Department)":
        return { data: vulnerabilitySLAData, type: "stackedBar" };
      case "Vulnerability SLA Trend":
        return { data: vulnerabilitySLATrendData, type: "stackedBar" };
      default:
        return null;
    }
  };

  renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const RADIAN = Math.PI / 180;
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

  render() {
    const { title } = this.props;
    const graphInfo = this.getGraphData(title);

    if (!graphInfo) return null;

    const { data, type } = graphInfo;

    return (
      <div>
        <h3 className="text-center font-bold">{title}</h3>
        <ResponsiveContainer width="100%" height={300}>
          {type === "monthlySpend" && (
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="amount" fill="#0088FE" />
            </BarChart>
          )}
          {type === "topServices" && (
            <BarChart data={data} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" domain={[0, 50]} />
              <YAxis dataKey="service" type="category" />
              <Tooltip />
              <Legend />
              <Bar dataKey="usage" fill="#00C49F" />
            </BarChart>
          )}
          {type === "bar" && (
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="resourceType" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="alerts" fill="#F8BBD0" />
            </BarChart>
          )}
          {type === "horizontalBar" && (
            <BarChart data={data} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" />
              <YAxis
                dataKey={title.includes("Violation") ? "violation" : "name"}
                type="category"
              />
              <Tooltip />
              <Legend />
              <Bar dataKey="count" fill="#00C49F" />
            </BarChart>
          )}
          {type === "stackedBar" && (
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="0-30" stackId="a" fill="#0088FE" />
              <Bar dataKey="30-90" stackId="a" fill="#00C49F" />
              <Bar dataKey="90-180" stackId="a" fill="#F8BBD0" />
              <Bar dataKey="180-220" stackId="a" fill="#F48FB1" />
            </BarChart>
          )}
          {type === "pie" && (
            <PieChart>
              <Pie
                dataKey="value"
                nameKey="name"
                data={data}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={this.renderCustomizedLabel}
                outerRadius={100}
                fill="#8884d8"
              />
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
              <Tooltip />
              <Legend />
            </PieChart>
          )}
        </ResponsiveContainer>
      </div>
    );
  }
}

export default Graph;
