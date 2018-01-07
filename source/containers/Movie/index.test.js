import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';

import Movie from './index';

import {MOVIE_NO, MOVIE_YES} from '../../constants/acceptTypes';

describe ('Movie component test', () => {
  it ('should match snapshot', () => {
    const tree = renderer.create().toJSON();

    expect(tree).toMatchSnapshot(<Movie
      id="1"
      title="Castle in the Sky"
      description="Test desc"
      rating="90"
    />);
  });

  it ('should have key methods', () => {
    const instance = mount(<Movie
      id="1"
      title="Castle in the Sky"
      description="Test desc"
      rating="90"
    />);

    expect(instance.instance().sendMovie).toBeDefined();
    expect(instance.instance().getCover).toBeDefined();
  });

  it ('should return proper cover', () => {
    const instance = mount(<Movie
      id="1"
      title="Ponyo"
      description="Test desc"
      rating="90"
    />);

    expect(instance.instance().getCover('Ponyo')).toBe('https://d21ehp1kf1k9m9.cloudfront.net/wp-content/uploads/2017/02/08213903/ponyo-still.jpg');
  });

  it ('should return default cover when title doesn\'t match', () => {
    const instance = mount(<Movie
      id="1"
      title="Something"
      description="Test desc"
      rating="90"
    />);

    expect(instance.instance().getCover('Something')).toBe('https://33hpwq10j9luq8gl43e62q4e-wpengine.netdna-ssl.com/wp-content/uploads/2015/06/studio_ghibli_logo.jpg');
  });

  it ('should accept movie', () => {
    const instance = mount(<Movie
      id="1"
      title="Something"
      description="Test desc"
      rating="90"
    />);

    const running = instance.instance();

    expect (running.state.type).toBe(null);

    running.sendMovie(MOVIE_YES);

    expect (running.state.type).toBe('Accepted');
  });

  it ('should reject movie', () => {
    const instance = mount(<Movie
      id="1"
      title="Something"
      description="Test desc"
      rating="90"
    />);

    const running = instance.instance();

    expect (running.state.type).toBe(null);

    running.sendMovie(MOVIE_NO);

    expect (running.state.type).toBe('Rejected');
  });

  it ('should reject movie using swipe', () => {
    const instance = mount(<Movie
      id="1"
      title="Something"
      description="Test desc"
      rating="90"
    />);

    const running = instance.instance();

    expect (running.state.type).toBe(null);

    running.sendMovie(MOVIE_NO, false);

    expect (running.state.type).toBe('RejectedLeft');
  });

  it ('should trigger reject by clicking', () => {
    const instance = mount(<Movie
      id="1"
      title="Something"
      description="Test desc"
      rating="90"
    />);

    expect (instance.instance().state.type).toBe(null);

    instance.find('button').at(0).simulate('click');

    expect (instance.instance().state.type).toBe('Rejected');
  });

  it ('should trigger accept by clicking', () => {
    const instance = mount(<Movie
      id="1"
      title="Something"
      description="Test desc"
      rating="90"
    />);

    expect (instance.instance().state.type).toBe(null);

    instance.find('button').at(1).simulate('click');

    expect (instance.instance().state.type).toBe('Accepted');
  });
});
