import React from 'react';
import { render } from 'enzyme';

import { ItemList } from './ItemList';

describe('ItemList Snapshot Tests', () => {

  test('ItemList displays Hello World', () => {

    const colors = ['red', 'green', 'blue', 'brown', 'yellow'];

    const itemListHtml = render(
      <ItemList items={colors} />
    ).html()

    const component = JSON.stringify(itemListHtml);

    expect(component).toMatchSnapshot();

  });

});