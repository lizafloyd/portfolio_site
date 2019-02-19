import React from 'react';
import Loader from '../../components/icons/Loader';
import {shallow} from 'enzyme';

describe('StackOverflowIcon', () => {
  it('correctly changes the colour and size', () => {
    const props = {
      height: '80px',
      width: '80px',
      fill: '#bbabab',
    };

    const component = shallow(<Loader {...props} />);

    expect(
      component
        .find('svg')
        .find('rect')
        .at(1)
        .prop('fill')
    ).toBe('#bbabab');
    expect(component.find('svg').prop('height')).toBe('80px');
    expect(component.find('svg').prop('width')).toBe('80px');
  });

  it('correctly assigns default props when none are provided', () => {
    const component = shallow(<Loader />);

    expect(
      component
        .find('svg')
        .find('rect')
        .at(1)
        .prop('fill')
    ).toBe('#d3d3d3');
    expect(component.find('svg').prop('height')).toBe('20px');
    expect(component.find('svg').prop('width')).toBe('20px');
  });
});
