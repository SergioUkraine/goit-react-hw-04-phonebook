import styled from '@emotion/styled';
import { colors } from './variables';

const { background } = colors;

export const Container = styled.div`
  box-sizing: border-box;
  margin: 0;
  padding: 20px;
  width: 500px;
  border: solid darkblue 2px;
  border-radius: 8px;
  background-color: ${background.primary};
`;

export const Title = styled.h1`
  margin: 0;
  margin-bottom: 12px;
  padding: 0;
`;

export const Header = styled.h2`
  margin: 0;
  margin-top: 12px;
  padding: 0;
`;

export const MeassageEmpty = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 160px;
  margin: 0;
  font-size: 24px;
  font-weight: 700;
  font-size: 24px;
`;

export const MeassageNotFound = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90px;
  margin: 0;
  font-size: 32px;
  font-weight: 700;
`;
