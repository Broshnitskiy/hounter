import React from 'react';
import {
  Section,
  SectionTitleWrapper,
  CardContainer,
  Rating,
  StickerInfoWrapper,
  SectionContentWrapper,
} from './OurReviewSection.styled';
import { AccentTitle } from 'components/accentTitle/AccentTitle';
import { SectionTitle } from 'components/sectionTitle/SectionTitle';
import { capitalizeWords } from '../../helpers/capitalizeWords';
import { StickerInfo } from 'components/stickerInfo/Sticker.info';
import DianneImg from '../../images/stickers/dianne.png';
import House1 from '../../images/our-review-img/house-1.jpg';
import House2 from '../../images/our-review-img/house-2.jpg';
import House3 from '../../images/our-review-img/house-3.jpg';
import { AiFillStar } from 'react-icons/ai';
import Slider from 'react-slick';

export const OurReviewSection = () => {
  const settings = {
    infinite: true,
    centerMode: true,
    dots: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    cssEase: 'linear',
    variableWidth: true,
    swipe: true,
    pauseOnHover: false,
  };

  return (
    <Section>
      <AccentTitle direction="column">
        {capitalizeWords('see our review')}
      </AccentTitle>
      <SectionTitleWrapper>
        <SectionTitle>
          {capitalizeWords('What our user say about us')}
        </SectionTitle>
      </SectionTitleWrapper>

      <Slider {...settings}>
        <div>
          <SectionContentWrapper>
            <img src={House1} alt="house" />
            <CardContainer>
              <h3>Best! I got the house I wanted through Hounter</h3>
              <p>
                Through this website I can get a house with the type and
                specifications I want very easily, without a complicated process
                to be able to find information on the house we want.
              </p>
              <StickerInfoWrapper>
                <StickerInfo
                  img={DianneImg}
                  imgWidth="40px"
                  title="Dianne Russell"
                  text="Manager Director"
                />
                <Rating>
                  <AiFillStar size={28} />
                  <p>4.6</p>
                </Rating>
              </StickerInfoWrapper>
            </CardContainer>
          </SectionContentWrapper>
        </div>
        <div>
          <SectionContentWrapper>
            <img src={House2} alt="house" />
            <CardContainer>
              <h3>Best! I got the house I wanted through Hounter</h3>
              <p>
                Through this website I can get a house with the type and
                specifications I want very easily, without a complicated process
                to be able to find information on the house we want.
              </p>
              <StickerInfoWrapper>
                <StickerInfo
                  img={DianneImg}
                  imgWidth="40px"
                  title="Dianne Russell"
                  text="Manager Director"
                />
                <Rating>
                  <AiFillStar size={28} />
                  <p>4.6</p>
                </Rating>
              </StickerInfoWrapper>
            </CardContainer>
          </SectionContentWrapper>
        </div>
        <div>
          <SectionContentWrapper>
            <img src={House3} alt="house" />
            <CardContainer>
              <h3>Best! I got the house I wanted through Hounter</h3>
              <p>
                Through this website I can get a house with the type and
                specifications I want very easily, without a complicated process
                to be able to find information on the house we want.
              </p>
              <StickerInfoWrapper>
                <StickerInfo
                  img={DianneImg}
                  imgWidth="40px"
                  title="Dianne Russell"
                  text="Manager Director"
                />
                <Rating>
                  <AiFillStar size={28} />
                  <p>4.6</p>
                </Rating>
              </StickerInfoWrapper>
            </CardContainer>
          </SectionContentWrapper>
        </div>
      </Slider>
    </Section>
  );
};
