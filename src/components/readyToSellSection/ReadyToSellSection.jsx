import React, { useState, useRef } from 'react';

import {
  Section,
  SectionTitleWrapper,
  InButtonWrap,
  StickerInfoWrapper,
  HouseDetailWrapper,
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
import Slider from 'react-slick';
import Photo1 from '../../images/ready-to-sell-img/foto-1.jpg';
import Photo2 from '../../images/ready-to-sell-img/foto-2.jpg';
import Photo3 from '../../images/ready-to-sell-img/foto-3.jpg';
import Photo4 from '../../images/ready-to-sell-img/foto-4.jpg';

export const ReadyToSellSection = () => {
  const images = [Photo1, Photo2, Photo3, Photo4];
  const [fotoArray, setFotoArray] = useState(images); // Початковий масив зображень
  const sliderRef = useRef(null);

  const handleThumbnailHover = () => {
    sliderRef.current.slickPause();
  };

  const handleThumbnailLeave = () => {
    sliderRef.current.slickPlay();
  };

  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: false,
    pauseOnHover: true,
    autoplay: true,
    autoplaySpeed: 4000,
    fade: true,
    beforeChange: (current, next) => {
      const updatedFotoArray = [...fotoArray];
      const firstPhoto = updatedFotoArray.shift(); // Видаляємо перший елемент
      updatedFotoArray.push(firstPhoto); // Додаємо його в кінець масиву
      setFotoArray(updatedFotoArray);
    },
  };

  return (
    <Section>
      <Container>
        <div>
          <div>
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
          </div>
          <div>
            <Slider {...settings} ref={sliderRef}>
              {images.map((image, index) => (
                <div key={index}>
                  <img src={image} alt="house interier" />
                </div>
              ))}
            </Slider>
            <div>
              {fotoArray.map(
                (foto, index) =>
                  index !== 0 && (
                    <img
                      onMouseEnter={handleThumbnailHover}
                      onMouseLeave={handleThumbnailLeave}
                      alt="house"
                      key={index}
                      src={foto}
                      style={{
                        width: '100px',
                        height: '100px',
                        margin: '0 5px',
                        cursor: 'pointer',
                        border: '1px solid #ccc',
                        ...(index === 1 && {
                          width: '200px',
                          height: '200px',
                          border: '2px solid #000',
                        }),
                      }}
                    />
                  )
              )}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};
