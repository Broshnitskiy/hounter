import React, { useState } from 'react';
import { Logo } from '../logo/Logo';
import { Container } from '../container/Container';
import { IoIosArrowDown } from 'react-icons/io';
import {
  HeaderStyled,
  LinkNav,
  ButtonSign,
  NavigateHeader,
  LinkList,
  LogoWrapper,
  ButtonProperty,
  PropertyList,
} from './Header.styled';
export const Header = () => {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };
  return (
    <HeaderStyled>
      <Container>
        <NavigateHeader>
          <LogoWrapper>
            <Logo />
          </LogoWrapper>

          <LinkList>
            <li>
              <LinkNav href="#">About Us</LinkNav>
            </li>
            <li>
              <LinkNav href="#">Article</LinkNav>
            </li>
            <li onMouseLeave={handleMouseLeave}>
              <ButtonProperty
                type="button"
                onMouseEnter={handleMouseEnter}
                hovered={hovered.toString()}
              >
                <span>Property</span>
                <IoIosArrowDown size={18} />
              </ButtonProperty>
              {hovered && (
                <PropertyList>
                  <li>
                    <a href="/#">House</a>
                  </li>
                  <li>
                    <a href="/#">Apartment</a>
                  </li>
                  <li>
                    <a href="/#">Villa</a>
                  </li>
                </PropertyList>
              )}
            </li>
          </LinkList>

          <ButtonSign href="#">Sign Up!</ButtonSign>
        </NavigateHeader>
      </Container>
    </HeaderStyled>
  );
};
