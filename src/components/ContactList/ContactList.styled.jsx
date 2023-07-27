import styled from '@emotion/styled';
import { devices } from 'constants/constants';

export const ContactListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  width: auto;
  margin-top: 10px;
  padding-left: 0;
  margin-right: auto;
  margin-left: auto;
  @media screen and ${devices.xs} {
    width: 445px;
  }
  @media screen and ${devices.md} {
    width: 680px;
  }
  @media screen and ${devices.lg} {
    width: 800px;
  }
`;
export const NoContactsText = styled.div`
  font-size: 37px;
  font-family: 'Caveat', cursive;
`;
