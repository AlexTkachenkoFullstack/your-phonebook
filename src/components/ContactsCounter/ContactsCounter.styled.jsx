import styled from '@emotion/styled';
import { devices } from 'constants/constants';

export const CounterContactsContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
`;
export const CounterTextTitle = styled.p`
  margin: 0;
  font-size: 28px;
  padding-left: 0px;
  font-family: 'Caveat', cursive;
  @media screen and ${devices.md} {
    padding-left: 90px;
    font-size: 36px;
  }
  @media screen and ${devices.lg} {
    font-size: 40px;
    padding-left: 150px;
  }
`;

export const CounterText = styled.p`
  margin: 0;
  font-weight: 700;
  font-size: 28px;
  font-family: 'Caveat', cursive;
  text-indent: 5px;
  @media screen and ${devices.md} {
    font-size: 36px;
  }
  @media screen and ${devices.lg} {
    font-size: 40px;
  }
`;
