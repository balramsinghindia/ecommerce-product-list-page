import React from 'react';
import PropTypes from "prop-types";

/**
  * @desc Product component can be used to render each product
  *  This component will render product details such as Product name, size, price, product image, sale and exclusive etc
  *  @product : product object contains details of product
*/
const propTypes = {
  product: PropTypes.object.isRequired,
};

const defaultProps = {
  product: {}
};

const Product = React.memo(props => {
  const { product } = props;
  return (
    <div className="product">
      {product.productName}
    </div>
  );
});


Product.propTypes = propTypes;
Product.defaultProps = defaultProps;

export default Product;
