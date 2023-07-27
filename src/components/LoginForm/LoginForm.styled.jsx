import styled from '@emotion/styled';
import { devices } from 'constants/constants';

export const Form = styled.form`
  width: 90%;
  background: rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  position: absolute;
  right: 10px;
  top: 40px;
  border: none;
  border-radius: 20px;
  border-image: linear-gradient(90deg, #00c9ff 0%, #92fe9d 100%) 20% / 1 / 0
    stretch;
  padding: 10px;
  @media screen and ${devices.xs} and (max-width: 767px) {
    width: 244px;
    right: 50%;
    transform: translateX(50%);
  }
  @media screen and ${devices.md} {
    width: 300px;
    right: 24px;
    top: 70px;
  }
  @media screen and ${devices.lg} {
    width: 500px;
    right: 50px;
    top: 150px;
  }
`;

export const InputContainer = styled.div`
  margin-bottom: 12px;
`;
export const Label = styled.label`
  font-family: 'Bagel Fat One', cursive;
  letter-spacing: 2px;
  font-size: 18px;
  color: #315fe3;
  @media screen and ${devices.md} {
    font-size: 24px;
  }
  @media screen and ${devices.lg} {
    font-size: 28px;
  }
`;
export const Input = styled.input`
  font-family: 'Caveat', cursive;
  letter-spacing: 2px;
  padding-top: 2px;
  padding-bottom: 2px;
  font-size: 18px;
  @media screen and ${devices.md} {
    font-size: 24px;
  }
  @media screen and ${devices.lg} {
    font-size: 28px;
  }
`;

export const EmailHelpText = styled.div`
  font-family: 'Caveat', cursive;
  font-size: 16px;
`;

export const LogButton = styled.button`
  font-family: 'Bagel Fat One', cursive;
  letter-spacing: 1px;
  width: 100px;
  font-size: 18px;
  @media screen and ${devices.md} {
    width: 120px;
    font-size: 22px;
  }
  @media screen and ${devices.lg} {
    width: 150px;
    font-size: 28px;
  }
`;
