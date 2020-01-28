import * as React from 'react';
import { render, mount } from 'enzyme';

import { ToolFooter } from './ToolFooter';

describe('Tool Footer Component', () => {

  const companyName = 'A Cool Company, Inc.';
  const copyrightYear = new Date().getFullYear();

  beforeEach(() => {
    console.log('Before Each Tool Footer');
  });

  describe('Static Rendering', () => {

    beforeEach(() => {
      console.log('Before Each Tool Footer - Static Rendering');
    });

    test('<ToolFooter /> renders', () => {
      
      const componentHtml = render(
        <div><ToolFooter copyrightYear={copyrightYear} companyName={companyName} /></div>
      ).html();
      
      expect(componentHtml).toMatchSnapshot();
    });

  });

  describe('DOM Rendering', () => {

    beforeEach(() => {
      console.log('Before Each Tool Footer - DOM Rendering');
    });

    test('<ToolFooter /> mounts', () => {
      
      const component = mount(
        <ToolFooter copyrightYear={copyrightYear} companyName={companyName} />
      );

      const componentDOMNode = component.find('small');

      expect(componentDOMNode.text()).toBe(`© ${copyrightYear} ${companyName}. All Rights Reserved.`);
    });

  });

});