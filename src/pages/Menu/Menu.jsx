import React from 'react'
import ItemCard from '../../components/ItemCard/ItemCard'
import Header from '../../components/Header/Header'
import style from './Menu.module.css'

function Menu() {
  // Статический массив данных для тестирования
  const menu = [
    {
      id: 1,
      name: "Lay's Classic",
      price: 500,
      image: 'https://avatars.mds.yandex.net/i?id=fb339735dd8bea9b5086136fdda7cd84_l-6890988-images-thumbs&n=13',
      desc: 'Классические картофельные чипсы Lay\'s'
    },
    {
      id: 2,
      name: "Lay's Sour Cream & Onion",
      price: 550,
      image: 'https://m.media-amazon.com/images/I/81tgP-lO8jL._AC_UL800_QL65_.jpg',
      desc: 'Чипсы со вкусом сметаны и лука'
    },
    {
      id: 3,
      name: "Lay's Barbecue",
      price: 550,
      image: 'https://avatars.mds.yandex.net/i?id=fbbd7ddb5d67eb2a34c1961a546e1d5e_l-4987773-images-thumbs&n=13',
      desc: 'Чипсы со вкусом барбекю'
    },
    {
      id: 4,
      name: "Lay's Cheese",
      price: 530,
      image: 'https://avatars.mds.yandex.net/i?id=90b917bfa2b3b68530a4e5936bf96cd0_l-5348870-images-thumbs&n=13',
      desc: 'Чипсы со вкусом сыра'
    }
  ];

  return (
    <div className={style['menu']}>
      <Header />
      <div className={style['picture']}>
        <span>Меню</span>
      </div>
      <div className={style['items']}>
        {menu.map((item) => (
          <ItemCard 
            key={item.id}
            name={item.name}
            price={item.price}
            image={item.image}
            desc={item.desc}
          />
        ))}
      </div>
    </div>
  )
}

export default Menu
