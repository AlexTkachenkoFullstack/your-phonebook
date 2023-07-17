import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"
import { isLoadingSelector, tokenSelector } from "redux/auth/selectors"

const PrivateRoute = ({ redirectTo='/', component }) => {
    const auth = useSelector(tokenSelector)
    const isLoading = useSelector(isLoadingSelector)
    const shouldRedirect = !auth && !isLoading;
    return (
        shouldRedirect ? <Navigate to={redirectTo} />  : component
    )
}

export default PrivateRoute