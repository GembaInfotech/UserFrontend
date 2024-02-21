import React, { useState, useEffect } from 'react';
import { MdEdit } from "react-icons/md";

function UserInfo() {
  const [showModal, setShowModal] = useState(false);
  const [user, setUser] = useState(null);

  // Function to toggle modal visibility
  const toggleModal = () => {
    setShowModal(!showModal);
  };

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    // For simplicity, let's just close the modal
    toggleModal();
  };

  useEffect(() => {
    const storedUserData = JSON.parse(localStorage.getItem('userData'));
    setUser(storedUserData);
    
    
  }, []);

  return (
    <div className='flex-row w-full p-8'>
      {/* User Information Section */}
      <div className=' mb-4'>
        <h1 className="text-2xl font-semibold text-gray-800 mb-2">Primary Information</h1>
        <div className='p-2'>
          <h1 className='text-xl font-semibold text-gray-700 '>{user?.name} </h1>
          <div className='flex '>
            <h1 className='text-sm font-normal text-gray-600 my-1'>{user?.contact}</h1>
            <h1 className='text-sm font-normal text-gray-600 my-1 mx-4'>{user?.email}</h1>
            <button className='text-sm font-normal text-gray-600 my-2' onClick={toggleModal}><MdEdit/></button>
          </div>
        </div>
      </div>

      {/* Other Information Section */}
      <div className='my-8'>
        <h1 className="text-2xl font-semibold text-gray-800 mb-2">Other Information</h1>
        <div className='p-2'>
          <div className='flex '>
            <h1 className='text-sm font-semibold text-gray-700 py-2 my-1'>Driving Licence No. </h1>
            <h1 className='text-sm  bg-slate-100 font-semibold  px-8 py-2 rounded-sm text-gray-600 my-1 mx-4'>993429834</h1>
            <button className='text-sm font-normal text-gray-600 my-2' onClick={toggleModal}><MdEdit/></button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className={`fixed inset-y-0 right-0 z-50 flex items-center justify-end overflow-x-hidden overflow-y-auto `}>
  <div className="w-1/2 min-h-screen bg-[#fafdfe]">
            {/* Modal content */}
            <div className="bg-[#fafdfe] rounded-sm min-h-screen shadow-lg transition-transform ease-in-out duration-1000   translate-x ">
              <div className="p-6">
                {/* Form for editing user information */}
                <form onSubmit={handleSubmit}>
                  {/* Your form fields go here */}
                  {/* For simplicity, let's assume text inputs for name, mobile, and email */}
                  <input type="text" placeholder="Name" className="w-full  rounded-sm mb-2 px-2 py-1" />
                  <input type="text" placeholder="Mobile" className="w-full  rounded-sm mb-2 px-2 py-1" />
                  <input type="text" placeholder="Email" className="w-full  rounded-sm mb-4 px-2 py-1" />
                  <div className="flex justify-end">
                    <button type="submit" className="bg-red-500 text-white px-2 py-1 rounded-sm">Save</button>
                    <button type="button" onClick={toggleModal} className="ml-4 px-2 py-1 text-gray-600">Cancel</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default UserInfo;
