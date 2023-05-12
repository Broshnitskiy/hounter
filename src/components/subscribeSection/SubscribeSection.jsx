import React from 'react';
import { SectionTitle } from '../sectionTitle/SectionTitle';
import { Form } from '../form/Form';
import { Container } from 'components/container/Container';
import {
  Section,
  SectionTitleCont,
  FormWrapper,
} from './SubscribeSection.styled';

export const SubscribeSection = () => {
  return (
    <Section>
      <Container>
        <div>
          <SectionTitleCont>
            <SectionTitle>
              Subscribe For More Info and update from Hounter
            </SectionTitle>
          </SectionTitleCont>
          <FormWrapper>
            <Form formType="email" />
          </FormWrapper>
        </div>
      </Container>
    </Section>
  );
};
