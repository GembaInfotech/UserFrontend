import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Name must be at least 3 characters')
    .required('Name is required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  mobile: Yup.string()
    .matches(/^[0-9]+$/, 'Mobile number must contain only digits')
    .min(10, 'Mobile number must be at least 10 digits')
    .max(10, 'Mobile number must not exceed 10 digits')
    .required('Mobile number is required'),
});

const UserInfoForm = () => {
  const initialValues = {
    name: '',
    email: '',
    mobile: '',
  };

  const handleSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 400);
  };

  return (
    <div className="flex-row flex-start ">
      <h2 className="text-xl font-bold mb-4 max-sm:text-base">User Information</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div className='flex space-x-8'>
            <div className="mb-4">
              <label htmlFor="name" className="block mb-1">
                Name
              </label>
              <Field
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              />
              <ErrorMessage name="name" component="div" className="text-red-500 mt-1" />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block mb-1">
                Email
              </label>
              <Field
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              />
              <ErrorMessage name="email" component="div" className="text-red-500 mt-1" />
            </div>

          </div>
          <div className="mb-4 max-md:mb-0">
            <label htmlFor="mobile" className="block mb-1">
              Mobile
            </label>
            <Field
              type="text"
              id="mobile"
              name="mobile"
              placeholder="Enter your mobile number"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            />
            <ErrorMessage name="mobile" component="div" className="text-red-500 mt-1" />
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default UserInfoForm;
