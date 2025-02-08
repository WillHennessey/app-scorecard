import React from "react";
import Graph from "./Graph";

function Card({
  title,
  lastUpdated,
  icon,
  color = "#8884d8",
  graphs = [], // Default empty array if not provided
}) {
  return (
    <div className="bg-f5f5f5 p-6 rounded-lg shadow">
      <div className="flex items-center">
        {icon}
        <h3 className={`text-xl font-bold ml-4 ${color}`}>{title}</h3>
      </div>
      {graphs.length > 0 && (
        <div className="mt-6 grid grid-cols-1 xl:grid-cols-3 gap-2">
          {graphs.map((graph) => {
            let type = "";
            if (graph.startsWith("Cost")) {
              type = "monthlySpend";
            } else if (graph.startsWith("Top")) {
              type = "topServices";
            } else if (graph.startsWith("Monthly")) {
              type = "costBySubscription";
            }
            return (
              <div key={graph} className="bg-white p-4 rounded-lg shadow">
                <Graph title={graph} type={type} />
              </div>
            );
          })}
        </div>
      )}
      <div className="mt-4 space-y-2 float-right">
        <p>Last Updated: {lastUpdated}</p>
      </div>
    </div>
  );
}

export default Card;
