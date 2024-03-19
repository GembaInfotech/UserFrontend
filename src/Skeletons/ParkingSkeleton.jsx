import { Skeleton, Stack } from '@chakra-ui/react';
import 'react-datepicker/dist/react-datepicker.css';

function ParkingSkeleton() {
  return (
    <>
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
    </>
  )
}

export default ParkingSkeleton