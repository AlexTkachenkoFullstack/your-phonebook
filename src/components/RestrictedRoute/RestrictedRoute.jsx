import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"
import { tokenSelector } from "redux/auth/selectors"
const RestrictedRoute = ({component, redirectTo='/'}) => {
    const auth=useSelector(tokenSelector)
    return (
        auth ? <Navigate to={redirectTo} replace/> : component
    )
}

export default RestrictedRoute