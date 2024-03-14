import React, { useState, useEffect } from 'react';
import { MdEdit, MdCheckCircle } from "react-icons/md";

function InformationScreen() {
  const [user, setUser] = useState(null);

  let storedUserData =''
  useEffect(() => {
     storedUserData = JSON.parse(localStorage.getItem('userData'));
    setUser(storedUserData);
  }, []);


  return (
    <div className='flex-row w-full p-8 max-sm:p-4'>
      <div className=' mb-4'>
        <h1 className="text-2xl max-sm:text-base max-sm:font-bold font-semibold text-gray-800  mb-2 max-sm:mb-2 ">Primary Information</h1>
        <div className='p-2 max-sm:p-1'>
          <h1 className='text-xl  max-sm:text-base font-semibold text-gray-700 '>{user?.name} </h1>
          <div className='flex max-sm:flex-col '>
            <h1 className='text-sm font-normal text-gray-600 my-1'>{user?.mob}</h1>
            <h1 className='text-sm font-normal text-gray-600 my-1 mx-4 max-sm:mx-0  '>{user?.mail}</h1>
          </div>
        </div>
      </div>
     
    </div>
  );
}

export default InformationScreen;
