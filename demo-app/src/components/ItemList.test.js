import React from 'react';
import { render, mount } from 'enzyme';

import { ItemList } from './ItemList';


const testMe = (comp) => {
  const html = render(comp).html()
  const component = JSON.stringify(html);
  expect(component).toMatchSnapshot();
};

const quickTest = (comp) => {
  describe('ItemList Snapshot Tests', () => {
    test('ItemList displays Hello World', () => {
      testMe(comp);
    });
  });
};

const colors = ['red', 'green', 'blue', 'brown', 'yellow'];
quickTest(<ItemList items={colors} />);

describe('ItemList Mount Tests', () => {
  test('ItemList displays the items', () => {
    const colors = ['red', 'green', 'blue', 'brown', 'yellow'];
    const component = mount(<ItemList items={colors} />);
    const itemDOMNodes = component.find('li');
    itemDOMNodes.forEach( (node, index) => {
      expect(node.text()).toBe(colors[index]);
    });
  });
});