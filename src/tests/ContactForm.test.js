import React from 'react';
import ContactForm from '../components/ContactForm';
import {shallow} from 'enzyme';

describe('ContactForm', () => {
  it('correctly applies the state when setField is called', () => {
    const component = shallow(<ContactForm />);

    component.instance().setField('message', 'Liza is the best');
    expect(component.state().data).toEqual({message: 'Liza is the best'});

    component.instance().setField('name', 'James');
    expect(component.state().data).toEqual({
      message: 'Liza is the best',
      name: 'James',
    });

    component.instance().setField('email', process.env.REACT_APP_EMAIL_ADDRESS);
    expect(component.state().data).toEqual({
      message: 'Liza is the best',
      name: 'James',
      email: process.env.REACT_APP_EMAIL_ADDRESS,
    });
  });

  it('correctly sets an error message in state if a field is missing', () => {
    const component = shallow(<ContactForm />);

    component.instance().setField('email', process.env.REACT_APP_EMAIL_ADDRESS);
    component.instance().setField('name', 'James');

    /* preventDefault needs to be mocked in the handleFormSubmit
    function call otherwise the test will throw an error. */
    component.instance().handleFormSubmit({preventDefault: jest.fn()});

    expect(component.state().error).toBe('You must enter a message');
  });

  it('correctly sets the email address if included in the component props', () => {
    const component = shallow(
      <ContactForm email="montezuma@supercoolcats.com" />
    );

    expect(component.find('form').prop('action')).toBe(
      'https://formspree.io/montezuma@supercoolcats.com'
    );
  });
});
