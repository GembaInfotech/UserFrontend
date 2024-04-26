import Card from '../../Components/HomeComponents/Card';
import useAuthToken from '../../Hooks/getToken';
function AboutScreen() {
  const token = useAuthToken();
  console.log(token)

  return (
    <div className='py-32 px-12 bg-[#f6f7fb]'>
      <h1 className='text-gray-700 text-4xl p-4 font-bold '>Welcome to Our Parking Booking System</h1>
      <p className='text-gray-600 font-semibold font-xl p-6  font-sans'>At Parkar, we understand the frustration that comes with searching for parking spaces, especially in busy urban areas. That's why we've developed a comprehensive parking booking system to streamline the process and make parking hassle-free for everyone.
      </p>
      <div className='flex  max-sm:p-2 justify-center flex-wrap'>
        <Card />
        <Card />
        <Card />
      </div>
      <p className='text-gray-900 p-6 font-semibold '>Our parking booking system offers a range of features designed to enhance your parking experience:
      </p>
      <ul>
        <li className='text-gray-800  font-sans py-1 pl-8'> <span className='font-semibold '>1. Easy Reservation: </span> With just a few clicks, you can reserve a parking spot at your desired location, ensuring that you have a guaranteed space waiting for you when you arrive.
        </li>
        <li className='text-gray-800  font-sans py-1 pl-8'> <span className='font-semibold '>2. Real-Time Availability: </span> Our system provides real-time updates on parking availability, so you'll always know if there's a spot available before you even leave home.
        </li>
        <li className='text-gray-800  font-sans py-1 pl-8'>
          <span className='font-semibold '>3. Flexible Booking Options: </span>
          Whether you need short-term parking for a few hours or long-term parking for several days, our system offers flexible booking options to suit your needs.
        </li>
        <li className='text-gray-800  font-sans py-1 pl-8'>
          <span className='font-semibold '>4. Secure Payments: </span>
          Rest assured that your payment information is safe and secure with our encrypted payment gateway, allowing you to book your parking space with confidence.
        </li>
        <li className='text-gray-800  font-sans py-1 pl-8'>
          <span className='font-semibold '>5. User-Friendly Interface: </span>
          Our intuitive interface makes it easy to search for parking locations, view availability, and complete bookings, ensuring a seamless experience for all users.
        </li>
        <li className='text-gray-800  font-sans py-1 pl-8'> <span className='font-semibold '>6. Mobile Accessibility: </span>
          Access our parking booking system anytime, anywhere, right from your mobile device. Whether you're on the go or planning ahead, you can easily book your parking space with our mobile-friendly platform.
        </li>
      </ul>
      <h1 className='text-gray-700 text-4xl p-4 font-bold '>Experience the Convenience of Our Parking Booking System
      </h1>
      <p className='text-gray-600 font-semibold font-xl p-6 font-sans'>Say goodbye to the stress of finding parking and say hello to convenience with [Your Company Name]'s parking booking system. Whether you're commuting to work, running errands, or planning a weekend getaway, our system is your go-to solution for hassle-free parking. Start booking your parking space today and experience the difference!</p>
    </div>
  )
}

export default AboutScreen










