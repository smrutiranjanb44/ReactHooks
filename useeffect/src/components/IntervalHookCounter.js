import React,{useState,useEffect} from 'react'

function IntervalHookCounter() {

    const [count, setcount] = useState(0)

    const tick = () => {
        setcount(prevCount => prevCount + 1)
    }


    useEffect(() => {
        console.log('useEffect')
        const interval = setInterval(tick,1000)

        return () => {
            console.log('Unmount')
            clearInterval(interval)
        }
    },[])

    return (
        <div>
            <h1>{count}</h1>
        </div>
    )
}

export default IntervalHookCounter
