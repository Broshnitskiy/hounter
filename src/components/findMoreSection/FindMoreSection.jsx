import React from 'react';
import {
  Section,
  SectionTitleWrapper,
  TimeWrapper,
  ContentWrapper,
  ContentList,
  SideWrapper,
} from './FindMoreSection.styled';
import { capitalizeWords } from '../../helpers/capitalizeWords';
import { Container } from 'components/container/Container';
import { SectionTitle } from 'components/sectionTitle/SectionTitle';
import { AccentTitle } from 'components/accentTitle/AccentTitle';
import { Button } from 'components/button/Button';
import { StickerInfo } from 'components/stickerInfo/Sticker.info';
import CameronImg from '../../images/stickers/cameron.png';
import DianneImg from '../../images/stickers/dianne.png';
import HenryImg from '../../images/stickers/henry.png';
import RobertsonImg from '../../images/stickers/robertson.png';
import FindOutMoreImg1 from '../../images/find-out-more-img/find-out-more-1.jpg';
import FindOutMoreImg2 from '../../images/find-out-more-img/find-out-more-2.jpg';
import FindOutMoreImg3 from '../../images/find-out-more-img/find-out-more-3.jpg';
import FindOutMoreImg4 from '../../images/find-out-more-img/find-out-more-4.jpg';
import { BsClockFill } from 'react-icons/bs';

export const FindMoreSection = () => {
  return (
    <Section>
      <Container>
        <AccentTitle direction="column">
          {capitalizeWords('See tips and trick from our partnership')}
        </AccentTitle>
        <SectionTitleWrapper>
          <SectionTitle>
            {capitalizeWords('find out more about selling and buying homes')}
          </SectionTitle>
        </SectionTitleWrapper>

        <Button type="button">More Artikel</Button>

        <ContentWrapper>
          <ContentList>
            <li>
              <img src={FindOutMoreImg1} alt="house" />
              <div>
                <StickerInfo img={DianneImg} text="Dianne Russell" />
                <p>
                  {capitalizeWords(
                    'The things we need to check when we want to buy a house'
                  )}
                </p>
                <TimeWrapper>
                  <BsClockFill size={20} />
                  <p>4 min read | 25 Apr 2021</p>
                </TimeWrapper>
              </div>
            </li>
            <li>
              <img src={FindOutMoreImg2} alt="house" />
              <div>
                <StickerInfo img={HenryImg} text="Dianne Russell" />
                <p>
                  {capitalizeWords(
                    '7 Ways to distinguish the quality of the house we want to buy'
                  )}
                </p>
                <TimeWrapper>
                  <BsClockFill size={20} />
                  <p>6 min read | 24 Apr 2021</p>
                </TimeWrapper>
              </div>
            </li>
            <li>
              <img src={FindOutMoreImg3} alt="house" />
              <div>
                <StickerInfo img={RobertsonImg} text="Dianne Russell" />
                <p>
                  {capitalizeWords(
                    'The best way to know the quality of the house we want to buy'
                  )}
                </p>
                <TimeWrapper>
                  <BsClockFill size={20} />
                  <p>2 min read | 24 Apr 2021</p>
                </TimeWrapper>
              </div>
            </li>
          </ContentList>

          <SideWrapper>
            <img src={FindOutMoreImg4} alt="house" />
            <StickerInfo img={CameronImg} text="Cameron Williamson" />
            <h3>
              {capitalizeWords('12 things to know before buying a house')}
            </h3>
            <p>
              Want to buy a house but are unsure about what we should know, here
              I will try to explain what we should know and check when we want
              to buy a house
            </p>
            <TimeWrapper>
              <BsClockFill size={20} />
              <p> 8 min read | 25 Apr 2021</p>
            </TimeWrapper>
          </SideWrapper>
        </ContentWrapper>
      </Container>
    </Section>
  );
};
