import React, { } from 'react'
import "./InputComponent.css"

const InputComponent = ({ inputName, name, value, placeholder, onChange, errorMessage, classError }) => {




    return (
        <div className='inputComponent'>
            <div className='inputHeader'>
                <span className='inputName'>{inputName}</span>
                <span className='inputError'>{errorMessage}</span>
            </div>
            <input className={classError} name={name} value={value} placeholder={placeholder} onChange={onChange} />
        </div>
    )
}

export default InputComponent