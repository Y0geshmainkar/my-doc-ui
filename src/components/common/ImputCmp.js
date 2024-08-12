import React from "react";

import './InputCmp.css'

const InputCmp = ({
    leftIcon, rightIcon,type,  ...props
})=>{
    return(
        <div className="input-wrapper mb-20">
            {leftIcon && <span className="icon left-icon">{leftIcon}</span>}
            <input className="styled-input" type={type} {...props}/>
            {rightIcon && <span className="icon right-icon">{rightIcon}</span>}
        </div>
    )
}


export default InputCmp;