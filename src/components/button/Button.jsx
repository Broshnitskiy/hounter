import React from 'react';
import { StyledButton } from './Button.styled';

export const Button = props => {
  return (
    <StyledButton
      backgroundColor={props.backgroundColor}
      textColor={props.textColor}
      fontSize={props.fontSize}
    >
      {props.children}
    </StyledButton>
  );
};
