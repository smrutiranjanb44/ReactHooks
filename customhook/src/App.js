import React from 'react'
import './App.css';
import CounterOne from './components/CounterOne';
import DocTitleOne from './components/DocTitleOne';
import DocTitleTwo from './components/DocTitleTwo';
import UserForm from './components/hooks/UserForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <UserForm/>
      </header>
    </div>
  );
}

export default App;
