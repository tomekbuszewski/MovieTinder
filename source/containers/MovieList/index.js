// @flow
import React, { Component } from 'react';
import axios from 'axios';

/* Components */
import Movie from '../../components/Movie';

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

  componentDidMount() {
    this.fetch();
  }

  render() {
    return this.state.movies.length ? this.state.movies.map(movie => <Movie key={movie.id} title={movie.title} description={movie.description} rating={movie.rt_score} />) : null;
  }
}

export default MovieList;