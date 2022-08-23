import React from "react";
import R from './Button.module.css'


export const Button = ({texto, className, onClick})=>{

    return (
        <button className={className} onClick={onClick}>{texto}</button>
        
    )
}