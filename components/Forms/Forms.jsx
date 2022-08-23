import React from 'react'
import { Button } from '../Button/Button'
import Input from '../Input/Input'
import Label from '../Label/Label'
import R from './Forms.module.css'

const Forms = () => {
    return (
        <form className={R.organizar}>
            <div className={R.label}>
            <Label texto="Seu nome:" />
            <Input type="text" placeholder="Nome" />
            </div>
            <div className={R.label}>
            <Label texto="E-mail:" />
            <Input type="email" placeholder="Email" />
            </div>
            <div className={R.label}>
            <Label texto="CPF:" />
            <Input type="text" placeholder="CPF:" />
            </div>
            <div className={R.divRadio}>
                <input type="radio" name="Masculino" id="Masculino" />Masculino
                <input type="radio" name="Feminino" id="Feminino" />Feminino
            </div>
            <Button className={R.button} texto="Enviar" />



        </form>
    )
}

export default Forms