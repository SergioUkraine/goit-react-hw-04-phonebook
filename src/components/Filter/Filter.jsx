import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
//Style
import './Filter.scss';

class Filter extends Component {
  filterId = nanoid();
  render() {
    const { filter, onChangeInfo } = this.props;
    return (
      <label htmlFor={this.filterId}>
        {'Find contacts by name '}
        <input
          id={this.filterId}
          type="text"
          name="filter"
          onChange={onChangeInfo}
          value={filter}
          required
        />
      </label>
    );
  }
}

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChangeInfo: PropTypes.func.isRequired,
};

export default Filter;
