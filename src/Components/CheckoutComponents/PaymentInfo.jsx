import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  cardNumber: Yup.string()
    .matches(/^\d{16}$/, 'Card number must be 16 digits')
    .required('Card number is required'),
  expiryDate: Yup.string()
    .matches(/^(0[1-9]|1[0-2])\/\d{2}$/, 'Expiry date must be in MM/YY format')
    .required('Expiry date is required'),
  cvv: Yup.string()
    .matches(/^\d{3,4}$/, 'CVV must be 3 or 4 digits')
    .required('CVV is required'),
});

const PaymentInfo = () => {
  const initialValues = {
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  };

  const handleSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 400);
  };

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-xl font-bold max-sm:text-base mb-4">Payment Information</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div className="mb-4">
            <label htmlFor="cardNumber" className="block mb-1">
              Card Number
            </label>
            <Field
              type="text"
              id="cardNumber"
              name="cardNumber"
              placeholder="Enter your card number"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            />
            <ErrorMessage name="cardNumber" component="div" className="text-red-500 mt-1" />
          </div>

          <div className="grid grid-cols-3 gap-4 mb-4 max-md:mb-0">
            <div>
              <label htmlFor="expiryDate" className="block mb-1">
                Expiry Date
              </label>
              <Field
                type="text"
                id="expiryDate"
                name="expiryDate"
                placeholder="MM/YY"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              />
              <ErrorMessage name="expiryDate" component="div" className="text-red-500 mt-1" />
            </div>

            <div>
              <label htmlFor="expiryYear" className="block mb-1">
                Year
              </label>
              <Field
                type="text"
                id="expiryYear"
                name="expiryYear"
                placeholder="YY"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              />
              <ErrorMessage name="expiryYear" component="div" className="text-red-500 mt-1" />
            </div>
            
            <div>
              <label htmlFor="cvv" className="block mb-1">
                CVV
              </label>
              <Field
                type="text"
                id="cvv"
                name="cvv"
                placeholder="Enter CVV"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              />
              <ErrorMessage name="cvv" component="div" className="text-red-500 mt-1" />
            </div>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default PaymentInfo;
