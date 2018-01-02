import c from './index';

const style = {
  'Modal__header': 'modal header',
  'Modal--small': 'modal small',
  'Modal__header--large': 'modal header large'
};

describe ('Class Name Builder', () => {
  it ('should extract class with element', () => {
    expect (c(style, { b: 'Modal', e: 'header' })).toEqual(style['Modal__header']);
  });

  it ('should extract class with modifier only', () => {
    expect (c(style, { b: 'Modal', m: 'small' })).toEqual(style['Modal--small']);
  });

  it ('should extract class with both element and modifier', () => {
    expect (c(style, { b: 'Modal', e: 'header', m: 'large' })).toEqual(style['Modal__header--large']);
  });

  it ('should return empty string when no such key exists', () => {
    expect (c(style, { b: 'Modal', m: 'nonexistent' })).toEqual('');
  });
});