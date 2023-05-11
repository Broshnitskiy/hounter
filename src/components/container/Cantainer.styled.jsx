import styled from 'styled-components';

export const Div = styled.div`
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
  min-width: 320px;

  @media screen and (min-width: 480px) {
    width: 480px;
  }
  @media screen and (min-width: 768px) {
    padding-left: 32px;
    padding-right: 32px;
    width: 768px;
  }

  @media screen and (min-width: 992px) {
    padding-left: 28px;
    padding-right: 28px;
    width: 992px;
  }

  @media screen and (min-width: 1200px) {
    width: 1200px;
  }

  @media screen and (min-width: 1440px) {
    width: 1440px;
  }
`;
