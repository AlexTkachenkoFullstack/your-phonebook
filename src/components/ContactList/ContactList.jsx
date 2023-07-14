import React, { useEffect } from "react";
import { ContactListContainer} from "./ContactList.styled";
import { ContactItem } from "./Contacttem/ContactItem";
import {  useDispatch, useSelector } from "react-redux";
import { contactsSelector, filterSelector } from "redux/selectors";
import { fetchContactsThunk } from "redux/contacts/operations";
function ContactList() {
  
    const contacts = useSelector(state=>state.contacts.items)
    // const filter = useSelector(filterSelector)
    // const filter=''
    // const currentContacts= contacts.filter(({name})=>name.toUpperCase().includes(filter.toUpperCase()))
//    console.log(contacts)

    return (
        <ContactListContainer >
            { contacts?.map(({ id, name, number })=>{
                return (<ContactItem key={id} id={id} name={name} number={number} />)
            })} 
        </ContactListContainer>
        )
}


export default ContactList

