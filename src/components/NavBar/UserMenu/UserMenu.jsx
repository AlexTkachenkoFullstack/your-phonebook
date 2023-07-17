import { useDispatch, useSelector } from "react-redux"
import { LogOutButton, UserName } from "./UserMenu.styled"
import { logOutThunk } from "redux/auth/operations"
const UserMenu = () => {
    const userName = useSelector(state => state.auth.user.name)
    const dispatch=useDispatch()
    const onLogOut = () => {
        dispatch(logOutThunk())
    }

    return (
        <>
            <UserName>Welcome, {userName}</UserName>
          <LogOutButton type='button' onClick={onLogOut} >Log Out</LogOutButton>
        </>
    )
}

export default UserMenu