import React from 'react';
import { Formik } from 'formik';
import { Input, Button, Tag } from 'antd';
import AdminDataService from './../service/AdminDataService'

const inputBottomMargin = {marginBottom: '10px'};
const tagStyle = {backgroundColor: '#f50', color: 'white', ...inputBottomMargin};


//because this doesn't have any state, we can change it from "class AddStudentForm extends Component"
const AddStudentForm = (props) =>
  

    
    <Formik
        initialValues={{ firstName: 'Tammy', lastName: 'Jenkins', pearId: "TamJenk092323"}}
        validate={values => {
        const errors = {};

        if(!values.firstName){
            errors.firstName = 'First Name Required'
        }

        if(!values.lastName){
            errors.lastName = 'Last Name Required'
        }

        if (!values.pearId) {
            errors.pearId = 'Pear Id Required';
        } 

        return errors;

        }}
        onSubmit={(student, { setSubmitting }) => {
        AdminDataService.addNewStudent(student).then(() => {
            props.onSuccess();
            setSubmitting(false);
        })
        .catch(err => {
            props.onFailure(err);
        })
        .finally(() => {
            setSubmitting(false);
        })
        
        }}>
        {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        submitForm,
        isValid
        /* and other goodies */
        }) => (
        <form onSubmit={handleSubmit}>
            <Input
            style={inputBottomMargin}
            name='firstName'
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.firstName}
            placeholder='First name. E.g. John'
            />
            {errors.firstName && touched.firstName && <Tag style={tagStyle}>{errors.firstName}</Tag>}
            
            <Input
            style={inputBottomMargin}
            name='lastName'
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.lastName}
            placeholder='Last name. E.g. Jones'
            />
            {errors.lastName && touched.lastName && <Tag style={tagStyle}>{errors.lastName}</Tag>}
            
            <Input
            style={inputBottomMargin}
            name='pearId'
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.pearId}
            placeholder='Pear Id e.g. JoJones031399'
            />
            {errors.pearId && touched.pearId && <Tag style={tagStyle}>{errors.pearId}</Tag>}

            <Button
            onClick={() => submitForm()}
            type="submit"
                disabled={isSubmitting | (touched && !isValid)}>
            Submit
            </Button>
        </form>
        )}
    </Formik>
    
        
    
export default AddStudentForm;