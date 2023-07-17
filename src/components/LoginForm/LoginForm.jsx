import { Form, Input, InputContainer, Label, LogButton } from "./LoginForm.styled"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { loginThunk } from "redux/auth/operations"
const LoginForm = () => {
    const dispatch = useDispatch()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleChange = (e) => {
        switch (e.target.name) {
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
        const password = e.target.elements.password.value;
        const email = e.target.elements.email.value;
        dispatch(loginThunk({ email, password }))
        setEmail('');
        setPassword('')
    }

    return (
        <Form onSubmit={handleSubmit} >
            <InputContainer>
                <Label htmlFor="exampleInputEmail1" className="form-label">Email address</Label>
                <Input onChange={handleChange} name='email' value={email} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" style={{ marginLeft: 'auto', marginRight: 'auto' }} />
            </InputContainer>
            <InputContainer>
                <Label htmlFor="exampleInputPassword1" className="form-label">Password</Label>
                <Input onChange={handleChange} name='password' value={password} type="password" className="form-control" id="exampleInputPassword1" style={{ marginLeft: 'auto', marginRight: 'auto' }} />
            </InputContainer>
            <LogButton type="submit" className="btn btn-primary">Login</LogButton>
        </Form>
    )
}

export default LoginForm