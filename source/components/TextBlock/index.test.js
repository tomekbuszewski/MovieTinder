import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme';

import TextBlock from './index';
import style from './style.scss';

describe ('Text Block', () => {
  it ('should match snapshot', () => {
    const component = renderer.create(<TextBlock input="Some text" />).toJSON();

    expect(component).toMatchSnapshot();
  });

  it ('should display proper text', () => {
    const component = shallow(<TextBlock input="Some text" />);

    expect(component.text()).toEqual('Some text');
  });

  it ('should contain default class name', () => {
    const component = mount(<TextBlock input="Some text" />);

    expect(component.find('p').hasClass(style['TextBlock'])).toBeTruthy();
  });

  it ('can have more classes added', () => {
    const component = mount(<TextBlock input="Some text" additionalClassNames="test class" />);

    expect(component.find('p').hasClass('test class')).toBeTruthy();
  });
});
