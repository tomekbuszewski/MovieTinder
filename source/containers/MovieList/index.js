// @flow
import React, { Component } from 'react';
import axios from 'axios';
import ClassNameBuilder from 'bem-classname-builder';

/* Components */
import Movie from '../Movie';
import EmptyState from '../../components/EmptyState';

import style from './style.scss';

const bem = new ClassNameBuilder(style, 'MovieList');

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: []
    }
  }

  fetch() {
    axios.get('https://ghibliapi.herokuapp.com/films')
      .then(data => this.setState({ movies: data.data }));
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