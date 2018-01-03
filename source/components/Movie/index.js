// @flow
import React from 'react';
import Cn from 'bem-classname-builder';

import style from './style.scss';

const bem = new Cn(style, 'Movie');

const Movie = ({ cover, title, description, rating }: { id: Number, cover: String | Boolean, title: String, description: String, rating: any }) =>
  <article className={bem.get()}>
    <h2>{title}</h2>
    {cover && <img src={cover} alt={title} title={title} />}
    <p>{description}</p>
    <div>{rating}</div>
  </article>;

export default Movie;
