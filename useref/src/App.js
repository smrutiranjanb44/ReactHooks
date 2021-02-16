import React from 'react'
import './App.css';
import ClassTimer from './components/ClassTimer';
import FocusInput from './components/FocusInput';
import HookTimer from './components/HookTimer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ClassTimer/>
        <HookTimer/>
      </header>
    </div>
  );
}

export default App;
