import styled from '@emotion/styled';
import { TbArrowBigDown } from 'react-icons/tb';
import { devices } from 'constants/constants';
export const Container = styled.div`
  position: relative;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  height: 100%;
  box-shadow: 0px 0px 100px 50px #000;
  margin-top: 45px;
  @media screen and ${devices.xs} {
    width: 426px;
  }
  @media screen and ${devices.md} {
    width: 768px;
  }
  @media screen and ${devices.lg} {
    width: 1200px;
  }
`;
export const TextContainer = styled.div`
  background-color: rgb(229 232 238);
  backdrop-filter: blur(10px);
  padding: 18px;
  padding-top: 36px;
  width: 100%;
  height: 100%;
  @media screen and ${devices.md} {
    padding: 24px;
  }
  @media screen and ${devices.lg} {
    padding: 34px;
  }
`;

export const ArrowDown = styled(TbArrowBigDown)`
  height: 68px;
  width: 68px;
  color: #0070ff;
  fill: #00e5ff;
  margin-top: -18px;
  margin-bottom: -21px;
  z-index: 2;
  @media screen and ${devices.md} {
    height: 108px;
    width: 108px;
    margin-top: -34px;
    margin-bottom: -39px;
  }
  @media screen and ${devices.lg} {
    height: 148px;
    width: 148px;
  }
`;

export const ImagesContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  @media screen and ${devices.xs} {
    width: 390px;
  }
  @media screen and ${devices.md} {
    width: 720px;
  }
  @media screen and ${devices.lg} {
    width: 1120px;
  }
`;
export const HomeImageOldPhones = styled.img`
  width: 100%;
  height: 120px;
  @media screen and ${devices.md} {
    height: 270px;
  }
  @media screen and ${devices.lg} {
    height: 400px;
  }
`;
export const HomeImageSmartphone = styled.img`
  width: 100%;
  height: 218px;
  @media screen and ${devices.md} {
    height: 455px;
  }
  @media screen and ${devices.lg} {
    height: 600px;
  }
`;

export const HomeH2 = styled.h2`
  font-family: 'Caveat', cursive;
  font-size: 24px;
  font-weight: 700;
  text-shadow: 2px 2px 4px #000000;
  @media screen and ${devices.md} {
    font-size: 36px;
  }
  @media screen and ${devices.lg} {
    font-size: 44px;
  }
`;

export const HomeListText = styled.ul`
  font-family: 'Caveat', cursive;
  font-weight: 600;
  font-size: 16px;
  line-height: 1.3;
  @media screen and ${devices.md} {
    font-size: 24px;
    line-height: 1.5;
  }
`;

export const HomeText = styled.p`
  font-family: 'Caveat', cursive;
  font-weight: 600;
  font-size: 16px;
  line-height: 1.3;
  @media screen and ${devices.md} {
    font-size: 24px;
    line-height: 1.5;
  }
`;
