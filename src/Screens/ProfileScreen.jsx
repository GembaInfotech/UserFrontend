import { Link, useNavigate } from "react-router-dom";
import { MdBookmarks } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { PiCarProfileFill } from "react-icons/pi";
import { useEffect } from "react";

function ProfileScreen() {
  const navigate = useNavigate();

  useEffect(() => {
    const getToken=async()=>{
        const token = JSON.parse(localStorage.getItem('token'));
        if(!token) navigate('/login')
    }
   getToken()
  }, [])
  
  return (
    <>
      <div className="flex-row ">
        <div className="flex-row max-sm:max-w-20 ">
          <div className="m-1 max-w-36 text-sm px-1 py-4  max-sm:m-0 max-sm:px-0 text-gray-600 hover:text-gray-800  rounded-sm">
            <Link
              to="/profile/info"
              className="text-white font-medium hover:text-gray-500 transition"
            >
              <div className="flex ">
                <h1 className="text-gray-800 text-sm py-1 px-2 max-sm:px-0">  <CgProfile /></h1>
                <h1 className="text-gray-600 hover:text-gray-800 hover:font-bold">  Information</h1>
              </div>
            </Link>
          </div>
          <div className="m-1 max-w-36 text-sm px-1 py-4  max-sm:m-0 max-sm:px-0  text-gray-600 hover:text-gray-800  rounded-sm">
            <Link
              to="/profile/bookings"
              className="text-white font-medium hover:text-gray-500 transition"
            >
              <div className="flex ">
                <h1 className="text-gray-800 text-sm py-1 px-2 max-sm:px-0">  <MdBookmarks /></h1>
                <h1 className="text-gray-600 hover:text-gray-800 hover:font-bold">  Bookings</h1>
              </div>
            </Link>
          </div>
          <div className="m-1 text-sm px-1 max- py-4 w-36 max-sm:m-0 max-sm:px-0  text-gray-600 hover:text-gray-800  rounded-sm">
            <Link
              to="/profile/vehicles"
              className="text-white font-medium hover:text-gray-500 transition"
            >
              <div className="flex ">
                <h1 className="text-gray-800 text-sm py-1 px-2 max-sm:px-0">  <PiCarProfileFill /></h1>
                <h1 className="text-gray-600 hover:text-gray-800 hover:font-bold">  Vehicles</h1>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
export default ProfileScreen;
