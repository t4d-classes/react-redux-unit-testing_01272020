import * as React from 'react';
import { render } from 'enzyme';

import { DisplayTime } from './DisplayTime';

jest.mock('../services/datetime');

describe('<DisplayTime /> Enzyme Static HTML', () => {

  test('<DisplayTime /> renders', () => {
    
    const componentHtml = render(
      <div><DisplayTime /></div>
    ).html();
    
    expect(componentHtml).toMatchSnapshot();
  });

});
