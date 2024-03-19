import Header from '../Components/LayoutComponents/Header'
import Footer from '../Components/LayoutComponents/Footer'

function Layout({children}) {
  return (
    <div className=' w-full max-sm:flex-col ' >      
       <Header />    
      {children}
      <Footer />
    </div>
  )
}
export default Layout
