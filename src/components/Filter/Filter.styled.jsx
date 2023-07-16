import styled from '@emotion/styled';

export const FilterContainer = styled.div`
display:flex;
flex-direction:column;
`

export const IsLoading = styled.p`
font-size:32px;
margin-bottom: 10px;
padding-top:0;
padding-left: 112px;
text-indent: 0;
margin-top:0;
font-family: 'Bagel Fat One', cursive;
`

export const FilterLable = styled.label`
font-size:32px;
margin-bottom: 10px;
padding-left: 112px;
font-family: 'Bagel Fat One', cursive;
`

export const FilterInput = styled.input`
width: 450px;
height: 40px;
border-color: #b3b90d;
font-size: 32px;
border-radius: 8px;
padding-left: 15px;
margin-left: 112px;
cursor:pointer;
outline: none;
opacity:0.8;
font-family: 'Caveat', cursive;

&:hover, &:hover{
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
