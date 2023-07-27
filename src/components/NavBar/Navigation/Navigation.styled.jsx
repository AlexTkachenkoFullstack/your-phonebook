import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import { devices } from 'constants/constants';
import { GiHamburgerMenu } from 'react-icons/gi';

export const Link = styled(NavLink)`
  color: #1976d2;
  font-size: 18px;
  text-decoration: none;
  font-family: 'Bagel Fat One', cursive;
  @media screen and ${devices.md} {
    color: white;
    font-size: 24px;
  }
  @media screen and ${devices.lg} {
    font-size: 28px;
  }

  &:hover,
  &:focus {
    color: #7af7c0;
  }
  &:active {
    color: #e8d90b;
  }
`;

export const LinkHome = styled(Link)`
  color: white;
  margin-right: auto;
  scale: 1.1;
`;

export const LinkHomeAuth = styled(Link)`
  color: white;
  display: none;
  @media screen and ${devices.md} {
    display: block;
  }
`;

export const LinkContacts = styled(Link)`
  color: white;
  display: none;
  @media screen and ${devices.md} {
    display: block;
  }
`;

export const BurgerContainer = styled.div`
  margin-right: auto;
  display: block;
  @media screen and ${devices.md} {
    display: none;
  }
`;

export const LinkContainer = styled.div`
  display: none;
  @media screen and ${devices.md} {
    display: block;
  }
`;

export const HamburgerIcon = styled(GiHamburgerMenu)``;
