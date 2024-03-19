import { SignUpForm, img1 } from './Index'
const SignUp = () => {
  return (
    <>
      <div className="flex flex-row max-sm:flex-col justify-center items-center  bg-blue-600">
        <div className='w-[50%] max-sm:w-full'>
          <img src={img1}
            className='w-full sm:min-h-screen h-[300px] '
            alt="image" />
        </div>
        <SignUpForm />
      </div>
    </>
  );
};
export default SignUp;
