import React from 'react';
import { Formik } from 'formik';
import { Input, Button, Tag } from 'antd';
//import AdminDataService from '../service/AdminDataService'

const inputBottomMargin = {marginBottom: '10px'};
const verifyFieldStyle = {width: '20em', ...inputBottomMargin};
const tagStyle = {backgroundColor: '#f50', color: 'white', ...inputBottomMargin};


//because this doesn't have any state, we can change it from "class AddStudentForm extends Component"
const AddStudentIdVerificationForm = (props) =>
    <Formik
        initialValues={{ username: ''}}
        validate={values => {
        const errors = {};

        if(!values.username){
            errors.username = 'username Required'
        }

        return errors;
        }}

        onSubmit={(student, { setSubmitting }) => {
    
        alert(student);
        
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
        <form onSubmit={handleSubmit} 
            style = {{
                display:'block',
                float:'left', 
                width:'100%'
            }}>

            <div style = {{width:'100%'}}>
            {errors.username && touched.username && <Tag style={tagStyle}>{errors.username}</Tag>}
            <Input
            placeholder="pear id"
            size="large"
            onClick={value => console.log(value)}
            style={verifyFieldStyle}
            name='username'
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.username}
            
            />
            

            </div>
            <div style = {{width:'100%'}}>
            <Button 
                onClick={() => submitForm()}
                type="submit"
                disabled={isSubmitting | (touched && !isValid)}
                style={{
                    background:'black',
                    color:'white',
                    height:'3em',
                    width:'10em'
                }}
                >
            
            Get Started!
            </Button>
            </div>
        </form>
        )}
    </Formik>

        
    
export default AddStudentIdVerificationForm;