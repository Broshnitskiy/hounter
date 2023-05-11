import React from 'react';
import { Logo } from '../logo/Logo';
import { Container } from '../container/Container';
import {
  FooterStyled,
  LogoWrapper,
  FooterList,
  FooterWrapper,
} from './Footer.styled';
import { TiSocialFacebook } from 'react-icons/ti';
import { AiOutlineTwitter, AiFillInstagram } from 'react-icons/ai';

export const Footer = () => {
  return (
    <FooterStyled>
      <Container>
        <FooterWrapper>
          <LogoWrapper>
            <Logo />
            <p>
              We provide information about properties such as houses, villas and
              apartments to help people find their dream home
            </p>
            <ul>
              <li>
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <TiSocialFacebook size={32} />
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiOutlineTwitter size={32} />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiFillInstagram size={32} />
                </a>
              </li>
            </ul>
          </LogoWrapper>
          <FooterList>
            <li>
              <h3>Property</h3>
              <ul>
                <li>
                  <a href="/#">House</a>
                </li>
                <li>
                  <a href="/#">Apartment</a>
                </li>
                <li>
                  <a href="/#">Villa</a>
                </li>
              </ul>
            </li>
            <li>
              <h3>Article</h3>
              <ul>
                <li>
                  <a href="/#">New Article</a>
                </li>
                <li>
                  <a href="/#">Popular Article</a>
                </li>
                <li>
                  <a href="/#">Most Read</a>
                </li>
                <li>
                  <a href="/#">Tips & Tricks</a>
                </li>
              </ul>
            </li>
            <li>
              <h3>Contact</h3>
              <ul>
                <li>2464 Royal Ln. Mesa, New Jersey 45463</li>
                <li>(671) 555-0110</li>
                <li>info@hounter.com</li>
              </ul>
            </li>
          </FooterList>
        </FooterWrapper>
      </Container>
    </FooterStyled>
  );
};
