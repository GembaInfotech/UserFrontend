import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteVehiclesAsync, setDefaultVehicleAsync } from '../../../slice/VehiclesSlice';

const VehicleCard = ({ vehicle, token }) => {
  const dispatch = useDispatch();
  const [showPopup, setShowPopup] = useState(false);
  const handleDelete = () => {

    dispatch(deleteVehiclesAsync({ id: vehicle._id }));
    setShowPopup(false);
    window.location.reload();
  };
  const handleSetDefault = () => {
    console.log("call")
    dispatch(setDefaultVehicleAsync({ token, id: vehicle._id, def: true }));
    window.location.reload();

    setShowPopup(false);
  };
  const removeDefault = () => {
    dispatch(setDefaultVehicleAsync({ token, id: vehicle._id, def: false }));
    setShowPopup(false);
    window.location.reload();
  };
  return (
    <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden min-h-32 mx-2 mb-4">
      <div onClick={() => setShowPopup(true)} className="px-4 py-3">
        <p className="text-gray-700 text-sm mb-1">Vehicle Name: <span className="text-gray-900">{vehicle.name}</span></p>
        <p className="text-gray-700 text-sm mb-1">Vehicle Number: <span className="text-gray-900">{vehicle.num}</span></p>
        <p className="text-gray-700 text-sm mb-1">Vehicle Type: <span className="text-gray-900">{vehicle.type}</span></p>
        {vehicle.def && <p className="text-gray-700 text-sm mb-1">Vehicle Type: <span className="text-gray-900">DEFAULT</span></p>}
      </div>
      {showPopup && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded shadow-lg w-96">
            <h2 className="text-lg font-semibold mb-4">Vehicle Details</h2>
            <p className="mb-2"><span className="font-semibold">Vehicle Name:</span> {vehicle.name}</p>
            <p className="mb-2"><span className="font-semibold">Vehicle Number:</span> {vehicle.num}</p>
            <p className="mb-4"><span className="font-semibold">Vehicle Type:</span> {vehicle.type}</p>
            <div className="flex justify-end">
              {vehicle.def ? (
                <button onClick={removeDefault} className="px-4 py-2 mr-2 bg-yellow-400 text-white rounded hover:bg-yellow-600 focus:outline-none focus:bg-red-600">Remove Default</button>
              ) : (
                <button onClick={handleSetDefault} className="px-4 py-2 mr-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Set as Default</button>
              )}
              <button onClick={handleDelete} className="px-4 mr-2 py-2 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none focus:bg-gray-600">Delete</button>
              <button onClick={() => setShowPopup(false)} className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default VehicleCard;
