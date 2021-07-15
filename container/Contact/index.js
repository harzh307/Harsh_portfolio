import React from 'react';
import { useFormik } from 'formik';
import axios from 'axios';
import PortTextInput from '../../component/PortTextInput';
import Button from '../../component/Button';
import PortText from '../../component/PortText';

// A custom validation function. This must return an object
// which keys are symmetrical to our values/initialValues
const validate = values => {
  const errors = {};
  if (!values.name) {
    errors.name = 'Required';
  } else if (values.name.length > 15) {
    errors.name = 'Must be 15 characters or less';
  }

  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})$/.test(values.email)) {
    errors.email = 'Invalid email';
  }

  return errors;
};

const SignupForm = ({ data }) => {
  // Pass the useFormik() hook initial form values, a validate function that will be called when
  // form values change or fields are blurred, and a submit function that will
  // be called when the form is submitted
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },
    validate,
    onSubmit: (values, { resetForm }) => {
      // alert(JSON.stringify(values));
      if (!values) {
        formik.errors.msg = 'Both Fields Required';
      }
      resetForm();
      return axios({
        method: 'post',
        url: 'http://localhost:1337/contact-forms/',
        data: {
          name: values.name,
          email: values.email,
          details: values.message,
        },
      });
    },
  });

  return (
    <form id="Contact">
      <div>
        <div className="contactContainer">
          <div>
            <PortText variant="portHeadingCaption" component="h1">
              {data?.contactHeader?.Title}
            </PortText>
            <PortText variant="portHeadingText">{data?.contactHeader?.Caption}</PortText>
          </div>
          <div>
            <div className="contactForm">
              <div>
                <PortTextInput
                  id="name"
                  name="name"
                  type="text"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  variant="contactInput"
                  placeholder={data?.name}
                  className={formik.errors.name ? 'borderBottom' : null}
                />
              </div>
              <div>
                <PortTextInput
                  id="email"
                  name="email"
                  type="email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                  variant="contactInput"
                  placeholder={data?.email}
                  className={formik.errors.email ? 'borderBottom' : null}
                />
              </div>
            </div>
            <PortTextInput
              id="message"
              variant="contactTextArea"
              component="textarea"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.message}
              placeholder={data?.message}
            />
          </div>
          <Button type="submit" onClick={formik.handleSubmit} className="buttonMargin">
            {data.buttonText}
          </Button>
        </div>
      </div>
    </form>
  );
};

export default SignupForm;
