import { SignUpForm, img1} from './Index'


const SignUp = () => {


  return (
    <>
 

    <div className="flex flex-row justify-center items-center  bg-blue-600">

    <div className='w-[50%]'>
    <img src={img1} 
    className='w-full min-h-screen '
    alt="image" />
    </div>

<SignUpForm/>


   
     
    </div>
    </>
   
  );
};

export default SignUp;
