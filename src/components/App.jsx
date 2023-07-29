import React, { Component } from 'react';
import { nanoid } from 'nanoid';
//Components
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
//Style
import './App.scss';

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

  listShowLogic = () => {
    const { filter, contacts } = this.state;
    const messageIsEmpty = (
      <p className="containter__is-empty-message">Contact list is empty</p>
    );
    const messageIsNothingFound = (
      <p className="containter__is-not-found-message">Nothing found</p>
    );
    if (contacts.length === 0) {
      return messageIsEmpty;
    } else if (this.getFilteredContacts().length === 0) {
      return (
        <React.Fragment>
          <Filter filter={filter} onChangeInfo={this.getFilterQuery} />
          {messageIsNothingFound}
        </React.Fragment>
      );
    } else
      return (
        <React.Fragment>
          <Filter filter={filter} onChangeInfo={this.getFilterQuery} />
          <ContactList
            contacts={this.getFilteredContacts()}
            onDeleteClick={this.deleteContact}
          />
        </React.Fragment>
      );
  };

  render() {
    return (
      <div className="container">
        <h1 className="container__title">Phonebook</h1>
        <ContactForm onSubmitForm={this.addContact} />
        <h2 className="container__header">Contacts</h2>
        {this.listShowLogic()}
      </div>
    );
  }
}

export default App;
