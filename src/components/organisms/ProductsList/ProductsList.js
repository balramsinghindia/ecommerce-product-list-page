import React, { Fragment } from 'react';
import PropTypes from "prop-types";
import { Product } from 'components/molecules';
/**
  * @desc ProductsList component can be used to render render list of products.
  *  @productsData : contains array of products information
*/

const propTypes = {
  productsData: PropTypes.array.isRequired,
};

const defaultProps = {
  productsData: [],
};

const ProductsList = React.memo(props => {
  const { productsData } = props;
  return (
    <Fragment>
        {productsData.map(product => <Product product={product} key={product.index} />)}
    </Fragment>
  );
});

ProductsList.propTypes = propTypes;
ProductsList.defaultProps = defaultProps;

export default ProductsList;
