import { BgImg, Container } from "./LoginForm.styled"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { loginThunk } from "redux/auth/operations"
import { LoginFormEl } from "./LoginForm.styled"
export const LoginForm = () => {
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
        <LoginFormEl onSubmit={handleSubmit} >
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input onChange={handleChange} name='email' value={email} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" style={{ marginLeft: 'auto', marginRight: 'auto' }} />
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input onChange={handleChange} name='password' value={password} type="password" className="form-control" id="exampleInputPassword1" style={{ marginLeft: 'auto', marginRight: 'auto' }} />
            </div>
            <button type="submit" className="btn btn-primary">Login</button>
        </LoginFormEl>
    )
}