import React from 'react';
import {
  LineChart,
  BarChart,
  PieChart as RechartsPieChart,
  Line,
  Bar,
  Cell,
  Pie,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from 'recharts';

// Sample Data
const costData = [
  { month: 'Jan', amount: 1200 },
  { month: 'Feb', amount: 1500 },
  { month: 'Mar', amount: 1800 },
  { month: 'Apr', amount: 2100 },
  { month: 'May', amount: 2400 },
  { month: 'Jun', amount: 2700 }
];

const resourceData = [
  { service: 'Storage', usage: 45 },
  { service: 'Compute', usage: 30 },
  { service: 'Networking', usage: 15 },
  { service: 'Databases', usage: 10 }
];

const budgetData = [
  { category: 'Storage', actual: 600, budget: 700 },
  { category: 'Compute', actual: 900, budget: 1200 },
  { category: 'Networking', actual: 300, budget: 400 },
  { category: 'Databases', actual: 200, budget: 300 }
];

export default function Graph({ title, type }) {
  if (type === 'cost') {
    return (
      <LineChart width={400} height={300} data={costData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="amount" stroke="#8884d8" name="Monthly Cost" />
      </LineChart>
    );
  } else if (type === 'resource') {
    return (
      <RechartsPieChart width={400} height={300} data={resourceData}>
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Legend />
        {resourceData.map((entry, index) => (
          <Cell
            key={`cell-${index}`}
            cy={200}
            fill={[
              '#8884d8',
              '#82ca9d',
              '#ffc658',
              '#ff7300'
            ][index % 4]}
          />
        ))}
        <Pie dataKey="usage" nameKey="service" cx={200} cy={200} innerRadius={60} outerRadius={120} />
      </RechartsPieChart>
    );
  } else if (type === 'budget') {
    return (
      <BarChart width={400} height={300} data={budgetData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="category" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="actual" fill="#8884d8" name="Actual Spend" />
        <Bar dataKey="budget" fill="#82ca9d" name="Budget" />
      </BarChart>
    );
  }
}