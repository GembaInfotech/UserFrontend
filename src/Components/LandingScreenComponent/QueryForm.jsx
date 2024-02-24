import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { IoIosSend } from "react-icons/io";
import axios from 'axios';
import Swal from 'sweetalert2';

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  mobile: Yup.string().required('Mobile is required'),
  message: Yup.string().required('Message is required'),
});

const initialValues = {
  name: '',
  email: '',
  mobile: '',
  message: '',
};

function QueryForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (values, { resetForm }) => {
    setIsSubmitting(true); // Set isSubmitting to true when form is being submitted
    try {
      await axios.post('http://localhost:7001/v1/api/queries/query', values);

      resetForm(initialValues);

      Swal.fire({
        icon: 'success',
        title: 'Success!',
        text: 'Your request has been sent successfully!',
      });
    } catch (error) {
      console.error('Error:', error);
      Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: 'An error occurred. Please try again later.',
      });
    } finally {
      setIsSubmitting(false); // Set isSubmitting to false when form submission is complete
    }
  };

  return (
    <div className='p-16 flex justify-center'>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className="mb-4">
              <Field type="text" id="name" name="name" placeholder="Name" className="border p-3 rounded-lg w-full" />
              <ErrorMessage name="name" component="div" className="text-red-500 text-sm" />
            </div>

            <div className="mb-4">
              <Field type="text" id="email" name="email" placeholder="Email" className="border rounded-lg p-3 w-full" />
              <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
            </div>

            <div className="mb-4">
              <Field type="text" id="mobile" name="mobile" placeholder="Mobile" className="border p-3 rounded-lg w-full" />
              <ErrorMessage name="mobile" component="div" className="text-red-500 text-sm" />
            </div>

            <div className="mb-4">
              <Field as="textarea" id="message" name="message" placeholder="Message" className="border rounded-lg p-3 w-full" />
              <ErrorMessage name="message" component="div" className="text-red-500 text-sm" />
            </div>

            <button type="submit" disabled={isSubmitting} className="bg-blue-600 ml-8 text-white text-xl font-medium px-4 py-2 h-14 w-28  rounded-2xl">
              <span className='flex'>
                Submit< IoIosSend className='mt-1 pl-1 text-xl'/>
              </span>
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default QueryForm;
