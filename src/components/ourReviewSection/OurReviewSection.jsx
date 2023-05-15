import React from 'react';
import {
  Section,
  SectionTitleWrapper,
  CardContainer,
  Rating,
  StickerInfoWrapper,
  SectionContentWrapper,
} from './OurReviewSection.styled';
import { Container } from 'components/container/Container';
import { AccentTitle } from 'components/accentTitle/AccentTitle';
import { SectionTitle } from 'components/sectionTitle/SectionTitle';
import { capitalizeWords } from '../../helpers/capitalizeWords';
import { StickerInfo } from 'components/stickerInfo/Sticker.info';
import DianneImg from '../../images/stickers/dianne.png';
import CameronImg from '../../images/stickers/cameron.png';
import HenryImg from '../../images/stickers/henry.png';
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
      <Container>
        <AccentTitle direction="column">
          {capitalizeWords('see our review')}
        </AccentTitle>
        <SectionTitleWrapper>
          <SectionTitle>
            {capitalizeWords('What our user say about us')}
          </SectionTitle>
        </SectionTitleWrapper>
      </Container>

      <Slider {...settings}>
        <div>
          <SectionContentWrapper>
            <img src={House1} alt="house" />
            <CardContainer>
              <h3>Best! I got the house I wanted through Hounter</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius
                molestiae consectetur voluptatum quam itaque porro dolores qui
                totam minus voluptas molestiae consectetur voluptatum quam.
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
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius
                molestiae consectetur voluptatum quam itaque porro dolores qui
                totam minus voluptas molestiae consectetur voluptatum quam.
              </p>
              <StickerInfoWrapper>
                <StickerInfo
                  img={CameronImg}
                  imgWidth="40px"
                  title="Dianne Russell"
                  text="Manager Director"
                />
                <Rating>
                  <AiFillStar size={28} />
                  <p>4.8</p>
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
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius
                molestiae consectetur voluptatum quam itaque porro dolores qui
                totam minus voluptas molestiae consectetur voluptatum quam.
              </p>
              <StickerInfoWrapper>
                <StickerInfo
                  img={HenryImg}
                  imgWidth="40px"
                  title="Dianne Russell"
                  text="Manager Director"
                />
                <Rating>
                  <AiFillStar size={28} />
                  <p>4.4</p>
                </Rating>
              </StickerInfoWrapper>
            </CardContainer>
          </SectionContentWrapper>
        </div>
      </Slider>
    </Section>
  );
};
