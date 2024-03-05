import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteVehiclesAsync } from '../../../slice/VehiclesSlice';
const VehicleCard = ({ vehicle, userid }) => {
  const dispatch =useDispatch();
  const id = vehicle._id;
  return (
    <div onClick={()=>{dispatch(deleteVehiclesAsync({userid, id}))
    console.log("clicked")}} className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden mx-2 mb-4">
      <div className="px-4 py-3">
        <p className="text-gray-700 text-sm mb-1">Vehicle Name: <span className="text-gray-900">{vehicle.name}</span></p>
        <p className="text-gray-700 text-sm mb-1">Vehicle Number: <span className="text-gray-900">{vehicle.num}</span></p>
        <p className="text-gray-700 text-sm mb-1">Vehicle Type: <span className="text-gray-900">{vehicle.type}</span></p>
        {vehicle.def&&<p className="text-gray-700 text-sm mb-1">Vehicle Type: <span className="text-gray-900">DEFAULT</span></p>
}
      </div>
    </div>
  );
};

export default VehicleCard;
