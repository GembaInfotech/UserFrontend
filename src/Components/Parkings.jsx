// import React, { useState } from "react";

// const TransactionsDetails = () => {
//     const transactionDetails = [
//         {
//             "bookingId": 1,
//             "userName": "John Doe",
//             "parkingName": "Parking Lot A",
//             "parkingLocation": "123 Main Street",
//             "parkingTime": "2024-02-08T09:00:00",
//             "transaction": {
//                 "transactionId": "TRX001",
//                 "transactionAmount": 20,
//                 "transactionTime": "2024-02-08T09:15:00",
//                 "transactionMethod": "Credit Card"
//             }
//         },
//         {
//             "bookingId": 2,
//             "userName": "Jane Smith",
//             "parkingName": "Parking Lot B",
//             "parkingLocation": "456 Elm Street",
//             "parkingTime": "2024-02-08T10:00:00",
//             "transaction": {
//                 "transactionId": "TRX002",
//                 "transactionAmount": 25,
//                 "transactionTime": "2024-02-08T10:30:00",
//                 "transactionMethod": "Debit Card"
//             }
//         },
//         {
//             "bookingId": 3,
//             "userName": "Alice Johnson",
//             "parkingName": "Parking Lot C",
//             "parkingLocation": "789 Oak Street",
//             "parkingTime": "2024-02-08T11:00:00",
//             "transaction": {
//                 "transactionId": "TRX003",
//                 "transactionAmount": 30,
//                 "transactionTime": "2024-02-08T11:20:00",
//                 "transactionMethod": "Cash"
//             }
//         },
//         {
//             "bookingId": 4,
//             "userName": "Alice Johnson",
//             "parkingName": "Parking Lot C",
//             "parkingLocation": "789 Oak Street",
//             "parkingTime": "2024-02-08T11:00:00",
//             "transaction": {
//                 "transactionId": "TRX003",
//                 "transactionAmount": 30,
//                 "transactionTime": "2024-02-08T11:20:00",
//                 "transactionMethod": "Cash"
//             }
//         },
//         {
//             "bookingId": 5,
//             "userName": "Alice Johnson",
//             "parkingName": "Parking Lot C",
//             "parkingLocation": "789 Oak Street",
//             "parkingTime": "2024-02-08T11:00:00",
//             "transaction": {
//                 "transactionId": "TRX003",
//                 "transactionAmount": 30,
//                 "transactionTime": "2024-02-08T11:20:00",
//                 "transactionMethod": "Cash"
//             }
//         },
//         {
//             "bookingId": 6,
//             "userName": "Alice Johnson",
//             "parkingName": "Parking Lot C",
//             "parkingLocation": "789 Oak Street",
//             "parkingTime": "2024-02-08T11:00:00",
//             "transaction": {
//                 "transactionId": "TRX003",
//                 "transactionAmount": 30,
//                 "transactionTime": "2024-02-08T11:20:00",
//                 "transactionMethod": "Cash"
//             }
//         },
//         {
//             "bookingId": 7,
//             "userName": "Alice Johnson",
//             "parkingName": "Parking Lot C",
//             "parkingLocation": "789 Oak Street",
//             "parkingTime": "2024-02-08T11:00:00",
//             "transaction": {
//                 "transactionId": "TRX003",
//                 "transactionAmount": 30,
//                 "transactionTime": "2024-02-08T11:20:00",
//                 "transactionMethod": "Cash"
//             }
//         },
//         {
//             "bookingId": 8,
//             "userName": "Alice Johnson",
//             "parkingName": "Parking Lot C",
//             "parkingLocation": "789 Oak Street",
//             "parkingTime": "2024-02-08T11:00:00",
//             "transaction": {
//                 "transactionId": "TRX003",
//                 "transactionAmount": 30,
//                 "transactionTime": "2024-02-08T11:20:00",
//                 "transactionMethod": "Cash"
//             }
//         },
//         {
//             "bookingId": 9,
//             "userName": "Jane Smith",
//             "parkingName": "Parking Lot B",
//             "parkingLocation": "456 Elm Street",
//             "parkingTime": "2024-02-08T10:00:00",
//             "transaction": {
//                 "transactionId": "TRX002",
//                 "transactionAmount": 25,
//                 "transactionTime": "2024-02-08T10:30:00",
//                 "transactionMethod": "Debit Card"
//             }
//         },
//         {
//             "bookingId": 10,
//             "userName": "Jane Smith",
//             "parkingName": "Parking Lot B",
//             "parkingLocation": "456 Elm Street",
//             "parkingTime": "2024-02-08T10:00:00",
//             "transaction": {
//                 "transactionId": "TRX002",
//                 "transactionAmount": 25,
//                 "transactionTime": "2024-02-08T10:30:00",
//                 "transactionMethod": "Debit Card"
//             }
//         },
//         {
//             "bookingId": 11,
//             "userName": "Jane Smith",
//             "parkingName": "Parking Lot B",
//             "parkingLocation": "456 Elm Street",
//             "parkingTime": "2024-02-08T10:00:00",
//             "transaction": {
//                 "transactionId": "TRX002",
//                 "transactionAmount": 25,
//                 "transactionTime": "2024-02-08T10:30:00",
//                 "transactionMethod": "Debit Card"
//             }
//         },
//         {
//             "bookingId": 12,
//             "userName": "Jane Smith",
//             "parkingName": "Parking Lot B",
//             "parkingLocation": "456 Elm Street",
//             "parkingTime": "2024-02-08T10:00:00",
//             "transaction": {
//                 "transactionId": "TRX002",
//                 "transactionAmount": 25,
//                 "transactionTime": "2024-02-08T10:30:00",
//                 "transactionMethod": "Debit Card"
//             }
//         },
//         {
//             "bookingId": 13,
//             "userName": "Jane Smith",
//             "parkingName": "Parking Lot B",
//             "parkingLocation": "456 Elm Street",
//             "parkingTime": "2024-02-08T10:00:00",
//             "transaction": {
//                 "transactionId": "TRX002",
//                 "transactionAmount": 25,
//                 "transactionTime": "2024-02-08T10:30:00",
//                 "transactionMethod": "Debit Card"
//             }
//         },
//         {
//             "bookingId": 14,
//             "userName": "Jane Smith",
//             "parkingName": "Parking Lot B",
//             "parkingLocation": "456 Elm Street",
//             "parkingTime": "2024-02-08T10:00:00",
//             "transaction": {
//                 "transactionId": "TRX002",
//                 "transactionAmount": 25,
//                 "transactionTime": "2024-02-08T10:30:00",
//                 "transactionMethod": "Debit Card"
//             }
//         },
//         {
//             "bookingId": 15,
//             "userName": "Jane Smith",
//             "parkingName": "Parking Lot B",
//             "parkingLocation": "456 Elm Street",
//             "parkingTime": "2024-02-08T10:00:00",
//             "transaction": {
//                 "transactionId": "TRX002",
//                 "transactionAmount": 25,
//                 "transactionTime": "2024-02-08T10:30:00",
//                 "transactionMethod": "Debit Card"
//             }
//         }
//     ];

