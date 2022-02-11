import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import './Signup.css'
import validation from './validation';

function Signup(props) {

    const navigate = useNavigate();

    // Manage initial form values

    const [formValues,setFormValues] = useState({ username: "",email: "",password: "" });


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
        setFormErrors(validation(formValues));
        registerUser(event);
        setIsSubmit(true);
    }

    // Backend connection

    async function registerUser(event) {
		event.preventDefault()

		const response = await fetch('http://localhost:5000/api/register', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				formValues
			}),
		})

		const data = await response.json()

		if (data.status === 'ok') {
			
            setIsSubmit(true);
		}
	}

    useEffect(() => {
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            alert("Signup Successful");
            navigate('/login');
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
					<label aria-hidden="true">Sign up</label>
					<input type="text" name="username" placeholder="User name" required="" value = { formValues.username } onChange= {handleChange} />
                    <p className='error'>{formErrors.username}</p>
					<input type="email" name="email" placeholder="Email" required="" value = { formValues.email } onChange={handleChange} />
                    <p className='error'>{formErrors.email}</p>
					<input type="password" name="password" placeholder="Password" required="" values = { formValues.password }  onChange = {handleChange}/>
                    <p className='error'>{formErrors.password}</p>
					<button>Sign up</button>
				</form>
			</div>

            {/*Loginform*/}

			{/* <div className="login">
				<form>
					<label  aria-hidden="true">Login</label>
					<input type="email" name="email" placeholder="Email" required="" />
					<input type="password" name="pswd" placeholder="Password" required="" />
					<button>Login</button>
				</form>
			</div> */}
	</div>
        </div>
    );
}

export default Signup;