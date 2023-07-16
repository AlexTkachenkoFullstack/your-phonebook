import styled from "@emotion/styled";

export const Form = styled.form`
    width: 300px;
    background: rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(10px); 
    position:absolute;
    right:24px;
    top:25px;
    border:none;
    border-radius:20px;
    border-image: linear-gradient(90deg, #00C9FF 0%, #92FE9D 100%) 20% / 1 / 0 stretch;
    padding:10px;
`

export const InputContainer = styled.div`
margin-bottom:12px;
`
export const Label = styled.label`
font-family: 'Bagel Fat One', cursive;
letter-spacing: 2px;
font-size:20px;
color: #315fe3;
`
export const Input = styled.input`
font-family: 'Caveat', cursive;
letter-spacing: 2px;
padding-top:2px;
padding-bottom:2px;
font-size:20px;
`

export const EmailHelpText = styled.div`
font-family: 'Caveat', cursive;
font-size:16px;
`

export const RegButton = styled.button`
font-family: 'Bagel Fat One', cursive;
letter-spacing: 1px;
`