import React from 'react'

const Input = (props) => {

    const { name, value, onChange, type = 'text' } = props;
    
    return (
        <div>
            <label>{name}</label>
            <input
                name={name}
                type={type}
                value={value}
                onChange={onChange}
            />
        </div>
    )
}

export default Input