import React,  {Component} from 'react';
import { Formik } from 'formik';
import { Input, Tag, Button } from 'antd';

export default class EditUserForm extends Component {   
    render () {
        const { submitter, initialValues } = this.props;
        return (
          <Formik
          initialValues={initialValues}
          validate={values => {
            let errors = {};
            if (!values.pearId) {
              errors.email = 'Required';
            }
            if (!values.firstName) {
              errors.firstName = 'First name required';
            }
            if (!values.lastName) {
              errors.lastName = 'Last name required';
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            console.log("VALUES");
            console.log(values);
            submitter(values);
            setSubmitting(false);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            isValid,
            handleBlur,
            handleSubmit,
            isSubmitting,
            submitForm
            /* and other goodies */
          }) => (
            <form onSubmit={handleSubmit}>
              <Input
                style={{marginBottom: '5px'}}
                name="firstName"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.firstName}
              />
              {errors.firstName && touched.firstName && <Tag style={{marginBottom: '5px'}} color="#f50">{errors.firstName}</Tag>}

              <Input
                style={{marginBottom: '5px'}}
                name="lastName"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.lastName}
              />
              {errors.lastName && touched.lastName && <Tag style={{marginBottom: '5px'}} color="#f50">{errors.lastName}</Tag>}

              <Input
                style={{marginBottom: '5px'}}
                type="pearId"
                name="pearId"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.pearId}
              />
              {errors.pearId && touched.pearId && <Tag style={{marginBottom: '5px'}} color="#f50">{errors.pearId}</Tag>}

              <Button onClick = {() => submitForm()} type="submit" disabled={isSubmitting | (touched && !isValid) }>
                Submit
              </Button>
            </form>
          )}
        </Formik>
      )
    }
} 