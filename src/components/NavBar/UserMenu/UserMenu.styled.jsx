import styled from "@emotion/styled";

export const UserName = styled.p`
font-size: 26px;
margin:0;
margin-right: 35px;
color: #ffff26;
font-family: 'Caveat', cursive;
font-weight: 600;
`
export const LogOutButton = styled.button`
background-color: #8f9cdc;
width: 90px;
height: 30px;
font-size: 26px;
display: flex;
justify-content: center;
align-items: center;
border-radius:20px;
font-family: 'Caveat', cursive;

&:hover, &:focus{
  background-color: #76a4ff;
    scale: 1.05;
    box-shadow: 0px 0px 14px 3px #32edd7;
}
`