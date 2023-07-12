import styled from 'styled-components';

export const FilterContainer = styled.div`
display:flex;
flex-direction:column;
`

export const IsLoading = styled.p`
font-size:45px;
margin-bottom: 10px;
padding-top:0;
margin-top:0;
`

export const FilterLable = styled.label`
font-size:45px;
margin-bottom: 10px;
`

export const FilterInput = styled.input`
width: 450px;
height: 40px;
font-size: 32px;
border-radius: 8px;
padding-left: 15px;
cursor:pointer;
opacity:0.8;

&:hover{
    background-color: #fff;
    animation: pulsare 2s ease-in-out;
    border-color:#9bf7fa;
    opacity:1;
}

@keyframes pulsare {
    0% {
        box-shadow: 0 0 10px #5ddcff,
            0 0 20px #4e00c2;
            background-color: #9bf7fa;
    }
}

`
