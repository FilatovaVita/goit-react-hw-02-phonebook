import React, { Component } from 'react';
import { ContactForm } from '../ContactForm/ContactForm';
import { ContactList } from '../ContactList/ContactList';
import { Filter } from '../Filter/Filter';
import {
  PhonebookContainer,
  HeaderTitel,
  SecondTitel,
  DefoltMassege,
} from './App.styled';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };
  onFormSubmit = ({ id, name, number }) => {
    const contact = { id, name, number };

    this.setState(({ contacts }) => {
      const nameInContacts = this.state.contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      );
      if (nameInContacts) {
        alert(`${name} is already in contacts`);
        return;
      }
      return { contacts: [contact, ...contacts] };
    });
  };
  onFilter = e => {
    this.setState({
      filter: e.target.value,
    });
  };

  onDelete = id => {
    const filteredContacts = this.state.contacts.filter(
      contact => contact.id !== id
    );
    this.setState(prevState => {
      return { ...prevState, contacts: [...filteredContacts] };
    });
  };

  onFilterContacts = () => {
    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );
  };
  render() {
    const { filter } = this.state;
    return (
      <PhonebookContainer>
        <HeaderTitel>Phonebook</HeaderTitel>
        <ContactForm onSubmit={this.onFormSubmit} />
        {this.state.contacts.length ? (
          <div>
            <SecondTitel>Contacts</SecondTitel>
            <Filter onFilter={this.onFilter} filter={filter} />
          </div>
        ) : (
          <DefoltMassege>
            You dont have contacts! Please, field this Contact Form!
          </DefoltMassege>
        )}

        <ContactList
          onDelete={this.onDelete}
          filterContacts={this.onFilterContacts()}
        />
      </PhonebookContainer>
    );
  }
}
