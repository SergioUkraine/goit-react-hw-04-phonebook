//Hooks
import useLocalStorage from 'hooks/useLocalStorage';
import { useState } from 'react';
import { nanoid } from 'nanoid';

//Components
import Filter from './Filter';
import ContactForm from './ContactForm';
import ContactList from './ContactList';

//Data
import defaultContacts from '../data/contacts.json';

//Style
import {
  Container,
  Title,
  Header,
  MessageEmpty,
  MessageNotFound,
} from './App.styled';

function App() {
  const [contacts, setContacts] = useLocalStorage('contacts', defaultContacts);
  const [filter, setFilter] = useState('');

  const getFilteredContacts = () => {
    const filterQuery = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterQuery)
    );
  };

  const getFilterQuery = e => {
    setFilter(e.target.value);
  };

  const addContact = contact => {
    const { name, number } = contact;
    if (isContactExist(name)) {
      window.alert(name + ' is already in contacts!');
      return;
    }
    setContacts(prevContacts => {
      return [
        {
          id: nanoid(),
          name: name,
          number: number,
        },
        ...prevContacts,
      ];
    });
  };

  const isContactExist = newContact => {
    return contacts.some(contact => contact.name === newContact);
  };

  const deleteContact = id => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== id)
    );
  };

  const listShowLogic = () => {
    const messageIsEmpty = <MessageEmpty>Contact list is empty</MessageEmpty>;
    const messageIsNothingFound = (
      <MessageNotFound>Nothing found</MessageNotFound>
    );
    if (contacts.length === 0) {
      return messageIsEmpty;
    } else if (getFilteredContacts().length === 0) {
      return (
        <div>
          <Filter filter={filter} onChangeInfo={getFilterQuery} />
          {messageIsNothingFound}
        </div>
      );
    } else
      return (
        <div>
          <Filter filter={filter} onChangeInfo={getFilterQuery} />
          <ContactList
            contacts={getFilteredContacts()}
            onDeleteClick={deleteContact}
          />
        </div>
      );
  };

  return (
    <Container>
      <Title>Phonebook</Title>
      <ContactForm onSubmit={addContact} />
      <Header>Contacts</Header>
      {listShowLogic()}
    </Container>
  );
}

export default App;
