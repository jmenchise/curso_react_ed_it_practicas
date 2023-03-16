import {React, useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'

const UserDetail = () => {

    const {id} = useParams()
    const [user, setUser] = useState({});

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(r => r.json())
        .then(u => setUser(u))
    }, [id])
    
    
    const {name, email, username} = user

    return (
        <div>
            <h2>{name}</h2>
            <div>
                <span>{id}</span><span>Usuario: {username}</span><span>email: {email}</span>
            </div>
        </div>
    )
}

export default UserDetail