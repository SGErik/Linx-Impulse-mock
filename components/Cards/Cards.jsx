import React from 'react'
import { Button } from '../Button/Button'
import S from './Cards.module.css'

const Cards = ({ image, name, desc, de, por, vezes, ou }) => {
    return (
        <article className={S.cards}>
            <picture className={S.imgs}>
                <img src={image} alt='Produto'/>
            </picture>
            <h3 className={S.h3}>{name}</h3>
            <p className={S.desc}>{desc}</p>
            <h4 className={S.h4}>De:R${de},00</h4>
            <h5 className={S.h5}>Por:R${por},00</h5>
            <p className={S.vezes}>ou {vezes}x de:R${ou}</p>
            <Button className={S.button1} texto="Comprar" />
        </article>
    )
}

export default Cards