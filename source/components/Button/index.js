// @flow
import React from 'react';
import PropTypes from 'prop-types';
import { BUTTON_ACCEPT } from '../../constants/buttonTypes';

import ClassNameBuilder from 'bem-classname-builder';

import style from './style.scss';

const bem = new ClassNameBuilder(style, 'Button', true);

const Button = ({ children, type, onClick, additionalClasses }: { children: String, type: String, onClick: Function, additionalClasses: String }) => {
  const m = type === BUTTON_ACCEPT ? 'Accept' : 'Decline';
  const className = `${bem.get()} ${bem.get({ m })} ${additionalClasses}`;

  return <button onClick={onClick} className={className}>{children}</button>;
};

Button.propTypes = {
  text: PropTypes.string,
  type: PropTypes.string,

};

Button.defaultProps = {
  type: BUTTON_ACCEPT,
  onClick: () => {},
  additionalClasses: ''
};

export default Button;
