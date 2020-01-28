import React from 'react';
import { render } from 'enzyme';

export const snapshotTest = (reactElement, description) => {
  describe(description, () => {
    test(description + ' Test', () => {
      const componentHtml = render(<div>{reactElement}</div>).html()
      expect(componentHtml).toMatchSnapshot();
    });
  });
};
