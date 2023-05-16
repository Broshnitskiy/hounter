import { Header } from './header/Header';
import { HeroSection } from './heroSection/HeroSection';
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
        <ReadyToSellSection />
        <OurReviewSection />
        <FindMoreSection />
        <SubscribeSection />

        {/* <HeroSection />
        <AboutSection />
        <CasesSection />
        <BlogSection />
        <OurTeamSection />
        <ContactSection /> */}
      </main>

      <Footer />
    </>
  );
};
