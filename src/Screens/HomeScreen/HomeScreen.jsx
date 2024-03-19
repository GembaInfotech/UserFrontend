import Header from '../../Components/LayoutComponents/Header'
import Footer from '../../Components/LayoutComponents/Footer'
import Main from '../../Components/HomeComponents/Main';
import image from '../../assets/parking4.jpg'

function LandingScreen() {
  return (
    <div className='relative  min-h-screen'>
      <div className='absolute inset-0 bg-cover bg-center  cover' style={{ backgroundImage: `url(${image})` }}></div>
      <div className='absolute inset-0 bg-black opacity-20'></div>
      <div className='relative z-10 '>
        <Header />
        <Main />
        <Footer />
      </div>
    </div>
  )
}
export default LandingScreen
