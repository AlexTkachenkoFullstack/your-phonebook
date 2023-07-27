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
  &:hover,
  &:focus {
    background-color: #76a4ff;
    scale: 1.05;
    box-shadow: 0px 0px 14px 3px #32edd7;
  }
`;

export const ErrorText = styled.div`
  font-size: 24px;
  color: red;
  position: absolute;
  bottom: 0;
  left: 0;
`;
