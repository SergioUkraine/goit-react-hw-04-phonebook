import React from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
//Style
import {
  ListItem,
  Link,
  Name,
  Phone,
  ButtonDelete,
} from './ContactListItem.styled';

const ContactListItem = ({ id, name, number, onDeleteClick }) => {
  const telId = nanoid();
  return (
    <ListItem>
      <Link id={telId} href={'tel:' + number}>
        <Name>{name}</Name>
        <Phone>{number}</Phone>
      </Link>
      <ButtonDelete
        type="button"
        onClick={() => {
          onDeleteClick(id);
        }}
      >
        Delete
      </ButtonDelete>
    </ListItem>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
};

export default ContactListItem;
