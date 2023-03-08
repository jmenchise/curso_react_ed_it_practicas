import React, { useEffect, useState } from 'react'

const User = (props) => {

    const {id} = props

    const[user, setUser] = useState({})
    
    
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(r => r.json())
        .then(user => setUser(user))
    }, [id])
    

    const {name, username, email, phone, website} = user

    return (
        
        <div>
            {id < 10 ?
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Name</th>
                            <th scope="col">Username</th>
                            <th scope="col">email</th>
                            <th scope="col">phone</th>
                            <th scope="col">website</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">{id}</th>
                            <td>{name}</td>
                            <td>{username}</td>
                            <td>{email}</td>
                            <td>{phone}</td>
                            <td>{website}</td>
                        </tr>
                    </tbody>
                </table> 
                : <h2>No existe el usuario asociado al ID {id}</h2>
            }
        </div>
    )
}

export default User