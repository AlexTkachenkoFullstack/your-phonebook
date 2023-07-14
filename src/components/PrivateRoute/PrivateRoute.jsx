import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"

export const PrivateRoute = ({ redirectTo='/', component }) => {
    const auth = useSelector(state => state.auth.token)
    // const isRefreshing = useSelector(state => state.auth.isRefreshing)
    // const shouldRedirect = auth && isRefreshing;
    return (
        auth ? component : <Navigate to={redirectTo} />
    )
}