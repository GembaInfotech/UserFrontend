import { fetchParkingsAsync } from '../../slice/ParkingSlice';
import { useParams, React, DatePicker, useState, useEffect, IoSearch, Spinner, Skeleton, Stack, SkeletonCircle, SkeletonText, ParkingCard, Footer } from './index'
import { useSelector, useDispatch } from 'react-redux';
import ParkingSkeleton from '../../Skeletons/ParkingSkeleton';
import MapScreen from './MapScreen';
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
  const [selected, setSelected] = useState();
  const parkingdata = useSelector((state) => state.Parkings);
  const [parkings, setParkings] = useState([]);


  const handleSearch = () => {
    setLoading(true);
    console.log(locationValue)
    dispatch(fetchParkingsAsync({ radii }));
    setParkings(parkingdata.data);

  };

  useEffect(() => {
    setParkings(parkingdata.data);
    console.log(parkingdata.data)
  }, [parkingdata.data]);


  useEffect(() => {
    console.log("called")
    dispatch(fetchParkingsAsync({ radii }));
  }, [radii]);

  return (
    <div>
      {parkingdata.status == "loading" && <ParkingSkeleton />}
      {parkingdata.error && <h1>{parkingdata.error}</h1>}
      {
        !parkingdata.error && parkingdata.status == "succeeded" && parkingdata.data && <div className='bg-slate-100'>
          <div>
            <div className="fixed top-0 left-0 w-full flex items-center justify-between px-4 py-2  bg-[#5D76A9] z-10 max-md:flex-col max-md:h-32">
              <h1 className=' font-medium max-md:hidden'>Search for your nearby Parking Spot</h1>
              <div className='flex max-md:flex-row '>
                <input
                  type="text"
                  placeholder="Search by city, market, etc."
                  onChange={(e) => setLocationValue(e.target.value)}
                  value={locationValue}
                  className="px-4 py-1 max-md:text-sm max-md:py-0 max-md:my-7 max-md:px-2 border rounded-sm focus:outline-none bg-gray-100 max-md:h-5 focus:border-blue-500 ml-2"
                />
                <div className='flex max-sm:flex-col max-md:mx-2'>
                  <label htmlFor="distanceSelect" className='text-white px-2 mt-2 font-medium max-sm:font-light max-md:text-sm max-sm:mt-1 max-sm:px-0 max-sm:mb-1'> Distance: </label>
                  <select
                    className="px-4 py-1 max-md:text-sm max-md:px-0 max-md:py-0 max-sm:mb-1 bg-gray-100 rounded-sm focus:outline-none focus:border-blue-500"
                    id="distanceSelect" value={radii} onChange={(e) => { setradii(e.target.value) }}>
                    <option value={100}>100 meters</option>
                    <option value={500}>500 meters</option>
                    <option value={1000}>1 kilometer</option>
                    <option value={5000}>5 kilometers</option>
                    <option value={10000}>10 kilometers</option>
                    <option value={500000}>20 kilometers</option>
                  </select>
                </div>
              </div>

              <div className='flex max-sm:flex-row max-md:-mt-8'>
                <div className='flex max-md:flex-col max-md:m-1 max-md:p-0'>
                  <h1 className='text-white px-2 max-sm:px-0 font-medium mt-2 max-md:m-0 max-sm:mt-0 max-md:text-sm max-sm:font-light'>From:</h1>
                  <DatePicker
                    selected={fromDate}
                    onChange={(date) => setFromDate(date)}
                    showTimeSelect
                    dateFormat="MM/dd/yyyy h:mm aa"
                    className="px-4 py-1 max-md:text-sm max-md:px-0 max-md:w-32 max-md:py-0 bg-gray-100 rounded-sm focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div className='flex max-sm:flex-col max-sm:m-1 max-sm:p-0'>
                  <h1 className='text-white px-2 mt-2 font-medium max-md:m-0 max-sm:mt-0 max-md:text-sm max-sm:font-light'>To:</h1>
                  <DatePicker
                    selected={toDate}
                    onChange={(date) => setToDate(date)}
                    showTimeSelect
                    dateFormat="MM/dd/yyyy h:mm aa"
                    className="px-4 py-1 max-md:text-sm text-sm max-md:px-0 max-md:w-32 max-sm:py-0 bg-gray-100 rounded-sm focus:outline-none focus:border-blue-500"
                  />

                </div>
                <button
                onClick={handleSearch}
                className="bg-green-500 text-white px-4 max-sm:px-2 max-md:w-12 py-1 max-sm:h-6  max-sm:py-0 rounded-md hover:bg-blue-600 hover:text-black transition duration-300 max-md:mt-6 "
              >
             
                  <h1 className='pt-1 px-1 max-md:px-0 text-sm max-md:text-lg'> <IoSearch /></h1>
            
              </button>
              </div>

           
            </div>
            <div className='h-14 max-sm:h-7'>
            </div>
            <div className='flex min-h-[600px] max-md:flex-col-reverse  '>
              <div className='w-1/4 max-h-[600px]  overflow-y-auto  max-md:w-full'>
                <div className='overflow-y-auto scrollbar'>
                  <h1 className='w-full pt-1 px-4 text-sm font-semibold'>{parkings?.length} available parkings</h1>
                  {parkings?.map(parking => (
                    <button onClick={() => { setSelected(parking) }}>  <ParkingCard key={[parking._id]} data={parking} intime={fromDate} totime={toDate} /></button>
                  ))}
                </div>
              </div>
              <div className='w-3/4  max-md:w-full  max-md:h-[400px] '>

                <MapScreen data={parkings} selected={selected} />
              </div>
            </div>
          </div>
          <div className='max-sm: h-2'>
            <Footer />
          </div>
        </div>
      }
    </div>
  );
}

export default ParkingScreen;
