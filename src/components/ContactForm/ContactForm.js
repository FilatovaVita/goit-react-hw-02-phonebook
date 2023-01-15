import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { FormStyled, InputStyle, AddButton } from './ContactForm.styled';

export class ContactForm extends Component {
  initialValues = {
    name: '',
    number: '',
  };
  schema = yup.object().shape({
    name: yup
      .string()
      .matches(
        /^[a-zA-Zа-яА-Я]+((['`_ -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
        "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      )
      .required(),
    number: yup
      .number()
      .typeError(
        'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
      )
      .required()
      .positive()
      .integer(),
  });
  handleSubmit = ({ name, number }, { resetForm }) => {
    const contact = { id: nanoid(), name, number };
    this.props.onSubmit(contact);
    resetForm();
  };

  render() {
    return (
      <Formik
        initialValues={this.initialValues}
        onSubmit={this.handleSubmit}
        validationSchema={this.schema}
      >
        <FormStyled>
          <label>Name</label>
          <InputStyle type="text" name="name" placeholder="Your Name" />
          <ErrorMessage name="name">
            {msg => <div style={{ color: 'red' }}>{msg}</div>}
          </ErrorMessage>

          <label>Number</label>
          <InputStyle
            type="tel"
            name="number"
            placeholder="Your Phone number"
          />
          <ErrorMessage name="number">
            {msg => <div style={{ color: 'red' }}>{msg}</div>}
          </ErrorMessage>

          <AddButton type="submit">Add Contact</AddButton>
        </FormStyled>
      </Formik>
    );
  }
}
