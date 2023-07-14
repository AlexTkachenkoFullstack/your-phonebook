import styled from '@emotion/styled';
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

export const ContactListItemText = styled.p`
font-size20px;
margin-right: 15px;
margin-top:0;
margin-bottom:5px;
`
export const ButtonDeliteContact = styled.button`
display:flex;
align-items: center;
justify-content: center;
width: 100px;
height: 35px;
font-size: 24px;
opacity:0.8;

&:hover, &:focus{

    transform: scaleX(1.05);
    background-color: #faa5a5;
    box-shadow: 4px 2px 7px rgba(0, 0, 0, 0.4);
}


`