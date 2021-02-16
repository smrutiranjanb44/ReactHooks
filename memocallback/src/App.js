import React from 'react'
import './App.css'
import ParentComponent from './callback/components/ParentComponent'
import Counter from './memo/components/Counter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Counter/>
      </header>
    </div>
  );
}

export default App;
