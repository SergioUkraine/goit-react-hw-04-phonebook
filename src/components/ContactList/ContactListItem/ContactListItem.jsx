import React, { Component } from 'react';
import PropTypes from 'prop-types';
//Style
import './ContactListItem';

class ContactListItem extends Component {
  render() {
    const { id, name, number, onDeleteClick } = this.props;

    return (
      <li>
        <p>{name}</p>
        <p>{number}</p>
        <button
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
