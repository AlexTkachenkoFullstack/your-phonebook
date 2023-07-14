import { useSelector } from "react-redux"
import { Link } from "./Navigation.styled"
export const Navigation = () => {
    const auth = useSelector(state => state.auth.token)
    
    return (
        <>
            <Link to="/" style={auth ? {marginRight:25} : { marginRight: 'auto' }}>Home</Link>
            {auth && <Link to="/contacts" style={{ marginRight: 'auto' }}>Contacts</Link>}
        </>
            
    )
}