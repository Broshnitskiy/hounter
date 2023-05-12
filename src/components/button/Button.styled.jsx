import styled from 'styled-components';
import { colors } from '../../styles/colors';

export const StyledButton = styled.button`
  font-weight: 500;
  font-size: 12px;
  line-height: 22px;
  cursor: pointer;
  color: ${colors.white};
  background-color: ${colors.green};
  border: none;
  border-radius: 26px;
  padding-left: 6px;
  padding-right: 1px;
  height: 38px;

  &:hover {
    background-color: ${colors.styleColor};
  }

  @media screen and (min-width: 1200px) {
    border-radius: 32px;
    padding-left: 16px;
    padding-right: 16px;
    height: 48px;
    font-weight: 600;
    font-size: 14px;
  }
`;
