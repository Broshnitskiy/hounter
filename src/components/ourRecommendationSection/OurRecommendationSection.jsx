import React, { useState, useRef } from 'react';
import {
  Section,
  SectionTitleWrapper,
  ButtonFilter,
  ButtonArrow,
  ButtonArrowWrapper,
  BtnFilterList,
  SectionWrapper,
  TitleBlock,
} from './OurRecommendationSection.styled';
import { Container } from '../container/Container';
import { AccentTitle } from 'components/accentTitle/AccentTitle';
import { SectionTitle } from 'components/sectionTitle/SectionTitle';
import { BsFillHouseDoorFill } from 'react-icons/bs';
import { MdVilla, MdApartment } from 'react-icons/md';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
import { CardHouseList } from './CardHouseList';
import { CardApartmentList } from './CardApartmentList';
import { CardVillaList } from './CardVillaList';

export const OurRecommendationSection = () => {
  const [activeButton, setActiveButton] = useState('house');
  const sliderRef = useRef(null);

  const handleButtonFilterClick = e => {
    setActiveButton(e.currentTarget.getAttribute('data-id'));
  };

  const goToPreviousSlide = () => {
    sliderRef.current.slickPrev();
  };

  const goToNextSlide = () => {
    sliderRef.current.slickNext();
  };

  return (
    <Section>
      <Container>
        <SectionWrapper>
          <TitleBlock>
            <AccentTitle direction="row">Our Recommendation</AccentTitle>
            <SectionTitleWrapper>
              <SectionTitle>Featured House</SectionTitle>
            </SectionTitleWrapper>
          </TitleBlock>

          <BtnFilterList>
            <li>
              <ButtonFilter
                data-id="house"
                type="button"
                onClick={handleButtonFilterClick}
                active={activeButton === 'house' ? 'true' : 'false'}
              >
                <BsFillHouseDoorFill />
                <span>House</span>
              </ButtonFilter>
            </li>
            <li>
              <ButtonFilter
                type="button"
                data-id="villa"
                onClick={handleButtonFilterClick}
                active={activeButton === 'villa' ? 'true' : 'false'}
              >
                <MdVilla />
                <span>Villa</span>
              </ButtonFilter>
            </li>
            <li>
              <ButtonFilter
                type="button"
                data-id="apartment"
                onClick={handleButtonFilterClick}
                active={activeButton === 'apartment' ? 'true' : 'false'}
              >
                <MdApartment />
                <span>Apartment</span>
              </ButtonFilter>
            </li>
          </BtnFilterList>

          <ButtonArrowWrapper>
            <ButtonArrow type="button" onClick={goToPreviousSlide}>
              <IoIosArrowBack />
            </ButtonArrow>
            <ButtonArrow type="button" onClick={goToNextSlide}>
              <IoIosArrowForward />
            </ButtonArrow>
          </ButtonArrowWrapper>
        </SectionWrapper>
      </Container>
      {activeButton === 'house' && <CardHouseList refProp={sliderRef} />}
      {activeButton === 'apartment' && (
        <CardApartmentList refProp={sliderRef} />
      )}
      {activeButton === 'villa' && <CardVillaList refProp={sliderRef} />}

      {/* <Slider {...settings} ref={sliderRef}>
        <div>
          <Card>
            <CardImgWrapper>
              <img src={House1} alt="house" />
            </CardImgWrapper>
            <h3>Roselands House</h3>
            <p>$ 35.000.000</p>
            <StickerInfo
              img={DianneImg}
              imgWidth="40px"
              title="Dianne Russell"
              text="Manchester, Kentucky"
            />
          </Card>
        </div>
        <div>
          <Card>
            <CardImgWrapper>
              <img src={House2} alt="house" />
            </CardImgWrapper>
            <h3>Woodlandside</h3>
            <p>$ 38.000.000</p>
            <StickerInfo
              img={Ronald}
              imgWidth="40px"
              title="Ronald Richards"
              text="Santa Ana, Illinois"
            />
          </Card>
        </div>
        <div>
          <Card>
            <CardImgWrapper>
              <img src={House3} alt="house" />
            </CardImgWrapper>
            <h3>The Old Lighthouse</h3>
            <p>$ 44.000.000</p>
            <StickerInfo
              img={Robert}
              imgWidth="40px"
              title="Robert Fox"
              text="South Dakota"
            />
          </Card>
        </div>
        <div>
          <Card>
            <CardImgWrapper>
              <img src={House4} alt="house" />
            </CardImgWrapper>
            <h3>Cosmo's House</h3>
            <p>$ 20.000.000</p>
            <StickerInfo
              img={Jenny}
              imgWidth="40px"
              title="Jenny Will"
              text="Manchester, Kentucky"
            />
          </Card>
        </div>
      </Slider> */}
    </Section>
  );
};
