import { useDispatch } from "react-redux"
import { EmailHelpText, Form, Input, InputContainer, Label, RegButton } from "./RegistrationForm.styled"
import { registrationThunk } from "redux/auth/operations"
import { useState } from "react"
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const RegistrationForm = () => {
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
    
    const handleSubmit = async(e) => {
        e.preventDefault()
        const name = e.target.elements.name.value;
        const password = e.target.elements.password.value;
        const email = e.target.elements.email.value;
        if (!name || !password || !email) {
            alert('Please fill in all fields of the form')
            return
        }
        const regexEmail = /^(?=.*[a-zA-Z]).{7,}$/; 
        if (!regexEmail.test(password)) {
            Notify.failure('The password must be at least 7 characters long and include at least one letter');
            return
        } 
            dispatch(registrationThunk({ name, email, password }))
            setName('');
            setEmail('');
            setPassword('')
    }
    
    return (
         <Form onSubmit={handleSubmit}>
                <InputContainer>
                    <Label htmlFor="inputName" className="form-label" >Name</Label>
                <Input type="text" maxLength={15} onChange={handleChange} className="form-control" id="inputName" name='name' value={name} />
                </InputContainer>
                <InputContainer >
                    <Label htmlFor="inputEmail1" className="form-label">Email address</Label>
                <Input type="email" onChange={handleChange} className="form-control" id="inputEmail1" aria-describedby="emailHelp" name='email' value={email} />
                    <EmailHelpText id="emailHelp" className="form-text">We'll never share your email with anyone else.</EmailHelpText>
                </InputContainer>
                <InputContainer >
                    <Label htmlFor="inputPassword1" className="form-label">Password</Label>
                <Input type="password" onChange={handleChange} className="form-control" id="inputPassword1" name='password' value={password}/>
                </InputContainer>
                <RegButton type="submit" className="btn btn-primary">Register</RegButton>
            </Form>
    )
}

export default RegistrationForm