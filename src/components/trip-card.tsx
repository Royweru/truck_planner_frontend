/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";

const TripCard = ({ 
    trip 
}:{
    trip:any
}) => {
  // Function to determine the badge color based on the status
  const getStatusStyles = (status:string) => {
    switch (status.toLowerCase()) {
      case "in progress":
        return "bg-blue-500 text-white";
      case "completed":
        return "bg-green-500 text-white";
      case "scheduled":
        return "bg-yellow-500 text-black";
      case "cancelled":
        return "bg-red-500 text-white";
      default:
        return "bg-gray-500 text-white";
    }
  };

  return (
    <div
      className="flex justify-between items-center p-4 bg-gray-800 text-white rounded-lg mb-2 shadow-md hover:bg-gray-700 hover:cursor-pointer transition-all duration-300"
    >
   
      <div>
        <p className="font-semibold text-lg">
          {trip.current_location} → {trip.dropoff_location}
        </p>
      </div>
      
      <div>
        <span
          className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusStyles(
            trip.status
          )}`}
        >
          {trip.status}
        </span>
      </div>
    </div>
  );
};

export default TripCard;