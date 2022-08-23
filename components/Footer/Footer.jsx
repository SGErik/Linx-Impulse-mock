import React from 'react'
import S from './Footer.module.css'

export const Footer = () => {
  return (
    <footer className={S.footer}>
        <div className={S.bdSet}/>
            <div className={S.content}>
                <p>Testando suas habilidades em HTML, CSS e JS</p>
                <p>Linx Impulse</p>
                <p>2019</p>
            </div>
    
    </footer>
  )
}
