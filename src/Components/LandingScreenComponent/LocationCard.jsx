import React from 'react'
import image from '../../assets/parking.webp'

function LocationCard({image, name}) {
  return (
    <div  className='bg-cover bg-center m-1 w-64 h-80  hover:scale-95  shadow-lg shadow-fuchsia-200 duration-300  rounded-md' style={{ backgroundImage: `url(${image})` }}
     
    >
  {/* <img src={image}
  className='w-56 h-64 rounded-md' alt="" /> */}
  <h1 className='font-medium text-xl text-white p-2 mt-64'>{name}</h1>
    </div>
  )
}

export default LocationCard
