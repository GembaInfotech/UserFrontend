import React from 'react'
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Main from '../Components/LandingScreenComponent/Main';
import background from '.././assets/background.png'

function LandingScreen() {
  return (
    <div className='bg-cover bg-center min-h-screen' style={{ backgroundImage: `url(${background})` }}>
      <Header />
   <h1 className='hidden'>hello</h1>
     
     <Main/>
    
  
      <Footer />
    </div>
  )
}

export default LandingScreen
