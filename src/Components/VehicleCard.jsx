import React from 'react';

const VehicleCard = () => {
    const vehicles = [
        {
          imageUrl: 'https://cdn.pixabay.com/photo/2016/08/25/20/17/crash-test-1620603_1280.jpg',
          ownerName: 'John Doe',
          modelName: 'Toyota Camry',
          vehicleType: 'Sedan',
          vehicleNumber: 'ABC1234'
        },
        {
          imageUrl: 'https://cdn.pixabay.com/photo/2016/08/05/19/06/audi-1573020_960_720.jpg',
          ownerName: 'Jane Smith',
          modelName: 'Honda Civic',
          vehicleType: 'Sedan',
          vehicleNumber: 'XYZ5678'
        },
        {
            imageUrl: 'https://cdn.pixabay.com/photo/2016/08/05/19/06/audi-1573020_960_720.jpg',
            ownerName: 'Jane Smith',
            modelName: 'Honda Civic',
            vehicleType: 'Sedan',
            vehicleNumber: 'XYZ5678'
          },
          {
            imageUrl: 'https://cdn.pixabay.com/photo/2016/08/25/20/17/crash-test-1620603_1280.jpg',
            ownerName: 'John Doe',
            modelName: 'Toyota Camry',
            vehicleType: 'Sedan',
            vehicleNumber: 'ABC1234'
          },
          {
            imageUrl: 'https://cdn.pixabay.com/photo/2016/08/05/19/06/audi-1573020_960_720.jpg',
            ownerName: 'Jane Smith',
            modelName: 'Honda Civic',
            vehicleType: 'Sedan',
            vehicleNumber: 'XYZ5678'
          }
      ];
      
  return (
    <div className="flex flex-wrap justify-center backdrop-blur-md">
      {/* Button for adding vehicles */}
      <div className="flex justify-end w-full mb-6 mr-12">
        <button className="bg-white hover:bg-blue-700 text-gray-600 font-bold py-2 px-4 rounded">Add Vehicle</button>
      </div>
      {/* Display vehicle cards */}
      {vehicles.map((vehicle, index) => (
        <div key={index} className="bg-white rounded-lg shadow-lg p-6 mb-4 mr-4 w-1/4">
          {/* Vehicle Image */}
          <div className="mb-4 ">
            <img src={vehicle.imageUrl} alt={vehicle.modelName} className="h-32 w-full object-cover rounded-lg drop-shadow-md" />
          </div>
          {/* Vehicle Details */}
          <div className="text-gray-800">
            <p className="text-lg font-semibold mb-2 text-gray-700"><span className='text-gray-500'>Model Name:</span> {vehicle.ownerName}</p>
            
            <p className="text-sm text-gray-700 mb-2"><span className='text-gray-500'>Vehicle Type:</span> {vehicle.vehicleType}</p>
            <p className="text-sm text-gray-700 mb-2"><span className='text-gray-500'>Vehicle Number:</span> {vehicle.vehicleNumber}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default VehicleCard;
