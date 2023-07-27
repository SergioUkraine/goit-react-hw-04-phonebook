import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactListItem from './ContactListItem';

class ContactList extends Component {
  keys = () => {
    return this.props.contacts.map(() => nanoid());
  };
  filterId = nanoid();

  render() {
    const { contacts } = this.props;
    const keys = this.keys();
    return (
      <ul>
        {contacts.map(({ name, number }, index) => {
          return (
            <ContactListItem
              key={keys[index]}
              name={name}
              number={number}
            />
          );
        })}
      </ul>
    );
  }
}

export default ContactList;
