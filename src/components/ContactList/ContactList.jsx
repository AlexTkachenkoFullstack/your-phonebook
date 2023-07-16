import React, { useEffect } from "react";
import { ContactListContainer, NoContactsText} from "./ContactList.styled";
import { ContactItem } from "./Contacttem/ContactItem";
import {  useDispatch, useSelector } from "react-redux";
import { fetchContactsThunk } from "redux/contacts/operations";
function ContactList() {
  
    const contacts = useSelector(state=>state.contacts.items)
    const filter = useSelector(state=>state.filter)
    // const filter=''
    const currentContacts= contacts.filter(({name})=>name.toUpperCase().includes(filter.toUpperCase()))
//    console.log(contacts)

    return (
        <ContactListContainer >
            {currentContacts.length === 0
             ? <NoContactsText>Contacts matching your request were not found</NoContactsText>
              :  currentContacts?.map(({ id, name, number }) => {
                return (<ContactItem key={id} id={id} name={name} number={number} />)
            })} 
        </ContactListContainer>
        )
}


export default ContactList

