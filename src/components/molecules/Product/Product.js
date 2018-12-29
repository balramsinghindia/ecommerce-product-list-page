import React from 'react';
import PropTypes from 'prop-types';
import { Image, Tag } from 'components/atoms';

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
      <li className='product'>
       <Image
         src={'products/' + product.productImage}
         alt={product.productName}
       />
       <div>
         {product.isExclusive && (
           <Tag tagType='exclusive-tag' tagLabel="Exclusive" />
         )}
         {product.isSale && <Tag tagType='sale-tag' tagLabel="Sale" />}
         <div className='product-description'>
           <div className='product-name'>{product.productName}</div>
           <div className='product-price'>{product.price}</div>
         </div>
       </div>
     </li>
  );
});


Product.propTypes = propTypes;
Product.defaultProps = defaultProps;

export default Product;
