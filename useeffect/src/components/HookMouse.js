import React,{useState,useEffect} from 'react'

export default function HookMouse() {
    const [x, setx] = useState(0)
    const [y, sety] = useState(0)

    const logMousePosition = e => {
        console.log('Mouse Event')
        setx(e.clientX)
        sety(e.clientY)
    }

    useEffect(() => {
        console.log('useEffect Called')
        window.addEventListener('mousemove',logMousePosition)

        return () => {
            console.log('Component unmounting code')
            window.removeEventListener('mousemove',logMousePosition)
        }

    },[])

    return (
        <div>
        X - {x}  Y - {y}
        </div>
    )
}
