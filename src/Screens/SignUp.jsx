import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import tailwindConfig from '../../tailwind.config';
import img from '../assets/parking.webp'
import logo from '../assets/logo1.png'
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import axios from 'axios';



const SignupSchema = Yup.object().shape({
  Name: Yup.string().required('Name is required'),

  phone: Yup.string()
    .matches(/^[0-9]+$/, 'Phone number must only contain digits')
    .min(10, 'Phone number must be at least 10 digits')
    .required('Phone number is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),

});

const SignUp = () => {
  const initialValues = {
    Name: '',
    phone: '',
    email: '',
    password: '',
  
 
  };

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      const response = await axios.post('http://localhost:7001/v1/api/endUser/register', values);
      if (response.status === 201) {
        toast.success('Signup successful! Please check your email for further instructions.');

        alert('Signup successful! Please check your email for further instructions.');
        resetForm();
      }
      if (response.status === 205) {
        toast.error('Email Already Exists. Please try with another email.');
console.log("error")
        resetForm();
      }
    } catch (error) {

      console.error('Error:', error);
      // Handle error and display appropriate message to the user
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
 

    <div className="flex flex-row justify-center items-center bg-gray-50 dark:bg-blue-600">

    <div className='w-[50%]'>
    <img src={img} 
    className='w-full min-h-screen '
    alt="image" />
    </div>




    <div className="flex flex-col items-center justify-center px-6 py-2  mx-auto md:h-screen lg:py-0 w-[50%]  ">
        
        <div className="w-full  space-x-4 bg-[#f6f7fb] rounded-lg shadow  md:mt-0 sm:max-w-lg xl:p-0  dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6  sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-600 md:text-2xl dark:text-gray-600">Create an account</h1>
            <Formik initialValues={initialValues} validationSchema={SignupSchema} onSubmit={handleSubmit}>
              <Form className="space-y-4 md:space-y-6">
                <div>
                  <label htmlFor="Name" className="block mb-1 text-sm font-medium text-gray-900 dark:text-gray-600">
                     Name
                  </label>
                  <Field
                    type="text"
                    name="Name"
                    id="Name"
                    className="bg-[#eceef7]  border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-3  dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-600 font-medium dark:focus:ring-blue-500 dark:focus:border-blue-500"

                    placeholder="John Doe"
                    required
                  />
                  <ErrorMessage name="Name" component="div" className="text-red-500 text-sm" />
                </div>
               
                <div>
                  <label htmlFor="phone" className="block mb-1 text-sm font-medium text-gray-900 dark:text-gray-600">
                    Phone Number
                  </label>
                  <Field
                    type="text"
                    name="phone"
                    id="phone"
                    className="bg-[#eceef7]  border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-3  dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-600 font-medium dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="1234567890"
                    required
                  />
                  <ErrorMessage name="phone" component="div" className="text-red-500 text-sm" />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-1 text-sm font-medium text-gray-900 dark:text-gray-600">
                    E-mail ID
                  </label>
                  <Field
                    type="text"
                    name="email"
                    id="email"
                    className="bg-[#eceef7]  border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-3  dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-600 font-medium dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="John"
                    required
                  />
                  <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
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
     
    </div>
    </>
   
  );
};

export default SignUp;
