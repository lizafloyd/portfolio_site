import React from 'react';
import Github from '../components/icons/Github';
import {shallow} from 'enzyme';

describe('Github Icon', () => {
  it('correctly changes the colour and size', () => {
    const props = {
      height: '60px',
      width: '60px',
      fill: '#ababab',
    };

    const component = shallow(<Github {...props} />);

    expect(component.find('svg').prop('fill')).toBe('#ababab');
    expect(component.find('svg').prop('height')).toBe('60px');
    expect(component.find('svg').prop('width')).toBe('60px');
  });

  it('correctly assigns default props when none are provided', () => {
    const component = shallow(<Github />);

    expect(component.find('svg').prop('fill')).toBe('#ffffff');
    expect(component.find('svg').prop('height')).toBe('20px');
    expect(component.find('svg').prop('width')).toBe('20px');
  });
});
