import React from 'react'

const User = (props) => {

    const {name, email} = props;
    
    return (
        <div>
            <ul>
                <li>Nombre: {name}</li>
                <li>Email: {email}</li>
            </ul>
        </div>
    )
}

export default User