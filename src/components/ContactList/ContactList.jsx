import React from 'react';
import PropTypes from 'prop-types';
//Components
import ContactListItem from './ContactListItem';
//Style
import { List } from './ContactList.styled';

const ContactList = ({ contacts, onDeleteClick }) => {
  return (
    <List>
      {contacts.map(({ id, name, number }) => {
        return (
          <ContactListItem
            key={id}
            id={id}
            name={name}
            number={number}
            onDeleteClick={onDeleteClick}
          />
        );
      })}
    </List>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDeleteClick: PropTypes.func.isRequired,
};

export default ContactList;
