// import React from 'react'
import img from '../../../assets/parking.webp'
import { PiCurrencyInrBold } from "react-icons/pi";
import { Link } from 'react-router-dom';



function ParkingCard({ data, intime , totime }) {
  console.log(totime)

  return (
    <div>
      <div className="max-w-full bg-white my-1  flex  shadow dark:bg-white">

        <div className='w-[40%] p-4'>
          <img src={img}
            className='w-full h-full rounded-lg  '
            alt="" />
        </div>

        <div className="py-4 w-full">

          <div className=' flex justify-between'>
            <div>
              <h3 className="  font-bold tracking-tight text-[16px] text-gray-900 ">{data.parkingName}</h3>
              <h3 className="  font-semibold tracking-tight text-sm text-gray-600 ">{data.parkingArea}</h3>
            </div>
            <div>
              <h1 className='font-medium text-2xl px-2'><PiCurrencyInrBold />{data.capacity}</h1>
            </div>
          </div>

          <p className="mb-2 font-normal text-sm text-gray-700 dark:text-gray-400"></p>
          <div className='flex justify-between'>


          {/* {`/generatee/${encodeURIComponent(JSON.stringify(detail))}`} */}
            <Link to={`/booking/${encodeURIComponent(JSON.stringify(data))}/${encodeURIComponent(JSON.stringify(intime))}/${encodeURIComponent(JSON.stringify(totime))}`}>
              <button>
                <h4 href="#" className="inline-flex items-center px-2 py-1  text-sm text-center text-white bg-blue-700 rounded-sm hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Book now
                </h4>
              </button></Link>

            <h1 className='text-sm text-green-700 px-2 '>available</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ParkingCard
