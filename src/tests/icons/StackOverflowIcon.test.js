import React from 'react';
import StackOverflowIcon from '../../components/icons/StackOverflowIcon';
import {shallow} from 'enzyme';

describe('StackOverflowIcon', () => {
  it('correctly changes the colour and size', () => {
    const props = {
      height: '80px',
      width: '80px',
      fill: '#bbabab',
    };

    const component = shallow(<StackOverflowIcon {...props} />);

    expect(component.find('svg').prop('fill')).toBe('#bbabab');
    expect(component.find('svg').prop('height')).toBe('80px');
    expect(component.find('svg').prop('width')).toBe('80px');
  });

  it('correctly assigns default props when none are provided', () => {
    const component = shallow(<StackOverflowIcon />);

    expect(component.find('svg').prop('fill')).toBe('#5b5b5b');
    expect(component.find('svg').prop('height')).toBe('20px');
    expect(component.find('svg').prop('width')).toBe('20px');
  });
});
