import React, { useEffect } from 'react';
import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter';
import { AppContainer, ApiTitleH1, ApiTitleH2, ErrorMessage, ErrorMessageContainer } from './App.styled';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { errorSelector } from 'redux/selectors';
import { ContactsCounter } from 'components/ContactsCounter/ContactsCounter';


function App() {
  const error=useSelector(errorSelector)
  const dispatch = useDispatch()
  useEffect(() =>
    { dispatch(fetchContacts()) }
    ,[dispatch])

  return ( 
    <AppContainer>
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
        )} 
      </AppContainer>
    )
}

export default App
