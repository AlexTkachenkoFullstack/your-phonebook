
import React from "react";
import { FormContainer, FormLabelName, FormInputName, FormInputTel,  FormButton, ErrorText } from "./ContactForm.styled";
import { Formik, ErrorMessage } from 'formik';
import *as yup from 'yup'
import {  useDispatch, useSelector } from "react-redux";
import { addContactThunk } from "redux/contacts/operations";
import { contactsSelector } from "redux/selectors";
 const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

// phoneNumber: Yup.string().matches(phoneRegExp, 'Phone number is not valid')
const schame = yup.object({
  name: yup.string("It should be string").required("It shouldn't be empty").max(30).trim().matches(),
  phone: yup.string().matches(phoneRegExp, 'Phone number is not valid')
 });


 const initialValue = {
        name: '',
        phone:''
}

const FormError = ({name}) => {
    return (<ErrorMessage
        name={name}
        render={message =>(<ErrorText> {message}</ErrorText>)}
    />)
}
    

function ContactForm() {

    const contacts = useSelector(state=>state.contacts.items)

    const dispatch=useDispatch()
    const handleSubmit = ({ name: newName, phone }, actions) => {
        if(contacts.some(({name})=>newName===name)){
            alert(`${newName} is already in contacts`)
            return
        }

        dispatch(addContactThunk({ name: newName, number: phone.toString() }))
        
       actions.resetForm() 
}

    return (<Formik
                initialValues={initialValue}
                onSubmit={handleSubmit}
                validationSchema={schame}
            >
                <FormContainer autoComplete="off">
                    <FormLabelName >Name
                <FormInputName 
                            type="text"
                            name="name" 
                        />
                        <FormError name="name"/>
                    </FormLabelName>
                                
                    <FormLabelName>Number
                        <FormInputTel
                            type="tel"
                            name="phone"
                        />
                        <FormError name="phone"/>
                    </FormLabelName>
                    <FormButton type='submit'>Add contact</FormButton>
                </FormContainer>
            </Formik>)
}


export default ContactForm



