import React from 'react';
import { ServerStyleSheet } from 'styled-components';
import PropTypes from 'prop-types';
import { AfterRoot, AfterData } from '@jaredpalmer/after';

/**
  * @desc Document component is used for overiding HTML document struture, this
  *  file is provided by AfterJS library to modify HTML document when using
  *  AfterJS with Styled Components
*/

export default class Document extends React.Component {
  static async getInitialProps({ assets, data, renderPage }) {
    const sheet = new ServerStyleSheet()
    const page = await renderPage(App => props => sheet.collectStyles(<App {...props} />))
    const styleTags = sheet.getStyleElement()
    return {
      assets,
      data,
      ...page,
      styleTags,
    };
  }

 render() {
    const { helmet, assets, data, styleTags } = this.props;
    // get attributes from React Helmet
    const htmlAttrs = helmet.htmlAttributes.toComponent();
    const bodyAttrs = helmet.bodyAttributes.toComponent();

    return (
      <html {...htmlAttrs}>
        <head>
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta charSet="utf-8" />
          <title>Women&apos;s tops</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          {helmet.title.toComponent()}
          {helmet.meta.toComponent()}
          {helmet.link.toComponent()}
          {/** here is where we put our Styled Components styleTags... */}
          {styleTags}
        </head>
        <body {...bodyAttrs}>
          <AfterRoot />
          <AfterData data={data} />
          <script
            type="text/javascript"
            src={assets.client.js}
            defer
            crossOrigin="anonymous"
          />
        </body>
      </html>
    );
  }
}

Document.propTypes = {
  helmet: PropTypes.object,
  assets: PropTypes.object,
  data: PropTypes.object,
  styleTags: PropTypes.array,
};

Document.defaultProps = {
  helmet: {},
  assets: {},
  data: {},
  styleTags: {},
};
