import {useState} from 'react'

function useCouunter(intialCount = 0) {
    const [count, setcount] = useState(intialCount)

    const increment = () => {
        setcount(prevC => prevC + 1)
    }
    const decrement = () => {
        setcount(prevC => prevC - 1)
    }
    const reset = () => {
        setcount(intialCount)
    }
    return [count,increment,decrement,reset]
}

export default useCouunter
