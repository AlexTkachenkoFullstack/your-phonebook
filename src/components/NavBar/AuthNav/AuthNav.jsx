import { Link } from "./AuthNav.styled"
export const AuthNav = () => {
    return (
        <>
            <Link to='/registration' style={{paddingRight: 20}}>Registration</Link>
          <Link to='/login'>Login</Link>
        </>
    )
}