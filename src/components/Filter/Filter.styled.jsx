import styled from '@emotion/styled';
import { devices } from 'constants/constants';

export const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const IsLoading = styled.p`
  font-size: 20px;
  margin-bottom: 10px;
  padding-top: 0;
  padding-left: 25px;
  text-indent: 0;
  margin-top: 0;
  font-family: 'Bagel Fat One', cursive;

  @media screen and ${devices.md} {
    font-size: 32px;
    padding-left: 112px;
  }
  @media screen and ${devices.lg} {
    font-size: 40px;
    padding-left: 175px;
  }
`;

export const FilterLable = styled.label`
  font-size: 20px;
  margin-bottom: 10px;
  padding-left: 25px;
  font-family: 'Bagel Fat One', cursive;
  @media screen and ${devices.md} {
    font-size: 32px;
    padding-left: 112px;
  }
  @media screen and ${devices.lg} {
    font-size: 40px;
    padding-left: 175px;
  }
`;

export const FilterInput = styled.input`
  width: auto;
  height: 40px;
  border-color: #b3b90d;
  font-size: 32px;
  border-radius: 8px;
  padding-left: 15px;
  margin-left: 20px;
  cursor: pointer;
  outline: none;
  opacity: 0.8;
  font-size: 16px;
  font-family: 'Caveat', cursive;
  @media screen and ${devices.xs} {
    font-size: 16px;
    width: 395px;
  }

  @media screen and ${devices.md} {
    width: 500px;
    margin-left: 112px;
    font-size: 18px;
  }
  @media screen and ${devices.lg} {
    width: 575px;
    margin-left: 170px;
    font-size: 20px;
  }

  &:hover,
  &:hover {
    animation: pulsare 2s ease-in-out;
    border-color: #9bf7fa;
    opacity: 1;
  }

  @keyframes pulsare {
    0% {
      box-shadow: 0 0 10px #5ddcff, 0 0 20px #4e00c2;
      background-color: #9bf7fa;
    }
  }
`;
