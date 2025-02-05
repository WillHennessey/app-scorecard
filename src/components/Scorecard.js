import React from "react";
import { FaStar } from "react-icons/fa";

const ScoreCard = ({ title, score }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-sm">
      <h2 className="text-xl font-bold mb-4">{title}</h2>
      <div className="flex items-center justify-between">
        <span className="text-3xl font-bold text-blue-600">{score}/10</span>
        <FaStar className="text-yellow-500 text-2xl" />
      </div>
    </div>
  );
};

export default ScoreCard;