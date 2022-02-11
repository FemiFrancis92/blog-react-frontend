import React, { useState, useEffect, useRef } from 'react';
import { Navigate } from 'react-router-dom';
import '../signup/Signup.css'
 import LoginValidation from './LoginValidation';

function Signup(props) {

    // Manage initial form values

    const [formValues,setFormValues] = useState({ email: "",password: "" });


    // Manage Form Errors

    const [formErrors,setFormErrors] = useState({});

    // Manage 
    const [isSubmit, setIsSubmit] = useState(false);


    // Manage handle

    const handleChange = (event) => {
        console.log(event.target);
        const {name, value} = event.target;//destructuring
        setFormValues({...formValues,[name]:value});
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setFormErrors(LoginValidation(formValues));

        loginUser(event)
        
    }

    async function loginUser(event) {
		event.preventDefault()

		const response = await fetch('http://localhost:5000/api/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				formValues
			}),
		})

		const data = await response.json()

		if (data.user) {
			localStorage.setItem('token', data.user)
            setIsSubmit(true);
			
			
		} else {
			alert('Please check your username and password')
		}
	}


    useEffect(() => {
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            alert('Login successful')
            // window.location.href = '/article-list'
            Navigate('/article-list');
        }
    }, [formErrors]);

    return (
        <div className='body1'>
            {Object.keys(formErrors).length === 0 && isSubmit ? (<div className='signupchk'>Signup Successful</div>) : (<pre className='pretext'>{JSON.stringify(formValues, undefined, 2)}</pre>)}
            <div className="main">  	
		    <input type="checkbox" id="chk" aria-hidden="true" />


            {/*Signup*/}

			<div className="signup">
				<form onSubmit={handleSubmit}>
					<label aria-hidden="true">LogIn</label>
					<input type="email" name="email" placeholder="Email" required="" value = { formValues.email } onChange={handleChange} />
                    <p className='error'>{formErrors.email}</p>
					<input type="password" name="password" placeholder="Password" required="" values = { formValues.password }  onChange = {handleChange}/>
                    <p className='error'>{formErrors.password}</p>
					<button>LogIn</button>
				</form>
			</div>
	</div>
        </div>
    );
}

export default Signup;