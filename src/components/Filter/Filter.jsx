import React from 'react';
import PropTypes from 'prop-types';
//Style
import { FilterContainer, Label, Input } from './Filter.styled';

const Filter = ({ filter, onChangeInfo }) => {
  return (
    <FilterContainer>
      <Label>
        {'Find contacts by name '}
        <Input
          type="text"
          name="filter"
          onChange={onChangeInfo}
          value={filter}
          required
        />
      </Label>
    </FilterContainer>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChangeInfo: PropTypes.func.isRequired,
};

export default Filter;
