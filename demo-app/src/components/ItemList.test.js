import React from 'react';
import { render, mount } from 'enzyme';
import { snapshotTest } from '../utils/test-helper';

import { ItemList } from './ItemList';

// example of refactoring into a common function
const colors = ['red', 'green', 'blue', 'brown', 'yellow'];
snapshotTest(
  <ItemList items={colors} />,
  'ItemList displays Hello World Snapshot',
);

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
