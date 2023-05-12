import React, { useState } from 'react';
import { Button } from '../button/Button';
import { IoIosArrowForward } from 'react-icons/io';
import {
  InButtonWrap,
  FormComp,
  SvgWrapper,
  ButtonWrapper,
} from './Form.styled';
import { ReactComponent as PointSvg } from '../../images/svg/point.svg';
import { ReactComponent as EnvelopeSvg } from '../../images/svg/envelope.svg';
import toast from 'react-hot-toast';

export const Form = ({ formType = 'text' }) => {
  const [value, setValue] = useState('');

  const buttonChildren = () => {
    if (formType === 'email') {
      return 'Subsribe Now';
    }
    if (formType === 'text') {
      return (
        <InButtonWrap>
          <span>Search</span>
          <IoIosArrowForward size={24} />
        </InButtonWrap>
      );
    }
  };

  const handleChange = e => {
    setValue(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setValue('');
    toast.success('Successfully submited!');
  };

  return (
    <FormComp onSubmit={handleSubmit} autoComplete="off">
      <SvgWrapper>
        {formType === 'text' ? <PointSvg /> : <EnvelopeSvg />}
      </SvgWrapper>

      <input
        type={formType}
        name="name"
        placeholder={
          formType === 'text'
            ? 'Search for the location you want!'
            : 'Your email here'
        }
        onChange={handleChange}
        value={value}
        pattern={
          formType === 'text'
            ? "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            : '[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$'
        }
        title={
          formType === 'text'
            ? "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            : 'Please enter a valid email address'
        }
        required
      />
      <ButtonWrapper>
        <Button type="submit">{buttonChildren()}</Button>
      </ButtonWrapper>
    </FormComp>
  );
};
