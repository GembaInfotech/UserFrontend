import React, { useState, useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {setter} from '../../slice/TokenSlice'
import { MdHome } from 'react-icons/md';
import { BiX, BiHide, BiShowAlt } from 'react-icons/bi';

const SignupSchema = Yup.object().shape({
  mail: Yup.string().required('Email is required').email('Invalid email format'),
  password: Yup.string().required('Password is required').min(3, 'Password must be at least 3 characters'),
});

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
   const token =useSelector((state)=>state?.token?.value);
   const dispatch = useDispatch();
   const navigate= useNavigate();

  useEffect(() => {
    let timer;
    if (errorMessage) {
      timer = setTimeout(() => {
        setErrorMessage('');
      }, 6000);
    }
    return () => clearTimeout(timer);
  }, [errorMessage]);

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const response = await axios.post('http://localhost:7001/v1/api/User/login', values);
         console.log(response.data.token)
       if(response.data?.token)
       {
        const recievedtoken= JSON.stringify(response.data.token.token)
        localStorage.setItem('token', recievedtoken)
        dispatch(setter(response.data.token))
       }
      if (response.status === 200 ) {
        navigate('/')
      } else {
        throw new Error('No data received from server');
      }
    } catch (error) {
      let errorMessage = 'An error occurred.';
      if (error.response) {
        switch (error.response.status) {
          case 401:
            errorMessage = 'Invalid password.';
            break;
          case 404:
            errorMessage = 'User not found.';
            break;
          case 500:
            errorMessage = 'Failed to update user.';
            break;
          default:
            errorMessage = 'Unexpected error occurred.';
        }
      }
      setErrorMessage(errorMessage);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className='flex-row max-sm:h-[530px] mx-auto md:h-screen lg:py-0 w-[50%] max-sm:w-full'>
      <Link to="/">
        <h1 className='float-right py-4 pr-2 text-white max-sm:text-xl max-sm:hidden text-4xl'><MdHome /></h1>
      </Link>
      <div className="flex flex-col items-center justify-center max-sm:py-1 px-6 py-12">
        <h1 className="flex items-center mb-6 text-[44px] max-sm:text-2xl max-sm:mt-2 font-semibold text-white">Welcome back here </h1>
        <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-600 md:text-2xl dark:text-gray-600">
              Sign in to your account
            </h1>
            <Formik initialValues={{ mail: '', password: '' }} validationSchema={SignupSchema} onSubmit={handleSubmit}>
              {({ isSubmitting }) => (
                <Form className="space-y-4 md:space-y-6">
                  <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-600">Your email</label>
                    <Field type="email" name="mail" id="mail" placeholder="name@gmail.com"
                      className="bg-gray-100 font-semibold border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-4 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                    <ErrorMessage name="mail" component="div" className="text-red-500 text-xs italic" />
                  </div>
                  <div>
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-600">Password</label>
                    <div className="relative">
                      <Field type={showPassword ? "text" : "password"} name="password" id="password" placeholder="••••••••"
                        className="bg-gray-100 font-bold border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-4 pr-12 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                      <button type="button" className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-700"
                        onClick={() => setShowPassword(!showPassword)}>
                        {showPassword ? (<BiHide />) : (<BiShowAlt />)}
                      </button>
                    </div>
                    <ErrorMessage name="password" component="div" className="text-red-500 text-xs italic" />
                  </div>
                  <button type="submit" disabled={isSubmitting}
                    className="w-full text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                    {isSubmitting ? 'Signing in...' : 'Sign in'}
                  </button>
                  <p className="text-sm font-medium text-gray-600">
                    Don’t have an account yet?{' '}
                    <Link to="/sign-up" className="font-medium text-blue-700 hover:underline">
                      Sign Up
                    </Link>
                  </p>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
      {errorMessage && (
        <div className="text-center mt-4">
          <div className="bg-red-700 text-white px-4 py-3 rounded relative mx-auto flex items-center justify-between w-96">
            {errorMessage}
            <BiX className="cursor-pointer" onClick={() => setErrorMessage('')} />
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginForm;
