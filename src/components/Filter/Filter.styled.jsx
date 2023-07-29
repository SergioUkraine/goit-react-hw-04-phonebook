import styled from '@emotion/styled';
import { colors } from '../variables';

const { common } = colors;

export const FilterContainer = styled.div`
  margin: 0;
  padding: 20px;
`;

export const Label = styled.label`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  &:hover > input {
    outline-color: ${common.accent};
    border-color: ${common.accent};
  }
`;

export const Input = styled.input`
  height: 24px;
  border-radius: 4px;
  width: 200px;
  &:focus,
  &:active,
  &:hover {
    outline-color: ${common.accent};
  }
`;
