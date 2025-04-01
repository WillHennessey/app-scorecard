import React from "react";
import Card from "./Card";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  ReferenceLine,
  Label,
} from "recharts";
import { qualityLineData } from "../data/sampleData";

const services = [];

const QualityDashboard = () => {
  return (
    <div data-testid="quality-dashboard" className="space-y-6">
      {/* Line Chart Section */}
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-bold">Monthly Bugs and Code Smells</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart
            width={500}
            height={300}
            data={qualityLineData}
            margin={{
              top: 20,
              right: 50,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <ReferenceLine y={5000} stroke="#FF6B6B">
              <Label value="Maturity Level 5" position="top" />
            </ReferenceLine>
            <Line type="monotone" dataKey="smells" stroke="#8884d8" />
            <Line type="monotone" dataKey="bugs" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Summary Section */}
      <div className="bg-white rounded-lg shadow p-6 space-y-4">
        <h2 className="text-2xl font-bold mb-6">Quality Dashboard</h2>
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

export default QualityDashboard;
