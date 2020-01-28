import React, { useState } from 'react';

import colorsSvc from '../services/colors';

import { ItemList } from './ItemList';
import { ColorForm } from './ColorForm';

export const ColorTool = () => {

  const [ colors, setColors ] = useState(colorsSvc.all());

  return <>
    <ItemList items={colors}
      onDeleteItem={colorId => setColors(colorsSvc.remove(colorId).all())} />
    <ColorForm buttonText="Add Color"
      onSubmitColor={color => setColors(colorsSvc.append(color).all())} />
  </>;

};
