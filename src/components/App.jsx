import React, { Component } from 'react';
import { nanoid } from 'nanoid';
//Components
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
//Style
import {
  Container,
  Title,
  Header,
  MeassageEmpty,
  MeassageNotFound,
} from './App.styled';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  getFilteredContacts = () => {
    const filter = this.state.filter.toLowerCase();
    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter)
    );
  };

  getFilterQuery = e => {
    this.setState({ filter: e.target.value });
  };

  addContact = contact => {
    const { name, number } = contact;
    if (this.isContactExist(name)) {
      window.alert(name + ' is already in contacts!');
      return;
    }
    this.setState(prevState => ({
      contacts: [
        {
          id: nanoid(),
          name: name,
          number: number,
        },
        ...prevState.contacts,
      ],
    }));
  };

  isContactExist = newContact => {
    return this.state.contacts.some(contact => contact.name === newContact);
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  componentDidUpdate(prevState) {
    const contactsState = JSON.stringify(this.state.contacts);
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', contactsState);
    }
  }

  componentDidMount() {
    const contactsLocalStorage = JSON.parse(localStorage.getItem('contacts'));
    if (contactsLocalStorage) {
      this.setState({ contacts: contactsLocalStorage });
    }
  }

  listShowLogic = () => {
    const { filter, contacts } = this.state;
    const messageIsEmpty = <MeassageEmpty>Contact list is empty</MeassageEmpty>;
    const messageIsNothingFound = (
      <MeassageNotFound>Nothing found</MeassageNotFound>
    );
    if (contacts.length === 0) {
      return messageIsEmpty;
    } else if (this.getFilteredContacts().length === 0) {
      return (
        <div>
          <Filter filter={filter} onChangeInfo={this.getFilterQuery} />
          {messageIsNothingFound}
        </div>
      );
    } else
      return (
        <div>
          <Filter filter={filter} onChangeInfo={this.getFilterQuery} />
          <ContactList
            contacts={this.getFilteredContacts()}
            onDeleteClick={this.deleteContact}
          />
        </div>
      );
  };

  render() {
    return (
      <Container>
        <Title>Phonebook</Title>
        <ContactForm onSubmitForm={this.addContact} />
        <Header>Contacts</Header>
        {this.listShowLogic()}
      </Container>
    );
  }
}

export default App;
