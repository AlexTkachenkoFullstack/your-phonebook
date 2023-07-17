import { Link } from "./AuthNav.styled"
const AuthNav = () => {
    return (
        <>
            <Link to='/registration' style={{paddingRight: 20}}>Registration</Link>
          <Link to='/login'>Login</Link>
        </>
    )
}

export default AuthNav