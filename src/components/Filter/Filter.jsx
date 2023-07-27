import React, { Component } from 'react';

class Filter extends Component {
  render() {
    const { filter, onChangeInfo } = this.props;
    return (
      <label htmlFor="filterId">
        {'Find contacts by name '}
        <input
          id="filterId"
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

export default Filter;
