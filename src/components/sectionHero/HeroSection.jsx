import React from 'react';

import { Form } from '../form/Form';
import { Container } from 'components/container/Container';
import { Section } from './HeroSection.styled';

export const HeroSection = () => {
  return (
    <Section>
      <Container>
        <Form />
      </Container>
    </Section>
  );
};
