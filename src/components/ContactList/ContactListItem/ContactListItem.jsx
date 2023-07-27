import React, { Component } from 'react';

class ContactListItem extends Component {
  render() {
    const { name, number } = this.props;
    return (
      <li>
        <span>{name}</span>
        <span>: </span>
        <span>{number}</span>
      </li>
    );
  }
}

export default ContactListItem;
