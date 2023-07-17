import React, { useEffect } from 'react';
import { AppContainer } from './App.styled';
import { useDispatch, useSelector } from 'react-redux';
import { Route,Routes,Navigate } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
// import Contacts from 'pages/Contacts/Contacts';
// import Login from 'pages/Login/Login';
// import Registration from 'pages/Registration/Registration';
// import Home from 'pages/Home/Home';
import RestrictedRoute from 'components/RestrictedRoute/RestrictedRoute';
import PrivateRoute from 'components/PrivateRoute/PrivateRoute';
import { refreshThunk } from 'redux/auth/operations';
import { isLoadingSelector} from 'redux/auth/selectors';
import { Spinner } from 'components/Spiner/Spiner';
import { lazy } from "react";
const Home = lazy(() => import("..//..//pages/Home/Home"));
const Registration = lazy(() => import("..//..//pages/Registration/Registration"));
const Login = lazy(() => import("..//..//pages/Login/Login"));
const Contacts = lazy(() => import("..//..//pages/Contacts/Contacts"));
function App() {
  // const error=useSelector(errorSelector)
  const dispatch = useDispatch();
  const isLoading = useSelector(isLoadingSelector)

  useEffect(() => {
    dispatch(refreshThunk())
  },[dispatch])



  return (
    <AppContainer>
      {isLoading
      ? <Spinner/>
      :<Routes>
          <Route path="/" element={<NavBar />}>
            <Route index element={<Home />} />
            <Route path="/login" element={<RestrictedRoute redirectTo='/contacts' component={<Login />} />} />
            <Route path="/registration" element={<RestrictedRoute redirectTo='/contacts' component={<Registration />} />} />
            <Route path="/contacts" element={<PrivateRoute redirectTo='/login' component={<Contacts />} />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
       }
       {/* <ButtonAppBar></ButtonAppBar>
        {error
        ? (<ErrorMessageContainer>
            <ErrorMessage>Sorry, something went wrong.</ErrorMessage>
          <ErrorMessage>{error}</ErrorMessage>
            <ErrorMessage>Please try again a little later.</ErrorMessage>
          </ErrorMessageContainer>)
        : (<>
              <ApiTitleH1>Phonebook</ApiTitleH1>
              <ContactForm />
                    <ApiTitleH2>Contacts</ApiTitleH2>
                    <ContactsCounter/>
                    <Filter />
              <ContactList />
           </>
          )}  */}

       </AppContainer>
  )
}

export default App
