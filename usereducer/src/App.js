import React from 'react'
//import ComponentA from './components/ComponentA'
//mport ComponentB from './components/ComponentB'
//import ComponentC from './components/ComponentC'
import DataFetchingOne from './components/DataFetchingOne'
import DataFetchingTwo from './components/DataFetchingTwo'

/* export const CountContext = React.createContext()

const intialState = 0

const reducer = (state, action) => {
  switch (action) {
    case 'increment':
      return state + 1export const CountContext = React.createContext()

const intialState = 0

const reducer = (state, action) => {
  switch (action) {
    case 'increment':
      return state + 1
    case 'decrement':
      return state - 1
    case 'reset':
      return intialState
    default:
      return state
  }
}
    case 'decrement':
      return state - 1
    case 'reset':
      return intialState
    default:
      return state
  }
} */

function App() {
  // const [count, dispatch] = useReducer(reducer, intialState)
  return (
    <div className='App'>
        <DataFetchingTwo/>
      </div>
    
   /*  <CountContext.Provider value={{ countState: count, countDispatch: dispatch }}>
      <div className="App">
        <header className="App-header">
          Count - {count}
          <ComponentA />
          <ComponentB />
          <ComponentC />
        </header>
      </div>
    </CountContext.Provider> */
  );
}

export default App;
