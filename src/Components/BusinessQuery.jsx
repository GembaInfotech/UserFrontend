import React from 'react'
import QueryForm from './LandingScreenComponent/QueryForm'
function BusinessQuery() {
  return (
  <div>
  
    <div className='flex  justify-between bg-[#f6f7fb]  mt-16 w-2/3 mx-auto h-[600px]  rounded-2xl'>
      <div className='p-16'>
      <h1 className=' text-[52px] font-bold text-gray-800 mb-2'>Having Business Query?</h1>
      <h1 className='font-medium text-gray-600 '>Just leave your email with us and we’ll get back to you shortly!</h1>
      </div>
        <QueryForm />
      
    </div>
  </div>
  )
}

export default BusinessQuery
