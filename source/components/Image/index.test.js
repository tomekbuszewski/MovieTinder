import React from 'react';
import renderer from 'react-test-renderer';

import Image from './index';

describe ('Image tests', () => {
  it ('should match snapshot with all props', () => {
    const tree = renderer.create(<Image src="https://some.image" alt="Test alt" title="Test title" />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it ('should match snapshot without title', () => {
    const tree = renderer.create(<Image src="https://some.image" alt="Test alt" />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
