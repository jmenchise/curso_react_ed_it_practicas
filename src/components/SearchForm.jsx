import React, { useState } from 'react'
import InputForm from '../shared/InputForm'

const SearchForm = (props) => {

    const {inputs, onSubmit} = props

    const[userID, setUserID] = useState('')

    const handleChange = e => {
        const {value} = e.target
        setUserID(value);
    }
    
    const handleSubmit = e => {
        onSubmit(e, userID)
    }

    return (
        <form onSubmit={e => handleSubmit(e)}>
            {inputs.map(({type, name, id, labelText, required}) => (
                <InputForm
                    handleChange={handleChange}
                    key={name}
                    type={type}
                    id={id}
                    labelText={labelText}
                    required={required}
                />
            ))}
            <button type="submit" className="btn btn-primary">Buscar</button>
        </form>
    )
}

export default SearchForm