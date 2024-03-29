import img from '../../assets/parking.webp'
import { PiCurrencyInrBold } from "react-icons/pi";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import ShortCard from './ShortCard';
import { Fade, ScaleFade, WrapItem, Slide, SlideFade, Button, Box, useDisclosure, Collapse } from '@chakra-ui/react'

function ParkingCard({ data, intime, totime }) {
  console.log(data)
  const [distance, sdis] = useState(0);
  const userLocation = [localStorage.getItem('lat'), localStorage.getItem('long')]
  const parkingLocation = [data.location.coordinates[1], data.location.coordinates[0]];
  function calculateDistance(userLocation, parkingLocation) {
    const [lat1, lon1] = userLocation;
    const [lat2, lon2] = parkingLocation;
    const R = 6371e3; // Earth's radius in meters
    const φ1 = (lat1 * Math.PI) / 180; // Latitude of user's location in radians
    const φ2 = (lat2 * Math.PI) / 180; // Latitude of parking location in radians
    const Δφ = ((lat2 - lat1) * Math.PI) / 180; // Difference in latitudes in radians
    const Δλ = ((lon2 - lon1) * Math.PI) / 180; // Difference in longitudes in radians
    const a =
      Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
      Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c; // Distance in meters
    return Math.floor(distance / 1000) + 1;
  }
  const { isOpen, onToggle } = useDisclosure()
  const [show, setshow] = useState(false);
  const showDetails = () => {
    sdis(calculateDistance(userLocation, parkingLocation)
    )
    onToggle();
    setshow(true);
  }
  const hideDetails = () => {
    setshow(false);
  }
  return (
    <div>
      <div className="max-w-full bg-white my-1  flex  shadow dark:bg-white">
        <div className='w-[40%] p-4'>
          <img src={img}
            className='w-full h-full rounded-lg  '
            alt="" />
        </div>
        <div className="py-4 w-full">
          <div className=' flex justify-between'>
            <div>
              <h3 className="  font-bold tracking-tight text-[16px] text-gray-900 ">{data.pn}</h3>
              <h3 className="  font-semibold  text-left text-sm text-gray-600  ">{data.pa}</h3>
            </div>
            <div className='flex justify-between'>
              <h1 className='font-medium text-xl pt-1'><PiCurrencyInrBold /></h1>
              <h1 className='font-medium text-xl pr-2'>        {data.price}</h1>
            </div>
          </div>
          <p className="mb-2 font-normal text-sm text-gray-700 dark:text-gray-400"></p>
          <div className='flex justify-between'>
            <Link to={`/checkout/${encodeURIComponent(JSON.stringify(data))}/${encodeURIComponent(JSON.stringify(intime))}/${encodeURIComponent(JSON.stringify(totime))}`}>
              <WrapItem>
                <Button  size='sm' colorScheme='green'>Book</Button>
              </WrapItem>
            </Link>
            <WrapItem>
              <Button onClick={showDetails} size='sm' colorScheme='gray'>Details</Button>
            </WrapItem>
            <h1 className='text-sm text-green-700 px-2 '>{distance}KM</h1>
          </div>
        </div>
      </div>
      <Collapse in={isOpen} animateOpacity>
        <ShortCard hideDetails={onToggle} data={data} />
      </Collapse>
    </div>
  )
}
export default ParkingCard