//     const [currentPage, setCurrentPage] = useState(1);
//     const transactionsPerPage = 7;
//     const totalPages = Math.ceil(transactionDetails.length / transactionsPerPage);

//     const indexOfLastTransaction = currentPage * transactionsPerPage;
//     const indexOfFirstTransaction = indexOfLastTransaction - transactionsPerPage;
//     const currentTransactions = transactionDetails.slice(indexOfFirstTransaction, indexOfLastTransaction);

//     const nextPage = () => {
//         setCurrentPage(currentPage + 1);
//     };

//     const prevPage = () => {
//         setCurrentPage(currentPage - 1);
//     };

//     return (
//         <div>
//             <div className="flex justify-between font-bold m-8">
//                 <div className="text-3xl  text-gray-500">Transaction Details</div>
//                 <div className="flex gap-2">
//                     <div className="bg-white text-black p-2 rounded-lg">
//                         <button>Todays Bookings</button>
//                     </div>
//                     <div className="bg-red-400 text-white p-1 rounded-lg">
//                         <select className="bg-red-400">
//                             <option>parking 1</option>
//                             <option>parking 2</option>
//                             <option>parking 3</option>
//                             <option>parking 4</option>
//                         </select>
//                     </div>
//                 </div>
//             </div>

//             <div className="overflow-x-auto bg-white m-8 pb-2 rounded-xl">

//                 <table className="w-full">
//                     <thead>
//                         <tr>
//                             <th className="px-4 py-2 font-bold">Booking ID</th>
//                             <th className="px-4 py-2 font-bold">User Name</th>
//                             <th className="px-4 py-2 font-bold">Parking Name</th>
//                             <th className="px-4 py-2 font-bold">Parking Location</th>
//                             <th className="px-4 py-2 font-bold">Parking Time</th>
//                             <th className="px-4 py-2 font-bold">Transaction ID</th>
//                             <th className="px-4 py-2 font-bold">Transaction Amount</th>
//                             <th className="px-4 py-2 font-bold">Transaction Time</th>
//                             <th className="px-4 py-2 font-bold">Transaction Method</th>
//                         </tr>
//                         <tr>
//                             <td colSpan="9" className="px-4 py-2">
//                                 <hr className="border-t-2 border-blue-50" />
//                             </td>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {currentTransactions.map((transaction, index) => (
//                             <React.Fragment key={index}>
//                                 <tr className={index % 2 === 0 ? 'bg-white' : ''}>
//                                     <td className="px-4 py-2">{transaction.bookingId}</td>
//                                     <td className="px-4 py-2">{transaction.userName}</td>
//                                     <td className="px-4 py-2">{transaction.parkingName}</td>
//                                     <td className="px-4 py-2">{transaction.parkingLocation}</td>
//                                     <td className="px-4 py-2">{transaction.parkingTime}</td>
//                                     <td className="px-4 py-2">{transaction.transaction.transactionId}</td>
//                                     <td className="px-4 py-2">{transaction.transaction.transactionAmount}</td>
//                                     <td className="px-4 py-2">{transaction.transaction.transactionTime}</td>
//                                     <td className="px-4 py-2">{transaction.transaction.transactionMethod}</td>
//                                 </tr>
//                                 {index === currentTransactions.length - 1 && (
//                                     <tr>
//                                         <td colSpan="9" className="px-4 py-2">
//                                             <hr className="border-t-2 border-blue-50" />
//                                         </td>
//                                     </tr>
//                                 )}
//                             </React.Fragment>
//                         ))}
//                     </tbody>
//                 </table>

