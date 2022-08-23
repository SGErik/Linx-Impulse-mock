import React from 'react'
import { useState } from 'react'
import Forms from '../Forms/Forms'
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

const addPage = ()=>{
  setPage(page + 1);
}

useEffect(()=>{
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
        <h3>Sua seleção especial</h3>
        <Pagedivider />
      </div>
    <div className={T.divCards}>

    </div>

    </div>
  )
}

export default Main