import React from 'react'
import { Card, Stack, CardBody, Divider,CardFooter,ButtonGroup,Heading ,Button ,Image, Text} from '@chakra-ui/react'
import { PiCurrencyInrBold } from "react-icons/pi";

function ShortCard({hideDetails, data}) {
    return (
        <div>
            <Card maxW='sm'>
                <CardBody>
                    {/* <Image
                        src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                        alt='Green double couch with wooden legs'
                        borderRadius='lg'
                    /> */}
                    <Stack  spacing='1'>
                        <div>
                        <h1 className='text-xl font-semibold'>{data.parkingName}</h1>                        
                            <span className='font-normal text-sm'></span> {data.parkingArea}
                            
                        </div> 
                        <div><span className=''>{data.pincode}</span>  {data.city}  </div>
                        <div><span className='font-semibold'>Opening time:</span>  { new Date(data.openingTime).toLocaleTimeString()} </div>
                        <div><span className='font-semibold'>Closing time:</span>  { new Date(data.closingTime).toLocaleTimeString()} </div>
                        
                       
                        <Button variant='ghost' colorScheme='blue' onClick={hideDetails}>
                            Hide
                        </Button>
                    </Stack>
                </CardBody>
                <Divider />
              
            </Card>
        </div>
    )
}

export default ShortCard

