import React, { useState } from 'react';
import { Button } from '../button/Button';
import { IoIosArrowForward } from 'react-icons/io';
import { InButtonWrap, FormComp } from './Form.styled';

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
  };

  return (
    <FormComp onSubmit={handleSubmit} autoComplete="off">
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
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />

      <Button type="submit">{buttonChildren()}</Button>
    </FormComp>
  );
};
