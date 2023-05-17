import styled from 'styled-components';
import Slider from 'react-slick';

export const Section = styled.section`
  padding-bottom: 80px;

  @media screen and (min-width: 768px) {
    padding-bottom: 120px;
  }
`;

export const SectionWrapper = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
  }
`;
export const ContentWrapper = styled.div`
  margin-bottom: 40px;
  @media screen and (min-width: 768px) {
    margin-bottom: 0;
    margin-right: 10px;

    :first-child {
      justify-content: start;
    }
  }
`;
export const ImagesWrapper = styled.div`
  position: relative;

  @media screen and (min-width: 768px) {
    padding-left: 40px;
  }
  @media screen and (min-width: 1200px) {
    > img {
      width: 600px;
    }
  }
`;

export const SectionTitleWrapper = styled.div`
  margin-top: 12px;
  margin-bottom: 16px;

  @media screen and (min-width: 768px) {
    padding-left: 40px;
    h2 {
      text-align: start;
    }
  }
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
    padding-left: 40px;
  }

  @media screen and (min-width: 992px) {
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
    max-width: 524px;
    font-size: 14px;
    line-height: 20px;
    padding-left: 40px;
    > div {
      display: flex;
      > ul {
        margin-right: 20px;
      }
    }
  }

  @media screen and (min-width: 992px) {
    > div {
      > ul {
        margin-right: 53px;
      }
    }
  }
`;

export const StyledSlider = styled(Slider)`
  .my-style {
    margin: 10px;
    display: flex;
    align-items: flex-end;
    height: 100px;
  }
  @media screen and (min-width: 768px) {
    width: 100%;
    position: absolute;
    top: 280px;
    left: 0;
  }

  @media screen and (min-width: 992px) {
    top: 320px;
  }

  @media screen and (min-width: 1200px) {
    .my-style {
      height: 200px;
    }
  }
  /* .slick-current {
 
  } */
`;

export const SlideImg = styled.img`
  border-radius: 10px;
`;
