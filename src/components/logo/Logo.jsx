import React from 'react';
import { ReactComponent as LogoIcon } from '../../images/logo.svg';
import { LogoWrapperLink } from './Logo.styled';

export const Logo = () => {
  return (
    <LogoWrapperLink href="/hounter">
      <LogoIcon />
      <p>Hounter</p>
    </LogoWrapperLink>
  );
};
