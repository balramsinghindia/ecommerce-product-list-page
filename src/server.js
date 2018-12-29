import express from 'express';
import { render } from '@jaredpalmer/after';
import routes from './routes';
import MyDocument from 'pages/Document';
import products from '../static/products.json';
const assets = require(process.env.RAZZLE_ASSETS_MANIFEST);

const server = express();


/**
  * @desc server.js creates an Express JS server and exposes APIs inclusing
  * Products API.
*/


server
  .disable('x-powered-by')
  .use(express.static('src/assets'))

  .get('/products', (req, res) => {
    res.json(products)
  })

  .get('/*', async (req, res) => {
    try {
      const html = await render({
        req,
        res,
        document: MyDocument,
        routes,
        assets,
        // Anything else you add here will be made available
        // within getInitialProps(ctx)
        // e.g a redux store...
        customThing: 'thing',
      });
      res.send(html);
    } catch (error) {
      console.error(error);
      res.json({ message: error.message, stack: error.stack });
    }
  });

export default server;
