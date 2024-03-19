import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userDataAsync } from '../../slice/UserSlice';
import PulseLoader from "react-spinners/PulseLoader";

function InformationScreen() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.User);
  console.log(user)
  useEffect(() => {
    if ((user.status == "idle")) dispatch(userDataAsync());
  }, [dispatch]);

  return (
    <div>
      {user.status == "loading" && <div className='flex  flex-row justify-center items-center '> <PulseLoader  size="8px" /></div>}
      {user.error && <h1>{user.error}</h1>}
      {!user.error && user.status == "succeeded" && 
      <div className='flex-row w-full p-8 max-sm:p-4'>
        <div className=' mb-4'>
          <h1 className="text-2xl max-sm:text-base max-sm:font-bold font-semibold text-gray-800  mb-2 max-sm:mb-2 ">Primary Information</h1>
          <div className='p-2 max-sm:p-1'>
            <h1 className='text-xl  max-sm:text-base font-semibold text-gray-700 '>{user?.data?.name} </h1>
            <div className='flex max-sm:flex-col '>
              <h1 className='text-sm font-normal text-gray-600 my-1'>{user?.data?.mob}</h1>
              <h1 className='text-sm font-normal text-gray-600 my-1 mx-4 max-sm:mx-0  '>{user?.data?.mail}</h1>
            </div>
          </div>
        </div>
      </div>}
    </div>
  );
}

export default InformationScreen;
