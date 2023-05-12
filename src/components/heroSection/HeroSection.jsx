import React from 'react';

import { Form } from '../form/Form';
import { Container } from 'components/container/Container';
import {
  Section,
  TitleBlock,
  ImageBlock,
  FormWrapper,
  SectionWrapper,
} from './HeroSection.styled';
import TravelokaSvg from '../../images/svg/traveloka.svg';
import TicketSvg from '../../images/svg/ticketcom.svg';
import AirBnbSvg from '../../images/svg/airbnb.svg';
import TripAdvisorSvg from '../../images/svg/tripadvisor.svg';
import HeroImg from '../../images/heroImg.jpg';
// import Slider from 'react-slick';

export const HeroSection = () => {
  return (
    <Section>
      <Container>
        <SectionWrapper>
          <TitleBlock>
            <h1>
              Find The Place To Live <span>Your Dreams</span> Easily Here
            </h1>
            <p>
              Everything you need about finding your place to live will be here,
              where it will be easier for you
            </p>
            <FormWrapper>
              <Form />
            </FormWrapper>

            <p>Our Partnership </p>

            <ul>
              <li key="traveloka">
                <img src={TravelokaSvg} alt="Icon" />
              </li>
              <li key="ticket">
                <img src={TicketSvg} alt="Icon" />
              </li>
              <li key="airbnb">
                <img src={AirBnbSvg} alt="Icon" />
              </li>
              <li key="tripadvisor">
                <img src={TripAdvisorSvg} alt="Icon" />
              </li>
            </ul>
          </TitleBlock>
          <ImageBlock>
            <img src={HeroImg} alt="House" />
          </ImageBlock>
        </SectionWrapper>
      </Container>
    </Section>
  );
};
