import React from 'react'
import "./HeaderOfInfoComponents.css"
const HeaderOfInfoComponents = ({ name, shortInfo }) => {
    return (
        <div className='headerOfInfoComponents'>
            <h2 className='headerName'>{name}</h2>
            <p className='headerShortInfo'>{shortInfo}</p>
        </div>
    )
}

export default HeaderOfInfoComponents