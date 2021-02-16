import React,{useState} from 'react'

function HookCounterTwo() {
    const intialCount = 0
    const [count, setcount] = useState(intialCount)

    const incrementTen = () => {
        for (let index = 0; index < 10; index++) {
            setcount(prevCount => prevCount + 1)
        }
    }
    return (
        <div>
            Count: {count}
            <button onClick={() => setcount(intialCount)}>Reset</button>
            <button onClick={() => setcount(count+1)}>Increment</button>
            <button onClick={() => setcount(count-1)}>Decrement</button>
            <button onClick={() => setcount(count+5)}>Increment 5</button>
            <button onClick = {incrementTen}>Increment 10</button>
        </div>
    )
}

export default HookCounterTwo
