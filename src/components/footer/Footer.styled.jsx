import styled from 'styled-components';
import { colors } from '../../styles/colors';

export const FooterStyled = styled.footer`
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: ${colors.textColor};
`;

export const FooterWrapper = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
  }
`;

export const LogoWrapper = styled.div`
  p {
    margin-top: 16px;
    margin-bottom: 24px;
  }
  @media screen and (min-width: 768px) {
    max-width: 320px;
  }
  ul {
    display: flex;
    justify-content: center;

    li:not(:last-child) {
      margin-right: 24px;
    }
    li:hover {
      color: ${colors.green};
    }
  }
`;

export const FooterList = styled.ul`
  text-align: center;

  h3 {
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
    color: #0e1735;
    margin-bottom: 24px;
  }

  ul > li {
    margin-bottom: 18px;
  }
  @media screen and (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    margin-left: 82px;

    li {
      text-align: start;
    }
    > li:not(:last-child) {
      margin-right: 32px;
    }
  }

  @media screen and (min-width: 992px) {
    margin-left: auto;
  }

  @media screen and (min-width: 1200px) {
    > li:not(:last-child) {
      margin-right: 84px;
    }
  }
`;
