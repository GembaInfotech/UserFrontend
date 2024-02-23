import React from 'react';

const VehicleCard = ({ vehicle }) => {

  const url = 'https://cdn.pixabay.com/photo/2016/08/25/20/17/crash-test-1620603_1280.jpg';
  return (
    <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden mx-2">
      <div className="px-6 py-4">
        {/* Vehicle Image */}
        <div className="mb-4">
          <img src={url} alt={vehicle.vehicle_name} className="h-32 w-full object-cover rounded-lg drop-shadow-md" />
        </div>
        {/* Vehicle Details */}
        <div className="mb-2">
          <label className="text-gray-700">Vehicle Name:</label>
          <span className="text-gray-900 ml-2">{vehicle.vehicle_name}</span>
        </div>
        <div className="mb-2">
          <label className="text-gray-700">Vehicle Number:</label>
          <span className="text-gray-900 ml-2">{vehicle.vehicle_number}</span>
        </div>
        <div className="mb-2">
          <label className="text-gray-700">Vehicle Type:</label>
          <span className="text-gray-900 ml-2">{vehicle.vehicle_type}</span>
        </div>
      </div>
    </div>
  );
};

export default VehicleCard;
