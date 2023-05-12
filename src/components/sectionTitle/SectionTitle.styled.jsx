import styled from 'styled-components';
import { colors } from '../../styles/colors';

export const TitleH2 = styled.h2`
  font-weight: 600;
  font-size: 24px;
  line-height: 30px;
  text-align: center;
  color: ${colors.textHeaderColor};

  @media screen and (min-width: 768px) {
    font-weight: 600;
    font-size: 32px;
    line-height: 40px;
  }
`;
