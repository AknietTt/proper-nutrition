import React, { useEffect, useState } from 'react'
import style from './Cart.module.css'
import CartItem from '../../components/CartItem/CartItem'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

function Cart() {

  const [allItems, setAllItems] = useState([])
  const navigate = useNavigate()

  function order() {
    toast.success('Тапсырыс қабылданды')
    localStorage.clear()
    setTimeout(function() {
      navigate('/')
    }, 1000);
  }

  useEffect(() => {
    const getAllItems = () => {
      const items = []
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i)
        const item = localStorage.getItem(key)
        const parsedItem = JSON.parse(item)
        items.push({
          key: key,
          price: parsedItem.price,
          image: parsedItem.image,
        })
      }
      setAllItems(items)
    }
    getAllItems()
  }, [allItems])

  return (
    <div className={style['cart']}>
      <ArrowBackIcon className={style['back']} onClick={() => navigate('/menu')}/>
      <div className={style['cart-header']}>
        <p>Себет</p>
        <span>Тауарлар саны: {localStorage.length}</span>
      </div>
      {allItems.map((item) => (
        <CartItem 
          name={item.key}
          price={item.price}
          image={item.image}
        />
      ))}
      <span className={style['order']} onClick={order}>Тапсырыс қабылдау</span>
      <Toaster />
    </div>
  )
}

export default Cart
