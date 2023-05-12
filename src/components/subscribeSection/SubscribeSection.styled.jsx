import styled from 'styled-components';
import SubscribeImg from '../../images/Subscribe.jpg';

export const Section = styled.section`
  padding-bottom: 40px;

  @media screen and (min-width: 768px) {
    padding-bottom: 120px;
  }
`;

export const SectionWrapper = styled.div`
  background-color: #e4e6f6;
  border-radius: 40px;

  @media screen and (min-width: 992px) {
    background-image: url(${SubscribeImg});
    background-repeat: no-repeat;
    background-size: cover;
  }
`;

export const SectionTitleCont = styled.div`
  max-width: 424px;
  margin-bottom: 32px;
  padding-top: 28px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 992px) {
    padding-top: 65px;
  }
`;

export const FormWrapper = styled.div`
  text-align: center;
  padding-bottom: 65px;
`;
