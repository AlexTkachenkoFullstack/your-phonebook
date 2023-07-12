// 1-ЫЙ ВАРИАНТ С БИБЛИОТЕКАМИ FORMIK И YUP

import styled from 'styled-components';
import {  Form, Field } from 'formik';

export const FormContainer = styled(Form )`
display: flex;
background-color: #d5f7d7;
flex-direction: column;
border: 1px solid black;
border-radius: 10px;
width: 500px;
height: auto;
padding: 20px;
opacity: 0.9;
`
export const FormLabelName = styled.label`
font-size: 30px;
font-weight: 600;
margin-bottom: 15px;
position:relative;
`

export const FormInputName = styled(Field)`
border: 1px solid black;
padding: 5px;
margin-bottom: 30px;
width: 490px;
height: 30px;
font-size: 28px;
border-radius: 10px;

&:hover, &:focus{
     background-color:#e9ebf0;
}
`

export const FormInputTel = styled(Field)`
border: 1px solid black;
padding: 5px;
margin-bottom: 30px;
width: 490px;
height: 30px;
font-size: 28px;
border-radius: 10px;

&:hover, &:focus{
     background-color:#e9ebf0;
}
`
export const FormButton = styled.button`
display: flex;
justify-content: center;
align-items: center;
width: 150px;
height: 50px;
font-size: 24px;
padding-top: 5px;
padding-bottom: 5px;
border-radius: 8px;
cursor:pointer;
position:relative;
z-index:0;

color: #111;
outline: none;


&::before{
    content:'';
    background: linear-gradient(
        45deg,
        #ff0000,
        #ff7300,
        #fffb00,
        #48ff00,
        #00ffd5,
        #002bff,
        #7a00ff,
        #ff00c8,
        #ff0000
    );
    position: absolute;
    top: -2px;
    left: -2px;
    background-size: 400%;
    z-index: -1;
    filter: blur(5px);
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    opacity: 0;
    transition: opacity 0.3s easy-in-out;
    border-redius: 10px;
    animation: glow 15s linear infinite;
}

&:hover::before{
    opacity: 1;
}

&::after{
    z-index: -1;
    content:'';
    position: absolute;
    width: 100%;
    height: 100%;
    background: #fff;
    left: 0;
    top: 0;
    border-radius: 10px;
    
}

@keyFrames glow{
    0% {
        background-position: 0 0;
    }
    50% {
        background-position: 400% 0;
    }
    100% {
        background-position: 0 0;
    }
}
`

export const ErrorText = styled.div`
font-size: 24px;
color:red;
position: absolute;
bottom:0;
left:0;
`



// 2-ОЙ ВАРИАНТ БЕЗ ИСПОЛЬЗОВАНИЯ БИБЛИОТЕК FORMIK И YUP

// import styled from 'styled-components';

// export const FormContainer = styled.form`
// display: flex;
// background-color: #d5f7d7;
// flex-direction: column;
// border: 1px solid black;
// border-radius: 10px;
// width: 500px;
// height: auto;
// padding: 20px;
// `
// export const FormLabelName = styled.label`
// font-size: 30px;
// font-weight: 600;
// margin-bottom: 15px;
// `

// export const FormInputName = styled.input`
// border: 1px solid black;
// padding: 5px;
// margin-bottom: 30px;
// width: 490px;
// height: 30px;
// font-size: 28px;
// border-radius: 10px;

// &:hover, &:focus{
//      background-color:#e9ebf0;
// }
// `

// export const FormInputTel = styled.input`
// border: 1px solid black;
// padding: 5px;
// margin-bottom: 30px;
// width: 490px;
// height: 30px;
// font-size: 28px;
// border-radius: 10px;

// &:hover, &:focus{
//      background-color:#e9ebf0;
// }
// `
// export const FormButton = styled.button`
// display: flex;
// justify-content: center;
// align-items: center;
// width: 150px;
// height: 50px;
// font-size: 24px;
// padding-top: 5px;
// padding-bottom: 5px;
// border-radius: 8px;
// cursor:pointer;
// position:relative;
// z-index:0;

// color: #111;
// outline: none;


// &::before{
//     content:'';
//     background: linear-gradient(
//         45deg,
//         #ff0000,
//         #ff7300,
//         #fffb00,
//         #48ff00,
//         #00ffd5,
//         #002bff,
//         #7a00ff,
//         #ff00c8,
//         #ff0000
//     );
//     position: absolute;
//     top: -2px;
//     left: -2px;
//     background-size: 400%;
//     z-index: -1;
//     filter: blur(5px);
//     width: calc(100% + 4px);
//     height: calc(100% + 4px);
//     opacity: 0;
//     transition: opacity 0.3s easy-in-out;
//     border-redius: 10px;
//     animation: glow 15s linear infinite;
// }

// &:hover::before{
//     opacity: 1;
// }

// &::after{
//     z-index: -1;
//     content:'';
//     position: absolute;
//     width: 100%;
//     height: 100%;
//     background: #fff;
//     left: 0;
//     top: 0;
//     border-radius: 10px;
    
// }

// @keyFrames glow{
//     0% {
//         background-position: 0 0;
//     }
//     50% {
//         background-position: 400% 0;
//     }
//     100% {
//         background-position: 0 0;
//     }
// }
// `