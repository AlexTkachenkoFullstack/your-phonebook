import { useSelector } from "react-redux"
import { contactsSelector } from "redux/selectors"
import { countContacts } from "utils/contsctsCounter"
import { CounterContactsContainer, CounterText, CounterTextTitle } from "./ContactsCounter.styled"
export const ContactsCounter = () => {
    const contacts=useSelector(contactsSelector)
    return (
        <CounterContactsContainer>
            <CounterTextTitle>Total contacts:</CounterTextTitle>
            <CounterText>{countContacts(contacts)}</CounterText>
        </CounterContactsContainer>
    )
}