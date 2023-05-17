import React from 'react';

import {
  Section,
  SectionTitleWrapper,
  InButtonWrap,
  StickerInfoWrapper,
  HouseDetailWrapper,
  StyledSlider,
  SlideImg,
  ImagesWrapper,
  ContentWrapper,
  SectionWrapper,
} from './ReadyToSellSection.styled';
import { Container } from 'components/container/Container';
import { AccentTitle } from 'components/accentTitle/AccentTitle';
import { SectionTitle } from 'components/sectionTitle/SectionTitle';
import { capitalizeWords } from '../../helpers/capitalizeWords';
import { StickerInfo } from 'components/stickerInfo/Sticker.info';
import { Button } from '../button/Button';
import DianneImg from '../../images/stickers/dianne.png';
import { BsFillTelephoneFill } from 'react-icons/bs';
import BedroomSvg from '../../images/svg/bathroom.svg';
import CarportSvg from '../../images/svg/carport.svg';
import BathroomSvg from '../../images/svg/bathroom.svg';
import FloorSvg from '../../images/svg/floor.svg';

import Photo1 from '../../images/ready-to-sell-img/foto-1.jpg';
import Photo2 from '../../images/ready-to-sell-img/foto-2.jpg';
import Photo3 from '../../images/ready-to-sell-img/foto-3.jpg';
import Photo4 from '../../images/ready-to-sell-img/foto-4.jpg';
import Photo5 from '../../images/ready-to-sell-img/foto-5.jpg';
import Photo6 from '../../images/ready-to-sell-img/foto-6.jpg';

export const ReadyToSellSection = () => {
  const images = [Photo2, Photo3, Photo4, Photo5, Photo6];

  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    pauseOnHover: true,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: 'linear',

    swipe: false,
  };

  return (
    <Section>
      <Container>
        <SectionWrapper>
          <ContentWrapper>
            <AccentTitle direction="row">
              {capitalizeWords('Ready to Sell!')}
            </AccentTitle>
            <SectionTitleWrapper>
              <SectionTitle>
                {capitalizeWords('Let’s tour and see our house!')}
              </SectionTitle>
            </SectionTitleWrapper>

            <HouseDetailWrapper>
              <p>
                Houses recommended by our partners that have been curated to
                become the home of your dreams!
              </p>
              <h3>House Detail</h3>
              <div>
                <ul>
                  <li>
                    <img src={BedroomSvg} alt="bedroom svg" />
                    <span>4 Bedrooms</span>
                  </li>
                  <li>
                    <img src={CarportSvg} alt="carport svg" />
                    <span>1 Carport</span>
                  </li>
                </ul>
                <ul>
                  <li>
                    <img src={BathroomSvg} alt="bathroom svg" />
                    <span> 2 Bathrooms</span>
                  </li>
                  <li>
                    <img src={FloorSvg} alt="floor svg" /> <span>2 Floors</span>
                  </li>
                </ul>
              </div>
            </HouseDetailWrapper>
            <StickerInfoWrapper>
              <StickerInfo
                img={DianneImg}
                imgWidth="56px"
                title="Dianne Russell"
                text="Manager Director"
              />

              <Button type="button">
                <InButtonWrap>
                  <BsFillTelephoneFill size={18} />
                  <span>Contact Now</span>
                </InButtonWrap>
              </Button>
            </StickerInfoWrapper>
          </ContentWrapper>

          <ImagesWrapper>
            <img src={Photo1} alt="house" />

            <StyledSlider {...settings}>
              {images.map((image, index) => (
                <div key={index}>
                  <div className="my-style">
                    <SlideImg src={image} alt="house interier" />
                  </div>
                </div>
              ))}
            </StyledSlider>
          </ImagesWrapper>
        </SectionWrapper>
      </Container>
    </Section>
  );
};
