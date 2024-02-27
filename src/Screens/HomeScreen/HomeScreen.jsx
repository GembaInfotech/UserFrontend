import Header from '../../Components/LayoutComponents/Header'
import Footer from '../../Components/LayoutComponents/Footer'

import Main from '../../Components/HomeComponents/Main';

function LandingScreen() {
  return (
    <div className='bg-cover   bg-center min-h-screen bg-blue-600' >
      <Header />
   <h1 className='hidden'>hello</h1>
     
     <Main/>
    
  
      <Footer />
    </div>
  )
}

export default LandingScreen
