import React from 'react';
import {shallow} from 'enzyme';
import Card from '../components/Card';

describe('Card', () => {
  it('should toggle expandable content', () => {
    const component = shallow(<Card />);

    expect(component.state().open).toBe(false);
    component.instance().openCard();
    expect(component.state().open).toBe(true);
  });

  it('should show the correct number of items', () => {
    const props = {
      items: [
        {
          title: 'Noble Titles',
          description: "Liza should be royalty so here's fake titles",
        },
        {
          title: 'Noble Titles',
          description: "Liza should be royalty so here's fake titles",
        },
      ],
    };
    const component = shallow(<Card {...props} />);

    expect(component.find('.list').find('li').length).toBe(props.items.length);
  });

  it('should show the title when provided', () => {
    const props = {
      title: 'James is Amazing',
    };

    const component = shallow(<Card {...props} />);
    expect(component.find('h2').text()).toBe(props.title);
  });

  it('should show a header image when provided', () => {
    const props = {
      imgSrc: 'www.lizafloyd.com/imagesrchere.png',
      title: 'I am a title',
    };

    const component = shallow(<Card {...props} />);
    expect(component.find('img').props().src).toBe(props.imgSrc);
    expect(component.find('img').props().alt).toBe('I am a title');
  });

  it('should show the subtitle when included', () => {
    const props = {
      subtitle: 'I am a subtitle',
    };
    const component = shallow(<Card {...props} />);
    expect(component.find('.description').text()).toBe(props.subtitle);
  });
});
