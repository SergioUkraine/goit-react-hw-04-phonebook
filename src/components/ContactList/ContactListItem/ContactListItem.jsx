import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
//Style
import './ContactListItem.scss';

class ContactListItem extends Component {
  telId = nanoid();
  render() {
    const { id, name, number, onDeleteClick } = this.props;
    return (
      <li className="contact-item">
        <a
          id={this.telId}
          className="contact-item__link"
          href={'tel:' + number}
        >
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
  }
}

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
};

export default ContactListItem;
