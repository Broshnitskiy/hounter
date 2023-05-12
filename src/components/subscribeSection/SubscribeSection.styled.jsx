import styled from 'styled-components';
import SubscribeImg from '../../images/Subscribe.jpg';

export const Section = styled.section`
  padding-bottom: 40px;
  > div {
    background-image: url(${SubscribeImg});
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 40px;
  }

  @media screen and (min-width: 768px) {
    padding-bottom: 120px;
  }
`;

export const SectionTitleCont = styled.div`
  max-width: 424px;
  margin-bottom: 32px;
  padding-top: 8px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 768px) {
    padding-top: 65px;
  }
`;

export const FormWrapper = styled.div`
  text-align: center;
  padding-bottom: 65px;
`;
