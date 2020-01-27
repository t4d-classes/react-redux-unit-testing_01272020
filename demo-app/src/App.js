import React from 'react';
import logo from './logo.svg';
import './App.css';

import { DisplayTime } from './components/DisplayTime';

function App() {
  return (
    <DisplayTime timeString={new Date().toUTCString()} />
  );
}

export default App;
