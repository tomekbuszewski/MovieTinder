import React from 'react';
import PropTypes from 'prop-types';

import style from './style.scss';

//@flow
const Container = ({ children }: { children: any }) => <div className={style.container}>{children}</div>;

Container.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array, PropTypes.object])
};

export default Container;
