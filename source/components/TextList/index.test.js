import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';

import TextList from './index';
import { SMALL_TEXT_LIST } from '../../constants/textListTypes';

describe('Text List tests', () => {
  it ('default list view should match snapshot', () => {
    const component = renderer.create(<TextList items={[ 'one', 'two', ]} />).toJSON();

    expect(component).toMatchSnapshot();
  });

  it ('small list view should match snapshot', () => {
    const component = renderer.create(<TextList items={[ 'one', 'two', ]} type={SMALL_TEXT_LIST} />).toJSON();

    expect(component).toMatchSnapshot();
  });

  it ('should make `li` elements from given items', () => {
    const component = mount(<TextList items={[ 'one', 'two', ]} />);

    expect(component.find('li')).toHaveLength(2);
  })
});
