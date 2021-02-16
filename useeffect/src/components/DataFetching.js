import React,{useState,useEffect} from 'react'
import axios from 'axios'

function DataFetching() {

    const [post, setpost] = useState({})
    const [id, setid] = useState(1)
    const [idButton, setidButton] = useState(1)

    const handleClick = () => {
        setidButton(id)
    }

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idButton}`)

        .then(res => {
            console.log(res)
            setpost(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    },[idButton])
    return (
        <div>
            <input type='text' value={id} onChange={e => setid(e.target.value)}></input>
            <button onClick={handleClick}>FetchPost</button>
            <div>{post.title}</div>
           {/*  <ul>
                {
                    posts.map(post => <li key={post.id}>{post.title}</li>)
                }
            </ul> */}
        </div>
    )
}

export default DataFetching
