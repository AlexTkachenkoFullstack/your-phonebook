import styled from '@emotion/styled';
import AppBar from '@mui/material/AppBar';
import { devices } from 'constants/constants';

export const AppBarComp = styled(AppBar)`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  left: 0;
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
