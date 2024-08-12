import React from 'react'
import './ButtonCmp.css'

const ButtonCmp = ({
    type, Children }) => {
    return (
        <div className='mb-20'>
            <button className="simple-btn" type={type}>
                {Children}
            </button>
        </div>

    )
}

export default ButtonCmp
