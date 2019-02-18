import React from 'react';
import {PureMap} from '../components/Map';
import {shallow} from 'enzyme';
import {mapPins} from '../constants'

describe('Map', () => {
  it('renders the map', () => {
    const component = shallow(<PureMap />);

    expect(component.find('GoogleMap').length).toBeTruthy()
  })

  it('shows the correct number of pins', () => {
    const props = {mapPins, isMarkerShown:true}

    const component = shallow(<PureMap {...props}/>);
    expect(component.find("Marker").length).toBe(props.mapPins.length);
  })
});
