import React from 'react';
import Footer from '../components/Footer';
import {mount} from 'enzyme';

describe('Footer', () => {
  it('toggles the icons off', () => {
    const props = {
      linkedIn: true,
      github: true,
      twitter: true,
      stackOverflow: true,
    };

    const component = mount(<Footer {...props} />);

    expect(component.find('LinkedInIcon').length).toBe(1);
    expect(component.find('GithubIcon').length).toBe(1);
    expect(component.find('TwitterIcon').length).toBe(1);
    expect(component.find('StackOverflowIcon').length).toBe(1);
  });

  it('toggles the icons on', () => {
    const props = {
      linkedIn: false,
      github: false,
      twitter: false,
      stackOverflow: false,
    };

    const component = mount(<Footer {...props} />);

    expect(component.find('LinkedInIcon').length).toBe(0);
    expect(component.find('GithubIcon').length).toBe(0);
    expect(component.find('TwitterIcon').length).toBe(0);
    expect(component.find('StackOverflowIcon').length).toBe(0);
  });

  it('correctly renders the copyright', () => {
    const props = {
      copyright: true,
    };

    const expected = `© ${new Date().getFullYear()} ${
      process.env.REACT_APP_AUTHOR_NAME
    }`;

    const component = mount(<Footer {...props} />);

    expect(component.find('.copyright').text()).toEqual(expected);
  });
});
