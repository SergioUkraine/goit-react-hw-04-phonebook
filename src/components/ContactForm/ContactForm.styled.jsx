import styled from '@emotion/styled';
import { colors } from '../variables';

const { common, background, button } = colors;

export const Form = styled.form`
  margin: 0;
  height: 150px;
  padding: 12px 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border: solid black 2px;
  border-radius: 4px;
  background-color: ${background.secondary};
`;

export const FormLabel = styled.label`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 20px;
  &:hover > input {
    outline-color: ${common.accent};
    border-color: ${common.accent};
  }
`;

export const FormInput = styled.input`
  width: 300px;
  height: 24px;
  border-radius: 4px;
  &:focus,
  &:active,
  &:hover {
    outline-color: ${common.accent};
  }
`;

export const FormButton = styled.button`
  align-self: center;
  width: 270px;
  height: 32px;
  border-radius: 4px;
  border-color: transparent;
  text-transform: uppercase;
  font-weight: 700;
  background-color: ${button.color};
  &:hover {
    background-color: ${common.accent};
  }
`;
