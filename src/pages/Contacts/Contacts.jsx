import ContactForm from "components/ContactForm/ContactForm"
import ContactsCounter from "components/ContactsCounter/ContactsCounter"
import { ApiTitleH1,ApiTitleH2, ContactsContainer } from "./Contacts.styled"
import Filter from "components/Filter/Filter"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchContactsThunk } from "redux/contacts/operations"
import ContactList from "components/ContactList/ContactList"
import { isLoadingSelector } from "redux/contacts/selectors"
import { ContactsSpinner } from "components/Spiner/Spiner"
const Contacts = () => {

    const dispatch = useDispatch()
    const auth = useSelector(state => state.auth.token)
    const isLoading=useSelector(isLoadingSelector)
    
    useEffect(() => { 
        if (auth) {
           dispatch(fetchContactsThunk())
        }
        
    }, [auth, dispatch])


    return (<ContactsContainer>
                {isLoading
                ? <ContactsSpinner/>
                : <>
                    <ApiTitleH1>Phonebook</ApiTitleH1>
                    <ContactForm />
                    <ContactsCounter/>
                    <Filter />
                    <ApiTitleH2>Contacts</ApiTitleH2>
                    <ContactList />
                  </>
                }
           </ContactsContainer>)
}
export default Contacts