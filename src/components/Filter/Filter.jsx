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
      <div className="filter">
        <label className="filter__label" htmlFor={this.filterId}>
          {'Find contacts by name '}
          <input
            id={this.filterId}
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
  }
}

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChangeInfo: PropTypes.func.isRequired,
};

export default Filter;
