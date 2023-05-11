import { Header } from './header/Header';
import { Footer } from './footer/Footer';
import { Form } from './form/Form';

export const App = () => {
  return (
    <>
      <Header />
      <Form />
      {/* <AccentTitle direction="row" text="sdfsdfsdfsdf" /> */}
      {/* <main>
        <HeroSection />
        <AboutSection />
        <CasesSection />
        <BlogSection />
        <OurTeamSection />
        <ContactSection />
      </main> */}
      <Footer />
    </>
  );
};
