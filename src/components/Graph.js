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

// Sample Data
const budgetData = [
  { category: "Storage", cost: 600 },
  { category: "Compute", cost: 900 },
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

function Graph({ title, type }) {
  return (
    <div>
      <h3 className="text-center">{title}</h3>
      {type === "monthlySpend" && (
        <BarChart width={450} height={275} data={costData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="amount" fill="#0088FE" barSize={20} name="Amount ($)" />
        </BarChart>
      )}
      {type === "topServices" && (
        <BarChart
          width={450}
          height={275}
          data={resourceData}
          layout="vertical"
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" domain={[0, 50]} />
          <YAxis dataKey="service" type="category" />
          <Tooltip />
          <Legend />
          <Bar dataKey="usage" fill="#00C49F" barSize={30} name="Usage (%)" />
        </BarChart>
      )}
      {type === "costBySubscription" && (
        <RechartsPieChart width={450} height={275} data={budgetData}>
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
            data={budgetData}
          >
            {budgetData.map((entry, index) => (
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
