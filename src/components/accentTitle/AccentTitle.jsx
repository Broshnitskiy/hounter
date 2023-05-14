import React from 'react';
import { Wrapper } from './AccentTitle.styled';

export const AccentTitle = ({ direction, children }) => {
  return (
    <Wrapper direction={direction}>
      <div></div>
      <p>{children}</p>
    </Wrapper>
  );
};
