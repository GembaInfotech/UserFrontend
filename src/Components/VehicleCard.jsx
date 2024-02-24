import React from 'react';

const VehicleCard = ({ vehicle }) => {
  return (
    <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden mx-2 mb-4">
      <div className="px-4 py-3">
        {/* Vehicle Details */}
        <p className="text-gray-700 text-sm mb-1">Vehicle Name: <span className="text-gray-900">{vehicle.vehicle_name}</span></p>
        <p className="text-gray-700 text-sm mb-1">Vehicle Number: <span className="text-gray-900">{vehicle.vehicle_number}</span></p>
        <p className="text-gray-700 text-sm mb-1">Vehicle Type: <span className="text-gray-900">{vehicle.vehicle_type}</span></p>
      </div>
    </div>
  );
};

export default VehicleCard;
