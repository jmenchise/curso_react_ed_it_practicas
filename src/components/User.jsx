import React from 'react'
import { Link } from 'react-router-dom'

const User = (props) => {

    const {name, id} = props


    return (
        <div>
            <ul>
                <li>Nombre: {name}</li>
                <li><Link to={`/detail/${id}`}>Id: {id}</Link></li>
            </ul>
        </div>
    )
}

export default User