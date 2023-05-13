import React from 'react';

import { Form } from '../form/Form';
import { Container } from 'components/container/Container';
import { StickerInfo } from '../stickerInfo/Sticker.info';
import {
  Section,
  TitleBlock,
  ImageBlock,
  FormWrapper,
  SectionWrapper,
  StickerContainer,
  SliderContainer,
} from './HeroSection.styled';
import TravelokaSvg from '../../images/svg/traveloka.svg';
import TicketSvg from '../../images/svg/ticketcom.svg';
import AirBnbSvg from '../../images/svg/airbnb.svg';
import TripAdvisorSvg from '../../images/svg/tripadvisor.svg';
import HeroImg from '../../images/heroImg.jpg';
import groupImg from '../../images/stickers/group.png';
import ellipseImg from '../../images/stickers/ellipse.png';
import rectangleImg from '../../images/stickers/rectangle.png';
import Slider from 'react-slick';

export const HeroSection = () => {
  const settings = {
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    cssEase: 'linear',
    variableWidth: true,
    swipe: false,
    pauseOnHover: false,
  };
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
            <SliderContainer>
              <Slider {...settings}>
                <div>
                  <StickerContainer>
                    <StickerInfo
                      img={groupImg}
                      imgWidth="110px"
                      title="1K+ People"
                      text="Successfully Getting Home"
                    />
                  </StickerContainer>
                </div>
                <div>
                  <StickerContainer>
                    <StickerInfo
                      img={ellipseImg}
                      imgWidth="60px"
                      title="4K+ People"
                      text="Getting Home"
                    />
                  </StickerContainer>
                </div>
                <div>
                  <StickerContainer>
                    <StickerInfo
                      img={rectangleImg}
                      imgWidth="60px"
                      title="56 Houses"
                      text="Sold Monthly"
                    />
                  </StickerContainer>
                </div>
                <div>
                  <StickerContainer>
                    <StickerInfo
                      img={groupImg}
                      imgWidth="110px"
                      title="1K+ People"
                      text="Successfully Getting Home"
                    />
                  </StickerContainer>
                </div>
                <div>
                  <StickerContainer>
                    <StickerInfo
                      img={ellipseImg}
                      imgWidth="60px"
                      title="4K+ People"
                      text="Getting Home"
                    />
                  </StickerContainer>
                </div>
                <div>
                  <StickerContainer>
                    <StickerInfo
                      img={rectangleImg}
                      imgWidth="60px"
                      title="56 Houses"
                      text="Sold Monthly"
                    />
                  </StickerContainer>
                </div>
              </Slider>
            </SliderContainer>
          </ImageBlock>
        </SectionWrapper>
      </Container>
    </Section>
  );
};
