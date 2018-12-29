import React from 'react';

import { asyncComponent } from '@jaredpalmer/after';

/**
  * @desc routes.js handles URL and component mapping
*/

export default [
  {
    path: '/',
    exact: true,
    component: asyncComponent({
      loader: () => import('./components/templates/ListPage'),
      Placeholder: () => <div>...LOADING...</div>,
    }),
  },
];
