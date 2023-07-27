import styled from '@emotion/styled';
import { devices } from 'constants/constants';

export const UserName = styled.p`
  font-size: 16px;
  margin: 0;
  margin-right: 15px;
  color: #ffff26;
  font-family: 'Caveat', cursive;
  font-weight: 600;
  @media screen and ${devices.md} {
    margin-right: 35px;
    font-size: 26px;
  }
  @media screen and ${devices.lg} {
    font-size: 32px;
  }
`;
export const LogOutButton = styled.button`
  background-color: #8f9cdc;
  width: 75px;
  height: 30px;
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  font-family: 'Caveat', cursive;
  @media screen and ${devices.md} {
    width: 90px;
    font-size: 26px;
  }
  @media screen and ${devices.lg} {
    width: 110px;
    font-size: 32px;
  }

  &:hover,
  &:focus {
    background-color: #76a4ff;
    scale: 1.05;
    box-shadow: 0px 0px 14px 3px #32edd7;
  }
`;
