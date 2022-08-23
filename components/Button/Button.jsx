import React from "react";
// import R from './Button.module.css'


export const Button = ({texto, className})=>{

    return (
        <button className={className}>{texto}</button>
        
    )
}