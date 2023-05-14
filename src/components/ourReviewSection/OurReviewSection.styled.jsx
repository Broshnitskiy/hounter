import styled from 'styled-components';

export const Section = styled.section`
  padding-bottom: 40px;

  @media screen and (min-width: 768px) {
    padding-bottom: 200px;
  }
`;

export const SectionContentWrapper = styled.div`
  position: relative;
  display: inline-block;
  margin-right: 56px;
  padding-bottom: 160px;

  @media screen and (min-width: 992px) {
    padding-bottom: 115px;
  }
`;

export const SectionTitleWrapper = styled.div`
  margin-bottom: 40px;
  margin-top: 12px;
`;

export const CardContainer = styled.div`
  padding: 32px;
  background: #ffffff;
  box-shadow: 0px 9px 32px rgba(89, 92, 219, 0.05);
  border-radius: 16px;
  width: 200px;
  > h3 {
    font-weight: 600;
    font-size: 18px;
    line-height: 20px;
    margin-bottom: 16px;
    color: #1b1c57;
  }

  > p {
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    margin-bottom: 24px;
    color: #626687;

    opacity: 0.75;
  }

  @media screen and (min-width: 768px) {
    position: absolute;
    top: 256px;
    left: 50%;
    transform: translateX(-50%);
    width: 500px;

    > h3 {
      font-size: 20px;
      line-height: 25px;
    }

    > p {
      font-size: 14px;
      line-height: 24px;
    }
  }

  @media screen and (min-width: 992px) {
    width: 612px;
  }
`;

export const StickerInfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Rating = styled.div`
  display: flex;
  align-items: center;
  color: #f59e0b;

  > p {
    margin-left: 16px;
    font-weight: 600;
    font-size: 20px;
    line-height: 28px;

    color: #3c4563;
  }
`;
