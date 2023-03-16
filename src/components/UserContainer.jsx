import React, { useEffect, useState } from 'react'
import User from './User'

const UserContainer = () => {

    const [users, setUsers] = useState([])
    
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(r => r.json())
        .then(u => setUsers(u))
    }, [])
    

    
    return (
        <div>
            {
                users?.map(({id, name}) => 
                <User
                    key={id}
                    id={id}
                    name={name}
                />
                )
            }
        </div>
    )
}

export default UserContainer