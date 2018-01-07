import React from 'react';
import ClassNameBuilder from 'bem-classname-builder';

import style from './style.scss';

const bem = new ClassNameBuilder(style, 'Rating');

/**
 * Rating svg animated circle. SVG found somewhere on the 'net long
 * time ago, can't seem to find the source.
 * @param {number} number - number 0 - 100
 * @returns {*} - rendered component
 * @constructor
 */
const Rating = ({ number }) => {
  let color = 'Green';

  if (number < 40) { color = 'Red'; }
  if (number >= 40 && number < 75) { color = 'Yellow'; }

  return <div className={bem.get({e:'Wrapper'})}>
    <span className={bem.get({e:'Text'})}>{number}%</span>
    <svg viewBox="0 0 36 36" className={bem.get()}>
      <path className={`${bem.get({e:'Circle'})} ${bem.get({e:'Circle', m: color})}`}
            strokeDasharray={`${number}, 100`}
            d="M18 2.0845
        a 15.9155 15.9155 0 0 1 0 31.831
        a 15.9155 15.9155 0 0 1 0 -31.831"
      />
    </svg>
  </div>
};

export default Rating;