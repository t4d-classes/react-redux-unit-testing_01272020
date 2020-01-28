import React from 'react';
import { render } from 'enzyme';

import { DisplayTime } from './DisplayTime';

describe('DisplayTime Snapshot Tests', () => {

  test('DisplayTime displays Hello World', () => {

    const componentHtml = render(
      <div><DisplayTime timeString="Mon, 27 Jan 2020 12:18:41 GMT" /></div>
    ).html();

    expect(componentHtml).toMatchSnapshot();

  });

});