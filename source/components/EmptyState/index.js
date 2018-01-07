import React from 'react';
import ClassNameBuilder from 'bem-classname-builder';

import Text from '../TextBlock';

import Logo from './logo.svg';
import style from './style.scss';

const bem = new ClassNameBuilder(style, 'EmptyState');

const EmptyState = () => <div className={bem.get()}>
  <Logo />
  <Text input="There are no movies" additionalClassNames={bem.get({ e: 'Text' })} />
</div>;

export default EmptyState;
