import React, { useEffect, useState } from 'react'
import User from '../shared/User';

const UsersContainer = () => {

    const [userList, setUserList] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(r => r.json())
        .then(users => setUserList(users))
    },[])
    

    
    return (
        <div>
            <h1>Lista de usuarios</h1>
            {
                userList?.map(({name, email, id}) => 
                    <User
                        key={id}
                        name={name}
                        email={email}
                    />
                )
            }
        </div>
    )
}

export default UsersContainer