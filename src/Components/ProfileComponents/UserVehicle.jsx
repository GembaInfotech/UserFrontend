import React, { useEffect, useState } from 'react'
import VehicleForm from '../VehicleForm';

function UserVehicle() {


    const [isAdd, setAdd] = useState(false)

    const storedUserData = JSON.parse(localStorage.getItem('userData'));
    const Vehicles =storedUserData?.vehicle_info;
    console.log("vehicles information", Vehicles);

    const add = () => {
        setAdd(true);
    }
    return (
        <>

            <div className='flex w-full h-fit justify-center items-center  p-16'>
                {isAdd?<VehicleForm/>:
                <button className='bg-[#edf1f4] border border-black rounded-md border-dashed p-2 w-48 h-32' onClick={add}>Add new</button>
    }
    <h1>{Vehicles[0].vehicle_name}</h1>
            </div>
        </>
    )
}

export default UserVehicle
