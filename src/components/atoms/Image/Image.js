import React from 'react';
import PropTypes from "prop-types";

/**
  * @desc Image component can be used to render images
  *  src and alt are mendate props for this component to render
*/

const propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
  placeholderSrc: PropTypes.string,
};

const defaultProps = {
  src: '',
  alt: 'Product loading',
  className: 'image',
  placeholderSrc: 'products/placeholder.png'
};

const Image = React.memo(({ className, src, alt, placeholderSrc, ...other }) => (
  <img
    className={className}
    src={src}
    alt={alt}
    {...other}
    onError={event => {
      event.target.src = placeholderSrc;
    }}
  />
));

Image.propTypes = propTypes;
Image.defaultProps = defaultProps;

export default Image;
