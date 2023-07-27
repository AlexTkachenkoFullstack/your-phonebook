import styled from '@emotion/styled';
import Button from '@mui/material/Button';
import { IoPersonCircleSharp } from 'react-icons/io5';
import { devices } from 'constants/constants';
export const ContactListItem = styled.li`
  display: flex;
  align-items: center;
`;
export const ContactListItemInfo = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
`;
export const ContactIcon = styled(IoPersonCircleSharp)`
  width: 24px;
  height: 24px;
  color: #00005a;
`;
export const ContactListItemText = styled.p`
  font-size: 12px;
  font-weight: 600;
  color: #00005a;
  margin-right: 15px;
  margin-top: 0;
  margin-bottom: 5px;
  margin-right: auto;
  text-indent: 3px;
  font-family: 'Caveat', cursive;
  @media screen and ${devices.xs} {
    font-size: 16px;
  }
  @media screen and ${devices.md} {
    font-size: 27px;
  }
  @media screen and ${devices.lg} {
    font-size: 27px;
  }
`;
export const ButtonChangeContact = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 28px;
  background-color: #aed219;
  border-radius: 20px;
  margin-right: 5px;
  @media screen and ${devices.xs} {
    height: 28px;
    width: 60px;
  }
  @media screen and ${devices.md} {
    height: 35px;
    width: 80px;
  }
  @media screen and ${devices.lg} {
    width: 80px;
  }

  &:hover,
  &:focus {
    transform: scaleX(1.05);
    background-color: #f0d800;
    box-shadow: 4px 6px 11px rgb(4 12 129 / 93%);
  }
`;

export const ButtonDeliteContact = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 28px;
  background-color: #f47c74;
  border-radius: 20px;
  border: none;
  @media screen and ${devices.xs} {
    height: 28px;
    width: 60px;
  }
  @media screen and ${devices.md} {
    height: 35px;
    width: 80px;
  }
  @media screen and ${devices.lg} {
    width: 80px;
  }

  &:hover,
  &:focus {
    transform: scaleX(1.05);
    background-color: #f22020db;
    box-shadow: 4px 6px 11px rgb(4 12 129 / 93%);
  }
`;
export const ButtonText = styled.p`
  font-size: 10px;
  margin: 0;
  text-indent: unset;
  color: black;
  @media screen and ${devices.md} {
    font-size: 14px;
  }
  @media screen and ${devices.lg} {
    font-size: 14px;
  }
`;
