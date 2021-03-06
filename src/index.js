import http from 'http';
import app from './server';

const server = http.createServer(app);

let currentApp = app;

/**
  * @desc index.js file is used to create server and implement hot reload module
*/

server.listen(process.env.PORT || 3000, error => ({
  if (error) {
    console.log(error);
  }
}));

if (module.hot) {
  console.log('✅  Server-side HMR Enabled!');

  module.hot.accept('./server', () => {
    console.log('🔁  HMR Reloading `./server`...');
    server.removeListener('request', currentApp);
    const newApp = require('./server').default;
    server.on('request', newApp);
    currentApp = newApp;
  });
}
