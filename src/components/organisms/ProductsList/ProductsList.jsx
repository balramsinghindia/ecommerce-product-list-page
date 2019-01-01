import React from 'react';
import PropTypes from 'prop-types';
import { Product } from 'components/molecules';
import ProductListStyle from './ProductList.style';

/**
  * @desc ProductsList component can be used to render render list of products.
  *  @productsData : contains array of products information
*/


const ProductsList = React.memo(({ productsData }) => (
  <ProductListStyle>
    {productsData.map(product => <Product product={product} key={product.index} />)}
  </ProductListStyle>
));

ProductsList.propTypes = {
  productsData: PropTypes.arrayOf(
    PropTypes.shape({
      productImage: PropTypes.string.isRequired,
      productName: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      isExclusive: PropTypes.bool.isRequired,
      isSale: PropTypes.bool.isRequired,
    }),
  ).isRequired,
};

export default ProductsList;
