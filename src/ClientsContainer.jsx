import React from 'react'
import Form from './components/Form'

const ClientsContainer = () => {

    const inputs = [
        {
            type: 'number',
            name: 'searchId',
            id: 'inputID',
            labelText: 'Escriba el ID del cliente a buscar:',
            required: true
        }
    ]

    const searchData = '';
    
    const onSubmit = (e, data) => {
        e.preventDefault();
        console.log('data:', data);
    }
    


    return (
        <div>
            <h1>Listado de Clientes</h1>
            <Form
                initialState={searchData}
                onSubmit={onSubmit}
                inputs={inputs}
            />
        </div>
    )
}

export default ClientsContainer