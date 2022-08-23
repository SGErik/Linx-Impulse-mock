import React from "react";
import { Button } from "../Button/Button";
import S from "./Header.module.css"

const Header = () => {

    return (
        <header className={S.header}>
                <div className={S.bdSet}/>
                <div className={S.content}>
                    <div className={S.texts}>
                        <p className={S.paragrafo1}>uma seleção de produtos</p>
                        <h1>especial pra você</h1>
                        <p className={S.paragrafo2}>Todos os produtos desta lista foram selecionados a partir da sua navegação. Aproveite!</p>
                    </div>
                    <div className={S.divButton}>
                        <Button className={S.button} texto="Conheça a Linx" />
                        <Button className={S.button}  texto="Ajude o algoritmo" />
                        <Button className={S.button}  texto="Seus produtos" />
                        <Button className={S.button}  texto="Compartilhe" />
                    </div>

                </div>
        </header>
    )
}

export default Header

