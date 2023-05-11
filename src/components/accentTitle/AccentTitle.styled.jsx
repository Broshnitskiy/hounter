import styled from 'styled-components';
import { colors } from '../../styles/colors';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: ${props => props.direction || 'row'};
  p {
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    color: ${colors.styleColor};
  }

  div {
    width: 32px;
    height: 1px;
    background-color: ${colors.styleColor};
    margin-right: ${props => (props?.direction === 'row' ? '8' : '')}px;
    margin-bottom: ${props => (props?.direction === 'column' ? '8' : '')}px;
  }
`;
