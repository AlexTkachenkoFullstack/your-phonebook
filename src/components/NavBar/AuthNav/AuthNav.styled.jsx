import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import { devices } from 'constants/constants';

export const Link = styled(NavLink)`
  color: white;
  font-size: 18px;
  text-decoration: none;
  letter-spacing: 1px;
  font-family: 'Bagel Fat One', cursive;
  @media screen and ${devices.md} {
    font-size: 24px;
  }
  @media screen and ${devices.lg} {
    font-size: 28px;
  }

  &:hover,
  &:focus {
    color: #7af7c0;
    scale: 1.1;
  }
  &:active {
    color: #e8d90b;
  }
`;
