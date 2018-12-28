import React, { PureComponent } from 'react';
import PropTypes from "prop-types";
import { SizeFilter } from 'components/molecules';
import { noop } from 'global';

/**
  * @desc ProductsHeader component is a organism consist of Product Category Heading and Size filter component.
  *  productCategory is name of Product Category. filterSizes is array of sizes
  *  filterProducts : filterProducts method is used to filter products based on size
*/

const propTypes = {
  productCategory: PropTypes.string,
  filterSizes: PropTypes.array.isRequired,
  filterProducts: PropTypes.func,
};

const defaultProps = {
  filterSizes: [],
  productCategory: '',
  filterProducts: noop
};

class ProductsHeader extends PureComponent {
  constructor(props) {
    super(props);
    this.filterProducts = this.filterProducts.bind(this);
  }

  filterProducts(size) {
    this.props.filterProducts(size);
  }

  render () {
  const { productCategory, filterSizes } = this.props;
  return (
    <div className="container">
      <h1 className="category">{productCategory}</h1>
      <SizeFilter filterSizes={filterSizes}  filterProducts={this.filterProducts} />
    </div>
  );
}
};


ProductsHeader.propTypes = propTypes;
ProductsHeader.defaultProps = defaultProps;

export default ProductsHeader;