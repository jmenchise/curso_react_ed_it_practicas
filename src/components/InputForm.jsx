import React from 'react'

const InputForm = (props) => {

    const {
        name,
        type,
        id,
        labelText,
        required,
        onChange
    } = props


    return (
        <div className="mb-3">
            <label htmlFor={name} className="form-label">{labelText}</label>
            <input 
                onChange={onChange}
                name={name} 
                type={type}
                className="form-control"
                id={id}
                required={required}
                aria-describedby="emailHelp" 
                
            />
        </div>
    )
}

export default InputForm