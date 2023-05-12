import styled from 'styled-components';
// import { colors } from '../../styles/colors';

export const InButtonWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    margin-right: 4px;
  }
`;

export const FormComp = styled.form`
  position: relative;
  display: inline-block;
  input {
    width: 300px;
    height: 46px;
    background: #ffffff;
    outline: none;
    border: 1px solid #e0e3eb;
    border-radius: 26px;
    padding-left: 40px;

    &::placeholder {
      font-weight: 400;
      font-size: 12px;
      line-height: 18px;
      color: #888b97;
    }
  }

  @media screen and (min-width: 768px) {
    input {
      width: 496px;
      height: 56px;
      padding-left: 64px;
      border-radius: 32px;
      &::placeholder {
        font-weight: 500;
        font-size: 14px;
        line-height: 22px;
      }
    }
  }
`;

export const SvgWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 14px;
  transform: translateY(-50%);
  line-height: 0;
  @media screen and (min-width: 768px) {
    left: 24px;
  }
`;

export const ButtonWrapper = styled.div`
  position: absolute;
  top: 50%;
  right: 4px;
  transform: translateY(-50%);
  line-height: 0;
`;
