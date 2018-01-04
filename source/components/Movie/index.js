// @flow
import React from 'react';
import Cn from 'bem-classname-builder';

/* Components */
import TextBlock from '../TextBlock';
import TextHeader from '../TextHeader';
import Image from '../Image';

import style from './style.scss';

const bem = new Cn(style, 'Movie');

const Movie = ({ cover, title, description, rating }: { id: Number, cover: String | Boolean, title: String, description: String, rating: any }) =>
  <article className={bem.get()}>
    <TextHeader input={title} />
    {cover && <Image src={cover} alt={title} title={title} />}
    <TextBlock input={description} />
    <div>{rating}</div>
  </article>;

export default Movie;
