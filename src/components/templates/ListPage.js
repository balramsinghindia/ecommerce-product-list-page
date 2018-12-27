import React, { Component } from 'react';
import logo from './react.svg';
import HomeStyle from './ListPage.style';
import withStyle from "common";
import { Link } from 'react-router-dom';
import styled from 'styled-components';

class Home extends Component {
  static async getInitialProps({ req, res, match, history, location, ...ctx }) {
    return { stuff: 'whatevs' };
  }
  render() {
    console.log(this.props);
    return (
        <Ab className="Home">
          <div className="Home-header">
            <img src={logo} className="Home-logo" alt="logo" />
            <div>Welcomse to After.js</div>
          </div>
          <p className="Home-intro">
            To get started, edit
            <code>src/Home.js</code> or <code>src/About.js</code>and save to
            reload.
          </p>
          <Link to="/about">About -></Link>

        </Ab>
    );
  }
}

export default Home;
const Ab = styled.div`
  color: red;

  .Home-header {
    color: black;
  }
`;
