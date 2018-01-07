import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';

import List from './index';

import movies from './index.mock.js';

describe ('MoveList component tests', () => {
  it ('should match snapshot', () => {
    const tree = renderer.create().toJSON();

    expect(tree).toMatchSnapshot(<List />);
  });

  it ('should add movies when provided', () => {
    const inst = mount(<List />);
    const running = inst.instance();

    expect(running.state.movies.length).toBe(0);

    running.addMovies(movies);

    expect(running.state.movies.length).toBe(movies.length);
  });

  it ('should remove movies when triggered', () => {
    const inst = mount(<List />);
    const running = inst.instance();
    running.addMovies(movies);

    expect(running.state.movies.length).toBe(movies.length);

    running.removeMovie(movies[0].id);

    expect(running.state.movies.length).toBe(movies.length - 1);
  });

  it ('should fetch', () => {
    const inst = mount(<List />);
    const running = inst.instance();

    return running.fetch().then(() => {
      expect (running.state.movies.length).toBeGreaterThan(0);
    });
  });
});
