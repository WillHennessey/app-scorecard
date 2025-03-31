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
  Sector,
  ResponsiveContainer,
} from "recharts";

import {
  budgetData,
  securityAlertsBySubscriptionData,
  costData,
  resourceData,
  securityAlertsByResourceData,
  top5SecurityAlertsData,
  top5PolicyViolationsData,
  top5RegulatoryComplianceAlertsData,
  regulatoryComplianceBySubscriptionData,
  sonarNewSecurityReviewData,
  sonarOverallSecurityReviewData,
  sonarNewVulnerabilitiesData,
  sonarOverallVulnerabilitiesData,
  vulnerabilitySLAData,
  vulnerabilitySLATrendData,
  top5CostRecommendationsData,
  top5ReliabilityRecommendationsData,
  top5OperationalExcellenceRecommendationsData,
} from "../sampleData";

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

class Graph extends PureComponent {
  state = {
    activeIndex: 0,
  };

  onPieEnter = (_, index) => {
    this.setState({
      activeIndex: index,
    });
  };

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
      case "Security Review New Code":
        return { data: sonarNewSecurityReviewData, type: "responsivePie" };
      case "Security Review Overall Code":
        return { data: sonarOverallSecurityReviewData, type: "responsivePie" };
      case "Vulnerabilities New Code":
        return { data: sonarNewVulnerabilitiesData, type: "responsivePie" };
      case "Vulnerabilities Overall Code":
        return { data: sonarOverallVulnerabilitiesData, type: "responsivePie" };
      case "Top 5 Cost Recommendations":
        return { data: top5CostRecommendationsData, type: "horizontalBar" };
      case "Top 5 Reliability Recommendations":
        return {
          data: top5ReliabilityRecommendationsData,
          type: "horizontalBar",
        };
      case "Top 5 Operational Excellence Recommendations":
        return {
          data: top5OperationalExcellenceRecommendationsData,
          type: "horizontalBar",
        };
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

  renderActiveShape = (props) => {
    const RADIAN = Math.PI / 180;
    const {
      cx,
      cy,
      midAngle,
      innerRadius,
      outerRadius,
      startAngle,
      endAngle,
      fill,
      payload,
      percent,
      value,
    } = props;
    const sin = Math.sin(-RADIAN * midAngle);
    const cos = Math.cos(-RADIAN * midAngle);
    const sx = cx + (outerRadius + 10) * cos;
    const sy = cy + (outerRadius + 10) * sin;
    const mx = cx + (outerRadius + 30) * cos;
    const my = cy + (outerRadius + 30) * sin;
    const ex = mx + (cos >= 0 ? 1 : -1) * 22;
    const ey = my;
    const textAnchor = cos >= 0 ? "start" : "end";

    return (
      <g>
        <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
          {payload.name}
        </text>
        <Sector
          cx={cx}
          cy={cy}
          innerRadius={innerRadius}
          outerRadius={outerRadius}
          startAngle={startAngle}
          endAngle={endAngle}
          fill="#8884d8"
        />
        <Sector
          cx={cx}
          cy={cy}
          startAngle={startAngle}
          endAngle={endAngle}
          innerRadius={outerRadius + 6}
          outerRadius={outerRadius + 10}
          fill="#8884d8"
        />
        <path
          d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
          stroke={fill}
          fill="none"
        />
        <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
        <text
          x={ex + (cos >= 0 ? 1 : -1) * 12}
          y={ey}
          textAnchor={textAnchor}
          fill="#333"
        >{`${value}`}</text>
        <text
          x={ex + (cos >= 0 ? 1 : -1) * 12}
          y={ey}
          dy={18}
          textAnchor={textAnchor}
          fill="#999"
        >
          {`(Rate ${(percent * 100).toFixed(2)}%)`}
        </text>
      </g>
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
          {type == "responsivePie" && (
            <PieChart>
              <Pie
                activeIndex={this.state.activeIndex}
                activeShape={this.renderActiveShape}
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                fill="#B7E4B5"
                dataKey="value"
                onMouseEnter={this.onPieEnter}
              />
            </PieChart>
          )}
        </ResponsiveContainer>
      </div>
    );
  }
}

export default Graph;
