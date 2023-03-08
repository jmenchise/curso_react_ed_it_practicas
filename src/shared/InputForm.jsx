import React from 'react'

const InputForm = (props) => {

    const {
        name,
        type,
        id,
        labelText,
        required,
        handleChange
    } = props


    return (
        <div className="mb-3">
            <label htmlFor={name} className="form-label">{labelText}</label>
            <input 
                onChange={handleChange}
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