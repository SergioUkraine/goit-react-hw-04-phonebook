import styled from '@emotion/styled';
import { colors } from '../../variables';

const { common, button, elements } = colors;

export const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Link = styled.a`
  margin: 0;
  padding: 0;
  height: 50px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  color: ${common.primary};
  text-decoration: none;

  &:hover > span,
  &:active > span,
  &:focus > span {
    color: ${elements.telephoneHover};
  }
`;

export const Name = styled.p`
  margin: 0;
  padding: 0;
  font-size: 20px;
`;

export const Phone = styled.span`
  margin: 0;
  padding: 0;
  font-size: 18px;
`;

export const ButtonDelete = styled.button`
  margin-left: 50px;
  width: 100px;
  height: 30px;

  font-weight: 600;
  text-transform: uppercase;
  background-color: ${button.color};
  border-color: transparent;
  border-radius: 4px;
  &:hover,
  &:active,
  &:focus {
    background-color: ${button.deleteHover};
    color: ${button.deleteHoverText};
  }
`;
