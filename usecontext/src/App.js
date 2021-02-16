import React from 'react'
import './App.css';
import ComponentC from './components/ComponentC'

export const UserContext = React.createContext()
export const ChannelContext = React.createContext()

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <UserContext.Provider value={'Rahul'}>
          <ChannelContext.Provider value={'Programmer'}>
            <ComponentC />
          </ChannelContext.Provider>
        </UserContext.Provider>
      </header>
    </div>
  );
}

export default App;
