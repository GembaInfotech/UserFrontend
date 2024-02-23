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

    return (
        <>
            <div className=' w-full h-fit p-16'>
                <div className=''>
                    <h1>My vehicles</h1>
                    <div className=' flex flex-row  items-center justify-center '>

                    {vehicles.map(vehicle => (
                      
                    
                           <VehicleCard  key={vehicle.id} vehicle={vehicle} />
                           ))}
                      </div>

                  
                    {isAdd ? (
                        <VehicleForm onSuccess={() => setAdd(false)} />
                    ) : (
                        <div>
                            <button onClick={add}>Add new</button>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}

export default UserVehicle;
