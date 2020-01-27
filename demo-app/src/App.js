import React from 'react';
import logo from './logo.svg';
import './App.css';

import { ConfirmDialog } from './components/ConfirmDialog';

function App() {
  return (
    <ConfirmDialog message="Please click yes."
      onYes={() => console.log('yes')}
      onNo={() => console.log('no')} />
  );
}

export default App;
