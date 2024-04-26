import Card from './Card'
import { useState } from 'react'
import phone from '../../assets/comp.jpg'
import { AiFillSafetyCertificate } from "react-icons/ai";
import { FaSquareParking } from "react-icons/fa6";
import BusinessQuery from './BusinessQuery';
import LocationCard from './LocationCard';
import image1 from '../../assets/parking.webp'
import image2 from '../../assets/parking3.jpg'
import image3 from '../../assets/parking5.webp'
import { IoSearch } from "react-icons/io5";
import { Link } from 'react-router-dom'

function Main() {
  const [location, setLocation] = useState('');

  return (
    <div className='pt-16 max-sm:pt-24 flex-col w-full' >
      <div>
        <div className="bg-white  py-2 max-sm:p-0 mx-auto  md:mt-20 sm:my-4 w-3/4  max-sm:w-4/5 rounded-lg">
          <div className="container  flex items-center justify-between px-2 max-sm:p-0 ">
            <h1 className='text-gray-500 font-medium max-md:hidden'>Search for your nearby Parking Spot</h1>
            <input
              type="text"
              placeholder="Search by city, market, etc."
              onChange={(e) => setLocation(e.target.value)}
              className="px-4 py-2 max-md:px-2 border rounded-lg focus:outline-none focus:border-blue-500"
            />
            <Link to={`/parking/${location}`}>
              <button className="bg-blue-500 text-white px-4 max-md:px-2 py-2  max-sm:px-1 max-sm:py-1 max-sm:m-1 rounded-lg hover:bg-blue-600 transition duration-300">
                <div className='flex'>
                  <h1 className='pt-1 px-1 text-2xl'> <IoSearch /></h1>
                </div>
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div>
        <section className='mt-24 max-sm:mt-4' >
          <div className='h-[700px] max-sm:h-[1100px]  bg-white py-6 px-12  max-sm:p-1 mt-12 mb-16 '>
            <h1 className=' text-[48px] px-8 max-sm:px-1 font-medium text-gray-800 mb-2 max-sm:text-3xl'> Location near you</h1>
            <h1 className=' text-[28px] px-8 max-sm:px-1  max-sm:text-sm text-gray-800 mb-2'>explore the parking areas near your location....</h1>
            <div className='flex mt-4 justify-center flex-wrap'>
              <LocationCard image={image1} name="Sikandra Crossing" />
              <LocationCard image={image2} name="Sanjay Palace" />
              <LocationCard image={image1} name="Kamla Nagar" />
              <LocationCard image={image3} name="Trans Yamuna Colony" />
            </div>
          </div>
        </section>
      </div>
      <div>
        <div className="flex max-sm:flex-col justify-center rounded-lg  m-4 max-sm:m-0">
          <img src={phone}
            className=" w-1/2 max-sm:w-[90%]  m-auto h-84 rounded-2xl"
            alt="" />
          <div className="p-4 max-sm:p-0">
            <h1 className="text-white font-bold text-4xl  mb-4 max-sm:m-2" >Experience the Convenience</h1>
            <p className="text-white font-medium max-sm:m-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis eligendi architecto culpa ex, voluptates reiciendis sint impedit inventore rem suscipit possimus quae eum fugit neque eaque aliquam, officia provident dolorem!</p>
            <div className='flex    justify-center   items-center'>
              <AiFillSafetyCertificate className='text-[96px] max-sm:text-4xl m-2 max-sm:m-0 text-white' />
              <FaSquareParking className='text-[84px] max-sm:text-4xl m-2 max-sm:m-0 text-white' />
              <AiFillSafetyCertificate className='text-[96px] max-sm:text-4xl m-2 max-sm:m-0 text-white' />
              <FaSquareParking className='text-[84px] max-sm:text-4xl m-2 max-sm:m-0 text-white' />
            </div>
            <div className='h-48 w-full mt-8 p-8 max-sm:p-0 rounded-lg bg-white'>
              <h1 className='text-gray-900 p-4 max-sm:p-4 font-bold '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ut distinctio vel officia quaerat. Nisi, facilis perspiciatis laborum at veritatis sed? Necessitatibus fugit illum distinctio vero veniam! Ad, accusantium quod!</h1>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className='flex  max-sm:p-2 justify-center flex-wrap'>
          <Card />
          <Card />
          <Card />
        </div>
      </div>
      <div>
        <section className='bg-white min-h-screen w-full'>
          <div className='flex-row  mt-12 pl-56  max-sm:p-0 pt-16 max-sm:p-2 '>
            <h1 className='text-[56px] max-sm:text-4xl text-gray-700  max-sm:m-2 font-bold'>Parkar for </h1>
            <h2 className='text-[56px] text-gray-700 font-bold max-sm:m-2   max-sm:text-4xl'>Businesses</h2>
            <h1 className='text-gray-600 font-medium max-sm:m-2 '>Our technology has transformed the tricky traffic movement in parking lots for various business establishments</h1>
          </div>
          <div className='flex max-sm:flex-col mt-12 max-sm:mt-8'>
            <img src={phone}
              className='h-[650px] w-1/2 max-sm:h-[400px]  max-sm:w-full border border-gray-100'
              alt="" />
            <div className='w-1/2 bg-[#5430bb] p-24 max-sm:w-full max-sm:p-0'>
              <h1 className='text-white text-4xl font-medium max-sm:text-2xl max-sm:p-4'>Solving Parking Problems for</h1>
              <ul type="circle" className='mt-4 max-sm:mt-0 max-sm:mb-4'>
                <li className="text-white font-medium max-sm:font-normal text-sm max-sm:px-4">for Market Places</li>
                <li className="text-white font-medium max-sm:font-normal text-sm max-sm:px-4">for Societies</li>
                <li className="text-white font-medium max-sm:font-normal text-sm max-sm:px-4">for Corporates</li>
                <li className="text-white font-medium max-sm:font-normal text-sm max-sm:px-4 ">for Residentials</li>
              </ul>
            </div>
          </div>
          <div className='flex  justify-center items-center bg-[#f6f7fb] py-16'>
            <div className='flex flex-col items-center'>
              <h1 className='text-[56px] text-gray-900 font-bold text-center m-0  max-sm:text-4xl'>Let us Solve Your</h1>
              <h1 className='text-[56px] text-gray-900 font-bold text-center mb-2 max-sm:text-[42px]'>Problem next</h1>
              <button
                type="button"
                className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-2xl px-16 py-4 text-center me-2 mb-2"
              >
                Get in touch
              </button>
            </div>
          </div>
          <BusinessQuery />
          <div className='h-12'></div>
        </section>
      </div>
    </div>
  )
}

export default Main
