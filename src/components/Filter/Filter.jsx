import React from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
//Style
import './Filter.scss';

const Filter = ({ filter, onChangeInfo }) => {
  const filterId = nanoid();

  return (
    <div className="filter">
      <label className="filter__label" htmlFor={filterId}>
        {'Find contacts by name '}
        <input
          id={filterId}
          className="filter__input"
          type="text"
          name="filter"
          onChange={onChangeInfo}
          value={filter}
          required
        />
      </label>
    </div>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChangeInfo: PropTypes.func.isRequired,
};

export default Filter;
