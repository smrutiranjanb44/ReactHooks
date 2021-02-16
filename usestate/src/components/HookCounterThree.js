import React,{useState} from 'react'

function HookCounterThree() {
    const [name, setname] = useState({firstName: '', lastName: ''})
    return (
        <div>
            <form>
                <input 
                type="text" 
                value={name.firstName} 
                onChange={e => setname({...name,firstName: e.target.value})}>
                </input>
                <input type="text" value={name.lastName} onChange={e => setname({...name,lastName: e.target.value})}></input>
                <h2>First name : {name.firstName}</h2>
                <h2>Lastname : {name.lastName}</h2>
                <h2>{JSON.stringify(name)}</h2>
            </form>
            
       </div>
    )
}

export default HookCounterThree
