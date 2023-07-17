import PropTypes from 'prop-types';
import { ButtonChangeContact, ContactIcon, ButtonDeliteContact, ButtonText, ContactListItem, ContactListItemInfo, ContactListItemText } from "./Contacttem.styled"
import { useDispatch } from "react-redux"
import { useState } from "react";
import { deleteContactThunk } from "redux/contacts/operations";
import { createPortal } from 'react-dom';
import ModalOnChangeContact from "components/ModalOnChangeContact/ModalOnChangeContact";
const modalRoot=document.getElementById('modal-root')

const ContactItem = ({ id, name, number }) => {
    const [open, setOpen] = useState(false);
    const [deleting, setDeleting]=useState(false)
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const dispatch = useDispatch()
    const handleDelete = (event) => {
        setDeleting(true)
        dispatch(deleteContactThunk(id))
    }

    return (<ContactListItem>
                    <ContactIcon />
                            <ContactListItemInfo>
                             <ContactListItemText>{name}: {number}</ContactListItemText>
                                <ButtonChangeContact
                                    type="button"
                                    onClick={handleOpen}
                                >
                            <ButtonText>Change</ButtonText>
                                </ButtonChangeContact> 
                                <ButtonDeliteContact
                                    disabled={deleting}
                                    type="button"
                                    onClick={handleDelete}
                                >
                            {!deleting
                                ? <ButtonText>DELETE</ButtonText>
                                : <ButtonText>deleting</ButtonText> }  
                                </ButtonDeliteContact> 
                            </ContactListItemInfo> 
                        {createPortal(
                            <ModalOnChangeContact onCloseModal={handleClose} open={open} id={id} name={name} number={number} />,
          modalRoot
  )}
             </ContactListItem>
        
    )
}

ContactItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number:PropTypes.string.isRequired
}

export default ContactItem