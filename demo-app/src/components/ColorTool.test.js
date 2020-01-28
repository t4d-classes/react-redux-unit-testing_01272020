import React from 'react';
import { mount } from 'enzyme';

import { ColorTool } from './ColorTool';

jest.mock('../services/colors');

describe('color tool integration', () => {

  test('color tool populates list of colors on load', () => {

    const component = mount(<ColorTool />);

    expect(component.find('li').first().childAt(0).text()).toBe('yellow');
  });

});