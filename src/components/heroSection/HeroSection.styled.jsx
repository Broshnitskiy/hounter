import styled from 'styled-components';

export const Section = styled.section`
  padding-bottom: 60px;
  @media screen and (min-width: 992px) {
    padding-bottom: 120px;
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
    margin-right: 20px;
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

export const SectionWrapper = styled.div`
  @media screen and (min-width: 992px) {
    display: flex;
    justify-content: space-between;
  }
`;

export const ImageBlock = styled.div`
  @media screen and (min-width: 1200px) {
    > img {
      width: 600px;
    }
  }

  @media screen and (min-width: 1440px) {
    > img {
      width: 700px;
    }
  }
`;
