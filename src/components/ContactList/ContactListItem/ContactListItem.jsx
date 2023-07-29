import React from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
//Style
import './ContactListItem.scss';

const ContactListItem = ({ id, name, number, onDeleteClick }) => {
  const telId = nanoid();
  return (
    <li className="contact-item">
      <a id={telId} className="contact-item__link" href={'tel:' + number}>
        <p className="contact-item__name">{name}</p>
        <p className="contact-item__number">{number}</p>
      </a>
      <button
        className="contact-item__button"
        type="button"
        onClick={() => {
          onDeleteClick(id);
        }}
      >
        Delete
      </button>
    </li>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
};

export default ContactListItem;
