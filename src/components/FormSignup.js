import React from 'react'
import useForm from '../useForm'
import validateInfo from '../validateInfo';
import './Form.css';

const FormSignup = ({ submitForm }) => {
    const {handleChange, values, handleSubmit, errors} = useForm(submitForm, validateInfo);
  return (
    <div className='form-content-right'>
            <form className='form' onSubmit={handleSubmit}>
                <h1>Get started with us today! Create your account by filling out the information below.</h1>
                <div className='form-inputs'>
                    <label htmlFor='name' className='form-label'>Name</label>
                    <input id='name' type='text' name='name' className='form-input' placeholder='Enter your name...' value={values.name} onChange={handleChange}/>
                    {errors.name && <p>{errors.name}</p>}
                </div>
                <div className='form-inputs'>
                    <label htmlFor='email' className='form-label'>Email</label>
                    <input id='email' type='email' name='email' className='form-input' placeholder='Enter your email...' value={values.email} onChange={handleChange}/>
                    {errors.email && <p>{errors.email}</p>}
                </div>
                <div className='form-inputs'>
                    <label htmlFor='phoneNum' className='form-label'>Phone Number</label>
                    <input id ='phoneNum' type='phoneNum' name='phoneNum' className='form-input' placeholder='Enter your phone number...' value={values.phoneNum} onChange={handleChange}/>
                    {errors.phoneNum && <p>{errors.phoneNum}</p>}
                </div>
                <div className='form-inputs'>
                    <label htmlFor='message' className='form-label'>Message</label>
                    <input id='message' type='textarea' name='message' className='form-input' placeholder='Enter your username...' value={values.message} onChange={handleChange}/>
                    {errors.message && <p>{errors.message}</p>}
                </div>
                <button className='form-input-btn' type='submit'>Submit</button>
            </form>
        </div>
    );
};

export default FormSignup