import React, { useState } from 'react'
import User from '../components/User';
import SearchForm from '../components/SearchForm'

const UserContainer = () => {

    const inputs = [
        {
            type: 'number',
            name: 'searchId',
            id: 'inputID',
            labelText: 'Escriba el ID del usuario a buscar:',
            required: true
        }
    ]


    const [userID, setUserID] = useState('')
    

    const onSubmit = (e, userID) => {
        e.preventDefault();
        setUserID(userID);
        console.log('userID:', userID);
    }
    


    return (
        <div>
            <h1>Búsqueda de Usuario</h1>
            <SearchForm
                onSubmit={onSubmit}
                inputs={inputs}
            />
            {userID ? <User id={userID}/> : <h2>No hay Usuario para mostrar</h2>}
        </div>
    )
}

export default UserContainer