import React, { useEffect, useState } from 'react';
import axios from 'axios';
import VehicleCard from '../VehicleCard';
import VehicleForm from '../VehicleForm';

function UserVehicle() {
    const [isAdd, setAdd] = useState(false);
    const [vehicles, setVehicles] = useState([]);

    useEffect(() => {
        const fetchVehicles = async () => {
            try {
                const response = await axios.get('http://localhost:7001/v1/api/endUser/getVehicles/65d81ecebf0f7a0260f70bc0');
                if (response.status === 200) {
                    setVehicles(response.data.vehicles || []);
                } else {
                    console.error('Failed to fetch vehicles');
                }
            } catch (error) {
                console.error('Error fetching vehicles:', error);
            }
        };

        fetchVehicles();
    }, []);

    const add = () => {
        setAdd(true);
    }

    const handleFormClose = () => {
        setAdd(false);
    };

    return (
        <>
            <div className='w-full h-fit p-8'>
                <div className=''>
                    <div className='flex flex-row justify-between items-center mx-4 mb-4'>
                        <h1 className='text-xl text-gray-600 '>My vehicles</h1>
                        <div>
                            {isAdd ? (
                                <VehicleForm onSuccess={handleFormClose} onCancel={handleFormClose} />
                            ) : (
                                <button onClick={add} className="bg-gray-100 hover:bg-white text-black  py-2 px-4 rounded drop-shadow-lg">
                                    Add new
                                </button>
                            )}
                        </div>
                    </div>
                    <div className='flex flex-wrap justify-center'>

                        {vehicles.map(vehicle => (
                            <div key={vehicle.id} className='w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 p-2'>
                                <VehicleCard vehicle={vehicle} />
                            </div>
                        ))}
                    </div>


                </div>
            </div>
        </>
    );
}

export default UserVehicle;
