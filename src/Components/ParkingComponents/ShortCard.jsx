import { Card, Stack, CardBody, Divider,CardFooter,ButtonGroup,Heading ,Button ,Image, Text} from '@chakra-ui/react'
import { PiCurrencyInrBold } from "react-icons/pi";

function ShortCard({hideDetails, data}) {
    return (
        <div>
            <Card maxW='sm'>
                <CardBody>
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

