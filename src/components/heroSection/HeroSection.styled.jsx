import styled from 'styled-components';

export const Section = styled.section`
  padding-bottom: 60px;
  @media screen and (min-width: 992px) {
    padding-bottom: 120px;
  }
  @media screen and (min-width: 1700px) {
    padding-bottom: 200px;
  }
`;

export const TitleBlock = styled.div`
  margin-left: auto;
  margin-right: auto;

  > h1 {
    font-size: 30px;
    line-height: 40px;
    margin-bottom: 24px;
    color: #1b1c57;
    padding-top: 222px;
    span {
      color: #fff;
      text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
        1px 1px 0 #000;
    }
  }

  > p {
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    color: #626687;
  }
  & p:first-of-type {
    margin-bottom: 32px;
  }

  & > ul {
    display: flex;
    align-items: center;
    > li:not(:last-child) {
      margin-right: 32px;
    }
  }

  @media screen and (min-width: 768px) {
    max-width: 400px;
    > p {
      font-size: 16px;
      line-height: 28px;
    }
    h1 {
      padding-top: 96px;
    }
  }

  @media screen and (min-width: 992px) {
    margin-left: 0;
  }

  @media screen and (min-width: 1200px) {
    max-width: 496px;
    h1 {
      font-size: 40px;
      line-height: 50px;
      max-width: 388px;
    }
  }
  @media screen and (min-width: 1440px) {
    h1 {
      padding-top: 182px;
    }
  }
`;

export const FormWrapper = styled.div`
  margin-bottom: 32px;
`;

export const ImageBlock = styled.div`
  position: relative;

  @media screen and (min-width: 992px) {
    position: absolute;
    top: 0;
    right: 0;
    z-index: -1;
    > img {
      width: 550px;
    }
  }

  @media screen and (min-width: 1200px) {
    > img {
      width: 660px;
    }
  }

  @media screen and (min-width: 1440px) {
    > img {
      width: 750px;
    }
  }
  @media screen and (min-width: 1700px) {
    > img {
      width: 820px;
    }
  }
`;

export const StickerContainer = styled.div`
  background-color: white;
  display: block;
  /* height: 96px; */
  padding: 6px;
  overflow: hidden;

  margin-right: 16px;
  border-radius: 32px;
  @media screen and (min-width: 1200px) {
    height: 116px;
    padding: 24px;
  }
`;

export const SliderContainer = styled.div`
  width: 100%;
  position: absolute;
  bottom: 38px;
  left: 0;
  overflow: hidden;
`;
