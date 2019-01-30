import React from 'react';
import StackOverflow from '../components/icons/StackOverflow';
import {shallow} from 'enzyme';

describe('StackOverflow Icon', () => {
  it('correctly changes the colour and size', () => {
    const props = {
      height: '80px',
      width: '80px',
      fill: '#bbabab',
    };

    const component = shallow(<StackOverflow {...props} />);

    expect(component.find('svg').prop('fill')).toBe('#bbabab');
    expect(component.find('svg').prop('height')).toBe('80px');
    expect(component.find('svg').prop('width')).toBe('80px');
  });

  it('correctly assigns default props when none are provided', () => {
    const component = shallow(<StackOverflow />);

    expect(component.find('svg').prop('fill')).toBe('#ffffff');
    expect(component.find('svg').prop('height')).toBe('20px');
    expect(component.find('svg').prop('width')).toBe('20px');
  });
});
