import React from 'react';
import PropTypes from 'prop-types';
//Style
import './Filter.scss';

const Filter = ({ filter, onChangeInfo }) => {
  return (
    <div className="filter">
      <label className="filter__label">
        {'Find contacts by name '}
        <input
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
