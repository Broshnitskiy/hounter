import styled from 'styled-components';

export const StyledButton = styled.button`
  background-color: ${props => props.backgroundColor || 'white'};
  color: ${props => props.textColor || 'white'};
  font-size: ${props => props.fontSize || 'white'}px;
  border-radius: 50%;
  border-color: ${props => props.textColor || 'white'};
  padding: ${props => props.padding || 'white'};
`;
