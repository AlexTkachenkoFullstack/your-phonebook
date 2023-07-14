import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"
export const RestrictedRoute = ({component, redirectTo='/'}) => {
    const auth=useSelector(state=>state.auth.token)
    return (
        auth ? <Navigate to={redirectTo} replace/> : component
    )
}