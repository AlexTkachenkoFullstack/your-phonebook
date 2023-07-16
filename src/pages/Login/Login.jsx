import { Registration } from "pages/Registration/Registration"
import { BgImg, Container, LoginPageText } from "./Login.styled"
import { LoginForm } from "components/LoginForm/LoginForm"
import { Outlet } from "react-router-dom"
export const Login = () => {
    return (<>
    
        <Container>
            <LoginForm/>
            <BgImg/>
            <LoginPageText>
                <p>Welcome to the Phonebook!</p>
                <ul>1.Registration:
                    <li>On the main application page, click on the "Registration" button.</li>
                    <li>Enter your details: username, email address, and password.</li>
                    <li>Click on the "Register" button to create an account in the Phonebook.</li>
                </ul>
                
                <ul>2.Login:
                    <li>After successful registration, return to the main page and enter your email address and password.</li>
                    <li>Click on the "Login" button to access your account.</li>
                </ul>
                 
                <ul>3.Creating Contacts:
                    <li>After logging in, you will be redirected to the page with your contacts.</li>
                    <li>Click on the "Add Contact" button to create a new contact.</li>
                    <li>Enter the necessary information about the contact, such as the contact's name and phone number.</li>
                    <li>Click on the "Save" button to add the contact to your Phonebook.</li>
                </ul>
                
                <ul>4.Searching and Filtering Contacts:
                    <li>To find a specific contact, use the search field on the contacts page.</li>
                    <li>Enter the name or other contact details for quick searching.</li>
                    <li>To filter contacts by name, use the filtering feature on the contacts page.</li>
                </ul>
                
                <ul>5.Deleting Contacts:
                    <li>If you want to delete a contact, locate it on the contacts page.</li>
                    <li>Click on the "Delete" button next to the respective contact.</li>
                    <li>Confirm the deletion if prompted.</li>      
                </ul>
                
                <ul>6.Personal Page:
                    <li>You can access your personal page at any time using your account credentials.</li>
                    <li>On this page, you will find all your saved contacts, accessible only to you.</li>
                </ul>
                
                <p>Now that you have registered, logged in, and created your contacts, you can conveniently manage your Phonebook.
                    Remember that your contacts will be stored on the server, and you can access them, make changes,
                    and delete unnecessary contacts whenever you need to.
                </p>
        </LoginPageText>

        </Container>
        
        </>
    )
}