import { Header } from './header/Header';
import { HeroSection } from './heroSection/HeroSection';
import { FindMoreSection } from './findMoreSection/FindMoreSection';
import { SubscribeSection } from './subscribeSection/SubscribeSection';
import { Footer } from './footer/Footer';

export const App = () => {
  return (
    <>
      <Header />
      {/* { <AccentTitle direction="row" text="sdfsdfsdfsdf" /> } */}

      <main>
        <HeroSection />
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
