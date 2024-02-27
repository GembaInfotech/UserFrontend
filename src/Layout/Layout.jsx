
import background from '.././assets/background.png'
import Header from '../Components/LayoutComponents/Header'
import Footer from '../Components/LayoutComponents/Footer'


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
