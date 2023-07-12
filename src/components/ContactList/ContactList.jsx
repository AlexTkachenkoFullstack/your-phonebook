import React from "react";
import { ContactListContainer} from "./ContactList.styled";
import { ContactItem } from "./Contacttem/ContactItem";
import {  useSelector } from "react-redux";
import { contactsSelector, filterSelector } from "redux/selectors";

function ContactList() {
    const contacts = useSelector(contactsSelector)
    const filter = useSelector(filterSelector)
    
    const currentContacts= contacts.filter(({name})=>name.toUpperCase().includes(filter.toUpperCase()))
    

    return (
        <ContactListContainer >
            {contacts.length>0 && (currentContacts.map(({ id, name, phone })=>{
                return (<ContactItem key={Number(id)} id={id} name={name} number={phone} />)
            }))}
        </ContactListContainer>
        )
}


export default ContactList

