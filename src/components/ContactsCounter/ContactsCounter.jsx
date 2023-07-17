import { useSelector } from "react-redux"
import { countContacts } from "utils/contsctsCounter"
import { CounterContactsContainer, CounterText, CounterTextTitle } from "./ContactsCounter.styled"
import { contactsSelector } from "redux/contacts/selectors"
const ContactsCounter = () => {
    const contacts=useSelector(contactsSelector)
    return (
        <CounterContactsContainer>
            <CounterTextTitle>Total contacts:</CounterTextTitle>
            <CounterText>{countContacts(contacts)}</CounterText>
        </CounterContactsContainer>
    )
}

export default ContactsCounter