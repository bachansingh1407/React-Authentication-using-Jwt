import React from 'react'
import './TextInput.css'

const TextInput = ({
    label,
    value,
    onChange,
    required = false,
    placeholder = "",
    type = "text",
    name = "",
}) => {
    return (
        <div className="text-input">
            {label && (
                <label htmlFor={name}>
                    {label} {required && <span>*</span>}
                </label>
            )}
            <input
            type={type}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            name={name}
            required
            />

        </div>
    )
}

export default TextInput