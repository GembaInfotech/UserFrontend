import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import background from '.././assets/background.png'

function Layout({children}) {
  return (
    <div className='bg-cover bg-center min-h-screen' style={{ backgroundImage: `url(${background})` }}>
      
      
       <Header />
       <div className='min-h-[600px]'>
      
      {children}
      </div>
      <Footer />
      
   
      
    </div>
  )
}

export default Layout
