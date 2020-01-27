import React from 'react';
import logo from './logo.svg';
import './App.css';

import { ItemList } from './components/ItemList';

function App() {
  return (
    <ItemList items={['red', 'blue']} />
  );
}

export default App;
