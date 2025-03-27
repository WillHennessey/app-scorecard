import React from "react";
import PropTypes from "prop-types";
import Graph from "./Graph";

const setColumns = (columns) => {
  switch (columns) {
    case "2":
      return "md:grid-cols-2";
    case "3":
      return "md:grid-cols-3";
    case "4":
      return "md:grid-cols-4";
    default:
      return "md:grid-cols-3";
  }
};

const Card = ({
  title,
  lastUpdated,
  icon,
  color = "#8884d8",
  graphs = [],
  columns = "3",
}) => {
  return (
    <div className="bg-f5f5f5 p-4 rounded-lg shadow">
      <div className="flex items-center">
        {icon}
        <h3 className={`text-xl font-bold ml-4 ${color}`}>{title}</h3>
      </div>
      {graphs.length > 0 && (
        <div className={`mt-6 grid grid-cols-1 ${setColumns(columns)} gap-3`}>
          {graphs.map((graph) => (
            <figure key={graph} className="bg-white rounded-lg shadow">
              <Graph title={graph} />
            </figure>
          ))}
        </div>
      )}
      <div className="mt-4 space-y-2 float-right">
        <p>Last Updated: {lastUpdated}</p>
      </div>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  lastUpdated: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
  color: PropTypes.string,
  graphs: PropTypes.arrayOf(PropTypes.string),
  columns: PropTypes.string,
};

export default Card;
