import styled from 'styled-components';

export const Section = styled.section`
  padding-bottom: 80px;

  @media screen and (min-width: 768px) {
    padding-bottom: 120px;
  }
`;

export const SectionTitleWrapper = styled.div`
  margin-top: 12px;
  margin-bottom: 16px;
`;

export const InButtonWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  > svg {
    margin-right: 16px;
    margin-left: 6px;
  }
  > span {
    padding-right: 12px;
  }
`;

export const StickerInfoWrapper = styled.div`
  > button {
    display: block;
    margin-top: 12px;
  }
  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    > button {
      display: block;
      margin-left: 59px;
    }
  }
`;

export const HouseDetailWrapper = styled.div`
  font-weight: 600;
  font-size: 16px;
  line-height: 28px;
  color: #1b1c57;
  opacity: 0.75;
  border-bottom: 2px solid #f0f3fd;
  margin-bottom: 32px;

  > p {
    font-weight: 400;
    font-size: 16px;
    line-height: 28px;
    color: #626687;
    opacity: 0.75;
    margin-bottom: 16px;
  }

  h3 {
    margin-bottom: 16px;
  }

  > div {
    margin-bottom: 32px;
    > ul {
      > li {
        display: flex;
        align-items: center;
        > img {
          margin-right: 16px;
        }
      }
    }
  }

  @media screen and (min-width: 768px) {
    > div {
      display: flex;
      > ul {
        margin-right: 53px;
      }
    }
  }
`;
