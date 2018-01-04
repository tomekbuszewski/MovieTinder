import React from 'react';
import PropTypes from 'prop-types';

/**
 * Image component
 * @param {string} src
 * @param {string} alt
 * @param {string|bool} title
 * @param {any} className
 * @returns {*}
 * @constructor
 */
// @flow
const Image = ({ src, alt, title, className }: { src: string, alt: string, title: string | boolean, className: any }) =>
<img src={src} alt={alt} title={title} className={className} />;

Image.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.bool])
};

Image.defaultProps = {
  title: false,
  alt: 'Image',
  className: ''
};

export default Image;
