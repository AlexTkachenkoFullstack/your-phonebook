import styled from "@emotion/styled";
import phoneBg from './/..//..//images/deskBgImg.png'
export const Container = styled.div`
  position: relative;
   margin-left: auto;
  margin-right: auto; 
  width: 768px;
  height: 100%;
  box-shadow: 0px 0px 100px 50px #000;
  margin-top: 64px;
  

`
export const BgImg = styled.div`
background-image: url(${phoneBg});
  height: 414px;
  background-size: 768px 415px;
  background-position: top;
  background-repeat: no-repeat;
`
export const LoginPageText = styled.div`
background: rgb(229 232 238); 
backdropFilter: blur(10px); 
padding:24px;
font-size:24px;
font-family: 'Caveat', cursive;
`