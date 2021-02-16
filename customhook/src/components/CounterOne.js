import React from 'react'
import useCounter from './hooks/useCouunter'
function CounterOne() {
    const [count,incrememt,decrement,reset] = useCounter(10)
    return (
        <div>
            <h2> Count - {count}</h2>
            <button onClick={incrememt}>Increment</button>
            <button onClick={decrement}>Increment</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}

export default CounterOne
