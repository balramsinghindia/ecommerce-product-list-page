import React from 'react';
import PropTypes from 'prop-types';
import { Dropdown } from 'components/atoms';

/**
  * @desc SizeFilter component can be used to display a Dropdown of sizes.
  *  This component also passes filterProducts feature to its Parent
  *  @filterSizes : filterSizes array contains array sizes
*/

const SizeFilter = React.memo(({ filterSizes, filterProducts }) => <Dropdown options={filterSizes} onSelect={selected => filterProducts(selected)} className="size-filter" />);

SizeFilter.propTypes = {
  filterSizes: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    }),
  ).isRequired,
  filterProducts: PropTypes.func.isRequired,
};

export default SizeFilter;
