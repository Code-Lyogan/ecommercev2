import {useState, useEffect} from 'react'
import validateInfo from './validateInfo';

const useForm = (callback, validateInfo) => {
    const [values, setValues] = useState({
        name: '',
        email: '',
        phoneNum: '',
        message: ''
    })
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState
    (false);


    const handleChange = e => {
        const { name, value } = e.target
        setValues({
            ...values,
            [name]: value
        });
    };

    const handleSubmit = e => {
        e.preventDefault();

        setErrors(validateInfo(values));
        setIsSubmitting(true);
    };

    useEffect(() => {
        if(Object.keys(errors).length === 0 && isSubmitting) {
            callback();
        }
    },
    [errors]
    )

    return { handleChange, values, handleSubmit, errors };
}

export default useForm;