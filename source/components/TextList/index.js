import React from 'react';
import PropTypes from 'prop-types';
import { NORMAL_TEXT_LIST } from '../../constants/textListTypes';

import style from './style.scss';

import ClassNameBuilder from 'bem-classname-builder';
const bem = new ClassNameBuilder(style, 'TextList');

// @flow
const TextList = ({ items, additionalClassNames, type }: { items: Array, additionalClassNames: string, type: string }) => {
  const mainClassName = type === NORMAL_TEXT_LIST ? bem.get() : `${bem.get()} ${bem.get({ m: 'Small' })}`;

  return <ul className={`${mainClassName} ${additionalClassNames}`}>
    {items.map((item, i) => <li key={i} className={bem.get({ e: 'Item' })} dangerouslySetInnerHTML={{ __html: item }} />)}
  </ul>;
};

TextList.propTypes = {
  items: PropTypes.array,
  additionalClassNames: PropTypes.string,
  type: PropTypes.string
};

TextList.defaultProps = {
  items: [],
  additionalClassNames: '',
  type: NORMAL_TEXT_LIST
};

export default TextList;
