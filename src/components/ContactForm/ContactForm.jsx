import React, { Component } from 'react';
import { nanoid } from 'nanoid';

class ContactForm extends Component {
  nameId = nanoid();
  numberId = nanoid();
  render() {
    const { onChangeInfo, onSubmitForm, name, number } = this.props;
    return (
      <form onSubmit={onSubmitForm}>
        <label htmlFor="nameId">
          {'Name '}
          <input
            id="nameId"
            type="text"
            name="name"
            onChange={onChangeInfo}
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <br />
        <br />
        <label htmlFor="numberId">
          {'Number '}
          <input
            id="numberId"
            type="tel"
            name="number"
            onChange={onChangeInfo}
            value={number}
            pattern="\+?[0-9\s\-\(\)]+"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>

        <br />
        <br />
        <button type="submit">Add contact</button>
      </form>
    );
  }
}

export default ContactForm;
