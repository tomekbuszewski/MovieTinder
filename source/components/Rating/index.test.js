import React from 'react';
import renderer from 'react-test-renderer';

import Rating from './index';

describe ('Rating tests', () => {
  it ('should match snapshot', () => {
    const tree = renderer.create(<Rating number={90} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
