import React from 'react';
import { render, mount, shallow } from 'enzyme';

import { ConfirmDialog } from './ConfirmDialog';

describe('Confirm Dialog', () => {

  test("Confirm dialog default message", () => {
    const componentHtml = render(
      <div><ConfirmDialog onYes={() => null} onNo={() => null}  /></div>
    ).html();
    expect(componentHtml).toMatchSnapshot();
  });

  test("Confirm dialog custom message", () => {
    const componentHtml = render(
      <div><ConfirmDialog message="Do you want to delete this?" onYes={() => null} onNo={() => null}  /></div>
    ).html();
    expect(componentHtml).toMatchSnapshot();
  });

  test('Click yes button', () => {
    const handleYes = jest.fn();
    const component = shallow(<ConfirmDialog onYes={handleYes} />);
    component.find('button').first().simulate('click');
    expect(handleYes.mock.calls.length).toBe(1);
  });

  test('Click no button', () => {
    const handleNo = jest.fn();
    const component = shallow(<ConfirmDialog onNo={handleNo} />);
    component.find('button').last().simulate('click');
    // expect(handleNo.mock.calls.length).toBe(1);
    expect(handleNo).toHaveBeenCalledTimes(1);
  });

});