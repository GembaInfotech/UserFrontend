import QueryForm from './QueryForm'

function BusinessQuery() {

  return (
  <div>
    <div className='flex max-sm:flex-col items-center  justify-between bg-[#f6f7fb]  mt-16  w-2/3 max-sm:w-full mx-auto h-[600px] p-4  max-sm:h-[550px]  rounded-2xl'>
      <div className='p-16 max-sm:p-2'>
      <h1 className=' text-[52px] max-sm:text-4xl font-bold text-gray-800 mb-2'>Having Business Query?</h1>
      <h1 className='font-medium text-gray-600 '>Just leave your email with us and we’ll get back to you shortly!</h1>
      </div>
        <QueryForm />
    </div>
  </div>
  )
}

export default BusinessQuery
