import React from "react";
import Card from "./Card";
import { FiBox, FiShield, FiMonitor, FiLock, FiCode, FiSettings, FiDollarSign } from "react-icons/fi";


const services = [
  {
    title: "Azure Cost Management",
    status: "Active",
    lastUpdated: "Today at 10:30 AM",
    icon: FiBox,
    color: "text-blue-500"
  },
{
    title: "Azure Defender",
    status: "Warning",
    lastUpdated: "Today at 10:30 AM",
    icon: FiShield,
    color: "text-blue-500"
},
{
    title: "Azure Advisor",
    status: "Healthy",
    lastUpdated: "Today at 10:30 AM",
    icon: FiMonitor,
    color: "text-blue-500"
},
{
    title: "SonarQube",
    status: "Active",
    lastUpdated: "Today at 10:30 AM",
    icon: FiSettings,
    color: "text-blue-500"
},
{
    title: "Rapid7",
    status: "Warning",
    lastUpdated: "Today at 10:30 AM",
    icon: FiLock,
    color: "text-blue-500"
},
{
    title: "Contrast Security",
    status: "Healthy",
    lastUpdated: "Today at 10:30 AM",
    icon: FiCode,
    color: "text-blue-500"
}
];

function Dashboard() {
  const services = [
      {
          title: "Azure Cost Management",
          status: "Active",
          lastUpdated: "Last updated 2h ago",
          icon: FiDollarSign,
          color: "text-amber-600",
          graphs: ["Monthly Spend", "Top 5 Services", "Cost by Subscription"]
      },
     {
        title: "Azure Defender",
             status: "Warning",
             lastUpdated: "Today at 10:30 AM",
             icon: FiShield,
             color: "text-blue-500"
         },
         {
             title: "Azure Advisor",
             status: "Healthy",
             lastUpdated: "Today at 10:30 AM",
             icon: FiMonitor,
             color: "text-blue-500"
         },
         {
             title: "SonarQube",
             status: "Active",
             lastUpdated: "Today at 10:30 AM",
             icon: FiSettings,
             color: "text-blue-500"
         },
         {
             title: "Rapid7",
             status: "Warning",
             lastUpdated: "Today at 10:30 AM",
             icon: FiLock,
             color: "text-blue-500"
         },
         {
             title: "Contrast Security",
             status: "Healthy",
             lastUpdated: "Today at 10:30 AM",
             icon: FiCode,
             color: "text-blue-500"
         }
  ];

  return (
      <div className="space-y-6">
          {/* Summary Section */}
          <div className="bg-white rounded-8 shadow p-6 space-y-4">
              <h3 className="text-xl font-bold">Summary</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                      {
                          title: "Azure Services",
                          icon: FiDollarSign,
                          color: "text-amber-600"
                      }
                  ].map((item, index) => (
                      <div key={index} className="flex items-center space-x-2">
                          <item.icon className={`w-5 h-5 ${item.color}`} />
                          <span>{item.title}</span>
                      </div>
                  ))}
              </div>
          </div>

          {/* Service Cards */}
          <div className="grid grid-cols-1 gap-6">
              {services.map((service, index) => (
                  <Card
                      key={index}
                      title={service.title}
                      status={service.status}
                      lastUpdated={service.lastUpdated}
                      icon={service.icon}
                      color={service.color}
                      graphs={service.graphs}  // Pass the graph data to the Card component
                  />
              ))}
          </div>
      </div>
  );
}

export default Dashboard;