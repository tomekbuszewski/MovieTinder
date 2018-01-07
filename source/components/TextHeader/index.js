import React from 'react';
import PropTypes from 'prop-types';

import style from './style.scss';
import { SMALL_HEADER } from '../../constants/headerTypes';

// @flow
const TextHeader = ({input, size, additionalClassNames}: {input: string, size: string, additionalClassNames: string}) => {
  const classNameModifier = size === SMALL_HEADER ? 'Small' : 'Large';
  const Tag = size === SMALL_HEADER ? 'h4' : 'h2';
  const className = `${style[`TextHeader--${classNameModifier}`]} ${style['TextHeader']} ${additionalClassNames}`;

  return <Tag className={className}>{input}</Tag>
};

TextHeader.propTypes = {
  input: PropTypes.string,
  size: PropTypes.string,
  additionalClassNames: PropTypes.string
};

TextHeader.defaultProps = {
  size: SMALL_HEADER,
  additionalClassNames: ''
};

export default TextHeader;
