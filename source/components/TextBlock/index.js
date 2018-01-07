import React from 'react';
import PropTypes from 'prop-types';

import style from './style.scss';

// @flow
const TextBlock = ({input, additionalClassNames, truncate}: {input: string, additionalClassNames: string, truncate: number}) => {
  const text = truncate === 0 ? input : `${input.substr(0, truncate)}...`;

  return <p className={`${style['TextBlock']} ${additionalClassNames}`}>{text}</p>;
};

TextBlock.propTypes = {
  input: PropTypes.string,
  additionalClassNames: PropTypes.string,
  truncate: PropTypes.number
};

TextBlock.defaultProps = {
  additionalClassNames: '',
  truncate: 0
};

export default TextBlock;
