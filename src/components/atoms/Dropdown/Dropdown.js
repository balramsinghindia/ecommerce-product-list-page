import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { noop } from 'global';

/**
  * @desc Dropdown component can be used to display a list of options. This component is connected with Styled component
  *  to add inline styles.
  *  @options : options object contains an array of object of prices, productNames and productType
*/

const propTypes = {
  options: PropTypes.array.isRequired,
  className: PropTypes.string
};

const defaultProps = {
  options: [],
  className: '',
  onSelect: noop
};

class Dropdown extends PureComponent {
  state = {
    value: this.props.selected
  };

  onChange(e) {
    const { value } = e.target;
    this.props.onSelect(value);
    this.setState({ value });
    return { value };
  }

  render() {
    const { options, className } = this.props;
    return (
      <div className={`form-group select-box ${className}`}>
        <label className='sr-only' htmlFor='select-box'>
          Select
        </label>
        <select
          id='select-box'
          value={this.state.value}
          onChange={e => this.onChange(e)}
          className='form-control'
        >
          {options.map(option => (
            <option value={option.value} key={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    );
  }
}

Dropdown.propTypes = propTypes;
Dropdown.defaultProps = defaultProps;

export default Dropdown;
