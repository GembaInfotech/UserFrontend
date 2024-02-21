import React from "react";
import { Link } from "react-router-dom";
import { MdBookmarks } from "react-icons/md";
import { IoIosSettings } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { PiCarProfileFill } from "react-icons/pi";



function ProfileScreen() {
  return (
    <>
      <div className="flex-row ">
        <div className="flex-row">
          <div  className="m-1 max-w-36 text-sm px-1 py-4   text-gray-600 hover:text-gray-800  rounded-sm">
            <Link
              to="/profile"
              className="text-white font-medium hover:text-gray-500 transition"
            >
         <div className="flex ">
              <h1 className="text-gray-800 text-sm py-1 px-2">  <CgProfile/></h1>
                <h1 className="text-gray-600 hover:text-gray-800 hover:font-bold">  Information</h1>
                </div>
            </Link>
          </div>
          <div  className="m-1 max-w-36 text-sm px-1 py-4   text-gray-600 hover:text-gray-800  rounded-sm">
            <Link
              to="/my-bookings"
              className="text-white font-medium hover:text-gray-500 transition"
            >
         <div className="flex ">
              <h1 className="text-gray-800 text-sm py-1 px-2">  <MdBookmarks/></h1>
                <h1 className="text-gray-600 hover:text-gray-800 hover:font-bold">  Bookings</h1>
                </div>
            </Link>
          </div>
          <div className="m-1 text-sm px-1 max- py-4 w-36  text-gray-600 hover:text-gray-800  rounded-sm">
            <Link
              to="/my-vehicle"
              className="text-white font-medium hover:text-gray-500 transition"
            >
                <div className="flex ">
              <h1 className="text-gray-800 text-sm py-1 px-2">  <PiCarProfileFill/></h1>
                <h1 className="text-gray-600 hover:text-gray-800 hover:font-bold">  Vehicles</h1>
                </div>
            </Link>
          </div>
          <div className="m-1 text-sm px-1 max- py-4 w-36  text-gray-600 hover:text-gray-800 rounded-sm">
            {" "}
            <Link
              to="/#"
              className="text-white font-medium hover:text-gray-500 transition"
            >
              <div className="flex ">
              <h1 className="text-gray-800 text-sm py-1 px-2">  <IoIosSettings/></h1>
                <h1 className="text-gray-600 hover:text-gray-800 hover:font-bold">  Setting</h1>
                </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfileScreen;
