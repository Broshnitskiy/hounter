import styled from 'styled-components';
import { colors } from '../../styles/colors';

export const LogoWrapperLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${colors.textHeaderColor};

  p {
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
    margin-left: 12px;
  }

  &:hover,
  &:focus {
    color: ${colors.lightGrey};
  }
`;
