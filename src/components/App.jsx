import { Header } from './header/Header';
import { HeroSection } from './sectionHero/HeroSection';
import { SubscribeSection } from './subscribeSection/SubscribeSection';
import { Footer } from './footer/Footer';

export const App = () => {
  return (
    <>
      <Header />

      {/* { <AccentTitle direction="row" text="sdfsdfsdfsdf" /> } */}

      <main>
        <HeroSection />
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
