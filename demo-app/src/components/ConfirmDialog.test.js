import React from 'react';
import { render } from 'enzyme';

import { ConfirmDialog } from './ConfirmDialog';

describe('Confirm Dialog', () => {

  test("Confirm dialog default message", () => {
    const confirmDialogHtml = render(
      <ConfirmDialog onYes={() => null} onNo={() => null}  />
    ).html();
    const component = JSON.stringify(confirmDialogHtml);
    expect(component).toMatchSnapshot();
  });

  test("Confirm dialog custom message", () => {
    const confirmDialogHtml = render(
      <ConfirmDialog message="Do you want to delete this?" onYes={() => null} onNo={() => null}  />
    ).html();
    const component = JSON.stringify(confirmDialogHtml);
    expect(component).toMatchSnapshot();
  });

});