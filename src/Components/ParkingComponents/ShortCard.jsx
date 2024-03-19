import { Card, Stack, CardBody, Divider,CardFooter,ButtonGroup,Heading ,Button ,Image, Text} from '@chakra-ui/react'

function ShortCard({hideDetails, data}) {
    return (
        <div>
            <Card maxW='sm'>
                <CardBody>
                    <Stack  spacing='1'>
                        <div>
                        <h1 className='text-xl font-semibold'>{data.pn}</h1>                        
                            <span className='font-normal text-sm'></span> {data.pa}                           
                        </div> 
                        <div> {data.city}-<span className=''>{data.pc}</span>   </div>                    
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

