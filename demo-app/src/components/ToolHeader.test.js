import React from 'react';
import { render } from 'enzyme';

import { ToolHeader } from './ToolHeader';

describe('ToolHeader Snapshot Tests', () => {

  test('ToolHeader displays Hello World', () => {

    const toolHeaderHtml = render(
      <ToolHeader headerText="Hello World!" />
    ).html()

    const component = JSON.stringify(toolHeaderHtml);

    expect(component).toMatchSnapshot();

  });

});