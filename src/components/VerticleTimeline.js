
//This component not is use currently

import React from "react";
import PropTypes from "prop-types";
import { FaCircle } from "react-icons/fa";

function VerticalTimeline({ data }) {
  // Define an array of colors
  const colors = [
    "text-blue-500",
    "text-red-500",
    "text-green-500",
    "text-yellow-500",
    "text-purple-500",
  ]; // Add more colors as needed

  return (
    <div
      className="relative mt-5"
      style={{ overflowY: "auto", height: "430px" }}
    >
      {data.map((event, index) => (
        <div className="flex items-start relative" key={index}>
          {/* Using the index to select the color from the array */}
          <div className="mr-4 mt-0">
            <FaCircle
              className={`text-base ${colors[index % colors.length]}`}
            />
          </div>
          <div className="flex flex-col mt-2 mb-2 hover:bg-blue-900 hover:bg-opacity-30 ">
            <h4 className="text-xs">{event.time}</h4>
            <div className="text-xs">
              <p>{event.objects}</p>
              

              <p className="text-gray-500">{event.coordX}</p>
              <p className="text-gray-500">{event.coordY}</p>
            </div>
          </div>

          {/* Vertical line */}
          {index !== data.length - 1 && (
            <div className="absolute top-4 left-2 bottom-0 w-0.5 bg-gray-700 bg-opacity-200" />
          )}
          {/* Horizontal line */}
          {index !== data.length - 1 && (
            <div className="absolute left-2 top-24 w-36 h-0.5 bg-gray-900 bg-opacity-200" />
          )}
        </div>
      ))}
    </div>
  );
}

VerticalTimeline.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      time: PropTypes.string.isRequired,
      objects: PropTypes.string.isRequired,
      coordX: PropTypes.string.isRequired,
      coordY: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default VerticalTimeline;
