import React from 'react';
import Twitter from '../components/icons/Twitter';
import {shallow} from 'enzyme';

describe('Twitter Icon', () => {
  it('correctly changes the colour and size', () => {
    const props = {
      height: '80px',
      width: '80px',
      fill: '#bbabab',
    };

    const component = shallow(<Twitter {...props} />);

    expect(component.find('svg').prop('fill')).toBe('#bbabab');
    expect(component.find('svg').prop('height')).toBe('80px');
    expect(component.find('svg').prop('width')).toBe('80px');
  });

  it('correctly assigns default props when none are provided', () => {
    const component = shallow(<Twitter />);

    expect(component.find('svg').prop('fill')).toBe('#1da1f2');
    expect(component.find('svg').prop('height')).toBe('20px');
    expect(component.find('svg').prop('width')).toBe('20px');
  });
});
