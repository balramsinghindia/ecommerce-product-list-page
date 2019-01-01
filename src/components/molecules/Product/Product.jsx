import React from 'react';
import PropTypes from 'prop-types';
import { Image, Tag } from 'components/atoms';
import { withStyle, locale } from 'global';
import ProductStyle from './Product.style';

/**
  * @desc Product component can be used to render each product
  *  This component will render product details such as Product name, size,
  *  price, product image, sale and exclusive etc
  *  @product : product object contains details of product
*/

const propTypes = {
  product: PropTypes.shape({
    productImage: PropTypes.string.isRequired,
    productName: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    isExclusive: PropTypes.bool.isRequired,
    isSale: PropTypes.bool.isRequired,
  }).isRequired,
};

const Product = React.memo(({ product }) => (
  <ProductStyle>
    <Image
      src={`products/${product.productImage}`}
      alt={product.productName}
    />
    <div className="product-details">
      {product.isExclusive && (
      <Tag tagType="exclusive-tag" tagLabel={locale.product.exclusive} />
      )}
      {product.isSale && <Tag tagType="sale-tag" tagLabel={locale.product.sale} />}
      <div className="product-description">
        <div className="product-name">{product.productName}</div>
        <div className="product-price">{product.price}</div>
      </div>
    </div>
  </ProductStyle>
));


Product.propTypes = propTypes;

export default withStyle(Product, ProductStyle);
