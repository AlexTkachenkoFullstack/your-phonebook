import ContactForm from "components/ContactForm/ContactForm"

// import ContactList from "components/ContactList/ContactList"
import { ContactsCounter } from "components/ContactsCounter/ContactsCounter"
import { ApiTitleH1,ApiTitleH2, ContactsContainer } from "./Contacts.styled"
import Filter from "components/Filter/Filter"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchContactsThunk } from "redux/contacts/operations"
import ContactList from "components/ContactList/ContactList"
import { instance } from "redux/auth/operations"
export const Contacts = () => {

    const dispatch = useDispatch()
    const auth = useSelector(state => state.auth.token)
    
    useEffect(() => { 
        
        if (auth) {
            console.log(instance.defaults.headers.common.Authorization)
            console.log(auth)
           dispatch(fetchContactsThunk())
        }
        
    }, [auth, dispatch])


    return (<ContactsContainer>
        
              <ApiTitleH1>Phonebook</ApiTitleH1>
              <ContactForm />
                    <ContactsCounter/>
                    <Filter />
                    <ApiTitleH2>Contacts</ApiTitleH2>
              <ContactList/>
           </ContactsContainer>)
}