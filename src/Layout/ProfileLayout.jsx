import ProfileScreen from '../Screens/ProfileScreen';
import Header from '../Components/LayoutComponents/Header'
function ProfileLayout({ children }) {
  return (
    <>
      <Header />
      <div className='flex min-h-screen   py-24 px-48 max-sm:px-2 bg-[#fff]'>
        <div className='w-1/5 px-4 py-2 bg-[#edf1f7] min-w-max '>
          <div className=' max-md:hidden'><ProfileScreen  /></div>
        </div>
        <div className='w-4/5  max-h-screen overflow-y-scroll  scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 "'>
          {children}
        </div>
      </div>
    </>
  )
}
export default ProfileLayout;
