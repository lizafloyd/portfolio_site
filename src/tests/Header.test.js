import React from 'react';
import Header from '../components/Header';
import {shallow} from 'enzyme';

describe('Header', () => {
  it('renders the skip link when skipLink is true', () => {
    const props = {
      profileImage: './image.png',
      skipLink: true,
    };

    const component = shallow(<Header {...props} />);

    expect(component.find('.skip').length).toBe(1);
  });

  it('does not render the skip link when skipLink is false', () => {
    const props = {
      profileImage: './image.png',
      skipLink: false,
    };

    const component = shallow(<Header {...props} />);

    expect(component.find('.skip').length).toBe(0);
  });

  it('correctly passes down the image url to the image tag', () => {
    const props = {
      profileImage: './image.png',
      profileAlt: 'Liza Floyd',
    };

    const component = shallow(<Header {...props} />);

    expect(component.find('img').prop('src')).toBe('./image.png');
    expect(component.find('img').prop('alt')).toBe('Liza Floyd');
  });
});
