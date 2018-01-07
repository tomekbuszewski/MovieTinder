import React from 'react';

import Container from '../Container';

import style from './style.scss';

/**
 * Header component
 * @returns {XML} component code
 */
const Header = () => <Container><header className={style.header}>
  <h1 className={style.logo}><span>Beer</span>Guru</h1>
</header></Container>;

export default Header;
