import React, { useEffect } from 'react';
import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter';
import { AppContainer, ApiTitleH1, ApiTitleH2, ErrorMessage, ErrorMessageContainer } from './App.styled';
import { useDispatch, useSelector } from 'react-redux';

import { ContactsCounter } from 'components/ContactsCounter/ContactsCounter';
import ButtonAppBar from '../NavBar/NavBar';
import { Route,Routes,Navigate } from 'react-router-dom';
import SharedLayout from '../NavBar/NavBar';
import { Contacts } from 'pages/Contacts/Contacts';
import { UseSelector } from 'react-redux/es/hooks/useSelector';
import { useNavigate } from 'react-router-dom';
import { Auth, Login } from 'pages/Login/Login';
import { Registration } from 'pages/Registration/Registration';
import { Home } from 'pages/Home/Home';
import { RestrictedRoute } from 'components/RestrictedRoute/RestrictedRoute';
import { PrivateRoute } from 'components/PrivateRoute/PrivateRoute';
import { refreshThunk } from 'redux/auth/operations';
function App() {
  // const error=useSelector(errorSelector)
  // const dispatch = useDispatch()
  // useEffect(() =>
  //   { dispatch(fetchContacts()) }
  //   ,[dispatch])
  const dispatch = useDispatch();
  // const isRefreshing = useSelector(state => state.auth.isRefreshing)
  // console.log(isRefreshing)
  useEffect(() => {
    dispatch(refreshThunk())
  },[dispatch])



  return (
    <AppContainer>
     <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path="/login" element={<RestrictedRoute redirectTo='/contacts' component={<Login />} />} />
            <Route path="/registration" element={<RestrictedRoute redirectTo='/contacts' component={<Registration />} />} />
            <Route path="/contacts" element={<PrivateRoute redirectTo='/login' component={<Contacts />} />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
     
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
