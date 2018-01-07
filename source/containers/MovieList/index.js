// @flow
import React, { Component } from 'react';
import axios from 'axios';
import ClassNameBuilder from 'bem-classname-builder';

/* Components */
import Movie from '../Movie';
import EmptyState from '../../components/EmptyState';

import style from './style.scss';
import { API_URL } from '../../config';

const bem = new ClassNameBuilder(style, 'MovieList');

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: []
    }
  }

  fetch() {
    return axios.get(API_URL)
      .then(data => this.addMovies(data.data))
      .catch(() => false);
  }

  addMovies(movies) {
    this.setState({ movies })
  }

  removeMovie(id) {
    const movies = this.state.movies.filter(movie => movie.id !== id);

    this.setState({ movies });
  }

  componentDidMount() {
    this.fetch();
  }

  render() {
    return this.state.movies.length
      ? <main className={bem.get()}>{this.state.movies.map(movie => <Movie onRemove={() => { this.removeMovie(movie.id) }} key={movie.id} title={movie.title} description={movie.description} rating={movie.rt_score} />)}</main>
      : <EmptyState />;
  }
}

export default MovieList;