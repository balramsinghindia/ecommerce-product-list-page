import React from 'react';
import PropTypes from "prop-types";

/**
  * @desc Tag component can be used to display tags associated with each product.
  *  This component expects two props Tag Label and tag type
  *  @tagType : can be either sale or exclusive
*/

const propTypes = {
  tagLabel: PropTypes.string.isRequired,
  tagType: PropTypes.string
};

const defaultProps = {
  tagLabel: 'Sale',
  tagType: 'sale-tag',
};

const Tag = React.memo(props => {
  const { tagLabel, tagType } = props;
  return <div className={tagType}>{tagLabel}</div>;
});

Tag.propTypes = propTypes;
Tag.defaultProps = defaultProps;

export default Tag;
