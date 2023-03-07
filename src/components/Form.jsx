import React, { useState } from 'react'
import InputForm from './InputForm'

const Form = (props) => {

    const {inputs, onSubmit, initialState} = props

    const[form, setForm] = useState(initialState)

    const handleChange = e => {
        const {value} = e.target
        setForm(value);
    }
    
    const handleSubmit = e => {
        onSubmit(e, form)
    }

    return (
        <form onSubmit={e => handleSubmit(e)}>
            {inputs.map(({type, name, id, labelText, required}) => (
                <InputForm
                    onChange={handleChange}
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

export default Form