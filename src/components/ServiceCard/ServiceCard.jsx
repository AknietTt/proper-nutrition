import React from 'react'
import style from './ServiceCard.module.css'

function ServiceCard({name, description, kcal, price, id}) {
  return (
    <div className={style['card']} key={id}>
      <div className={style['top-section']}>
        <h1>{name}</h1>
        <p>~{kcal} ккал</p>
      </div>
      <p>{description}</p>
      <div className={style['bottom-section']}>
        <button>Құны</button>
        <span>{price}₸-дан бастап</span>
      </div>    
    </div>
  )
}

export default ServiceCard
