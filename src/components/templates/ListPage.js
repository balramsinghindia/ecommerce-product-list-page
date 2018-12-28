import React, { PureComponent, Fragment } from 'react';
import PropTypes from "prop-types";

import fetch from 'node-fetch';
import styled from 'styled-components';
import { services, config, locale } from 'global';
import { ProductsHeader, ProductsList } from 'components/organisms';

const propTypes = {
  products: PropTypes.array.isRequired,
};

const defaultProps = {
  products: [],
};

class ListPage extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      filterdProducts:[],
      products:[]
    }
    this.filterProductsBasedOnSize = this.filterProductsBasedOnSize.bind(this);
  }

  componentDidMount() {
    this.setState({
      products: this.props.products
    });
  }

  filterProductsBasedOnSize(size) {
    let products = this.state.products;
    const filterdProducts = products.filter(product => product.size.includes(size));
    this.setState({
      filterdProducts
    });
  }


  render() {
    const { products, filterdProducts } = this.state;
    return (
        <Fragment>
            <ProductsHeader productCategory={locale.categoryPage.heading} filterProducts={this.filterProductsBasedOnSize} filterSizes={config.productSizes}/>
            <ProductsList productsData={filterdProducts.length > 0 ? filterdProducts : products}/>
        </Fragment>
    );
  }
}

ListPage.propTypes = propTypes;
ListPage.defaultProps = defaultProps;

export default ListPage;
const Ab = styled.div`
  color: red;

  .Home-header {
    color: black;
  }
`;


ListPage.getInitialProps = async ({ req }) => {
  try {
    const res = await fetch(services.getProductsList);
    const products = await res.json();
    return {
      products
    };
  } catch (e) {
    return ({error:locale.error.serverError});
  }
};
