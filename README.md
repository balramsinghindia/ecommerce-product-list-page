# E-commerce Product List Page

## Quick start
- git clone https://github.com/balramsinghindia/ecommerce-product-list-page.git
- cd ecommerce-product-list-page
- yarn install or npm i
- yarn run dev or npm run dev
- open URL http://localhost:3000/ in browser

## features
1. [Atomic Design Pattern](https://blog.bitsrc.io/simplify-complex-ui-by-implementing-the-atomic-design-in-react-with-bit-f4ad116ec8db)
2. [React JS](https://reactjs.org/) for frontend
3. [After JS](https://github.com/jaredpalmer/after.js/) for Server side rendering
4. [Styled components](https://www.styled-components.com/) for styling
5. [Module resolver](https://github.com/tleunen/babel-plugin-module-resolver) alias
6. node-fetch for server side API call
7. npm and yarn for package dependencies
8. ES6 latest features


## Scalable Frontend Architecture
Codebase follows Atomic Design Pattern that allows scalable architecture.

```
.
├── README.md
├── package-lock.json
├── package.json
├── src
│   ├── Document.js
│   ├── assets
│   │   └── products
│   │       ├── placeholder.png
│   │       ├── product-1.jpg
│   │       ├── product-2.jpg
│   │       ├── product-3.jpg
│   │       ├── product-4.jpg
│   │       ├── product-5.jpg
│   │       ├── product-6.jpg
│   │       ├── product-7.jpg
│   │       └── product-8.jpg
│   ├── client.js
│   ├── components
│   │   ├── atoms
│   │   │   ├── Dropdown
│   │   │   │   └── Dropdown.js
│   │   │   ├── Image
│   │   │   │   └── Image.js
│   │   │   ├── Tag
│   │   │   │   └── Tag.js
│   │   │   └── index.js
│   │   ├── molecules
│   │   │   ├── Product
│   │   │   │   ├── Product.js
│   │   │   │   └── Product.style.js
│   │   │   ├── SizeFilter
│   │   │   │   └── SizeFilter.js
│   │   │   └── index.js
│   │   ├── organisms
│   │   │   ├── ProductsHeader
│   │   │   │   ├── ProductsHeader.js
│   │   │   │   └── ProductsHeader.style.js
│   │   │   ├── ProductsList
│   │   │   │   ├── ProductList.style.js
│   │   │   │   └── ProductsList.js
│   │   │   └── index.js
│   │   └── templates
│   │       ├── ListPage.js
│   │       └── ListPage.style.js
│   ├── global
│   │   ├── config.js
│   │   ├── index.js
│   │   ├── locale.js
│   │   ├── noop.js
│   │   ├── services.js
│   │   └── withStyle.js
│   ├── index.js
│   ├── routes.js
│   ├── server.js
│   └── styles
│       └── theme
│           └── color.js
├── static
│   └── products.json
└── yarn.lock
```

## Atomic Design pattern
Atomic Design helps to build consistent, solid and reusable design systems. Plus, in the world of React, Vue and frameworks that stimulate the componentization, Atomic Design is used unconsciously; but when used in the right way, it becomes a powerful ally for developers.

The name Atomic Design comes from the idea of Chemistry Periodic Table, separating the components in atoms, molecules, organisms, templates and pages.

![Atomic Design pattern](https://user-images.githubusercontent.com/4838076/33235048-d083dca6-d217-11e7-9aea-9a5ef5ae6fe7.png)

## React JS
React JS is a declarative, efficient, and flexible JavaScript library for building user interfaces.

## After JS
After.js is baby of Next.js and React Router. After.js enables Next.js-like data fetching with any React SSR app that uses React Router 4. Next.js is React framework for Server side rendering with cool deatures like Automatic code splitting, filesystem based routing, hot code reloading and universal rendering.

## Styled components
Styled components use the best bits of ES6 and CSS to style your apps. It allows developers to write CSS in JS mode using ES6 features and supports modern CSS preprocessor features.


## Further Improvements
- Add Array.includes Polyfill to run the application in IE
- API interceptor to handle errors and exceptions from single place
- i18n
- Quality checks (Unit test cases, Sonar)
- Performance check
- Accessibility check
- Security check
- Integration Test
- CI/CD implementation
