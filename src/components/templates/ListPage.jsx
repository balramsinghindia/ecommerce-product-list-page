import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import fetch from 'node-fetch';
import { services, config, locale } from 'global';
import { ProductsHeader, ProductsList } from 'components/organisms';
import ListStyle from './ListPage.style';

/**
  * @desc ListPage component can be used to render Women's top products along
  *  with size filter
  * products: products JSON is received from backend
  * filterdProducts: filterProducts are products filterd based on size. Finally
  * they are sent to ProductList component to render filtered products.
*/

class ListPage extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      filterdProducts: [],
      products: [],
    };
    this.filterProductsBasedOnSize = this.filterProductsBasedOnSize.bind(this);
  }

  componentDidMount() {
    const { products } = this.props;
    this.setState({
      products,
    });
  }

  filterProductsBasedOnSize(size) {
    const { products } = this.state;
    // Add Array.includes Polyfill to run the application in IE
    const filterdProducts = products.filter(product => product.size.includes(size));
    this.setState({
      filterdProducts,
    });
  }


  render() {
    const { products, filterdProducts } = this.state;
    return (
      <ListStyle>
        <ProductsHeader
          productCategory={locale.categoryPage.heading}
          filterProducts={this.filterProductsBasedOnSize}
          filterSizes={config.productSizes}
        />
        <ProductsList
          productsData={
           filterdProducts.length ? filterdProducts : products
          }
        />
      </ListStyle>
    );
  }
}

ListPage.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      productImage: PropTypes.string.isRequired,
      productName: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      isExclusive: PropTypes.bool.isRequired,
      isSale: PropTypes.bool.isRequired,
    }),
  ).isRequired,
};


ListPage.getInitialProps = async () => {
  try {
    const res = await fetch(services.getProductsList);
    const products = await res.json();
    return {
      products,
    };
  } catch (e) {
    return ({ error: locale.error.serverError });
  }
};

export default ListPage;
