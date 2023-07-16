import styled from "@emotion/styled";

export const ModalTitle = styled.h3`
font-size: 36px;
font-family: 'Dancing Script', cursive;
`

export const ModalForm = styled.form`
    display: flex;
    row-gap: 5px;
    flex-direction: column;
`

export const ModalInputContainer = styled.div`
display: flex;
flex-direction: column;
margin-bottom: 10px;
`

export const ModalLabel = styled.label`
font-size: 24px;
font-weight: 700;
margin-bottom: 5px;
font-family: 'Dancing Script', cursive;
`

export const ModalInput = styled.input`
font-size: 26px;
font-family: 'Caveat', cursive;
border-radius: 20px;
outline:none;
border: 1px solid #b3b90d;
padding-left:10px;

&:hover, &:focus{
    border-color: #00b1ff;
    background-color: #9efeff;
}
`

export const ModalButton = styled.button`
font-family: 'Bagel Fat One', cursive;
width: 70px;
margin-left: auto;
margin-right: auto;
border-radius: 15px;
display: flex;
justify-content: center;
align-items: center;
font-size: 20px;
letter-spacing: 1px;
background-color:#e7e257;
outline:none;
border: 2px solid #33b5cd91;

&:hover, &:focus{
    background-color:#f3eb19;

}
`