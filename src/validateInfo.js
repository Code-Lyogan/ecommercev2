// creating function to perform Contact validation
export default function validateInfo(values) {
    let errors = {}

    // Acts as form validation. If any of these text-fields are not met with the correct
    // requirments then an error message will return, and will make form submission impossible
    if(!values.name.trim()) {
        errors.name= "First name required";
    }
    // if email does not match characters, it will return as invalid
    if(!values.email.trim()) {
        errors.email= "Email required"
    } else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email="Email address is invalid";
    }
    // if phone number does not match 10 digits, it will return invalid
    if(!values.phoneNum) {
        errors.phoneNum = "Phone number is required"
    } else if (values.phoneNum.length < 9) {
        errors.phoneNum = "Phone number is invalid";
    }

    // If there is no message written, it will not submit
    if(!values.message) {
        errors.message = "Type a message to us";
    }

    return errors;
}