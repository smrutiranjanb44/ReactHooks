import React,{useState,useCallback} from 'react'
import Title from './Title'
import Count from './Count'
import Button from './Button'


function ParentComponent() {
    const [age, setage] = useState(25)
    const [salary, setsalary] = useState(50000)

    const incrementAge = useCallback(
        () => {
            setage(age + 1)
        },
        [age],
    )

    const incrememtSalary = useCallback(
        () => {
            setsalary(salary + 1000)
        },
        [salary],
    )

    return (
        <div>
            <Title/>
            <Count text="Age" count={age}/>
            <Button handleClick = {incrementAge}>Incrememt Age</Button>
            <Count text="Salary" count={salary}></Count>
            <Button handleClick={incrememtSalary}>incrememt Salary</Button>
        </div>
    )
}

export default ParentComponent
