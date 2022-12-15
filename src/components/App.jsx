import React, { Component } from 'react';
import { Section } from "./Section/Section";
import { Form } from './Form/Form';
import { Contacts } from './Contacts/Contacts';
import { nanoid } from 'nanoid';
import { Filter } from './Filter/Filter';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

export class App extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
  }

  onFormSubmit = (name, number) => {
    const contact = {
      name,
      number,
      id: nanoid(),
    };

    if (this.state.contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase())) {
      Notify.failure('Contact with such name is already exist');
    } else {
      this.setState(prevState => ({ contacts: [...prevState.contacts, contact] }));
      Notify.success('Contact is added');
    }
  };

  onDeleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  onSearchByName = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact => contact.name.toUpperCase().includes(filter.toUpperCase()));
  }

  onInputChange = filter => {
    this.setState({
      filter 
    })
  };

  render() {
    const filteredToDos = this.onSearchByName();
    return (
      <>
        <Section title="Phonebook">
          <Form onFormSubmit={this.onFormSubmit}/>
        </Section>
        <Section title="Contacts">
          <Filter onInputChange={this.onInputChange}/>
          <Contacts contactsList={filteredToDos} onDeleteContact={this.onDeleteContact}/>
        </Section>
      </>
    )
  }
};
