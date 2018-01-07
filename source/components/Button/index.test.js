import React from 'react';
import renderer from 'react-test-renderer';

import Button from './index';

describe ('Button tests', () => {
  it ('should match snapshot', () => {
    const tree = renderer.create(<Button type="null">Test</Button>).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
