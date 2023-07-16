import styled from "@emotion/styled"
import { TbArrowBigDown } from "react-icons/tb";
export const Container = styled.div`
position: relative;
   margin-left: auto;
  margin-right: auto;
  width: 768px;
  height: 100%;
  box-shadow: 0px 0px 100px 50px #000;
  margin-top: 45px;

`
export const TextContainer = styled.div`
background-color: rgb(229 232 238);
 backdrop-filter: blur(10px);
  padding: 24px;
  padding-top: 36px;
  width:100%;
  height:100%;
`

export const ArrowDown = styled(TbArrowBigDown)`
    height: 108px;
    width: 108px;
    color: #0070ff;
    fill: #00e5ff;
    margin-top: -34px;
    margin-bottom: -39px;
    z-index: 2;
    `

export const ImageContainer = styled.div`
margin-left:auto;
margin-right:auto;
display:flex;
flex-direction:column;
align-items: center;
    justify-content: center;
    margin-bottom: 20px;
`
export const HomeH2 = styled.h2`
font-family: 'Caveat', cursive;
font-weight:700;
text-shadow: 2px 2px 4px #000000;
`
export const HomeListText = styled.ul`
font-family: 'Caveat', cursive;
font-weight:600;
font-size: 24px;
line-height:1.5;
`

export const HomeText = styled.p`
font-family: 'Caveat', cursive;
font-weight:600;
font-size: 24px;
line-height:1.5;
`