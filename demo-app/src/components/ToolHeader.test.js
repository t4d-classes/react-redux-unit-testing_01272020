import React from 'react';
import { render, mount } from 'enzyme';

import { ToolHeader } from './ToolHeader';

describe('ToolHeader Snapshot Tests', () => {

  test('ToolHeader displays Hello World', () => {
    const componentHtml = render(
      <div><ToolHeader headerText="Hello World!" /></div>
    ).html();
    expect(componentHtml).toMatchSnapshot();
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