
import React from "react";
import { FormContainer, FormLabelName, FormInputName, FormInputTel,  FormButton, ErrorText } from "./ContactForm.styled";
import { Formik, ErrorMessage } from 'formik';
import *as yup from 'yup'
import {  useDispatch, useSelector } from "react-redux";
import { addContact } from "redux/operations";
import { contactsSelector } from "redux/selectors";
 
const schame = yup.object({
  name: yup.string("It should be string").required("It shouldn't be empty").max(30).trim().matches(),
  phone: yup.number("It shold be number").required().positive()
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

    const contacts = useSelector(contactsSelector)

    const dispatch=useDispatch()
    const handleSubmit = ({ name: newName, phone }, actions) => {
        if(contacts.some(({name})=>newName===name)){
            alert(`${newName} is already in contacts`)
            return
        }

        dispatch(addContact({ name: newName, phone: phone.toString() }))
        
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
                            type="number"
                            name="phone"
                        />
                        <FormError name="phone"/>
                    </FormLabelName>
                    <FormButton type='submit'>Add contact</FormButton>
                </FormContainer>
            </Formik>)
}


export default ContactForm



