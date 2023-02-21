import PropTypes from 'prop-types';

import {
  Form,
  Input,
  FormBtn,
  FormBlock,
  Label,
  FormLabelName,
} from './ContactForm.styled';
import { useState } from 'react';

export const ContactForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'phone':
        setPhone(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({ name, phone });
    setName('');
    setPhone('');
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <FormBlock>
          <Label htmlFor="name">
            <FormLabelName>Name</FormLabelName>
            <Input
              value={name}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              onChange={handleChange}
              placeholder="Enter Name"
            />
          </Label>
          <Label htmlFor="phone">
            <FormLabelName>Number</FormLabelName>
            <Input
              value={phone}
              type="tel"
              name="phone"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              onChange={handleChange}
              placeholder="Enter Phone Number"
            />
          </Label>
        </FormBlock>
        <FormBtn type="submit">Add contact</FormBtn>
      </Form>
    </>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
