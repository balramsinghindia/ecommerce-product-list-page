import React from 'react';

import { asyncComponent } from '@jaredpalmer/after';
import { locale } from 'global';
/**
  * @desc routes.js handles URL and component mapping
*/

export default [
  {
    path: '/',
    exact: true,
    component: asyncComponent({
      loader: () => import('components/templates/ListPage'),
      Placeholder: () => <div>{locale.global.loading}</div>,
    }),
  },
];
