import React from 'react';
import { SectionTitle } from '../sectionTitle/SectionTitle';
import { Form } from '../form/Form';
import { Container } from 'components/container/Container';
import {
  Section,
  SectionTitleCont,
  FormWrapper,
  SectionWrapper,
} from './SubscribeSection.styled';
import { capitalizeWords } from '../../helpers/capitalizeWords';

export const SubscribeSection = () => {
  return (
    <Section>
      <Container>
        <SectionWrapper>
          <SectionTitleCont>
            <SectionTitle>
              {capitalizeWords(
                'subscribe for more info and update from hounter'
              )}
            </SectionTitle>
          </SectionTitleCont>
          <FormWrapper>
            <Form formType="email" />
          </FormWrapper>
        </SectionWrapper>
      </Container>
    </Section>
  );
};
