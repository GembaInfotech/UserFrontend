import { Formik, Field, Form, ErrorMessage, Yup, Link, toast, axios } from '../../Screens/SignUpScreen/Index'
import { useSelector, useDispatch } from 'react-redux';
import { signUpAsync } from './../../slice/AuthSlice/SignUpSlice';
import { useEffect } from 'react';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const SignupSchema = Yup.object().shape({
  name: Yup.string().required('name is required'),
  mob: Yup.string()
    .matches(/^[0-9]+$/, 'Phone number must only contain digits')
    .min(10, 'Phone number must be at least 10 digits')
    .required('Phone number is required'),
  mail: Yup.string().email('Invalid email').required('mail is required'),
  password: Yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
});
const SignUpForm = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const status = useSelector((state) => state.SignUp.status);
  console.log(status);
  const initialValues = {
    name: '',
    mob: '',
    mail: '',
    password: '',
  };

  useEffect(() => {
    if (status === "succeeded") {
      Swal.fire({
        icon: 'success',
        title: 'Signup successful!',
        text: 'Please check your email for further instructions.',
        allowOutsideClick: false,
        confirmButtonText: 'OK',
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/login');
        }
      });
    } else if (status === "failed") {
      Swal.fire({
        icon: 'error',
        title: 'Email Already Exists',
        text: 'Please try with another email.'
      });
    }
  }, [status]);
  const handleSubmit = async (values) => {
    try {
      dispatch(signUpAsync({ values }));
    } catch (error) {
      console.error('Error:', error);
    }
  };
  return (
    <div className="flex flex-col items-center justify-center px-6 py-2   mx-auto md:h-screen lg:py-0 w-[50%] max-sm:py-8 max-sm:w-full  ">
      <div className="w-full  space-x-4 bg-[#f6f7fb] rounded-lg shadow  md:mt-0 sm:max-w-lg xl:p-0  dark:border-gray-700">
        <div className="p-6 space-y-4 md:space-y-6  sm:p-8">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-600 md:text-2xl dark:text-gray-600">Create an account</h1>
          <Formik initialValues={initialValues} validationSchema={SignupSchema} onSubmit={handleSubmit}>
            <Form className="space-y-4 md:space-y-6">
              <div>
                <label htmlFor="name" className="block mb-1 text-sm font-medium text-gray-900 dark:text-gray-600">
                  Name
                </label>
                <Field
                  type="text"
                  name="name"
                  id="name"
                  className="bg-[#eceef7]  border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-3  dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-600 font-medium dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="John Doe"
                  required
                />
                <ErrorMessage name="name" component="div" className="text-red-500 text-sm" />
              </div>
              <div>
                <label htmlFor="mob" className="block mb-1 text-sm font-medium text-gray-900 dark:text-gray-600">
                  Phone Number
                </label>
                <Field
                  type="text"
                  name="mob"
                  id="mob"
                  className="bg-[#eceef7]  border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-3  dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-600 font-medium dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="1234567890"
                  required
                />
                <ErrorMessage name="mob" component="div" className="text-red-500 text-sm" />
              </div>
              <div>
                <label htmlFor="mail" className="block mb-1 text-sm font-medium text-gray-900 dark:text-gray-600">
                  E-mail ID
                </label>
                <Field
                  type="text"
                  name="mail"
                  id="mail"
                  className="bg-[#eceef7]  border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-3  dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-600 font-medium dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="John"
                  required
                />
                <ErrorMessage name="mail" component="div" className="text-red-500 text-sm" />
              </div>
              <div>
                <label htmlFor="password" className="block mb-1 text-sm font-medium text-gray-900 dark:text-gray-600">
                  Password
                </label>
                <Field
                  type="text"
                  name="password"
                  id="password"
                  className="bg-[#eceef7]  border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-3  dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-600 font-medium dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="John"
                  required
                />
                <ErrorMessage name="password" component="div" className="text-red-500 text-sm" />
              </div>
              <button
                type="submit"
                className="w-full text-white  bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Create an account
              </button>
              <p className="text-sm  text-gray-600 font-medium ">
                Already have an account?{' '}
                <Link to="/login" className="font-medium   text-blue-700 hover:underline " >
                  Login
                </Link>
              </p>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};
export default SignUpForm;
