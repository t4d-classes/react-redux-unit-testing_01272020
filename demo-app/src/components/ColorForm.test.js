import React from 'react';
import { shallow } from 'enzyme';


import { ColorForm } from './ColorForm';


describe('Color Form Tests', () => {

  test('capture color form data', () => {

    const appendColor = jest.fn(); 

    const component = shallow(<ColorForm buttonText="Add Color" onSubmitColor={appendColor} />);

    const inputDOMNode = component.find('#name-input');

    inputDOMNode.simulate('change', { target: { value: 'orange', name: 'name' } });

    component.find('button').simulate('click');

    expect(appendColor).toHaveBeenCalledWith({ name: 'orange' });
  });


});