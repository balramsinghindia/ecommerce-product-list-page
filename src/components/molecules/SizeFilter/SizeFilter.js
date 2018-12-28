import React from 'react';
import PropTypes from "prop-types";
import { Dropdown } from 'components/atoms';
import { noop } from 'global';

/**
  * @desc SizeFilter component can be used to display a Dropdown of sizes.
  *  This component also passes filterProducts feature to its Parent
  *  @filterSizes : filterSizes array contains array sizes
*/


const propTypes = {
  filterSizes: PropTypes.array.isRequired,
  filterProducts: PropTypes.func
};

const defaultProps = {
  filterSizes: [],
  filterProducts: noop
};

const SizeFilter = React.memo(props => {
  const { filterSizes, filterProducts } = props;
  return (
    <Dropdown
      options={filterSizes}
      onSelect={selected => filterProducts(selected)}
      className="size-filter"
    />
  );
});

SizeFilter.propTypes = propTypes;
SizeFilter.defaultProps = defaultProps;

export default SizeFilter;
