import styled from "@emotion/styled";

export const UserName = styled.p`
font-size: 24px;
margin:0;
margin-right: 35px;
color: #ffff26;
`
export const LogOutButton = styled.button`
background-color: #8f9cdc;
width: 90px;
height: 30px;
font-size: 20px;
display: flex;
justify-content: center;
align-items: center;
border-radius:20px;


&:hover, &:focus{
  background-color: #76a4ff;
    scale: 1.05;
    box-shadow: 0px 0px 14px 3px #32edd7;
}
`