import React, { Component } from 'react';
import { nanoid } from 'nanoid';
//Style
import './ContactForm';

class ContactForm extends Component {
  nameId = nanoid();
  numberId = nanoid();

  state = { name: '', number: '' };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  addField = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmitForm = e => {
    e.preventDefault();
    this.props.onSubmitForm(this.state);
    this.reset();
  };

  render() {
    const { name, number } = this.state;
    return (
      <form onSubmit={this.onSubmitForm}>
        <label htmlFor={this.nameId}>
          {'Name '}
          <input
            id={this.nameId}
            type="text"
            name="name"
            onChange={this.addField}
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label htmlFor={this.numberId}>
          {'Number '}
          <input
            id={this.numberId}
            type="tel"
            name="number"
            onChange={this.addField}
            value={number}
            pattern="\+?[0-9\s\-\(\)]+"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    );
  }
}

export default ContactForm;
