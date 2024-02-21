import React, { Children } from 'react'
import ProfileScreen from '../Screens/ProfileScreen';
import Header from '../Components/Header'
function ProfileLayout({children}) {
  return (
    <>
    <Header  />
    <div className=' flex flex-row justify-between min-h-screen  bg-[#fff]  py-24 px-48'>
        <div className = 'w-[40%]  pt-16 pb-48 max-w-max px-8 bg-[#edf1f7]'>
            <ProfileScreen/>
        </div>
      {children}
    </div>
    </>
   
  )
}

export default ProfileLayout;
