import React from 'react';
import { MdCurrencyRupee } from "react-icons/md";

const BookingCard = ({ booking }) => {
  return (
    <div className=" bg-[#f8fbff] shadow-md rounded-lg p-4 mx-2  border-gray-200 ">
      <p className="text-base font-semibold text-gray-800 ">Parking: <span className='font-normal text-sm'> {booking.parkingName}</span> </p>
      <div className='flex flex-row items-center justify-start '>
        <p className="text-sm text-gray-700 font-semibold mr-1">Booking Price:</p>
        <MdCurrencyRupee className="text-sm text-gray-700"/>
        <p className=" text-gray-700">{booking.bookingPrice}</p>
      </div>
      <p className="text-sm text-gray-700"><span className="font-semibold">Booking Status:</span> {booking.status}</p>
      <p className="text-sm text-gray-700"><span className="font-semibold">Check-in Time:</span> {new Date (booking.timeIn).toLocaleString()}</p>
    </div>
  );
};

export default BookingCard;
