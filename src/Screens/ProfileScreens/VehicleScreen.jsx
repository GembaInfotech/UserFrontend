import { useEffect, useState } from 'react';
import VehicleCard from '../../Components/ProfileComponents/VehicleComponent/VehicleCard';
import VehicleForm from '../../Components/ProfileComponents/VehicleComponent/VehicleForm';
import { useDispatch, useSelector } from 'react-redux';
import PulseLoader from "react-spinners/PulseLoader";
import { fetchVehiclesAsync } from '../../slice/VehiclesSlice';

function VehicleScreen() {
    const [isAdd, setAdd] = useState(false);
    const dispatch = useDispatch();
    const token = JSON.parse(localStorage.getItem('token'))
    const vehicles = useSelector((state) => state.Vehicles);

    useEffect(() => {
        if (vehicles.status == "idle")
            dispatch(fetchVehiclesAsync());
    }, [dispatch]);

    const add = () => { setAdd(true); }
    const handleFormClose = () => { setAdd(false); };

    return (
        <>
            { vehicles.status != "succeeded" && <div className='flex  flex-row justify-center items-center '> <PulseLoader size="8px" /></div>}
            { vehicles.status=="failed"&&    vehicles.error && <h1>{vehicles.error}</h1>}

            {!vehicles.error && <div className='w-full h-fit p-8 max-sm:p-0'>
                <div className=''>
                    <div className='flex flex-row justify-between items-center mx-4 mb-4 max-sm:m- '>
                        <h1 className='text-xl text-gray-600 max-sm:text-base'>My vehicles</h1>
                        <div>
                            {isAdd ? (
                                <VehicleForm token={token} onSuccess={handleFormClose} onCancel={handleFormClose} />
                            ) : (
                                <button onClick={add} className="bg-gray-100 hover:bg-white text-black  py-2 px-4  max-sm:p-1 rounded drop-shadow-lg">
                                    Add new
                                </button>
                            )}
                        </div>
                    </div>
                    <div className='flex flex-wrap justify-center'>
                        {vehicles?.data.map(vehicle => (
                            <div key={vehicle.id} className='w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 p-2'>
                                <VehicleCard vehicle={vehicle} userid={token} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            }
        </>
    );
}
export default VehicleScreen;
