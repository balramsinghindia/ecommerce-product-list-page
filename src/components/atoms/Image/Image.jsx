import React from 'react';
import PropTypes from 'prop-types';

/**
  * @desc Image component can be used to render images
  *  src and alt are mendate props for this component to render
*/

const Image = React.memo(({
  className,
  src,
  alt,
  placeholderSrc,
  ...other
}) => (
  <img
    className={className}
    src={src}
    alt={alt}
    {...other}
    onError={(e) => { e.target.onerror = null; e.target.src = placeholderSrc; }}
  />

));

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
  placeholderSrc: PropTypes.string,
};
Image.defaultProps = {
  className: 'image',
  placeholderSrc: 'products/placeholder.png',
};

export default Image;
