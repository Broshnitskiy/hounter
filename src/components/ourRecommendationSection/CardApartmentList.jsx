import { StickerInfo } from 'components/stickerInfo/Sticker.info';
import DianneImg from '../../images/stickers/dianne.png';
import Ronald from '../../images/stickers/ronald.png';
import Robert from '../../images/stickers/robert.png';
import Jenny from '../../images/stickers/jenny.png';
import Apartment1 from '../../images/our-recommendation-img/apartment-1.jpg';
import Apartment2 from '../../images/our-recommendation-img/apartment-2.jpg';
import Apartment3 from '../../images/our-recommendation-img/apartment-3.jpg';
import Apartment4 from '../../images/our-recommendation-img/apartment-4.jpg';
import Slider from 'react-slick';
import { CardImgWrapper, Card } from './OurRecommendationSection.styled';

export const CardApartmentList = ({ refProp }) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 0.5,
    slidesToScroll: 1,

    arrows: false,
    cssEase: 'linear',
    variableWidth: true,
    swipe: false,
  };
  return (
    <Slider {...settings} ref={refProp}>
      <div>
        <Card>
          <CardImgWrapper>
            <img src={Apartment1} alt="house" />
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
            <img src={Apartment2} alt="house" />
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
            <img src={Apartment3} alt="house" />
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
            <img src={Apartment4} alt="house" />
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
    </Slider>
  );
};
