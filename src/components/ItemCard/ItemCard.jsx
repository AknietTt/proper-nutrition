import React from 'react'
import style from './ItemCard.module.css'
import toast, { Toaster } from 'react-hot-toast';

function ItemCard({name, price, image, id , desc}) {

  function addToCart() {
    toast.success('Добавлено')
    const itemObj = {
      price: price,
      image: image
    }
    const item = JSON.stringify(itemObj)
    localStorage.setItem(`${name}`, item)
  }

  return (
    <div className={style['card']} key={id}>
      <picture className={style['picture']} onClick={addToCart}>
        <img src={  image} alt={name} />
      </picture>
      <span>{name}</span>
      <span>{desc}</span>
      <button onClick={addToCart}>{price}₸</button>
      <Toaster />
    </div>
  )
}

export default ItemCard