//                 {totalPages > 1 && (
//                     <div className="flex justify-center p-2 bg-white rounded-xl ">
//                         <button onClick={prevPage} disabled={currentPage === 1} className="text-red-400">
//                             Previous
//                         </button>
//                         <span className="mx-4 text-red-400">page {currentPage} of {totalPages}</span>
//                         <button onClick={nextPage} disabled={currentPage === totalPages} className="text-red-400">
//                             Next
//                         </button>
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default TransactionsDetails;






import React, { useState } from 'react';
import { MdOutlineAddPhotoAlternate } from 'react-icons/md';
import { RiDeleteBin6Line } from 'react-icons/ri';

function Profile() {
    const [editMode, setEditMode] = useState(false);
    const [imageFile, setImageFile] = useState(null);

    const handleEdit = () => {
        setEditMode(!editMode);
    };

    const handleUploadImage = (e) => {
        const file = e.target.files[0];
        setImageFile(file);
    };

    const handleRemoveImage = () => {
        setImageFile(null);
    };

    return (
        <div className="m-2">
            <div className="text-8xl font-bold text-black mx-80 flex  -translate-x-4 translate-y-10 Z-8">Profile</div>
            <div className="flex justify-center "> {/* Centering the content */}
                <div className="bg-white w-[70%] h-[100%] shadow-lg rounded-lg p-8 flex flex-row ">
                    <div className="mt-4 w-1/2 text-gray-600 m-12">
                        <div className="p-8 items-center">
                            {editMode ? (
                                <>
                                    <input type="text" defaultValue="Surabhi Yadav" />
                                    <br /><hr /><br />
                                    <input type="text" defaultValue="profile@gmail.com" />
                                    <br /><hr /><br />
                                    <input type="text" defaultValue="9999999999" />
                                    <br /><hr /><br />
                                    <input type="text" defaultValue="32000 Address" />
                                    <br /><hr /><br />
                                    <input type="text" defaultValue="231304" />
                                    <br /><hr />
                                </>
                            ) : (
                                <>
                                    <p>Surabhi Yadav</p>
                                    <br /><hr /><br />
                                    <p>profile@gmail.com</p>
                                    <br /><hr /><br />
                                    <p>9999999999</p>
                                    <br /><hr /><br />
                                    <p>32000 Address</p>
                                    <br /><hr /><br />
                                    <p>231304</p>
                                    <br /><hr />
                                </>
                            )}
                        </div>
                    </div>
                    <div className="w-1/2 relative flex flex-col items-center">
                        {imageFile ? (
                            <>
                                <img
                                    src={URL.createObjectURL(imageFile)}
                                    className="object-cover rounded-full w-64 h-64 my-12 drop-shadow-md "
                                    alt="Parking Image"
                                />
                                <div className="-mt-14 mx-2 bg-gray-50 p-4 rounded-full flex items-center translate-x-14 -translate-y-8 Z-8 drop-shadow-sm">
                                    <button
                                        onClick={handleRemoveImage}
                                        className="text-xl font-normal text-gray-500 cursor-pointer"
                                    >
                                        <RiDeleteBin6Line />
                                    </button>
                                </div>
                            </>
                        ) : (
                            <div className="flex items-center justify-center mr-24 object-cover rounded-full w-64 h-64 m-12 border border-gray-300">
                                <label
                                    htmlFor="image-upload"
                                    className="text-2xl font-normal text-gray-600 cursor-pointer"
                                >
                                    <MdOutlineAddPhotoAlternate />
                                </label>
                            </div>
                        )}
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleUploadImage}
                            className="hidden"
                            id="image-upload"
                        />
                    </div>
                </div>
            </div>
            <div className="text-white font-bold bg-red-400 w-1/6 text-center p-6 float-right -translate-x-40 -translate-y-10 Z-8">
                <button className="" onClick={handleEdit}>{editMode ? 'Save' : 'Edit'}</button>
            </div>
        </div>
    );
}

export default Profile;
