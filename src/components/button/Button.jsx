import React from 'react';
import { StyledButton } from './Button.styled';

export const Button = props => {
  return <StyledButton type={props.type}>{props.children}</StyledButton>;
};
