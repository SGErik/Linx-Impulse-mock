import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Button } from '../Button/Button'
import Cards from '../Cards/Cards'
import Forms from '../Forms/Forms'
import Input from '../Input/Input'
import Label from '../Label/Label'
import Pagedivider from '../Pagedivider/Pagedivider'
import T from './Main.module.css'

const Main = () => {
  const [info, setInfo] = useState([])
  const [page, setPage] = useState(1)

  const handleRequisição = async () => {
    const requisition = await fetch(`https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=${page}`);
    const json = await requisition.json();
    setInfo([...info, ...json.products]);
    console.log(info)
  }

  const addPage = () => {
    setPage(page + 1);
  }

  useEffect(() => {
    handleRequisição()
  }, [page])






  return (
    <div className={T.direction}>
      <div className={T.TextForm}>
        <div className={T.textOrganization}>
          <p className={T.paragrafo1}>Ajude o algoritmo a ser mais certeiro</p>
          <p className={T.paragrafo2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ultricies tellus nec mi porta convallis sollicitudin eu urna. Mauris rhoncus erat sed interdum dignissim. Suspendisse semper pretium consectetur. Praesent bibendum arcu risus, sit amet iaculis ex tempus quis. Cras et erat ut tellus vulputate tincidunt. Aenean lacinia euismod augue vel egestas. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum vel urna tortor. Vivamus et arcu non felis tristique eleifend.<br></br><br></br> Morbi eu condimentum urna. Curabitur eu magna eget turpis condimentum ultrices. Suspendisse quis lorem ultricies, pulvinar purus sed, egestas erat. Etiam ultricies a ante vehicula pharetra. Quisque ut neque mattis, consequat velit ut, ultrices orci. Nulla varius elementum erat vel pharetra. Aenean sit amet nisi diam. Morbi viverra, magna ac luctus commodo, odio ante suscipit libero, at mattis augue est vel metus.</p>
        </div>

        <div>
          <Forms />
        </div>
      </div>
      <div className={T.pageDivider}>
        <Pagedivider />
        <h3 className={T.firstH3}>Sua seleção especial</h3>
        <Pagedivider />
      </div>
      <div className={T.divCards}>
        {info.length > 0 && info.map((item, index) => {
          return (
            <Cards key={index} image={item.image} name={item.name} desc={item.description} de={item.oldprice} por={item.price} vezes={item.installments.count} ou={item.installments.value} />
          );
        })};
        <Button texto='Adquira ainda mais produtos aqui' className={T.button} onClick={addPage} />
        <div className={T.pageDivider1}>
          <Pagedivider />
          <h3 className={T.secondH3}>Compartilhe a Novidade</h3>
          <Pagedivider />
          
        </div>
        <div className={T.formBot}>
            <p>Quer que seus amigos também ganhem a lista personalizada deles? Preencha agora!</p>
            <div className={T.inputs}>
              <div className={T.label}>
              <Label texto='Nome do seu amigo:' className={T.label}/>
              <Input type='text'/>
              </div>
              <div className={T.label}>
              <Label texto='E-mail:' className={T.label} />
              <Input type='email' />
              </div>
              </div>
              <Button texto='Enviar agora' className={T.button} />
          </div>

      </div>

    </div>
  )
}

export default Main