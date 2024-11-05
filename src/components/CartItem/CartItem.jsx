import React, { useEffect, useState } from 'react'
import style from './CartItem.module.css'
import toast, { Toaster } from 'react-hot-toast'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'

function CartItem({name, image, price}) {

  const [quantity, setQuantity] = useState(1)
  const [total, setTotal] = useState(price)

  function removeItem() {
    toast.error('Жойылды')
    localStorage.removeItem(name)
  }

  function increment() {
    setQuantity(quantity + 1)
  }

  function decrement() {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

  useEffect(() => {
    setTotal(price * quantity)
  }, [quantity, price])

  return (
    <div className={style['container']}>
      <div className={style['image']}>
        <img src={image} alt="" />
      </div>
      <div className={style['item']}>
        <span className={style['name']}>{name}</span>
        <span className={style['remove']} onClick={removeItem}>Жою</span>
        <Toaster />
      </div>
      <div className={style['quantity']}>
        <RemoveIcon onClick={decrement} className={style['decrement']}/>
        <div className={style['quantity-number']}>{quantity}</div>
        <AddIcon onClick={increment} className={style['increment']}/>
      </div>    
      <span className={style['price']}>{price}₸</span>
      <span className={style['price-total']}>{total}₸</span>
    </div>
  )
}

export default CartItem
