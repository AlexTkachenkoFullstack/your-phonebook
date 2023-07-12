import styled from 'styled-components';


export const AppContainer = styled.div`
    width: 865px;
    display: flex;
    flex-direction:column;
    padding: 30px;
    font-size: 40px;
    color: #010101;
    margin-left: auto;
    margin-right: auto;
            
`

export const ErrorMessageContainer = styled.div`
    display: flex;
    height: 100vh;
    flex-direction: column;
    justify-content: center;  
    align-items: center;      
    padding: 10px;
    `


export const ErrorMessage = styled.p`
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 36px;
    `

export const ApiTitleH1 = styled.h1`
    margin:0;
    padding-bottom: 10px;
    `

export const ApiTitleH2 = styled.h2`
    margin:0;
    padding-top: 20px;
    padding-bottom: 10px;
    `