import React,{useState,useEffect} from 'react'

export default function HookCounterOne() {
    const [count, setcount] = useState(0)
    const [name, setname] = useState('')

    useEffect(() => {
        console.log('updating ....')
        document.title = `Clicked ${count} times`  
    },[count])
    return (
        <div>
        <input type='text' value={name} onChange={e => setname(e.target.value)}></input>
        <button onClick={() => setcount(count + 1)}>Click {count} times</button>        
        </div>
    )
}
