// @flow
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Cn from 'bem-classname-builder';

/* Components */
import TextBlock from '../TextBlock';
import TextHeader from '../TextHeader';
import Image from '../Image';
import Rating from '../Rating';

/* Constants */
import { MOVIE_NO, MOVIE_YES } from '../../constants/acceptTypes';

import style from './style.scss';

const bem = new Cn(style, 'Movie');

export default class Movie extends Component {
  constructor() {
    super();

    this.state = {
      mainClassName: bem.get(),
      visible: true
    };

    // Bindings
    this.sendMovie = this.sendMovie.bind(this);
  }

  static get propTypes() {
    return {
      cover: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
      title: PropTypes.string,
      description: PropTypes.string,
      rating: PropTypes.string
    }
  }

  static get defaultProps() {
    return {
      cover: false
    }
  }

  sendMovie(type) {
    let m;

    switch (type) {
      case MOVIE_YES: { m = 'Accepted'; break; }
      case MOVIE_NO: { m = 'Rejected'; break; }
    }

    this.setState({
      mainClassName: bem.get({ m })
    }, () => {
      setTimeout(() => { this.setState({ visible: false }) }, 500);
    });
  }

  render() {
    return this.state.visible
    ? <article className={this.state.mainClassName}>
        <div>
          <TextHeader input={this.props.title} />
          {this.props.cover && <Image src={cover} alt={this.props.title} title={this.props.title} />}
          <TextBlock input={this.props.description} />
          <Rating number={Number(this.props.rating)} />
        </div>
        <div className={bem.get({ e: 'Buttons' })}>
          <button className={`${bem.get({ e: 'Button' })} ${bem.get({ e: 'Button', m: 'Decline' })}`}>No</button>
          <button className={`${bem.get({ e: 'Button' })} ${bem.get({ e: 'Button', m: 'Accept' })}`} onClick={() => this.sendMovie(MOVIE_YES)}>Yes</button>
        </div>
      </article>
    : null
  }
}
