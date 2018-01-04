import React from 'react';
import PropTypes from 'prop-types';

import style from './style.scss';

// @flow
const TextBlock = ({input, additionalClassNames}: {input: string, additionalClassNames: string}) => <p className={`${style['TextBlock']} ${additionalClassNames}`}>{input}</p>;

TextBlock.propTypes = {
  input: PropTypes.string,
  additionalClassNames: PropTypes.string
};

TextBlock.defaultProps = {
  additionalClassNames: ''
};

export default TextBlock;
