import styled from 'styled-components';

export const Section = styled.section`
  padding-bottom: 80px;

  @media screen and (min-width: 768px) {
    padding-bottom: 120px;
  }
  @media screen and (min-width: 1200px) {
    padding-top: 60px;
  }
`;

export const SectionWrapper = styled.div`
  margin-bottom: 40px;
  @media screen and (min-width: 1200px) {
    display: flex;
    justify-content: space-between;
    align-items: end;
  }
`;

export const TitleBlock = styled.div`
  > div {
    margin-bottom: 12px;
  }

  @media screen and (min-width: 1200px) {
    > div {
      justify-content: start;
    }
  }
`;

export const SectionTitleWrapper = styled.div`
  margin-bottom: 12px;
  @media screen and (min-width: 1200px) {
    padding-left: 40px;
  }
`;

export const ButtonFilter = styled.button`
  display: inline-flex;
  align-items: center;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  cursor: pointer;
  color: #888b97;
  padding: 8px 18px;
  border: 1px solid #e0e3eb;
  border-radius: 32px;
  background-color: ${({ active }) =>
    active === 'true' ? '#d1fae5' : 'transparent'};

  &:hover,
  &:focus,
  &:active {
    background-color: #d1fae5;
    color: #10b981;
  }
  > svg {
    width: 20px;
    height: 20px;
    margin-right: 8px;
  }

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 28px;
    padding: 12px 24px;
    > svg {
      width: 24px;
      height: 24px;
      margin-right: 8px;
    }
  }
`;

export const ButtonArrow = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 14px;
  border-radius: 32px;
  background-color: #e0e3eb;
  cursor: pointer;
  border: none;
  color: #3c4563;

  &:hover {
    background-color: #10b981;
    color: white;
  }

  > svg {
    width: 24px;
    height: 24px;
  }

  @media screen and (min-width: 768px) {
    width: 60px;
    height: 52px;
    padding: 0;
    > svg {
      width: 28px;
      height: 28px;
    }
  }
`;

export const ButtonArrowWrapper = styled.div`
  > :first-child {
    margin-right: 16px;
  }
  display: flex;
  justify-content: center;
`;

export const BtnFilterList = styled.ul`
  text-align: center;
  margin-bottom: 12px;
  > li:not(:last-child) {
    margin-bottom: 12px;
  }

  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: center;

    > li:not(:last-child) {
      margin-right: 12px;
      margin-bottom: 0;
    }
  }
  @media screen and (min-width: 1200px) {
    margin-bottom: 0;
  }
`;

export const Card = styled.div`
  display: inline-block;
  margin-right: 10px;
  margin-left: 10px;
  > h3 {
    font-weight: 500;
    font-size: 24px;
    line-height: 32px;
    margin-bottom: 8px;
    color: #0e1735;
  }
  > p {
    font-weight: 500;
    font-size: 20px;
    line-height: 32px;
    margin-bottom: 24px;
    color: #3c4563;
  }
  @media screen and (min-width: 768px) {
    margin-right: 20px;
    margin-left: 20px;
  }
`;

export const CardImgWrapper = styled.div`
  display: inline-block;
  width: 250px;
  height: 280px;
  overflow: hidden;
  margin-bottom: 24px;
  border-radius: 24px;
  @media screen and (min-width: 1200px) {
    width: 340px;
    height: 382px;
  }
`;
