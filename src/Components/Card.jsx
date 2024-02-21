import React from 'react'
import img from '.././assets/car.webp'

function Card() {
  return (
   

<div class="max-w-sm bg-white  my-24 mx-4  rounded-2xl shadow dark:bg-white">
    <a href="#">
        <img class="rounded-t-lg" src={img} 
         className='w-full h-48 rounded-tr-2xl rounded-tl-2xl '
        alt="" />
    </a>
    <div class="p-3">
        <a href="#">
            <h3 class="mb-1  font-bold tracking-tight text-gray-900 ">Demo Card</h3>
        </a>
        <p class="mb-2 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
        <a href="#" class="inline-flex items-center px-2 py-2   text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
             <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
    </div>
</div>

  )
}

export default Card
