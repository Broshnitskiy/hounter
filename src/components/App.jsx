import { Header } from './header/Header';
import { HeroSection } from './heroSection/HeroSection';
import { OurRecommendationSection } from './ourRecommendationSection/OurRecommendationSection';
import { ReadyToSellSection } from './readyToSellSection/ReadyToSellSection';
import { OurReviewSection } from './ourReviewSection/OurReviewSection';
import { FindMoreSection } from './findMoreSection/FindMoreSection';
import { SubscribeSection } from './subscribeSection/SubscribeSection';
import { Footer } from './footer/Footer';

export const App = () => {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <OurRecommendationSection />
        <ReadyToSellSection />
        <OurReviewSection />
        <FindMoreSection />
        <SubscribeSection />
      </main>
      <Footer />
    </>
  );
};
