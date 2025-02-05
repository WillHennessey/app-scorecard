import React from "react";
import Graph from "./Graph";

function Card({
  title,
  status,
  lastUpdated,
  icon,
  color = "#8884d8",
  graphs = [] // Default empty array if not provided
}) {
  return (
    <div style={{ backgroundColor: '#f5f5f5', padding: '20px', borderRadius: '10px' }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        {icon}
        <h2 style={{ margin: 0, color }}> {/* Fixed margin and added color */}
          {title}
        </h2>
      </div>
      <div style={{ marginTop: '15px' }}>
        <p>Status: {status}</p>
        <p>Last Updated: {lastUpdated}</p>
      </div>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '20px',
        marginTop: '20px'
      }}>
        {/* Safely map over graphs if it's an array */}
        {Array.isArray(graphs) && graphs.map((graph) => {
          let type = '';
          if (graph.startsWith('Cost')) {
            type = 'cost';
          } else if (graph.startsWith('Top 5')) {
            type = 'resource';
          } else if (graph.startsWith('Monthly')) {
            type = 'budget';
          }
          return (
            <Graph
              key={graph}
              title={graph}
              type={type}
              style={{ backgroundColor: color }}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Card;