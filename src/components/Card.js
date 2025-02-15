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
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-3">
          {graphs.map((graph) => (
            <div key={graph} className="bg-white rounded-lg shadow">
              <Graph title={graph} />
            </div>
          ))}
        </div>
      )}
      <div className="mt-4 space-y-2 float-right">
        <p>Last Updated: {lastUpdated}</p>
      </div>
    </div>
  );
}

export default Card;
