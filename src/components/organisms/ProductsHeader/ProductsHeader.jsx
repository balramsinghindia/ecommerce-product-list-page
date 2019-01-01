import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { SizeFilter } from 'components/molecules';
import ProductsHeaderStyle from './ProductsHeader.style';

/**
  * @desc ProductsHeader component is a organism consist of Product Category
  *  Heading and Size filter component.
  *  productCategory is name of Product Category. filterSizes is array of sizes
  *  filterProducts : this method is used to filter products based on size
*/

class ProductsHeader extends PureComponent {
  constructor(props) {
    super(props);
    this.filterProducts = this.filterProducts.bind(this);
  }

  filterProducts(size) {
    const { filterProducts } = this.props;
    filterProducts(size);
  }

  render() {
    const { productCategory, filterSizes } = this.props;
    return (
      <ProductsHeaderStyle>
        <h2>{productCategory}</h2>
        <SizeFilter
          filterSizes={filterSizes}
          filterProducts={this.filterProducts}
          className="size-filter"
        />
      </ProductsHeaderStyle>
    );
  }
}

ProductsHeader.propTypes = {
  productCategory: PropTypes.string.isRequired,
  filterSizes: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    }),
  ).isRequired,
  filterProducts: PropTypes.func.isRequired,
};

export default ProductsHeader;
