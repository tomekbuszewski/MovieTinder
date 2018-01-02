// @flow
import React from 'react';

/* Services */
import c from '../../services/classNameBuilder';

import style from './style.scss';

const cn = (e = undefined, m = undefined) => c(style, { b: 'Movie', e, m });

const Movie = ({ cover, title, description, rating }: { id: Number, cover: String | Boolean, title: String, description: String, rating: any }) =>
  <article className={cn()}>
    <h2>{title}</h2>
    {cover && <img src={cover} alt={title} title={title} />}
    <p>{description}</p>
    <div>{rating}</div>
  </article>;

export default Movie;
