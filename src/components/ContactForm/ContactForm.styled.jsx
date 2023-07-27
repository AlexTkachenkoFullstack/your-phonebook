// 1-ЫЙ ВАРИАНТ С БИБЛИОТЕКАМИ FORMIK И YUP

import styled from '@emotion/styled';
import { Form, Field } from 'formik';
import { devices } from 'constants/constants';

export const FormContainer = styled(Form)`
  display: flex;
  background-color: #d5f7d7;
  flex-direction: column;
  background: rgba(0, 0, 0, 0.1);
  border: none;
  border-radius: 20px;
  width: 350px;
  height: auto;
  padding: 20px;
  opacity: 0.9;
  margin-left: auto;
  margin-right: auto;
  @media screen and ${devices.xs} {
    width: 400px;
  }
  @media screen and ${devices.md} {
    width: 500px;
  }
  @media screen and ${devices.lg} {
    width: 800px;
  }
`;
export const FormLabelName = styled.label`
  font-size: 30px;
  font-weight: 400;
  margin-bottom: 15px;
  position: relative;
  font-family: 'Bagel Fat One', cursive;
`;

export const FormInputName = styled(Field)`
  border: 1px solid #b3b90d;
  padding: 5px;
  margin-bottom: 30px;
  width: 100%;
  height: 40px;
  font-size: 28px;
  border-radius: 10px;
  font-family: 'Caveat', cursive;
  outline: none;
  @media screen and ${devices.xs} {
    width: 360px;
  }
  @media screen and ${devices.md} {
    width: 458px;
  }
  @media screen and ${devices.lg} {
    width: 760px;
  }

  &:hover,
  &:focus {
    border-color: #00b1ff;
    background-color: #9efeff;
  }
`;

export const FormInputTel = styled(Field)`
  border: 1px solid #b3b90d;
  padding: 5px;
  margin-bottom: 30px;
  width: 100%;
  height: 40px;
  font-size: 28px;
  border-radius: 10px;
  font-family: 'Caveat', cursive;
  @media screen and ${devices.xs} {
    width: 360px;
  }
  @media screen and ${devices.md} {
    width: 458px;
  }
  @media screen and ${devices.lg} {
    width: 760px;
  }

  &:hover,
  &:focus {
    border-color: #00b1ff;
    background-color: #9efeff;
    outline: none;
  }
`;
export const FormButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 400;
  width: 130px;
  height: 50px;
  font-size: 16px;
  padding-top: 5px;
  padding-bottom: 5px;
  border-radius: 8px;
  cursor: pointer;
  position: relative;
  z-index: 0;
  @media screen and ${devices.xs} {
    font-size: 16px;
  }
  @media screen and ${devices.md} {
    width: 150px;
    height: 50px;
    font-size: 20px;
  }
  @media screen and ${devices.lg} {
    font-size: 20px;
  }

  color: #111;
  outline: none;
  font-family: 'Bagel Fat One', cursive;

  &::before {
    content: '';
    background: linear-gradient(
      45deg,
      #ff0000,
      #ff7300,
      #fffb00,
      #48ff00,
      #00ffd5,
      #002bff,
      #7a00ff,
      #ff00c8,
      #ff0000
    );
    position: absolute;
    top: -2px;
    left: -2px;
    background-size: 400%;
    z-index: -1;
    filter: blur(5px);
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    opacity: 0;
    transition: opacity 0.3s easy-in-out;
    border-redius: 10px;
    animation: glow 15s linear infinite;
  }

  &:hover::before {
    opacity: 1;
  }

  &::after {
    z-index: -1;
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: #fff;
    left: 0;
    top: 0;
    border-radius: 10px;
  }

  @keyframes glow {
    0% {
      background-position: 0 0;
    }
    50% {
      background-position: 400% 0;
    }
    100% {
      background-position: 0 0;
    }
  }
`;

export const ErrorText = styled.div`
  font-size: 24px;
  color: red;
  position: absolute;
  bottom: 0;
  left: 0;
`;
