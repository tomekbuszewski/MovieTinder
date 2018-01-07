import React from 'react';
import renderer from 'react-test-renderer';

import Head from './index';

describe ('Head tests', () => {
  it ('should match snapshot', () => {
    const tree = renderer.create(<Head title="Some title" />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
