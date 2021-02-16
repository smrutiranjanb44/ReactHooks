import React, { useState } from 'react'
import useInput from './useInput'

function UserForm() {
    //const [firstName, setfirstName] = useState('')
    //const [lastName, setlastName] = useState('')

    const [firstName, bindFirstName, resetFirstName] = useInput('')
    const [lastName, bindLastName, resetLastName] = useInput('')

    const submitHandler = e => {
        e.preventDefault()
        alert(`Hello ${firstName} ${lastName}`)
        resetFirstName()
        resetLastName()
    }
    return (
        <div>
            <form onSubmit={submitHandler}>
                <div>
                    <label>First Name</label>
                    {/* <input value={firstName} onChange={e => setfirstName(e.target.value)} type="text" />*/}
                    <input {...bindFirstName} type='text'/>
                </div>
                <div>
                    <label>Last Name</label>
{/*                     <input value={lastName} onChange={e => setlastName(e.target.value)} type="text" />
 */}                    <input {...bindLastName} type='text'/>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    )

}

export default UserForm
