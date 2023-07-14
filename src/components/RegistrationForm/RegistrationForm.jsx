import { useDispatch } from "react-redux"
import { Form } from "./RegistrationForm.styled"
import { registrationThunk } from "redux/auth/operations"
import { useState } from "react"

export const RegistrationForm = () => {
const dispatch=useDispatch()
const [name, setName]=useState('')
const [email, setEmail]=useState('')
const [password, setPassword] = useState('')
    
    const handleChange = (e) => {
        switch (e.target.name) {
            case 'name':
                setName(e.target.value);
                break
            case 'email':
                setEmail(e.target.value);
                break
            case 'password':
                setPassword(e.target.value);
                break
            default: return;   
        }
        
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()
        const name = e.target.elements.name.value;
        const password = e.target.elements.password.value;
        const email = e.target.elements.email.value;
        dispatch(registrationThunk({ name, email, password }))
        setName('');
        setEmail('');
        setPassword('')
    }
    return (
         <Form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="inputName" className="form-label" >Name</label>
                <input type="text" onChange={handleChange} className="form-control" id="inputName" name='name' value={name} />
                </div>
                <div className="mb-3">
                    <label htmlFor="inputEmail1" className="form-label">Email address</label>
                <input type="email" onChange={handleChange} className="form-control" id="inputEmail1" aria-describedby="emailHelp" name='email' value={email} />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="inputPassword1" className="form-label">Password</label>
                <input type="password" onChange={handleChange} className="form-control" id="inputPassword1" name='password' value={password} />
                </div>
                <button type="submit" className="btn btn-primary">Register</button>
            </Form>
    )
}