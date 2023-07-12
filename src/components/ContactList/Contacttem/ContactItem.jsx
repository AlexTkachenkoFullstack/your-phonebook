import { IoPersonCircleSharp } from "react-icons/io5"
import PropTypes from 'prop-types';
import { ButtonDeliteContact, ContactListItem, ContactListItemInfo, ContactListItemText } from "./Contacttem.styled"
import { useDispatch } from "react-redux"
import { deleteContact } from "redux/operations";
import { useState } from "react";

export const ContactItem = ({id, name, number}) => {
    const dispatch = useDispatch()
    const [deleting, setDeleting]=useState(false)
    const handleDelete = (event) => {
        setDeleting(true)
        dispatch(deleteContact(id))
    }

    return (<ContactListItem>
                    <IoPersonCircleSharp />
                            <ContactListItemInfo>
                                <ContactListItemText>{name}: {number}</ContactListItemText>
                                <ButtonDeliteContact
                                    disabled={deleting}
                                    type="button"
                                    onClick={handleDelete}
                                >
                            {!deleting
                                ? <p>Delete</p>
                                : <p>deleting</p> }  
                                </ButtonDeliteContact> 
                            </ContactListItemInfo> 

             </ContactListItem>
        
    )
}

ContactItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number:PropTypes.string.isRequired
}