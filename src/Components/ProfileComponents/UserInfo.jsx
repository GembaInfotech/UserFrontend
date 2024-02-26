import React, { useState, useEffect } from 'react';
import { MdEdit, MdCheckCircle } from "react-icons/md";

function UserInfo() {
  const [showModal, setShowModal] = useState(false);
  const [user, setUser] = useState(null);
  const [newEmail, setNewEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [isOtpCorrect, setIsOtpCorrect] = useState(false);

  let storedUserData =''
  useEffect(() => {
     storedUserData = JSON.parse(localStorage.getItem('userData'));
    setUser(storedUserData);
    console.log(storedUserData._id)
  }, []);

  const handleEmailChange = (e) => {
    setNewEmail(e.target.value);
  };

  const handleOtpChange = (e) => {
    setOtp(e.target.value);
  };

  const handleSendOtp = async () => {
    try {
      console.log(user)
      const response = await fetch(`http://localhost:7001/v1/api/endUser/sendOtp/${user?._id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ newEmail }),
      });
      const data = await response.json();
      if (response.ok) {
        alert(data.message); // Alert for success
      } else {
        alert(data.message); // Alert for error
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleEmailUpdate = async () => {
    try {
      const response = await fetch(`http://localhost:7001/v1/api/endUser/update/${user?._id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ newEmail }),
      });
      const data = await response.json();
      if (response.ok) {
        alert('Email updated successfully'); // Alert for success
        localStorage.setItem('userData', JSON.stringify(data.user));
        setShowModal(false);
      } else {
        alert(data.message); // Alert for error
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleOtpVerify = async () => {
    try {
      const response = await fetch(`http://localhost:7001/v1/api/endUser/verify/${user?._id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ otp }),
      });
      const data = await response.json();
      if (response.ok) {
        setIsOtpCorrect(true);
        alert(data.message); // Alert for success
      } else {
        setIsOtpCorrect(false);
        alert(data.message); // Alert for error
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleCancel = () => {
    setShowModal(false);
    setNewEmail('');
    setOtp('');
    setIsOtpCorrect(false);
  };

  return (
    <div className='flex-row w-full p-8'>
      <div className=' mb-4'>
        <h1 className="text-2xl font-semibold text-gray-800 mb-2">Primary Information</h1>
        <div className='p-2'>
          <h1 className='text-xl font-semibold text-gray-700 '>{user?.Name} </h1>
          <div className='flex '>
            <h1 className='text-sm font-normal text-gray-600 my-1'>{user?.phone}</h1>
            <h1 className='text-sm font-normal text-gray-600 my-1 mx-4'>{user?.email}</h1>
            <button className='text-sm font-normal text-gray-600 my-2' onClick={() => setShowModal(true)}><MdEdit/></button>
          </div>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
          <div className="bg-white p-8 rounded-lg z-10">
            <h1 className="text-xl font-semibold mb-4">Edit Email</h1>
            <input type="email" className="border border-gray-400 rounded px-3 py-2 mb-4 " value={newEmail} onChange={handleEmailChange} placeholder="New Email" />
            {!isOtpCorrect && (
              <input type="text" className="border border-gray-400 rounded px-3 py-2 mb-4 ml-2" value={otp} onChange={handleOtpChange} placeholder="Enter OTP" />
            )}
            {isOtpCorrect && <MdCheckCircle className="text-green-500 text-xl mb-4" />}
            <div className="flex justify-between">
              <button className="px-4 py-2 bg-gray-400 text-white rounded mr-4" onClick={handleCancel}>Cancel</button>
              {!isOtpCorrect && (
                <button className="px-4 py-2 bg-blue-500 text-white rounded" onClick={handleSendOtp}>Send OTP</button>
              )}
              {otp && !isOtpCorrect && (
                <button className="px-4 py-2 bg-blue-500 text-white rounded" onClick={handleOtpVerify}>Verify OTP</button>
              )}
              {isOtpCorrect && (
                <button className="px-4 py-2 bg-blue-500 text-white rounded" onClick={handleEmailUpdate}>Submit</button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default UserInfo;
