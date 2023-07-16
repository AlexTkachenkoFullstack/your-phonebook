
import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useDispatch } from 'react-redux';
import { changeContactThunk } from 'redux/contacts/operations';
import { ModalTitle, ModalForm, ModalInput, ModalInputContainer, ModalLabel, ModalButton} from './ModalOnChangeContact.styled';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: '#86e2e3',
  border: '2px solid #33b5cd91',
  boxShadow: '0px 0px 37px 25px #33b5cd91',
  borderRadius: 5,
  outline:'none',
  p: 4,
};

function telephoneCheck(str) {
  var patt = new RegExp(/^(\+{0,})(\d{0,})([(]{1}\d{1,3}[)]{0,}){0,}(\s?\d+|\+\d{2,3}\s{1}\d+|\d+){1}[\s|-]?\d+([\s|-]?\d+){1,2}(\s){0,}$/gm);
  return patt.test(str);
}

export default function ModalOnChangeContact({onCloseModal, open, id, name, number}) {
    const dispatch=useDispatch()
    const handleSubmit = (e) => {
        e.preventDefault();
        const name = e.target.elements.name.value
      const number = e.target.elements.number.value;
      const isValid = telephoneCheck(number)
      if (!isValid) {
        alert('Please enter a valid phone number')
        return
      }
        const contact={name, number}
        dispatch(changeContactThunk({ id, contact }))
        onCloseModal()
}

  return (
    <div>
      <Modal
        open={open}
        onClose={()=>onCloseModal()}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <ModalTitle>Change name or number</ModalTitle>
          <ModalForm onSubmit={handleSubmit}>
            <ModalInputContainer>
              <ModalLabel htmlFor='modalName'> Name </ModalLabel>
              <ModalInput maxLength={16} id='modalName' type='text' name='name' defaultValue={name}/>
            </ModalInputContainer>
            
            <ModalInputContainer>
              <ModalLabel htmlFor='modalNumber'> Phone number </ModalLabel> 
              <ModalInput maxLength={13} id='modalNumber' type='tel' name='number' defaultValue={number} /> 
            </ModalInputContainer>
            <ModalButton type='submit'>Save</ModalButton>
          </ModalForm>
        </Box>
      </Modal>
    </div>
  );
}