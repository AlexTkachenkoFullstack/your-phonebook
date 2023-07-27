import styled from '@emotion/styled';
import phoneBg from './/..//..//images/deskBgImg.png';
import { devices } from 'constants/constants';
export const Container = styled.div`
  position: relative;
  margin-left: auto;
  margin-right: auto;
  height: auto;
  box-shadow: 0px 0px 100px 50px #000;
  margin-top: 64px;
  @media screen and ${devices.xs} {
    width: 480px;
  }
  @media screen and ${devices.md} {
    width: 768px;
  }
  @media screen and ${devices.lg} {
    width: 1200px;
  }
`;
export const BgImg = styled.div`
  background-image: url(${phoneBg});
  height: 350px;
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;
  @media screen and ${devices.xs} {
    background-size: 480px 350px;
  }
  @media screen and ${devices.md} {
    height: 415px;
    background-size: 768px 415px;
  }
  @media screen and ${devices.lg} {
    height: 700px;
    background-size: 1200px auto;
  }
`;
export const RegistratonPageText = styled.div`
  background: rgb(229 232 238);
  backdropfilter: blur(10px);
  padding: 24px;
  font-size: 24px;
  font-family: 'Caveat', cursive;
`;
