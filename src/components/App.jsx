import React, { Component } from 'react';
import { nanoid } from 'nanoid';
//Components
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  filteredContacts = () => {
    const filter = this.state.filter.toLowerCase();
    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter)
    );
  };

  addField = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  addContact = e => {
    e.preventDefault();
    const { name, number } = this.state;
    this.setState(prevState => ({
      contacts: [
        {
          id: nanoid(),
          name: name,
          number: number,
        },
        ...prevState.contacts,
      ],
      name: '',
      number: '',
    }));
  };

  render() {
    const { name, number, filter } = this.state;
    return (
      <div>
        <ContactForm
          onChangeInfo={this.addField}
          onSubmitForm={this.addContact}
          name={name}
          number={number}
        />
        <Filter onChangeInfo={this.addField} filter={filter} />
        <ContactList contacts={this.filteredContacts()} />
      </div>
    );
  }
}

export default App;

// <div>
//   <h1>Phonebook</h1>
//   <ContactForm ... />

//   <h2>Contacts</h2>
//   <Filter ... />
//   <ContactList ... />
// </div>

// {
//   this.filterContacts() ? (
//     <ContactList
//       contacts={this.filterContacts()}
//       filter={filter}
//       onChangeInfo={this.addField}
//     />
//   ) : (
//     <p>No contacts</p>
//   );
// }
