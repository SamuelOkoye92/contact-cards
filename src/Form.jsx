import React, {useState} from "react";
import './App.css';

const Form = () => {
    const [submitted, setSubmitted] = useState(false);
    const [valid, setValid] = useState(false);
    const [values, setValues] = useState({
        firstName: "",
        lastName: "",
        email: "",
    });

    const handleFirstNameChange = (event) => {
        setValues({ ...values, firstName: event.target.value });
    }

    const handleLastNameChange = (event) => {
        setValues({ ...values, lastName: event.target.value });
    }

    const handleEmailChange = (event) => {
        setValues({...values, email: event.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (values.firstName && values.lastName && values.email){
            setValid(true);
            }
        setSubmitted(true);
   }

    return (
        <div>
            <form className="formContainer" onSubmit={handleSubmit}>
                {submitted && valid ? <h3 className="alert">Form succesfully submitted</h3> : null}
                
                <input
                    onChange={handleFirstNameChange}
                    value={values.firstName}
                    className='form-field'
                    placeholder='First name'
                    name='firstName'
                />
                {submitted && !values.firstName ? <span className='warning'>first name is required</span> : null}
                <input
                    onChange={handleLastNameChange}
                    value = {values.lastName}
                    className='form-field'
                    placeholder='Last name'
                    name='lastName'
                />
                {submitted && !values.lastName ? <span className='warning'>last name is required</span> : null}
                <input
                    onChange={handleEmailChange}
                    value= {values.email}
                    className='form-field'
                    placeholder='email'
                    name='email'
                />
                {submitted && !values.email ? <span className='warning'>email is required</span> : null}
                <button className="resgisterButton" type='submit'>Register</button>
            </form>
        </div>
    )
}

export default Form;