import { fetchParkingsAsync } from '../../slice/ParkingSlice';
import  { useParams, React, DatePicker, useState, useEffect,  IoSearch, Spinner, Skeleton, Stack, SkeletonCircle, SkeletonText, ParkingCard, Footer } from './index'
import { useSelector, useDispatch } from 'react-redux';
function ParkingScreen() {
  const [locationValue, setLocationValue] = useState('');
  const [fromDate, setFromDate] = useState(new Date());
  const [toDate, setToDate] = useState(new Date());
  const [radii, setradii] = useState(500);
  const { location } = useParams();
  const [loading, setLoading] = useState(false);
  const Latitude = 40.7128
  const Longitude = -74.0060


  const dispatch = useDispatch();
  const parkingdata = useSelector((state) => state.Parkings.data);

  const [parkings, setParkings] = useState([]);
  useEffect(() => {
    setParkings(parkingdata);
    console.log(parkingdata)
  }, [parkingdata]);

  useEffect(() => {
    dispatch(fetchParkingsAsync({ radii }));
  }, [dispatch, radii]);

 

  return (
    <div>{

      
      loading ?  

      <div className='flex-col items-center p-2'>
        <Skeleton className='w-full p-2 ' height='40px'>
<div>contents wrapped</div>
<div>won't be visible</div>
</Skeleton>
        <div className='flex  h-full justify-center items-center'>
      
                       
      <Stack className='w-[30%] py-2 px-2'>
<Skeleton height='100px' />
<Skeleton height='100px' />
<Skeleton height='100px' />
<Skeleton height='100px' />

<Skeleton height='100px' />
<Skeleton height='100px' />

</Stack>

<Skeleton className='w-[80%] h-screen py-2 px-2'>
<div>contents wrapped</div>
<div>won't be visible</div>
</Skeleton>
 
</div>
      </div>

      : <div className='bg-slate-100'>

      <div>
                        <div className="fixed top-0 left-0 w-full flex items-center justify-between px-4 py-2  bg-[#5D76A9] z-10">
              <h1 className=' font-medium max-md:hidden text-white'>Search for your nearby Parking Spot</h1>
              <input
                type="text"
                placeholder="Search by city, market, etc."
                onChange={(e) => setLocationValue(e.target.value)}
                value={locationValue}
                className="px-4 py-1 max-md:px-2 border rounded-sm focus:outline-none bg-gray-100 focus:border-blue-500 ml-2"
              />
              <div className="flex">
                <label htmlFor="distanceSelect" className=' text-white px-2 mt-2 font-medium max-md:hidden'> Distance:</label>
                <select
                  className="px-4 py-1 max-md:px-2 bg-gray-100 rounded-sm focus:outline-none focus:border-blue-500"
      
                  id="distanceSelect" value={radii} onChange={(e) => { setradii(e.target.value) }}>
                  <option value={100}>100 meters</option>
                  <option value={500}>500 meters</option>
                  <option value={1000}>1 kilometer</option>
                  <option value={5000}>5 kilometers</option>
                  <option value={10000}>10 kilometers</option>
                  <option value={500000}>20 kilometers</option>
      
      
                </select>
                <h1 className='text-white px-2 font-medium mt-2 max-md:hidden'>From</h1>
                <DatePicker
                  selected={fromDate}
                  onChange={(date) => setFromDate(date)}
                  showTimeSelect
                  dateFormat="MM/dd/yyyy h:mm aa"
                  className="px-4 py-1 max-md:px-2 bg-gray-100 rounded-sm focus:outline-none focus:border-blue-500"
                />
                <h1 className=' text-white px-2 mt-2 font-medium max-md:hidden'>To</h1>
                <DatePicker
                  selected={toDate}
                  onChange={(date) => setToDate(date)}
                  showTimeSelect
                  dateFormat="MM/dd/yyyy h:mm aa"
                  className="px-4 py-1 max-md:px-2 bg-gray-100 rounded-sm focus:outline-none focus:border-blue-500 "
                />
              </div>
            
            </div>
            <div className=' h-14'>
            </div>
            <div className='flex min-h-[500px]  '>
              <div className='w-1/4 max-h-[600px]  overflow-y-auto '>
                <div className='overflow-y-auto scrollbar'>
                  <h1 className='w-full pt-1 px-4 text-sm font-semibold'>{parkings.length} available parkings</h1>
                  {parkings?.map(parking => (
                   <ParkingCard key={[parking._id] } data={parking} intime={parking.openingTime} totime={parking.closingTime} />
                  ))}
      
                </div>
      
              </div>
              <div className='w-3/4 '>
                <iframe
                  className='w-full h-full'
                  title="Map"
      
                  frameBorder="0"
                  scrolling="no"
                  marginHeight="0"
                  marginWidth="0"
                  src={`https://www.openstreetmap.org/export/embed.html?bbox=${Longitude - 0.01}%2C${Latitude - 0.01}%2C${Longitude + 0.01}%2C${Latitude + 0.01}&amp;layer=mapnik`}
                  style={{ border: '1px solid black' }}
                ></iframe>
              </div>
            </div>
                      </div>
            
            <Footer />
          </div>
      
    }</div>
   
    
  );
}

export default ParkingScreen;
