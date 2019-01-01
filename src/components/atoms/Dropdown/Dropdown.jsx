import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

/**
  * @desc Dropdown component can be used to display a list of options. This
  *  component is connected with Styled component to add inline styles.
  *  @options : options object contains an array of object of prices,
  * productNames and productType
*/

class Dropdown extends PureComponent {
  constructor(props) {
    super(props);
    const { selected } = this.props;
    this.state = {
      value: selected,
    };
  }

  onChange(e) {
    const { value } = e.target;
    const { onSelect } = this.props;
    onSelect(value);
    this.setState({ value });
    return { value };
  }

  render() {
    const { options, className } = this.props;
    const { value } = this.state;
    return (
      <div className={`form-group select-box ${className}`}>
        {/*
          * jsx-a11y/label-has-for disabled as this is bug in eslint
          * https://github.com/evcohen/eslint-plugin-jsx-a11y/issues/477
        */}
        {/* eslint-disable jsx-a11y/label-has-for */}
        <label className="sr-only" htmlFor="select-box">
          Select
        </label>
        {/* eslint-enable jsx-a11y/label-has-for */}
        <select
          id="select-box"
          value={value}
          onChange={e => this.onChange(e)}
          className="form-control"
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

Dropdown.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    }),
  ).isRequired,
  className: PropTypes.string,
  selected: PropTypes.string,
  onSelect: PropTypes.func.isRequired,
};
Dropdown.defaultProps = {
  className: '',
  selected: '',
};

export default Dropdown;
