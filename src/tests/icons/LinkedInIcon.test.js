import React from 'react';
import LinkedInIcon from '../../components/icons/LinkedInIcon';
import {shallow} from 'enzyme';

describe('LinkedInIcon', () => {
  it('correctly changes the colour and size', () => {
    const props = {
      height: '80px',
      width: '80px',
      fill: '#bbabab',
    };

    const component = shallow(<LinkedInIcon {...props} />);

    expect(component.find('svg').prop('fill')).toBe('#bbabab');
    expect(component.find('svg').prop('height')).toBe('80px');
    expect(component.find('svg').prop('width')).toBe('80px');
  });

  it('correctly assigns default props when none are provided', () => {
    const component = shallow(<LinkedInIcon />);

    expect(component.find('svg').prop('fill')).toBe('#5b5b5b');
    expect(component.find('svg').prop('height')).toBe('20px');
    expect(component.find('svg').prop('width')).toBe('20px');
  });
});
