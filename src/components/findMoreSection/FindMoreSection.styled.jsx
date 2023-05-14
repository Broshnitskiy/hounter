import styled from 'styled-components';
// import { colors } from '../../styles/colors';

export const Section = styled.div`
  text-align: center;
  padding-bottom: 120px;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;

  color: #626687;
`;

export const SectionTitleWrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 24px;
  margin-top: 12px;
  max-width: 424px;
`;

export const TimeWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 16px;
  > svg {
    margin-right: 14px;
  }
`;

export const ContentWrapper = styled.div`
  margin-top: 40px;
  @media screen and (min-width: 992px) {
    display: flex;
    justify-content: space-between;
  }
`;

export const SideWrapper = styled.div`
  text-align: start;
  > img {
    margin-bottom: 14px;
  }

  > h3 {
    font-weight: 500;
    font-size: 24px;
    line-height: 32px;
    margin: 12px 0;

    color: #1b1c57;
  }

  @media screen and (min-width: 992px) {
    width: 450px;
  }

  @media screen and (min-width: 1200px) {
    width: 560px;
  }

  @media screen and (min-width: 1440px) {
    width: 650px;
  }
`;

export const ContentList = styled.ul`
  > li {
    margin-bottom: 28px;
    > img {
      height: 100%;
      margin-bottom: 20px;
    }

    > div {
      text-align: start;
      > p {
        font-weight: 500;
        font-size: 16px;
        line-height: 20px;

        color: #1b1c57;
      }
    }
  }

  @media screen and (min-width: 768px) {
    > li {
      display: flex;
      > img {
        width: 200px;
        margin-right: 20px;
      }
    }
  }

  @media screen and (min-width: 992px) {
    width: 450px;
  }

  @media screen and (min-width: 1200px) {
    width: 572px;
    > li {
      > div {
        > p {
          font-size: 18px;
          line-height: 32px;
        }
      }
    }
  }
`;
