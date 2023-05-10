import styled from 'styled-components';

export const StyledButton = styled.button`
  background-color: ${props => props.backgroundColor};
  color: ${props => props.textColor};
  font-size: ${props => props.fontSize}px;
`;
