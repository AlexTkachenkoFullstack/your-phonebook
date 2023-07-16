import styled from '@emotion/styled';
import Button from '@mui/material/Button';
import { IoPersonCircleSharp } from "react-icons/io5"
export const ContactListItem = styled.li`
display:flex;
align-items: center;
`
export const ContactListItemInfo = styled.div`
display:flex;
align-items: center;
width: 100%;
justify-content: space-between
`
export const ContactIcon = styled(IoPersonCircleSharp)`
width:24px;
height:24px;
color:#00005a;
`
export const ContactListItemText = styled.p`
font-size:27px;
font-weight: 600;
color:#00005a;
margin-right: 15px;
margin-top:0;
margin-bottom:5px;
margin-right:auto;
text-indent: 3px;
font-family: 'Caveat', cursive;
`
export const ButtonChangeContact = styled(Button)`
display:flex;
align-items: center;
justify-content: center;
width: 90px;
height: 35px;
background-color:#aed219;
border-radius: 20px;
margin-right: 5px;

&:hover, &:focus{

    transform: scaleX(1.05);
    background-color: #f0d800;
    box-shadow: 4px 6px 11px rgb(4 12 129 / 93%);
}
`


export const ButtonDeliteContact = styled.button`
display:flex;
align-items: center;
justify-content: center;
width: 80px;
height: 35px;
background-color:#f47c74;
    border-radius: 20px;
    border: none;

&:hover, &:focus{
    transform: scaleX(1.05);
    background-color: #f22020db;
    box-shadow: 4px 6px 11px rgb(4 12 129 / 93%);
}
`
export const ButtonText = styled.p`
font-size: 18px;
margin:0;
text-indent:unset;
color:black;
`