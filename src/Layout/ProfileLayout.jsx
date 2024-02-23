import React, { Children } from 'react'
import ProfileScreen from '../Screens/ProfileScreen';
import Header from '../Components/Header'
function ProfileLayout({children}) {
  return (
    <>
    <Header  />
    <div className='flex min-h-screen   py-24 px-48  bg-[#fff]'>
<div className='w-1/5 px-4 py-2 bg-[#edf1f7] min-w-max  '>
  <ProfileScreen/>
</div>
<div className='w-4/5  max-h-screen overflow-y-scroll  scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100"'>
  {children}
</div>
</div>
    {/* <div className=' flex flex-row justify-between min-h-screen  bg-[#fff]  py-24 px-48'>
        <div className = 'w-[40%]  pt-16 pb-48 max-w-max max-h-screen px-8 bg-[#edf1f7]  '>
            <ProfileScreen/>
        </div>
        <div className='overflow-y-scroll'> 
       <div>
       {children}
       </div>
        </div>
    
    </div> */}
    </>
   
  )
}


export default ProfileLayout;
