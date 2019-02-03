import React from 'react';
import GithubIcon from '../../components/icons/GithubIcon';
import {shallow} from 'enzyme';

describe('Github Icon', () => {
  it('correctly changes the colour and size', () => {
    const props = {
      height: '60px',
      width: '60px',
      fill: '#ababab',
    };

    const component = shallow(<GithubIcon {...props} />);

    expect(component.find('svg').prop('fill')).toBe('#ababab');
    expect(component.find('svg').prop('height')).toBe('60px');
    expect(component.find('svg').prop('width')).toBe('60px');
  });

  it('correctly assigns default props when none are provided', () => {
    const component = shallow(<GithubIcon />);

    expect(component.find('svg').prop('fill')).toBe('#ffffff');
    expect(component.find('svg').prop('height')).toBe('20px');
    expect(component.find('svg').prop('width')).toBe('20px');
  });
});
