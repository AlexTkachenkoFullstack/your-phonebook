import styled from '@emotion/styled';
import ContactsBg from './/..//..//images/5143237.jpg';
import { devices } from 'constants/constants';
export const ApiTitleH1 = styled.h1`
  margin: 0;
  padding-bottom: 10px;
  text-align: center;
  font-family: 'Bagel Fat One', cursive;
`;

export const ApiTitleH2 = styled.h2`
  margin: 0;
  padding-top: 20px;
  padding-bottom: 10px;
  font-family: 'Bagel Fat One', cursive;
`;
export const ContactsContainer = styled.div`
  width: auto;
  margin-left: auto;
  margin-right: auto;
  min-height: 100vh;
  height: 100%;
  background-image: url(${ContactsBg});
  background-size: cover;
  background-position: center;
  background-size: 100% auto;
  background-repeat: repeat;
  background-attachment: fixed;
  padding: 24px;
  padding-top: 70px;
  box-shadow: 0px 0px 100px 50px #000;

  @media screen and ${devices.xs} {
    width: 480px;
    background-size: auto 480px;
  }
  @media screen and ${devices.md} {
    width: 768px;
    background-size: 768px;
  }
  @media screen and ${devices.lg} {
    width: 1200px;
    background-size: 1200px;
  }
`;
