import React from 'react';

const BookingCard = () => {

  const bookingDetails = {
    "bookingDate": "2024-02-08",
    "parkingDate": "2024-02-10",
    "parkingTime": "10:00 AM",
    "vehicleInfo": "Toyota Camry, Blue, ABC-1234",
    "parkingLocation": "Parking Lot A",
    "duration": "2 days",
    "checkoutTime": "12:00 PM",
    "paymentAmount": "$30.00",
    "paymentMethod": "Credit Card",
    "confirmationNumber": "ABC123456",
    "confirmationMessage": "Confirmed"
  }

  return (
    <div className="bg-blue-50 text-gray-700 p-1 rounded-lg shadow-lg landscape-card">
      <h2 className="text-base font-semibold mb-2 text-center">Booking Details</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        <div className="">
          <p><span className="font-semibold text-xs">Booking Date:</span> {bookingDetails.bookingDate}</p>
          <p><span className="font-semibold text-xs">Parking Date:</span> {bookingDetails.parkingDate}</p>
        </div>
        <div className="">
          <p><span className="font-semibold text-xs">Parking Time:</span> {bookingDetails.parkingTime}</p>
          <p><span className="font-semibold text-xs">Duration:</span> {bookingDetails.duration}</p>
        </div>
        <div className="">         
          <p><span className="font-semibold text-xs">Checkout Time:</span> {bookingDetails.checkoutTime}</p>
          <p><span className="font-semibold text-xs">Parking Location:</span> {bookingDetails.parkingLocation}</p>
        </div>
        <div className="">
          <p><span className="font-semibold text-xs">Payment Amount:</span> {bookingDetails.paymentAmount}</p>
          <p><span className="font-semibold text-xs">Payment Method:</span> {bookingDetails.paymentMethod}</p>
        </div>
        <div className="col-span-2 ">
          <p><span className="font-semibold text-xs">Confirmation Message:</span> <span className="text-green-500">{bookingDetails.confirmationMessage}</span></p>
        </div>
        <div className="col-span-2 text-center">
          <button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-1 px-2 rounded-lg focus:outline-none focus:shadow-outline">Cancel Booking</button>
        </div>
      </div>
    </div>
  );
};

export default BookingCard;
