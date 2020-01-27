import React from 'react';
import { render, mount } from 'enzyme';

import { ToolHeader } from './ToolHeader';

xdescribe('ToolHeader Snapshot Tests', () => {

  test('ToolHeader displays Hello World', () => {

    const toolHeaderHtml = render(
      <ToolHeader headerText="Hello World!" />
    ).html()

    const component = JSON.stringify(toolHeaderHtml);

    expect(component).toMatchSnapshot();

  });

});

describe('ToolHeader DOM Tests', () => {

  let component;
  let componentDOMNode;
  const headerText = 'Hello World!';

  beforeEach(() => {

    component = mount(<ToolHeader headerText={headerText} />);
    componentDOMNode = component.find('h1');

  });

  test('ToolHeader displays Hello World!', () => {

    expect(componentDOMNode.text()).toBe(headerText);

  });


});