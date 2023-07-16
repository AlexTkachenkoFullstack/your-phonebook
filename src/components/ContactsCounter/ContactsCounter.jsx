import { useSelector } from "react-redux"
import { countContacts } from "utils/contsctsCounter"
import { CounterContactsContainer, CounterText, CounterTextTitle } from "./ContactsCounter.styled"
export const ContactsCounter = () => {
    const contacts=useSelector(state=>state.contacts.items)
    return (
        <CounterContactsContainer>
            <CounterTextTitle>Total contacts:</CounterTextTitle>
            <CounterText>{countContacts(contacts)}</CounterText>
        </CounterContactsContainer>
    )
}