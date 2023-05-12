import styled from 'styled-components';
import { colors } from '../../styles/colors';

export const HeaderStyled = styled.header`
  padding-top: 16px;
`;

export const NavigateHeader = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: center;
  }
`;
export const LogoWrapper = styled.div`
  margin-bottom: 20px;
  @media screen and (min-width: 768px) {
    margin-bottom: 0;
  }
`;

export const LinkList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-bottom: 28px;
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;

  li:last-child {
    position: relative;
  }

  > li:not(:last-child) {
    margin-right: 12px;
  }

  @media screen and (min-width: 768px) {
    font-weight: 600;
    font-size: 14px;
    margin-left: auto;
    margin-bottom: 0;
    > li:not(:last-child) {
      margin-right: 24px;
    }
  }
`;

export const ButtonProperty = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  width: 122px;
  height: 34px;
  color: #047857;
  background-color: #d1fae5;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 32px;
  cursor: pointer;

  &:hover {
    background-color: ${colors.green};
    color: ${colors.white};
  }

  span {
    margin-right: 10px;
  }
  @media screen and (min-width: 768px) {
    color: ${props =>
      props.hovered === 'true' ? `${colors.white}` : '#f0f3fd'};
    background-color: ${props =>
      props.hovered === 'true'
        ? `${colors.green}`
        : 'rgba(255, 255, 255, 0.1)'};
    border: 1px solid rgba(255, 255, 255, 0.3);
    border-radius: 32px;
  }
`;

export const PropertyList = styled.ul`
  position: absolute;
  left: 0;
  border: 1px solid green;
  border-radius: 5px;
  background-color: white;

  cursor: pointer;

  li {
    width: 122px;
    &:hover {
      background-color: green;
    }
  }
`;

export const LinkNav = styled.a`
  padding: 8px 16px;
  color: #047857;
  background-color: #d1fae5;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 32px;

  &:hover {
    background-color: ${colors.green};
    color: ${colors.white};
  }

  @media screen and (min-width: 768px) {
    color: #f0f3fd;
    background-color: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.3);
    border-radius: 32px;
  }
`;

export const ButtonSign = styled.a`
  font-weight: 500;
  font-size: 12px;
  line-height: 22px;
  color: #047857;
  background-color: #d1fae5;
  padding: 12px 24px;
  border: none;
  cursor: pointer;
  border-radius: 32px;

  &:hover {
    background-color: ${colors.green};
  }

  @media screen and (min-width: 768px) {
    margin-left: 56px;
    font-weight: 600;
    font-size: 14px;
  }
`;
