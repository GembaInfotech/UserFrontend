import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { IoIosSend } from "react-icons/io";


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

const onSubmit = (values) => {
  // Handle form submission logic here
  console.log(values);
};

function QueryForm() {
  return (
    <div className='p-16 flex justify-center'>
     
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form >
          <div className="mb-4">
            <Field type="text" id="name" name="name" placeholder="Name" className="border p-3 rounded-lg w-full" />
            <ErrorMessage name="name" component="div" className="text-red-500 text-sm" />
          </div>

          <div className="mb-4">
            <Field type="text" id="email" name="email" placeholder="Email" className="border  rounded-lg p-3 w-full" />
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

          <button type="submit" className="bg-blue-600 ml-8 text-white text-xl font-medium px-4 py-2 h-14 w-28  rounded-2xl"><span className='flex '>Submit< IoIosSend className='mt-1 pl-1 text-xl'/></span></button>
        </Form>
      </Formik>
    </div>
  );
}

export default QueryForm;
