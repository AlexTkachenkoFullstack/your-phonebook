import React from "react";
import { ContactListContainer, NoContactsText} from "./ContactList.styled";
import ContactItem from "./Contacttem/ContactItem";
import {   useSelector } from "react-redux";
import { contactsSelector } from "redux/contacts/selectors";
import { filterSelector } from "redux/filter/selectors";
const ContactList=()=>{
    const contacts = useSelector(contactsSelector)
    const filter = useSelector(filterSelector)
    const currentContacts= contacts.filter(({name})=>name.toUpperCase().includes(filter.toUpperCase()))

    return (
        <ContactListContainer >
            {contacts.length===0 && !filter && <NoContactsText>Your phone book is empty. Add contacts to it.</NoContactsText>}
            {currentContacts.length === 0 && filter
             ? <NoContactsText>Contacts matching your request were not found</NoContactsText>
              :  currentContacts?.map(({ id, name, number }) => {
                return (<ContactItem key={id} id={id} name={name} number={number} />)
            })} 
        </ContactListContainer>
        )
}


export default ContactList

