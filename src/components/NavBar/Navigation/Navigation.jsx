import { useSelector } from "react-redux"
import { Link } from "./Navigation.styled"
import { tokenSelector } from "redux/auth/selectors"
const Navigation = () => {
    const auth = useSelector(tokenSelector)
    
    return (
        <>
            <Link to="/" style={auth ? {marginRight:25} : { marginRight: 'auto' }}>Home</Link>
            {auth && <Link to="/contacts" style={{ marginRight: 'auto' }}>Contacts</Link>}
        </>
            
    )
}

export default Navigation