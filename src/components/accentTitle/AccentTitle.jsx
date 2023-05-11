import React from 'react';
import { Wrapper } from './AccentTitle.styled';

export const AccentTitle = ({ direction, text }) => {
  return (
    <Wrapper direction={direction}>
      <div></div>
      <p>{text}</p>
    </Wrapper>
  );
};
