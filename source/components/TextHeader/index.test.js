import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme';

import TextHeader from './index';
import style from './style.scss';
import { LARGE_HEADER } from '../../constants/headerTypes';

describe ('Text Header', () => {
  it ('should match snapshot', () => {
    const component = renderer.create(<TextHeader input="Some text" />).toJSON();

    expect(component).toMatchSnapshot();
  });

  it ('should display proper text', () => {
    const component = shallow(<TextHeader input="Some text" />);

    expect(component.text()).toEqual('Some text');
  });

  it ('should have default tag set', () => {
    const component = mount(<TextHeader input="Some text" />);

    expect(component.find('h4')).toBeTruthy();
  });

  it ('should have default class name set', () => {
    const component = mount(<TextHeader input="Some text" />);

    expect(component.find('h4').hasClass(style['TextHeader'])).toBeTruthy();
    expect(component.find('h4').hasClass(style['TextHeader--Small'])).toBeTruthy();
  });

  it ('can have additional classes', () => {
    const component = mount(<TextHeader input="Some text" additionalClassNames="test class" />);

    expect(component.find('h4').hasClass('test class')).toBeTruthy();
  });

  it ('should change tag according to size', () => {
    const component = mount(<TextHeader input="Some text" size={LARGE_HEADER} />);

    expect(component.find('h2')).toBeTruthy();
  });

  it ('should change class according to size', () => {
    const component = mount(<TextHeader input="Some text" size={LARGE_HEADER} />);

    expect(component.find('h2').hasClass(style['TextHeader--Large'])).toBeTruthy();
  });
});
